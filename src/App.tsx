import { useTheme } from "next-themes";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UIContainer from "./app/UIContainer";
import Dashboard from "./pages/Dashboard";
import Files from "./pages/Files";
import Home from "./pages/Home";
import Monitor from "./pages/Monitor";

function App() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UIContainer />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="files" element={<Files />} />
          <Route path="monitor" element={<Monitor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
