import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomers, getCustomers } from "../../features/customer/customerSlice";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Buttons from "../../components/Buttons/Buttons";
import { Link, useNavigate } from "react-router-dom";
import Table from "../../components/Tables/Table";
import { resetStatus } from "../../features/transaction/transactionSlice";

const Customers = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const Customers = useSelector((state) => state.customer.customers);
  const status = useSelector((state) => state.customer.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getCustomers());
    }
  }, [status, dispatch]);

  const columns = [
    { header: 'Customer Name', key: 'customername' },
    { header: 'Favorite Menu', key: 'favproductname' },
    { header: 'Total Transaction', key: 'totaltransaction' },
  ];

  const handleDetail = id => {
    dispatch(resetStatus())
    navigate('/customers/'+id)
  }

  const handleDelete = id => {
    dispatch(deleteCustomers(id))
  }
  return (
    <>
      <Header
        title="Customer"
        description="Manage and organize your customers and other things here."
      />
      <SubHeader>
        <Link to={"/customers/add"}>
          <Buttons type="primary" text="+ Add New Customer"/>
        </Link>
      </SubHeader>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
      <Table header={columns} data={Customers} handleDetail={handleDetail} handleDelete={handleDelete} withDetail={true} withDelete={true}/>
    )}
      {status === "failed" && <p>Error loading Products</p>}
    </>
  );
};

export default Customers;
