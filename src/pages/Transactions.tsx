import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "John Doe",
    amount: 1000,
    discount: 10,
    quantity: 1,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/dfsfds">Manage</Link>,
  },
  {
    user: "John Doe",
    amount: 1000,
    discount: 10,
    quantity: 1,
    status: <span className="green">Delivered</span>,
    action: <Link to="/admin/transaction/dfsfds">Manage</Link>,
  },
  {
    user: "John Doe",
    amount: 1000,
    discount: 10,
    quantity: 1,
    status: <span className="Purple">Processing</span>,
    action: <Link to="/admin/transaction/dfsfds">Manage</Link>,
  },
];

const Transactions = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(TableHOC<DataType>(columns, data, "dashboardProductBox", "Transactions", true));

  return (
    <div className="adminContainer">
      {/* siderbar */}
      <AdminSidebar />
      {/* main */}
      <main>{Table()}</main>
    </div>
  );
};

export default Transactions;
