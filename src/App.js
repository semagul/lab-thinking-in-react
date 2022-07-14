import logo from './logo.svg';
import './App.css';
import ProductsPage from "./components/ProductsPage"
import SearchBar from "./components/SearchBar"
import ProductTable from "./components/ProductTable"
import ProductRow from './components/ProductRow';
import jsonData from './data.json';
import { useState, React } from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [prodTable, setProdTable] = useState("");
  const [prodRow, setProdRow] = useState([...jsonData]);
  const [products, setProducts] = useState([...jsonData]);

  return (
    <div className="App">
       <ProductsPage
        productsProp={products}
        searchProp={search}
        pTableProp={prodTable}
      />
      <ProductTable
        prodTableProp={setProdTable}
        prodRowProp={prodRow}
      />
      <SearchBar searchProp={setSearch} />
      <ProductRow 
      searchProp={search}
      prodRowProp={prodRow} />
     
    </div>
  );
}

export default App;
