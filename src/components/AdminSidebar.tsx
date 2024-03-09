import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link, Location, useLocation } from "react-router-dom";
import { sidebarItems } from "../data";

const AdminSidebar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => {
      setPhoneActive(window.innerWidth < 1100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive ? { width: "20rem", height: "100vh", position: "fixed", top: 0, left: showModal ? "0" : "-20rem", transition: "all 0.5s" } : {}
        }
      >
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
        {phoneActive && (
          <button id="closeSidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
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
