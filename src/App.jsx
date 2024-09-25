import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/HomePage/Home"
import PurchaseHistory from "./pages/PurchaseHistoryPage/PurchaseHistory"
import Checkout from "./pages/CheckoutPage/Checkout"
import CardContextProvider from "./contexts/CartContext"

function App() {
  return (
    <CardContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/history" element={<PurchaseHistory />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
    </CardContextProvider>
  )
}

export default App
