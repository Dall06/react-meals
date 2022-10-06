import Actions from "./Actions";

export const CartReducer = (state, action) => {
  const addMeal = (meal, quantity, state) => {
    const updatedCart = [...state.cart];
    const foundIndex = updatedCart.findIndex(
      item => item.id === meal.id
    );

    if (foundIndex < 0) {
      updatedCart.push({ ...meal, quantity: quantity });
    }

    const updatedItem = { ...updatedCart[foundIndex] };
    updatedItem.quantity += quantity;
    updatedCart[foundIndex] = updatedItem;

    return { ...state, cart: updatedCart };
  };

  const removeMeal = (id, state) => {
    const updatedCart = [...state.cart];
    const foundIndex = updatedCart.findIndex(item => item.id === id);

    const updatedItem = { ...updatedCart[foundIndex] };
    updatedCart.splice(foundIndex, 1);
    updatedItem.quantity--;

    return { ...state, cart: updatedCart };
  };

  const minusCount = (id, state) => {
    const updatedCart = [...state.cart];
    const foundIndex = updatedCart.findIndex(item => item.id === id);

    const updatedItem = { ...updatedCart[foundIndex] };
    updatedItem.quantity--;

    if (updatedItem.quantity <= 0) {
      updatedCart.splice(foundIndex, 1);
      return { ...state, cart: updatedCart };
    }

    updatedCart[foundIndex] = updatedItem;

    return { ...state, cart: updatedCart };
  }

  const addCount = (id,state) => {
    const updatedCart = [...state.cart];
    const foundIndex = updatedCart.findIndex(item => item.id === id);

    const updatedItem = { ...updatedCart[foundIndex] };
    updatedItem.quantity++;
    updatedCart[foundIndex] = updatedItem;

    return { ...state, cart: updatedCart };
  }

  switch (action.type) {
    case Actions.ADD_TO_CART:
      console.log(state.cart)
      return addMeal(action.payload.data, action.payload.quantity, state);
    case Actions.REMOVE_FROM_CART:
      return removeMeal(action.payload.data.id, state);
    case Actions.ADD_COUNT:
      return addCount(action.payload.data.id, state);
    case Actions.MINUS_COUNT:
      return minusCount(action.payload.data.id, state);
    default:
      return state
  }
}

export default CartReducer;
