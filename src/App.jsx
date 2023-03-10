import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout, Typography, Space} from "antd"
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails} from "./components/"
import "./App.css"


function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/exchanges" element={<Exchanges/>} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies/>} />
                <Route path="/cripto/:coinId" element={<CryptoDetails/>} />
                <Route path="/news" element={<News/>} />
              </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
