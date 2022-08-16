function BasketItem(props) {
  const {
    mainId,
    displayName,
    price,
    quantity,
    removeFromBasket = Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      {displayName} x {quantity} = {price.regularPrice * quantity} UAH
      <span class="secondary-content" onClick={() => removeFromBasket(mainId)}>
        <i class="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export { BasketItem };
