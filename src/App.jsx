import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
