# Bindings

## Überblick

Mit dieser Aufgabe sollt ihr das Verständnis für Bindings in Svelte erlangen. Im Rahmen unserer Pizz- Webseite soll dafür mit Hilfe von Bindings Input-Felder für die Addresse, Pizzabestellung und Zahlungsmethode an Variablen gebunden werden (2-Way-Bindings).

## Aufgaben

1. **Bestellung**

Füge zwei Möglichkeiten hinzu die Bestellung von Joshi und Goomba Pizzas aufzunehmen. Einen Slider und ein Eingabefeld für Zahlen (das Standardmäßig ein Button für increase und einen für decrease enthält). Nutze Bindings, um das Eingabefeld, und den Slider an eine Variable zu binden, die den Wert speichert. -> Wenn der Slider wert sich ändert soll sich auch das Eingabefeld ändern und umgekehrt. 

2. **Adresse**

Füge Text-Input-Felder hinzu, um die Adresse einzugeben. Binde den Input-Wert an die Varaible "address" und lasse unterhalb der Input-Felder die eingegebene Adresse anzeigen. Ergänze für die Input Felder eine angemessene maximale Anzahl an erlaubten Buchstaben und einen Hinweistext, der bei leerem Inputfeld anzeigt, was eingegeben werden soll.

3. **Zahlungsmethode**

Füge eine Möglichkeit hinzu die Zahlungsmethode auszuwählen (z.B. über Radio Buttons). Es soll nur eine Zahlungsmethode ausgewählt werden können. Unterhalb der Input-Möglichkeit soll die ausgewählte Zahlungsmethode angezeigt werden.

## Code Vorlagen:

```svelte
<script>

  let description = "Mario & Luigi's pizza service only uses \
  <strong>fresh and local</strong> products 🍕🥦";
  const src = "images/image.png"
  const alt = "Mario and Luigi with a Pizza"
  const goombaPizza = "Goomba's Special"
  const yoshiPizza = "Joshi's Veggi"

  //Nutze die folgenden Variablen, um die Aufgaben zu erledigen
  let address = {street:"",number:"", city:"", plz:""}
  let numberOfGoombaPizzas = 0
  let numberOfJoshiPizzas = 0
 
  const payment_methods = ["Payment by direct debit", "Paypal", "Credit/Debit card"]
  let selected_payment_method = ""

  function submitRequest (){
    alert("Your order has been submitted. It will be deliverd to you shortly")
  }
</script>

<main>
  <div id="header">
    <h1>Mario & Luigi's Pizza</h1>
    <p>{@html description}</p>
    <img id="logo" {src} {alt}/>
  </div>

  <div class="form">
    <h2>Your Order</h2>
    <label>
      <p> Goomba's Special </p>
      <!-- Dein Code hier -->
      <input/>
    </label>
    <label>
      <p> Joshi's Veggi </p>
      <!-- Dein Code hier -->
      <input/>
    </label>
    <h2>Address</h2>
    <!-- Dein Code hier. Nutze für Text-Input-Felder class="textfield"-->
    <p> <strong>Your addess is: </strong></p>
    <h2>Payment method</h2>
      <!-- Dein Code hier-->
    <p> <strong>Your preferred payment method:</strong> </p>
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
    height:100%;
    flex: 1 1 auto;
    margin-left: auto;
    margin-right: auto;
    display:block;
    align-items: center;
  }
  .textfield {
    display:block;
    margin-left: auto;
    margin-right: auto;
    margin-block: 10px;
    padding-block: 5px;
  }

  label {
    display:block;
    margin-left: auto;
    margin-right: auto;
  }

</style>
```