import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../features/transaction/transactionSlice';

const Transactions = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transaction.transactions);
  const status = useSelector((state) => state.transaction.status);

  useEffect(() => {
    console.log(transactions);
    
    if (status === 'idle') {
      dispatch(getTransactions());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Transactions</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>{transaction.name}</li>
          ))}
        </ul>
      )}
      {status === 'failed' && <p>Error loading transactions</p>}
    </div>
  );
};

export default Transactions;
