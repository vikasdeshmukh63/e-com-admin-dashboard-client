import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const img1 =
  "https://media.gettyimages.com/id/458944693/photo/nike-air-max-90-hyperfuse-trainers.jpg?s=612x612&w=0&k=20&c=vrWUlEjkojEvVl-kQ35nwyZAD-SipmHMS6MK2Pgteus=";
const img2 =
  "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA==";

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    photo: <img src={img1} alt="shoes" />,
    name: "Nike Air Max",
    price: 1000,
    stock: 10,
    action: <Link to="/admin/product/sagjdkfdsk">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="macbook" />,
    name: "Macbook Pro",
    price: 2000,
    stock: 5,
    action: <Link to="/admin/product/sagjdkfdsk">Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(TableHOC<DataType>(columns, data, "dashboardProductBox", "Products", true), []);

  return (
    <div className="adminContainer">
      {/* siderbar */}
      <AdminSidebar />
      {/* main */}
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="createProductButton">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
