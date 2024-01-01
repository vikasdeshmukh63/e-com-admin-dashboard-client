import { Link, Location, useLocation } from "react-router-dom";
import { IconType } from "react-icons";
import { sidebarItems } from "../data";

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside>
      <h2>Logo.</h2>
      {sidebarItems.map((item, index) => {
        return (
          <div key={index}>
            <h5>{item.section}</h5>
            <ul>
              {item.items.map((subItem, subIndex) => {
                return <Li key={subIndex} Icon={subItem.Icon} location={location} text={subItem.title} url={subItem.url} />;
              })}
            </ul>
          </div>
        );
      })}
    </aside>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li: React.FC<LiProps> = ({ Icon, location, text, url }) => {
  return (
    <li style={{ backgroundColor: location.pathname.includes(url) ? "rgba(0,115,255,0.1)" : "transparent" }}>
      <Link to={url} style={{ color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black" }}>
        <Icon /> {text}
      </Link>
    </li>
  );
};

export default AdminSidebar;
