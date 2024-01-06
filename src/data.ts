import { RiDashboardFill, RiShoppingBag3Fill, RiCoupon3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IconType } from "react-icons";
import { FaChartBar, FaChartPie, FaChartLine, FaStopwatch, FaGamepad } from "react-icons/fa";

interface SidebarItem {
  title: string;
  Icon: IconType;
  url: string;
}

interface SidebarItems {
  section: string;
  items: SidebarItem[];
}

export const sidebarItems: SidebarItems[] = [
  {
    section: "Dashboard",
    items: [
      { title: "Dashboard", Icon: RiDashboardFill, url: "/admin/dashboard" },
      { title: "Product", Icon: RiShoppingBag3Fill, url: "/admin/product" },
      { title: "Customer", Icon: IoIosPeople, url: "/admin/customer" },
      { title: "Transaction", Icon: AiFillFileText, url: "/admin/transaction" },
    ],
  },
  {
    section: "Chart",
    items: [
      { title: "Bar", Icon: FaChartBar, url: "/admin/chart/bar" },
      { title: "Pie", Icon: FaChartPie, url: "/admin/chart/pie" },
      { title: "Line", Icon: FaChartLine, url: "/admin/chart/line" },
    ],
  },
  {
    section: "Apps",
    items: [
      { title: "Stopwatch", Icon: FaStopwatch, url: "/admin/apps/stopwatch" },
      { title: "Coupon", Icon: RiCoupon3Fill, url: "/admin/apps/coupon" },
      { title: "Toss", Icon: FaGamepad, url: "/admin/apps/toss" },
    ],
  },
];