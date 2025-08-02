import { createBrowserRouter, RouterProvider } from "react-router";
import { DashboardLayout } from "./components/DashboardLayout";
import { OnboardingUser } from "./components/OnboardingUser";
import { TaskList } from "./components/TaskList";
import "./globals.css";
import { Projects } from "./components/DashboardComponents/Projects";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [{ index: true, element: <TaskList /> }],
//   },
//   { path: "/register", element: <OnboardingUser /> },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [{ index: true, element: <TaskList /> }, {path: '/projects', element: <Projects />} ],
  },
  { path: "/onboarding", element: <OnboardingUser /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
