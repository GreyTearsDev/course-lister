import App from "./App";
import CourseListing from "./components/pages/CourseListing";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "course-listing", element: <CourseListing /> },
    ],
  },
];

export default routes;
