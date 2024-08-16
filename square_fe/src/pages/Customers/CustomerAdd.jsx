import  { useState } from "react";
import Header from "../../components/Header/Header";
import Buttons from "../../components/Buttons/Buttons";
import * as pagesStyles from "../index.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCustomers } from "../../features/customer/customerSlice";

const CustomersAdd = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    const entity = { name, email, address };
    dispatch(addCustomers(entity))
    navigate('/customers')
  };
  return (
    <>
      <Header
        title="Customer"
        description="Manage and organize your customers and other things here."
      />
      <div className={pagesStyles.formContainer}>
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <br />
      <Buttons onSubmit={handleSubmit} type="success" text="Submit"/>
    </form>
      </div>
    </>
  );
};

export default CustomersAdd;
