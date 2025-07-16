import { useState } from "react";

function ProductList(props) {
  const [quantity, setQuantity] = useState(0);
  const [addedToCartCount, setAddedToCartCount] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      setAddedToCartCount(addedToCartCount + quantity);
      setQuantity(0); // reset current selection
    }
  };

  const handleClearCart = () => {
    setAddedToCartCount(0);
  };

  const totalPrice = quantity * props.price;

  return (
    <div className="product-card">
      <h4>{props.title}</h4>
      <img src={props.imgURL} alt="Product Image" />
      <p>{props.description}</p>
      <p>Rating: {props.rating}</p>
      <p>Price: ₱{props.price}</p>

<div className="quantity-controls">
  <button
    onClick={handleSubtract}
    disabled={quantity === 0}
    className={quantity === 0 ? "minus-button disabled" : "minus-button"}
  >
    −
  </button>

  <span style={{ margin: "0 10px" }}>{quantity}</span>

  <button onClick={handleAdd} className="plus-button">+</button>
</div>
    
      {quantity > 0 && (
        <p className="total-price">Total Price: ₱{totalPrice}</p>
      )}

      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>

      
      {addedToCartCount > 0 && (
        <>
          <p className="cart-status">
            🛒 Added {addedToCartCount} item{addedToCartCount > 1 ? "s" : ""} to cart
          </p>
          <button className="clear-cart-button" onClick={handleClearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default ProductList;
