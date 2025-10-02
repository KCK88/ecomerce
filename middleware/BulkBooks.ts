import AppError from "../utils/AppError";
import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';

const multerStorage = multer.memoryStorage();

const multerFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
) => {
  if (file.mimetype === "text/csv" || file.mimetype ==="application/json" ) {
    cb(null, true);
  } else {
    cb(new AppError(`Por favor selecione arquivos .json ou .csv`, 400) as never, false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const bulkBooks = upload.single('books');