import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { fetchAPIData } from "./redux/reducers";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAPIData());
  }, [dispatch]);

  return (
    <div className="app container">
      <Navbar />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
