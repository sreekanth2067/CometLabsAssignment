import "./index.css"
import ProductCard from "../Item"
import {Component} from "react"
class AllProductsSection extends Component {
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
      const apiUrl = 'https://fakestoreapi.com/products'
      const options = {
        method: 'GET',
      }
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const fetchedData = await response.json()
        const updatedData = fetchedData
        this.setState({
          productsList: updatedData,
          isLoading: false,
        })
      }
    }
  
    renderProductsList = () => {
      const {productsList} = this.state
      let UproductsList;
      if(window.user===undefined){
        UproductsList=productsList.slice(0,3)
      }
      else{
        UproductsList=productsList
      }
      return (
        <>
          <ul className="products-list">
            {UproductsList.map(product => (
              <ProductCard productData={product} key={product.id} />
            ))}
            <li>{window.user===undefined ? <p>Please Sign in to Access All Products</p> : <p></p>}</li>
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
  
  export default AllProductsSection