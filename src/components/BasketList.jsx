import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    increaseQuantity,
    decreaseQuantity,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.regularPrice * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Basket</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            removeFromBasket={removeFromBasket}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item">empty basket</li>
      )}
      <li className="collection-item active">Total cost: {totalPrice} UAH</li>
      <i class="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export { BasketList };
