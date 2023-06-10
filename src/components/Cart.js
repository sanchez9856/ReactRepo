import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <button
        className=" bg-green-200 shadow-sm shadow-gray-300 m-4"
        onClick={() => {
          handleClearCart();
        }}
      >
        Clear Cart
      </button>
      <div data-testid="cart-div" className=" flex flex-col items-center">
        {cartItems.length === 0 ? (
          <h1 className=" text-2xl">You're cart is empty</h1>
        ) : (
          cartItems.map((item) => (
            <CartCard
              key={item.id}
              imageid={item.imageId}
              name={item.name}
              description={item.description}
              price={item.price}
            ></CartCard>
          ))
        )}
      </div>
    </>
  );
};

export default Cart;
