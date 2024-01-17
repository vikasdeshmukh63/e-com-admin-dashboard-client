import AdminSidebar from '../../components/AdminSidebar'
import { BarChart } from '../../components/Charts'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const BarCharts = () => {
  return (
    <div className='adminContainer'>
      <AdminSidebar/>
      <main className='chartContainer'>
        <h1>Bar Charts</h1>
        <section>
            <BarChart data_1={[200,444,545,665,5422,5544,222]} data_2={[457,554,975,472,224,364,8545]} title_1='Products' title_2='Users' bgColor_1={`hsl(260,50%,30%)`} bgColor_2={`hsl(360,90%,90%)`}/>
            <h2>Top Selling Products & Top Customers</h2>
        </section>
        <section>
        <BarChart horizontal={true} data_1={[200,444,545,665,5422,5544,222,412,542,1245,121,652]} data_2={[]} title_1='Products' title_2='Users' bgColor_1={`hsl(180,40%,50%)`} bgColor_2="" labels={months}/>
            <h2>Orders throughout the year</h2>
        </section>
      </main>
    </div>
  )
}

export default BarCharts
