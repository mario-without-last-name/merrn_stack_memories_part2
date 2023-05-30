import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'; // only "posts" instad of "posts.js" will fail in Node

const router = express.Router();
// The codes for all of these routes are stored in controllers/posts
router.get('/', getPosts) // localhost:5000/posts
router.post('/', createPost) // localhost:5000/posts
router.patch('/:id', updatePost) // localhost:5000/posts    //:id is a dynamic number to identify the post we want to update
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost);

export default router;