import { Outlet } from "react-router-dom";
import { Navbar } from './components/Navbar';
import './App.css'
import { Cursor } from "./components/cursor";

export default function App() {

  return (
    <>
      <Cursor />
      <Navbar />
      <Outlet />
    </>
  )
}

