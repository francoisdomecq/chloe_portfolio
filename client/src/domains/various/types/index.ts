interface Various {
  id: string;
  title: string;
  description: string;
  date: string;
  fileSrc: string;
}

interface CreateVarious {
  title: string;
  description: string;
  date: string;
  fileSrc: File;
}

interface UpdateVarious {
  id: string
  title?: string;
  description?: string;
  date?: string;
  fileSrc?: string;
  newFileSrc?: File
}

export type {Various, CreateVarious, UpdateVarious}