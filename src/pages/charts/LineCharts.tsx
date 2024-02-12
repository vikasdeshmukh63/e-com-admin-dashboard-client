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

        <section>
          <LineChart
            data={[40, 60, 244, 100, 143, 120, 41, 47, 50, 56, 32]}
            label="Products"
            borderColor="hsl(269,80%,40%)"
            backgroundColor={"hsla(269,80%,40%,0.4)"}
            labels={months}
          />
          <h2>Total Products (SKU)</h2>
        </section>

        <section>
          <LineChart
            data={[24000, 14400, 24100, 34300, 90000, 20000, 25600, 44700, 99000, 144400, 100000, 120000]}
            label="Revenue"
            borderColor="hsl(129,80%,40%)"
            backgroundColor={"hsla(129,80%,40%,0.4)"}
            labels={months}
          />
          <h2>Total Revenue</h2>
        </section>

        <section>
          <LineChart
            data={[9000, 12000, 12000, 9000, 1000, 5000, 4000, 1200, 1100, 1500, 2000, 5000]}
            label="Discount"
            borderColor="hsl(29,80%,40%)"
            backgroundColor={"hsla(29,80%,40%,0.4)"}
            labels={months}
          />
          <h2>Discount Alloted</h2>
        </section>
      </main>
    </div>
  );
};

export default LineCharts;
