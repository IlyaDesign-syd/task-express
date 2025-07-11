import { Navbar } from "./components/Navbar";
import { OnboardingUser } from "./components/OnboardingUser";
import { Sidebar } from "./components/Sidebar";
import { TaskList } from "./components/TaskList";
import "./globals.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <TaskList /> },
  { path: "/register", element: <OnboardingUser /> },
]);
function App() {
  return (
    <>
      <Navbar />

      {/* Everything beneath the top nav (side nav + content) */}
      <div className="flex p-4 h-[calc(100vh-3rem)]">
        <Sidebar />
        <RouterProvider router={router} />
        <TaskList />
      </div>
    </>
  );
}

export default App;
