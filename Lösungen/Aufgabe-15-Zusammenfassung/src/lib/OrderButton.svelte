<script>
  import Button from "@smui/button";
  import { cart } from "./stores";
</script>

<Button disabled={$cart.length === 0} on:click variant="raised"
  >Order Now</Button
>
