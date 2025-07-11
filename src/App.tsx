import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { OnboardingUser } from "./components/OnboardingUser";
import { TaskList } from "./components/TaskList";
import "./globals.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ index: true, element: <TaskList /> }],
  },
  { path: "/register", element: <OnboardingUser /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
