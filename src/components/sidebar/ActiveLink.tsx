import { Link, useLocation } from "react-router-dom";
import { Route } from "./interfaces/route";

const ActiveLink = ({name,path}:Route):React.ReactNode => {
  const location = useLocation();
  return (
    <Link
      to={path}
      className={`py-2 rounded-md text-white font-bold mt-1 pl-1 md:pl-4 text-md md:text-xl cursor-pointer h-full w-full block ${path==location.pathname&&'active'} text-center md:text-start`}
    >
      {name}
    </Link>
  );
};

export default ActiveLink;
