import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const img1 = "https://randomuser.me/api/portraits/men/51.jpg";
const img2 = "https://randomuser.me/api/portraits/women/44.jpg";

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img1} alt="user1" />,
    name: "John Doe",
    email: "john@gmail.com",
    gender: "Male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img2} alt="user2" />,
    name: "Jane Doe",
    email: "jane@gmail.com",
    gender: "Female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customers = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(TableHOC<DataType>(columns, data, "dashboardProductBox", "Customers", true));

  return (
    <div className="adminContainer">
      {/* siderbar */}
      <AdminSidebar />
      {/* main */}
      <main>{Table()}</main>
    </div>
  );
};

export default Customers;
