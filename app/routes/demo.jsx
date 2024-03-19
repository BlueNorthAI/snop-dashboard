/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from "react";
import { TableCellsIcon, ArrowTrendingUpIcon, ChartBarIcon,
  UserCircleIcon, CpuChipIcon, Squares2X2Icon, Cog8ToothIcon, ChatBubbleBottomCenterTextIcon, TicketIcon,ExclamationTriangleIcon, WrenchScrewdriverIcon,ArrowRightOnRectangleIcon,TruckIcon } from "@heroicons/react/20/solid";
import { Outlet, NavLink, Link } from "@remix-run/react";

// const menus = [
//   {
//     name: "Dashboard",
//     to: "/demo/dashboard/demand",
//     icon: ChartBarIcon,
//     current: true,
//   },
//   {
//     name: "Input Data",
//     to: "/demo/input",
//     icon: CpuChipIcon,
//     current: false,
//   },
//   {
//     name: "Scenario",
//     to: "/demo/scenario",
//     icon: TableCellsIcon,
//     current: false,
//   },
//   {
//     name: "Optimizer",
//     to: "/demo/optimize",
//     icon: CpuChipIcon,
//     current: false,
//   },
//   {
//     name: "Truck",
//     to: "/demo/truck",
//     icon: TruckIcon,
//     current: false,
//   },
//   {
//     name: "Scheduler",
//     to: "/demo/scheduler",
//     icon: TableCellsIcon,
//     current: false,
//   },
// ];


const menus = [
  {
    name: "Dashboard",
    to: "/demo/dashboard/demand",
    icon: ChartBarIcon,
    current: true,
  },
  {
    name: "Explorer",
    to: "/demo/dashboard/explore/sales",
    icon: TableCellsIcon,
    current: false,
  },
  {
    name: "Optimizer",
    to: "/demo/dashboard/optimizer/optimize",
    icon: CpuChipIcon,
    current: false,
  },
  {
    name: "Actions",
    to: "/demo/dashboard/actions/overview",
    icon: ArrowTrendingUpIcon,
    current: false,
  },

  { name: "Setting", to: "/demo/setting", icon: Cog8ToothIcon, current: false },

  { name: "User", to: "/demo/profile", icon: UserCircleIcon, current: false },
  {
    name: "Chat",
    to: "/demo/chatuireact",
    icon: ChatBubbleBottomCenterTextIcon,
    current: false,
  },
  {
    name: "Incidents",
    to: "/demo/incidents",
    icon: TicketIcon,
    current: false,
  },
  {
    name: "Alerts",
    to: "/demo/alerts",
    icon: ExclamationTriangleIcon,
    current: false,
  },
  {
    name: "Test",
    to: "/demo/slide",
    icon: WrenchScrewdriverIcon,
    current: false,
  },
  {
    name: "Truck",
    to: "/demo/truck",
    icon: TruckIcon,
    current: false,
  },
  {
    name: "Scheduler",
    to: "/demo/scheduler",
    icon: TableCellsIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <div
        className={`bg-blue-900  ${
          open ? "w-20" : "w-16"
        } flex flex-col text-gray-100 duration-500 `}
      >
        <div className="flex-1">
          <div className="flex h-16 items-center justify-center bg-white py-1">
            <ArrowRightOnRectangleIcon
              className="h-8 w-8 text-gray-700"
              onClick={() => setOpen(!open)}
            />
          
          </div>

          <nav aria-label="Sidebar" className="flex flex-col items-center">
            <div className="static mt-2 w-full space-y-1 px-2">
              {menus?.map((item) => (
                <NavLink
                  to={item.to}
                  key={item.name}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-blue-800 text-white"
                        : "text-blue-100 hover:bg-blue-800 hover:text-white",
                      "group flex w-full flex-col items-center rounded-md p-1 text-xs font-medium",
                    )
                  }
                >
                  <div className="p-1">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${item + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "translate-x-28  opacity-0"
                    }`}
                  >
                    {item?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48  z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
                  >
                    {item?.name}
                  </h2>
                </NavLink>
              ))}
            </div>
          </nav>
        </div>

        <div className="mb-2">
          <Link to="/demo/appbar">
            <div
              className={classNames(
                "text-blue-100 hover:bg-blue-800 hover:text-white",
                "group flex w-full flex-col items-center rounded-md p-2 text-xs font-medium",
              )}
            >
              <div className="p-1">
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && "translate-x-28 overflow-hidden opacity-0"
                }`}
              >
                Appbar
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
              >
                Appbar
              </h2>
            </div>
          </Link>
        </div>
      </div>

      {/* appbar */}
      <div className="flex flex-1 flex-col h-screen overflow-y-auto bg-gray-100">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
