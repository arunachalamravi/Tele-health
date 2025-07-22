import { appointmentList, prescriptionsData } from "./utils/constants.js";

const getAllAppoinmentList = (req, res) => {
  res?.send({
    success: true,
    message: "Appointments Fetched Successfully!",
    data: appointmentList,
  });
};

const getAllperscriptionList = (req, res) => {
  res?.send({
    success: true,
    message: "Percriptions Fetched Successfully!",
    data: prescriptionsData,
  });
};

const createAppointment = (req, res) => {
  console.log(req?.body, "req");
  const { doctor, date, time, type, status } = req?.body;

  if (!doctor ) {
    debugger
    return res?.status(400)?.send({
      success: false,
      errors: [
        { field: "doctor", message: "Doctor field is required" },
      ],
    });
  }

  const newItem = {
    doctor,
    date,
    time,
    type,
    status,
  };
  appointmentList?.push(newItem);

  res?.status(200)?.send({
    success: true,
    message: "Appoinment Created Successfully!",
    data: newItem,
  });
};

export default {
  getAllAppoinmentList,
  getAllperscriptionList,
  createAppointment,
};
