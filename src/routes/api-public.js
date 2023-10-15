import express from 'express';
import { deleteById_controller, getAllNotes_controller, getById_controller, notesController, searchByTitle_controller, updateNotes_controller } from '../controller/controller-notes.js';

export const publicRouter = new express.Router()
publicRouter.post("/tasks",notesController)
publicRouter.delete("/tasks/:id",deleteById_controller)
publicRouter.get("/tasks/:id", getById_controller)
publicRouter.get("/tasks", getAllNotes_controller)
publicRouter.put("/tasks/:id", updateNotes_controller)
publicRouter.get("/tasks/search/:searchByTitle", searchByTitle_controller)
