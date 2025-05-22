import { createBrowserRouter } from "react-router-dom";
import CheckPrivateRoute from "../components/CheckPrivateRoute";
import Error from "../components/Error";
import FlexibleHealthInsurancePage from "../features/FlexibleHealthInsurance/FlexibleHealthInsurancePage";
import PlanPage from "../features/Plans/PlanPage";
import ResumePage from "../features/Resume/ResumePage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <FlexibleHealthInsurancePage />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <CheckPrivateRoute />,
    children: [
      {
        path: "plans",
        element: <PlanPage />,
        errorElement: <Error />,
      },
      {
        path: "resume",
        element: <ResumePage />,
        errorElement: <Error />,
      }
    ],
  },
]);

export default Router;
