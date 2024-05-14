<script>
  import { cart } from "./stores";
  import { createEventDispatcher } from "svelte";
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
  import Button, { Label } from "@smui/button";

  const dispatch = createEventDispatcher();

  let orderPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Order successful!");
        dispatch("orderSuccess");
        cart.set([]);
      } else {
        reject("Order failed. Please try again.");
        dispatch("orderFailed");
      }
    }, 2000); // Simulate network delay
  });

  function handleClose() {
    dispatch("closeDialog");
    document.body.style.overflow = "auto"; // Enable scrolling after dialog is closed
  }
</script>

<Dialog
  open
  on:close={handleClose}
  aria-labelledby="simple-title"
  aria-describedby="simple-content"
>
  <Title id="simple-title">Processing Order</Title>
  <Content id="simple-content">
    {#await orderPromise}
      <p>Processing order...</p>
    {:then message}
      <p>{message}</p>
      <Actions>
        <Button on:click={handleClose}>
          <Label>Close</Label>
        </Button>
      </Actions>
    {:catch error}
      <p style="color: red">{error}</p>
      <Actions>
        <Button on:click={handleClose}>
          <Label>Close</Label>
        </Button>
      </Actions>
    {/await}
  </Content>
</Dialog>
