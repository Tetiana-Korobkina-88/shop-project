import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const { order = [], handleBasketShow = Function.prototype } = props;

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Basket</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.mainId} {...item} />)
      ) : (
        <li className="collection-item">empty basket</li>
      )}
      <li className="collection-item active">Total cost</li>
      <i class="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export { BasketList };
