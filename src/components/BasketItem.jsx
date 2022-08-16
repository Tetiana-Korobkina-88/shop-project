function BasketItem(props) {
  const {
    mainId,
    displayName,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    increaseQuantity = Function.prototype,
    decreaseQuantity = Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      {displayName}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => decreaseQuantity(mainId)}
      >
        remove
      </i>{" "}
      x {quantity}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => increaseQuantity(mainId)}
      >
        add
      </i>
      {price.regularPrice * quantity} UAH
      <span
        className="secondary-content"
        onClick={() => removeFromBasket(mainId)}
      >
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
