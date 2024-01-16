import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img = "https://assets.ajio.com/medias/sys_master/root/20230623/kF5B/6495118ad55b7d0c63b0b84c/-473Wx593H-464713927-blue-MODEL.jpg";

const orderItems: OrderItemType[] = [
  {
    name: "Shirt",
    photo: img,
    price: 100,
    quantity: 1,
    _id: "1",
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Vikas Deshmukh",
    address: "77 black street",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    pinCode: 411057,
    total: 4000 - 1200 + 200,
    orderItems,
    _id: "1",
    status: "Processing",
    discount: 1200,
    subtotal: 4000,
    shippingCharges: 0,
    tax: 200,
  });

  const { name, address, city, country, state, pinCode, subtotal, shippingCharges, tax, discount, total, status } = order;

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="productManagement">
        <section>
          <h2>Order Items</h2>
          {order.orderItems.map((item) => (
            <ProductCard name={item.name} _id={item._id} photo={item.photo} price={item.price} quantity={item.quantity} key={item._id} />
          ))}
        </section>

        <article>
          
        </article>
      </main>
    </div>
  );
};

const ProductCard: React.FC<OrderItemType> = ({ _id, name, photo, price, quantity }) => {
  return (
    <div className="transactionProductCard">
      <img src={photo} alt={name} />
      <Link to={`/product/${_id}`}>{name}</Link>
      <span>
        ${price} X {quantity} = ${price * quantity}
      </span>
    </div>
  );
};

export default TransactionManagement;
