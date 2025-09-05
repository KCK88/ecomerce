import AppError from "../utils/AppError";
import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';

const multerStorage = multer.memoryStorage();

const multerFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new AppError(`Unsupported file type: image`, 400) as never, false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadCoverImage = upload.fields( [
  {name: "coverImage", maxCount: 1},
  {name: 'images', maxCount: 3}
]);
