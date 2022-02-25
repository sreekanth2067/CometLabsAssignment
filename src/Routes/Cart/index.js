import "./index.css"
import ProductCard from "../Item"
import {Component} from "react"
class Cart extends Component {
    state = {
      productsList: [],
      isLoading: false,
    }
  
    componentDidMount() {
      this.getProducts()
    }
  
    getProducts = async () => {
      this.setState({
        isLoading: true,
      })
      const updatedData=JSON.parse(localStorage.getItem(window.user)).cartItems
        this.setState({
          productsList: updatedData,
          isLoading: false,
        })
      }
  
    renderProductsList = () => {
      const {productsList} = this.state
      return (
        <>
          <ul className="products-list">
            {productsList.map(product => (
              <ProductCard productData={product} key={product.id} />
            ))}
            <li>{window.user===undefined ? <p>Please Sign in to Access Cart</p> : <p></p>}</li>
          </ul>
        </>
      )
    }
  
    renderLoader = () => (
      <div className="products-loader-container">
        <p>Loading</p>
      </div>
    )
  
    render() {
      const {isLoading} = this.state
      return isLoading ? this.renderLoader() : this.renderProductsList()
    }
  }
  
  export default Cart