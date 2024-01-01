import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userImg.png";


const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* siderbar */}
      <AdminSidebar />
      {/* main */}
      <main className="dashboard">
        {/* header  */}
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for Data, Users, Docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
