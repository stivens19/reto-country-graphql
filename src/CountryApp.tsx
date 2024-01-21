import { Outlet } from "react-router-dom";
import { Sidebar } from "./components";

function CountryApp() {

  return (
    <div className="flex min-h-screen bg-[#E3F4FF]">
      <Sidebar />
      <div className="w-full pt-6 px-6 mb-8 mx-auto">
        <div className="text-sm text-gray-700 py-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CountryApp;
