import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../features/product/productSlice';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import { Link, useNavigate } from 'react-router-dom';
import Buttons from '../../components/Buttons/Buttons';
import Table from '../../components/Tables/Table';

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const products = useSelector((state) => state.product.products);
  const status = useSelector((state) => state.product.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getProducts());
    }
  }, [status, dispatch]);
  
  const columns = [
    { header: 'Product Name', key: 'name' },
    { header: 'Stock', key: 'qty' },
    { header: 'Price', key: 'price' },
  ];

  const handleUpdate = id => {
    navigate('/products/'+id)
  }
  
  const handleDelete = id => {
    dispatch(deleteProduct(id))
  }

  return (
    <>
      <Header
        title="Products"
        description="Manage and organize your products and other things here."
      />
      <SubHeader>
        <Link to={"/products/add"}>
          <Buttons type="primary" text="+ Add New Product"/>
        </Link>
      </SubHeader>

      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <Table header={columns} data={products} handleUpdate={handleUpdate} handleDelete={handleDelete} withUpdate={true} withDelete={true}/>
      )}
      {status === "failed" && <p>Error loading Products</p>}
    </>
  );
};

export default Products;
