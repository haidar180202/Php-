import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Beranda from "./components/Beranda";
import ManajementBuku from "./components/ManajemenBuku";
import "bootstrap/dist/css/bootstrap.css";


function App() {
  const [books, setBooks] = useState([
    {_id: 1 , judul: "LaskarPelangi", pengarang: "Andrea Hirata", Harga: 80000, stok: 7},
    {_id: 2 , judul: "Bumi", pengarang: "Tere liye", Harga: 85000, stok: 5}
  ])
  return (
    <div> 
    <Router> 
        <Navbar/>
        <Routes>
          <Route path = "/" element={<Beranda/>}/>
          <Route path="/manajemen-buku" element ={<ManajementBuku bookList={books} />}/>
        </Routes> 
    </Router>
    </div>
  );
}

export default App;
