import * as path from 'path';
import { extname } from 'path';
import * as fs from 'fs';

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

export const retrieveFile = (file: string) => {
  return `${process.env.BASE_URL}${process.env.PORT}/${file}`;
};

export const deleteFile = (file: string, directory = '') => {
  const filePath = path.resolve(process.cwd(), 'files', directory, file ?? '');
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Failed to delete file: ${filePath}`, err);
    }
  });
};
