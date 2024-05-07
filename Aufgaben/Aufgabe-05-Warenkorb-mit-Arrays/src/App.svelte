<script>

  let description= "Mario & Luigi's pizza service only uses <strong>fresh and local</strong> products 🍕🥦";

  //Konstanten hier
  const pizzaGoomba = "TODO"
  const pizzaJoshi = "TODO"

  //Variablen die die Musterlösung verwendet (sind hier allerdings noch nicht reactive)
  let pizzaCart = [] //Einkaufswagen
  let totalPrice = 0.00 //Gesamtpreis
  let pizzaJoshiCount = 0 //Anzahl Joshi-Pizzas in der Bestellung
  let pizzaGoombaCount = 0 //Anzahl Goomba-Pizzas in der Bestellung
  let pizzaList = "" //String der die Art und Anzahl der Pizzas in der Bestellung enthält

  const src = "images/image.png"
  const alt = "Mario and Luigi with a Pizza"

  //function to add a pizza to the array
  function addPizzaToCart(pizza){
    "TODO"
  }
  
  //Deine Reactive Deklarationen und Statements hier

</script>

<main>
  <div id="header">
    <h1>Mario & Luigi's Pizza</h1>
    <p>{@html description}</p>
    <img id="logo" {src} {alt}/>
  </div>
  <div id="cart">
    <!-- Dein Code hier -->
  </div>
</main>

<style>
  #logo {
    /*Dein Code hier */
  }

  #cart {
    /*Dein Code hier */
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
</style>
