import './index.css'

const addToCart =(ProductData)=>{
  if (window.user!==undefined){
    const data=JSON.parse(localStorage.getItem(window.user))
    const l=data.cartItems
    const updatedata={
      name:data.name,
      email:data.email,
      gender:data.gender,
      country:data.country,
      password:data.password,
      address:data.address,
      cartItems:[...l,ProductData]
      
    }
    const username=data.name
  localStorage.setItem(username,JSON.stringify(updatedata))
  }
  
}

const ProductCard = props => {
  const {productData} = props
  const {title, description, image, Category, price} = productData

  return (
    <li className="product-item">
      <img src={image} alt="product" className="image1" />
      <h1 className="title">{title}</h1>
      <p className="brand"> {Category}</p>
        <p className="price">Rs {price}/-</p>
        <div className="rating-container">
          <p className="rating">{description}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star" onClick={addToCart(productData)}
          />
        </div>
    </li>
  )
}
export default ProductCard
