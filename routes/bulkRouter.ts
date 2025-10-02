import express from "express";
import {createBulkBooks} from "../controllers/bulkController";
import {bulkBooks} from "../middleware/BulkBooks";


const router = express.Router();

router.route("/").post(bulkBooks, createBulkBooks);

export default router;