<script>
  let description =
    "Mario & Luigi's pizza service only uses <strong>fresh and local</strong> products 🍕🥦";
  const src = "images/image.png";
  const alt = "Mario and Luigi with a Pizza";
  const goombaPizza = "Goomba's Special";
  const yoshiPizza = "Joshi's Veggi";

  let address = { street: "", number: "", city: "", plz: "" };
  let numberOfGoombaPizzas = 0;
  let numberOfJoshiPizzas = 0;

  let payment_methods = [
    "Payment by direct debit",
    "Paypal",
    "Credit/Debit card",
  ];
  let selected_payment_method = "";

  function submitRequest() {
    alert("Your order has been submitted. It will be deliverd to you shortly");
  }
</script>

<main>
  <div id="header">
    <h1>Mario & Luigi's Pizza</h1>
    <p>{@html description}</p>
    <img id="logo" {src} {alt} />
  </div>

  <div class="form">
    <h2>Your Order</h2>
    <label>
      <p>{goombaPizza}</p>
      <input type="number" bind:value={numberOfGoombaPizzas} min="0" max="10" />
      <input type="range" bind:value={numberOfGoombaPizzas} min="0" max="10" />
    </label>
    <label>
      <p>{yoshiPizza}</p>
      <input type="number" bind:value={numberOfJoshiPizzas} min="0" max="10" />
      <input type="range" bind:value={numberOfJoshiPizzas} min="0" max="10" />
    </label>
    <h2>Address</h2>
    <input
      class="textfield"
      bind:value={address.street}
      maxlength="100"
      placeholder="Street"
    />
    <input
      class="textfield"
      bind:value={address.number}
      maxlength="20"
      placeholder="Number"
    />
    <input
      class="textfield"
      bind:value={address.city}
      maxlength="100"
      placeholder="City"
    />
    <input
      class="textfield"
      bind:value={address.plz}
      maxlength="20"
      placeholder="PLZ"
    />
    <p>
      <strong>Your addess is: </strong> <br />
      {address.street}
      {address.number} <br />
      {address.plz}
      {address.city}
    </p>
    <h2>Payment method</h2>
    {#each payment_methods as method}
      <label>
        <input
          type="radio"
          name="scoops"
          value={method}
          bind:group={selected_payment_method}
        />
        {method}
      </label>
    {/each}
    <p>
      <strong>Your preferred payment method:</strong>
      {selected_payment_method}
    </p>
    <button on:click={submitRequest}> Submit your request </button>
  </div>
</main>

<style>
  #logo {
    border-radius: 50%;
    width: 200px; /* Anpassen der Breite und Höhe des Bildes */
    height: 200px;
    object-fit: cover;
  }

  main {
    font-family: "Comic Sans MS", cursive;
    text-align: center;
    background-color: #e3caa5;
    padding: 50px;
  }

  button {
    background-color: #fc4100;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  }
  button:hover {
    background-color: #c40c0c;
  }
  .form {
    height: 100%;
    flex: 1 1 auto;
    margin-left: auto;
    margin-right: auto;
    display: block;
    align-items: center;
  }
  .textfield {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-block: 10px;
    padding-block: 5px;
  }

  label {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
