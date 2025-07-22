import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paitentRoutes } from "./routes";
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
        path: paitentRoutes?.myAppointments,
        element: <MyAppoinmentPage />, 
      },
      {
        path: paitentRoutes?.schedule,
        element: <SchedulePage />
      },
      {
        path: paitentRoutes?.prescriptions,
        element: <MyPerscriptionPage />
      },
      {
        path: paitentRoutes?.video,
        element: <MeetPage />
      }
    ],
  },
]);

function RouterApp() {
  return <RouterProvider router={router} />;
}

export default RouterApp;
