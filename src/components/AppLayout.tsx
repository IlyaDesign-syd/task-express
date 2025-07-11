import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex p-4 h-[calc(100vh-3rem)]">
        <Sidebar />
        <main className="flex-1 pl-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};