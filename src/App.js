
import './App.css';
import CreateProfile from "./Routes/CreateProfile/index.js"
import Dashboard from "./Routes/DashBoard/index.js"
import AllProductsSection  from './Routes/Products';
import Profile from "./Routes/Profile/index.js"
import Cart from "./Routes/Cart/index.js"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Refer from "./Routes/Refer/index.js"
import Home from './Routes/Home/index.js'

const App = () => (
  <BrowserRouter >
  <div className='App d-flex flex-row '>
    <Dashboard />
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/create" element={<CreateProfile/>} />
        <Route exact path="/products" element={<AllProductsSection/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/refer" element={<Refer/>} />
        </Routes>
        </div>
 </BrowserRouter>
)


export default App;
