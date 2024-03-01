import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export function MainLayout() {
  return (
    <div className="main-container">
      <div className="app-container">
        <Header />
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
