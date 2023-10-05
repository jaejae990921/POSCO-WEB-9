import { useContext } from 'react';
import CartContext from './store/cart-context';

export default function CartItem({ value }) {
  const { cart, setCart } = useContext(CartContext);

  //filter를 사용하여 새로운 배열 반환
  const removeCart = (id) => {
    setCart(cart.filter((element) => element.id !== id));
  };

  return (
    <div>
      <span>
        {value.name} : {value.price}원
      </span>
      <button onClick={() => removeCart(value.id)}>제거</button>
    </div>
  );
}
