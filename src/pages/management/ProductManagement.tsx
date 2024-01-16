import { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const img = "https://assets.ajio.com/medias/sys_master/root/20230623/kF5B/6495118ad55b7d0c63b0b84c/-473Wx593H-464713927-blue-MODEL.jpg"

const ProductManagement = () => {
  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPhotoUpdate(reader.result);
        }
      };
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  }

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="productManagement">
        <section>
            <strong>Id - fklsjdkfljsklfjksl</strong>
            <img src={photo} alt="Product Img" />
            <p>{name}</p>
            {
                stock > 0 ? <span className="green">{stock} Available</span> : <span className="red">Not Available</span>
            }
            <h3>${price}</h3>
        </section>
        <article>
          <form onSubmit={submitHandler}>
            <h2>Manage Product</h2>
            <div>
              <label>Name</label>
              <input required type="text" placeholder="Name" value={nameUpdate} onChange={(e) => setNameUpdate(e.target.value)} />
            </div>
            <div>
              <label>Price</label>
              <input required type="number" placeholder="Price" value={priceUpdate} onChange={(e) => setPriceUpdate(Number(e.target.value))} />
            </div>
            <div>
              <label>Stock</label>
              <input required type="number" placeholder="Stock" value={stockUpdate} onChange={(e) => setStockUpdate(Number(e.target.value))} />
            </div>
            <div>
              <label>Photo</label>
              <input required type="file" accept=".png, .jpeg, .jpg" onChange={changeImageHandler} />
            </div>
            {photoUpdate && <img src={photoUpdate} alt="Product Img" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};


export default ProductManagement
