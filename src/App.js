//berhasil dimanipulasi(dipindahkan ke folder /src/public)
import Navbar from "./component/Navbar";
import MainPages from "./component/App";
import Footer from "./component/Footer";
import logosvg from "./public/logo.svg";
import "./public/App.css";

function App() {
  return (
    <div className="App">
      <img src={logosvg} className="App-logo" alt="logo" />
      {/* tag yang berwarna merah adalah html, yang warna kuning adalah javascript */}
      {/* jika sudah pakai navbar di halaman pertama, maka file "MainPages" tidak perlu pakai*/}
      <Navbar />
      {/* bisa beda nama dari const yang diekspor asalkan yang impor sama dengan yang dipake */}
      <MainPages />
      <Footer />
    </div>
  );
}

export default App;
