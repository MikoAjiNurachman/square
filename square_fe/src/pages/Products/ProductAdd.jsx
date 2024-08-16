import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Buttons from "../../components/Buttons/Buttons";
import * as pagesStyles from "../index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addProducts,
  getProduct,
  updateProducts,
} from "../../features/product/productSlice";

const ProductsAdd = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) =>state.product.products.find(
      (product) => product.id === parseInt(id)
    )
  );
  const [formData, setFormData] = useState({
    name: "",
    qty: 0,
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'qty' || name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(id) > 0) {
      let data = {id: parseInt(id), formData}
      dispatch(updateProducts(data));
    } else {
      dispatch(addProducts(formData));
    }
    navigate("/products");
  };

  useEffect(() => {
    if (id) {
      if (products) {
        setFormData({
          name: products.name,
          qty: products.qty,
          price: products.price,
        });
      } else {
        dispatch(getProduct(parseInt(id)));
      }
    }
  }, [id, products, dispatch]);

  return (
    <>
      <Header
        title="Product"
        description="Manage and organize your Products and other things here."
      />
      {!products && id ?(
        <p>Loading...</p>
      ) : (
        <div className={pagesStyles.formContainer}>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Quantity:
              <input
                type="number"
                name="qty"
                value={formData.qty}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </label>
            <br />
            <Buttons onSubmit={handleSubmit} type="success" text="Submit" />
          </form>
        </div>
      )}
    </>
  );
};

export default ProductsAdd;
