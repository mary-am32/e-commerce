import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

//empty cart then key value will be countety add to cart
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  //insert any fun or data that will be provieded on shopcontext as a value
  //and by doing that we can accuss to this data or fun in any component
  const [cartItem, setcartItem] = useState(getDefaultCart());

  //add to cart func
  const AddToCart = (itemid) => {
    setcartItem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    console.log(cartItem);
  };

  //remove from cart func
  const removeFromCart = (itemid) => {
    setcartItem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const getTotalCartAmaount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };
  const contextValue = {
    getTotalCartItem,
    getTotalCartAmaount,
    all_product,
    cartItem,
    AddToCart,
    removeFromCart,
  };

  //return this shopcontext value to shopcontextprovider
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
