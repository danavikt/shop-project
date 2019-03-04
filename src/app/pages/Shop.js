import React from "react";
import PropTypes from "prop-types";
import "./shop.scss";

function Shop({ products }) {
  return (
    <div className="Cards-block">
      {products.map(product => (
        <div className="Card">
          <img
            className="Card--picture"
            src={product.image}
            alt={product.name}
          />
          <p className="Card--name" key={product.id}>
            {product.name}
          </p>
          <p className="Card--price">
            {product.price}
            {product.currencySymbol}
          </p>
          <button type="button">
            <span role="img" aria-label="cart">
              🛒
            </span>
          </button>
          <button type="button">
            <span role="img" aria-label="favorites">
              ⭐
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}

Shop.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

Shop.defaultProps = {
  products: [],
};

export default Shop;
