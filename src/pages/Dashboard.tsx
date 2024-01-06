import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userImg.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import React from "react";
import dummyData from "../assets/data.json";

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

        <section className="widgetContainer">
          <WidgetItem percent={40} amount={true} value={3400000} heading="Revenue" color="rgb(0,155,255)" />
          <WidgetItem percent={-40} value={400} heading="Users" color="rgb(0,198,202)" />
          <WidgetItem percent={80} value={23000} heading="Transaction" color="rgb(255,196,0)" />
          <WidgetItem percent={30} value={1000} heading="Product" color="rgb(75,0,255)" />
        </section>

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            {/* graph here  */}
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {dummyData.categories.map((item, index) => {
                return <CategoryItem key={index} heading={item.heading} value={item.value} color={`hsl(${item.value},100%,50%)`} />;
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface WidgetItemsProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem: React.FC<WidgetItemsProps> = ({ color, heading, percent, value = false, amount }) => {
  return (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp /> {`+${percent}%`}
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown /> {`${percent}%`}
          </span>
        )}
      </div>
      <div
        className="widgetCircle"
        style={{
          background: `conic-gradient(
          ${color} ${(Math.abs(percent) / 100) * 360}deg,
          rgb(255,255,255) 0
        )`,
        }}
      >
        <span style={{ color }}>{`${percent}%`}</span>
      </div>
    </article>
  );
};

export default Dashboard;

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ color, value, heading }) => {
  return (
    <div className="categoryItem">
      <h5>{heading}</h5>
      <div>
        <div style={{ backgroundColor: color, width: `${value}%` }} />
      </div>
      <span>{`${value}%`}</span>
    </div>
  );
};
