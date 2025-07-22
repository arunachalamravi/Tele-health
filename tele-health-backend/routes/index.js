import express from "express";
import itemsController from "../controller.js";

const router = express.Router();

router.get("/api/appointments", itemsController.getAllAppoinmentList);
router.get("/api/prescriptions", itemsController.getAllperscriptionList);
router.post("/api/createAppointment", itemsController.createAppointment);



export default router; 
