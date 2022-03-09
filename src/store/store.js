import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import cartReduer from "../store/reducers/index";
import throttle from "lodash.throttle";
function loadState() {
  try {
    const state = localStorage.getItem("cart");

    if (state !== null) {
      return JSON.parse(state);
    }
  } catch (e) {
    // ignore errors
  }

  return {
    cart: [],
  };
}

function saveState(state) {
  console.log(localStorage);
  localStorage.setItem("cart", JSON.stringify(state));
}

const initialState = {
  cart: [
    {
      product: {
        id: "348135e0-7ee0-11ec-8e9d-0da3379c480d",
        name: "Moment TABLETTE DE CHOCOLAT AU ECLATS D'AMANDES 90G",
        price: "146 DA",
        rating: "4.5 out of 5",
        category: "epicerie-bonbons-chocolat",
        img: "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/1943/1.jpg?3356",
        tags: [
          "moment",
          "tablette",
          "chocolat",
          "eclats",
          "amandes",
          "90g",
          "epicerie",
          "bonbons",
          "chocolat",
        ],
      },
      quantity: 5,
    },
  ],
};

const store = createStore(
  cartReduer,
  loadState(),
  compose(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
