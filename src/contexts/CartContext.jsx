import { createContext, useContext } from "react";
import { useState } from "react";

export const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

export const getAmountOfItemsInCart = (cartItemsObj) => {
    let amount = 0;

    for ( const key in cartItemsObj) {
        amount += cartItemsObj[key];
    }
    return amount;
}

const CardContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productID) => {
    setCartItems({
      ...cartItems,
      [productID]: (cartItems[productID] ?? 0) + 1,
    });
  };

  const removeFromCart = (productID) => {
    const cartItemsCopy = { ...cartItems };
    delete cartItemsCopy[productID];
    setCartItems(cartItemsCopy);
  };

  const subToCart = (productID) => {
    if (cartItems[productID] > 1) {
      setCartItems({ ...cartItems, [productID]: cartItems[productID] - 1 });
    } else {
      removeFromCart(productID);
    }
    };

    return (
      <>
        <CartContext.Provider
          value={{
            isCartOpen,
            setIsCartOpen,
            cartItems,
            addToCart,
            subToCart,
            removeFromCart,
          }}
        >
                {children}
        </CartContext.Provider>
      </>
    );
}

export default CardContextProvider;