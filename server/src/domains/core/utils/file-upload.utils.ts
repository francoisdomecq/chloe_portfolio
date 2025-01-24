import * as path from 'path';
import { extname } from 'path';
import * as fs from 'fs';
import { diskStorage } from 'multer';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|mp4)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${name}-${randomName}${fileExtName}`);
};

export const defineFileDestination = (req, _file, cb, subDirectory: string) => {
  const { id } = req.params;
  const dirPath = `./files/${subDirectory}/${id}`;
  fs.mkdirSync(dirPath, { recursive: true });
  cb(null, dirPath);
};

export const retrieveFile = (file: string, directory: string, id: string) => {
  return `${process.env.BASE_URL}${process.env.PORT}/${directory}/${id}/${file}`;
};

export const deleteFile = (file: string, directory = '', id: string) => {
  const directoryPath = path.resolve(
    process.cwd(),
    'files',
    directory,
    id,
    file,
  );
  if (fs.existsSync(directoryPath)) {
    fs.unlink(directoryPath, (err) => {
      if (err) {
        console.error(`Failed to delete file: ${directoryPath}`, err);
      }
    });
  } else {
    console.warn(`File does not exist: ${directoryPath}`);
  }
};

export const FileInterceptorConfig = (subDirectory: string) =>
  FileInterceptor('file', {
    storage: diskStorage({
      destination: (req, file, callback) =>
        defineFileDestination(req, file, callback, subDirectory),
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  });

export const FilesInterceptorConfig = (subDirectory: string) =>
  FilesInterceptor('files', 20, {
    storage: diskStorage({
      destination: (req, file, callback) =>
        defineFileDestination(req, file, callback, subDirectory),
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  });
