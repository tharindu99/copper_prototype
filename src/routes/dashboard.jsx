import DashboardPage from "views/Dashboard/Dashboard.jsx";
import AboutPage from "views/About/About.jsx";
import MonitorPage from "views/Monitor/Monitor.jsx";

import {
  Dashboard,
  Person,
  Computer,
} from "@material-ui/icons";
 
const dashboardRoutes = [
  {
    path: "/Dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/Monitor",
    sidebarName: "Monitor",
    navbarName: "Monitor",
    icon: Computer,
    component: MonitorPage
  },
  {
    path: "/About",
    sidebarName: "About",
    navbarName: "About",
    icon: Person,
    component: AboutPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
