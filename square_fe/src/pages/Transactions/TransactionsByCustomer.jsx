import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../features/transaction/transactionSlice';
import Header from '../../components/Header/Header';
import Table from '../../components/Tables/Table'
import { useParams } from 'react-router-dom';

const TransactionsByCustomer = () => {
  const {id} = useParams()
  const dispatch = useDispatch();
  const response = useSelector((state) => state.transaction.response);
  const status = useSelector((state) => state.transaction.status);  

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getTransactions({customerId: parseInt(id)}));
    }
  }, [id, status, dispatch]);

  const columns = [
    { header: 'Product Name', key: 'productname' },
    { header: 'Amount Order', key: 'quantityorder' },
    { header: 'Total Transaction', key: 'totaltransaction' },
  ];
  return (
    <>
      <Header
        title={`List Transaction By ` + response.customer?.name}
        description="See Customer List Transactions here."
      />
    {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
      <Table header={columns} data={response.listTransaction} withDetail={false} withUpdate={false} withDelete={false}/>
    )}
      {status === "failed" && <p>Error loading list transaction</p>}
    </>
  );
};

export default TransactionsByCustomer;
