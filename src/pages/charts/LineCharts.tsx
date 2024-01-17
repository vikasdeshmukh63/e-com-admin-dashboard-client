import AdminSidebar from "../../components/AdminSidebar";
import { LineChart } from "../../components/Charts";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const LineCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Line Charts</h1>
        <section>
          <LineChart
            data={[21, 366, 544, 6231, 555, 98, 44, 2, 994, 96, 475, 565]}
            label="Users"
            borderColor="rgb(53,162,255)"
            backgroundColor="rgba(53,162,255,0.5)"
            labels={months}
          />
          <h2>Active Users</h2>
        </section>
      </main>
    </div>
  );
};

export default LineCharts;
