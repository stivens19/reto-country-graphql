import ActiveLink from "./ActiveLink";
import { routes } from "./routes";

export const Sidebar = ():React.ReactNode => {
  return (
    <aside className="bg-[#676767] min-h-screen flex flex-col items-center w-[20%]">
      <div className="w-[80%]">
        <div className="bg-[#DBDBDB] py-1 md:py-7 rounded-xl mt-4">
          <h1 className="font-bold text-lg md:text-2xl text-center text-[#676767]">
            Logo
          </h1>
        </div>
        <ul className="mt-2">
          {routes.map((route) => (
            <li key={route.path}>
              <ActiveLink {...route} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
