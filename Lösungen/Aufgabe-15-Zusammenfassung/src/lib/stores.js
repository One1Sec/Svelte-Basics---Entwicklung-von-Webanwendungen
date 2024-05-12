import { writable, derived } from "svelte/store";

export const cart = writable([]);
export const totalPrice = derived(cart, ($cart) =>
  $cart.reduce((total, item) => total + item.price * item.quantity, 0)
);

