import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { patientRoutes } from "./routes";
import MyAppoinmentPage from "../pages/appointment";
import { RootLayout } from "../components/rootlayout";
import SchedulePage from "../pages/schedule";
import MyPerscriptionPage from "../pages/prescriptions";
import { MeetPage } from "../pages/meet";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout showLayout={true} />,

    children: [
      {
        path: patientRoutes?.myAppointments,
        element: <MyAppoinmentPage />, 
      },
      {
        path: patientRoutes?.schedule,
        element: <SchedulePage />
      },
      {
        path: patientRoutes?.prescriptions,
        element: <MyPerscriptionPage />
      },
      {
        path: patientRoutes?.video,
        element: <MeetPage />
      }
    ],
  },
]);

function RouterApp() {
  return <RouterProvider router={router} />;
}

export default RouterApp;
