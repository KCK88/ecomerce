import AppError from "../utils/AppError";
import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const multerStorage = multer.diskStorage({
  destination: (
    req: Request,
    _file: Express.Multer.File,
    cb: DestinationCallback) => {
    cb(null, "images");
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: FileNameCallback) => {
    const extension = file.mimetype.split("/")[1];
    cb(null, `${req.body.title}_0.${extension}`);
  },
});

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
