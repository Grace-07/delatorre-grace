import express from "express";

import {
  addComment,
  deleteComment,
  getCommentsByBlog,
} from "../controllers/commentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, addComment);
router.get("/:blogId", getCommentsByBlog);
router.delete("/:id", authMiddleware, deleteComment);

export default router;
