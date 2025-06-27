import { Sidebar } from './components/Sidebar';
import './globals.css';

function App() {

  return (
    <>
      <nav className="bg-gray-800 text-white h-12 flex items-center px-4 shadow">
        <h1 className="text-sm font-semibold">MyApp</h1>
      </nav>

      <div className="flex p-4 h-[calc(100vh-3rem)]">
        <Sidebar />

        <main className="flex-1 pl-4">
          <div className="bg-green-500 text-white p-4 rounded">
            Title
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
