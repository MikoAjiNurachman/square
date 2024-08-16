import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Customers from "./pages/Customers/Customers";
import Transactions from "./pages/Transactions/Transactions";
import Login from "./pages/Login/Login";
import './index.css'
import MainContent from "./components/MainContent";
import CustomersAdd from "./pages/Customers/CustomerAdd";
import ProductsAdd from "./pages/Products/ProductAdd";
import TransactionsByCustomer from "./pages/Transactions/TransactionsByCustomer";

function App() {
  return (
    <>
          <Routes>
            <Route element={<MainContent />}>
              <Route path="/products" element={<Products />} />
              <Route path="/products/add" element={<ProductsAdd />} />
              <Route path="/products/:id" element={<ProductsAdd />} />

              <Route path="/customers" element={<Customers />} />
              <Route path="/customers/add" element={<CustomersAdd />} />
              <Route path="/customers/:id" element={<TransactionsByCustomer />} />

              <Route path="/transactions" element={<Transactions />} />
            </Route>
          <Route path="/" element={<Login />} />
          </Routes>
    </>
  );
}

export default App;
