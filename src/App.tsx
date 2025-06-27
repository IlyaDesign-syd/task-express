import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import "./globals.css";

function App() {
  return (
    <>
      <Navbar />

      {/* Everything beneath the top nav (side nav + content) */}
      <div className="flex p-4 h-[calc(100vh-3rem)]">
        <Sidebar />

        <main className="flex-1 pl-4">
          <div className="bg-green-500 text-white p-4 rounded">Title</div>
        </main>
      </div>
    </>
  );
}

export default App;
