import CartItem from "./CartItem";
import { useCartContext } from "../../contexts/CartContext";

const CartProducts = () => {
    const { cartItems } = useCartContext();
    const keys = Object.keys(cartItems);
    return (
        <section className='flex flex-col justify-start overflow-auto gap-2 h-3/5'>
            {keys.map((key) => <CartItem id={key} qtd={cartItems[key]} key={`product-${key}`} />)}
        </section>
    );
}

export default CartProducts;