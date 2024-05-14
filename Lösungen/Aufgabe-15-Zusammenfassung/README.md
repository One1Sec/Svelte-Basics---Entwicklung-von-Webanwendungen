# Aufgabe 15 - Zusammenfassung

## Übersicht

Diese Übung fasst alle gelernten Svelte-Konzepte zusammen, indem ihr eine Pizza-Bestellseite im Mario & Luigi's Pizza-Theme erstellt. Die Aufgaben umfassen die Definition von Variablen, die Erstellung und Verwendung von Stores, das dynamische Rendern von Komponenten, Event Handling und Bindings.

## Ziele

- Definiere Variablen und verwende sie in HTML.
- Erstelle und verwende writable und derived Stores.
- Implementiere dynamisches Rendering und nutze Event Handling.
- Verwende Bindings, um Formulare mit Variablen zu verknüpfen.
- Dispatche und handhabe Events.
- Initialisiere Audio-Objekte und verwende den `onMount`-Hook.

## Aufgaben

### Aufgabe 1: Definieren von Variablen

Definiere die Variablen `heroText` und `heroImage` und setze sie im HTML ein.

**Anweisungen:**

- Finde die `Hero.svelte` im lib Ordner
- Definiere die Variablen `heroText` und `heroImage`.
- Verwende `heroText` als Inhalt des `h1`-Elements.
- Verwende `heroImage` als `src`-Attribut des `img`-Elements.

**Code:**

```svelte
<script>
  import image from "../assets/image.png";

  // Ziel: Definiere die Variablen heroText und heroImage und setze sie im HTML ein

  let heroText;
  let heroImage;
</script>

<section class="hero">
  <div class="hero-content">
    <!-- Aufgabe 1: -->
    <!-- Verwende heroText als Inhalt des h1-Elements -->
    <!-- Verwende heroImage als src-Attribut des img-Elements -->
  </div>
</section>
```

### Aufgabe 2: Erstellen von Stores

Erstelle zwei Svelte-Stores: einen writable Store namens `cart` und einen derived Store namens `totalPrice`.

**Anweisungen:**

- Finde die `stores.js`
- Erstelle einen writable Store namens `cart`.
- Erstelle einen derived Store namens `totalPrice`, der den Gesamtpreis berechnet.

**Code:**

```javascript
// Ziel: Erstelle zwei Svelte-Stores. Einen writable store namens cart und einen derived store namens totalPrice.
import /* dein Code hier */ "svelte/store";

// Erstelle einen writable store namens cart
export const cart = /* dein Code hier */ [];

// Erstelle einen derived store namens totalPrice
export const totalPrice =
  /* dein Code hier */ (cart,
  ($cart) =>
    $cart.reduce((total, item) => total + item.price * item.quantity, 0));
```

### Aufgabe 3: Dynamisches Rendering und addToCart

Implementiere die `addToCart` Funktion und zeige die Kategorien und Artikel dynamisch an.

**Anweisungen:**

- Finde die `Menu.svelte`
- Vervollständige die Funktion `addToCart`.
- Zeige die Kategorien als Buttons dynamisch mit `{#each}` an.
- Zeige die Artikel im Menü dynamisch mit `{#each}` an.

**Code:**

```svelte
<script>
  import MenuCard from "./MenuCard.svelte";
  import { cart } from "./stores";
  import pizza1 from "../assets/pizza-1.jpg";
  import pizza2 from "../assets/pizza-2.jpg";
  import pizza3 from "../assets/pizza-3.jpg";

  import dessert1 from "../assets/dessert-1.jpg";
  import dessert2 from "../assets/dessert-2.jpg";

  import drink1 from "../assets/drink-1.jpg";
  import drink2 from "../assets/drink-2.jpg";

  import Button, { Label } from "@smui/button";

  // Ziel: Implementiere die addToCart Funktion und zeige die Kategorien und Artikel dynamisch an

  let selected = "Pizzas"; // Standardmäßig ausgewählte Kategorie
  const items = {
    Pizzas: [
      {
        id: 1,
        name: "Mushroom Kingdom",
        price: 9.5,
        description: "A pizza loaded with a variety of mushrooms and mozzarella cheese.",
        img: pizza1,
      },
      ...
    ],
    Desserts: [
     ...
    ],
    Drinks: [
     ...
    ],
  };

  function addToCart(item) {
    // Aufgabe 3: Funktion addToCart vervollständigen
    // Hinweis: Verwende .update, um den cart-Store zu aktualisieren
    cart((currentItems) => {
      const found = currentItems.find((p) => p.id === item.id);
      if (found) {
        found.quantity++;
      } else {
        currentItems.push({ ...item, quantity: 1 });
      }
      return currentItems;
    });
  }
</script>

<main class="container">
  <div class="category-buttons">
    <!-- Aufgabe 3: Kategorien als Buttons anzeigen mit {#each} anstatt hardcodet -->
    <!-- Hinweis: {#each Object.keys(items) ... -->

    <Button variant="raised" on:click={() => (selected = "Pizzas")}>
      <Label>Pizzas</Label>
    </Button>
    <Button variant="raised" on:click={() => (selected = "Desserts")}>
      <Label>Desserts</Label>
    </Button>
    <!--...-->
  </div>

  <div class="menu">
    <!-- Aufgabe 3: Menu items mit {#each} anzeigen je nach ausgewählter kategorie -->
    <!-- Hinweis: {#each items[selected] ... -->
    <MenuCard item={items[selected][0]} on:click={() => addToCart(items[selected][0])} />
    <!--...-->
  </div>
</main>
```

### Aufgabe 4: Entfernen von Artikeln im Warenkorb und OrderButton disabling

Implementiere die `removeItem` Funktion und zeige die Artikel im Warenkorb dynamisch an.

**Anweisungen:**

- Finde die `Cart.svelte`
- Implementiere die Funktion `removeItem`.
- Zeige die Artikel im Warenkorb mit `{#each}` an.
- Zeige den `totalPrice` mit zwei Nachkommastellen an.
- disable den OrderButton, wenn der Warenkorb leer ist.

**Code:**
Cart.svelte

```svelte
<script>
  import OrderButton from "./OrderButton.svelte";
  import IconButton from "@smui/icon-button";
  import { cart, totalPrice } from "./stores";

  // Ziel: Implementiere die removeItem Funktion und zeige die Artikel im Warenkorb dynamisch an

  function removeItem(itemId) {
    // Aufgabe 4: Implementiere die removeItem-Funktion
    // Hinweis: cart.update(...) & javascript array filter funktion
  }
</script>

<div class="container">
  <div class="cart-grid">
    <h2>Your Cart</h2>
    <div class="cart-items">
      <!-- Aufgabe 4: Nutze {#each}, um die cart items aus dem store effizient anzuzeigen -->

      <!-- Hinweis: Hardcoding vermeiden mit {#each} -->
      <!-- <div class="cart-item">
        <p>{$cart[0].name} - {$cart[0].quantity} x {$cart[0].price.toFixed(2)}€</p>
        <IconButton class="material-icons" on:click={() => removeItem($cart[0].id)}>close</IconButton>
      </div>
      <div class="cart-item">
        <p>{$cart[1].name} - {$cart[1].quantity} x {$cart[1].price.toFixed(2)}€</p>
        <IconButton class="material-icons" on:click={() => removeItem($cart[1].id)}>close</IconButton>
      </div> -->
    </div>
    <div class="cart-total">
      <h3>
        Total: <!-- Aufgabe 4: $totalPrice anzeigen mit 2 Nachkommastellen-->
      </h3>
      <OrderButton />
      <!-- Aufgabe 4: OrderButton click Event an die app.svelte forwarden -->
    </div>
  </div>
</div>
```

OrderButton.svelte:

```svelte
<script>
  import Button from "@smui/button";
  import { cart } from "./stores";
</script>

<!--Aufagbe 4: Disable den Button wenn der Warenkorb leer ist-->
<Button on:click variant="raised"
  >Order Now</Button
>
```

### Aufgabe 5: Bindings und Event-Handling

Verwende Bindings, um das Feedback-Formular mit den Variablen zu verknüpfen.

**Anweisungen:**

- Finde die `Contact.svelte`
- Verwende `bind:` um die Variable `message` mit einem Textfeld zu verknüpfen.
- Verwende `bind:` um die Werte der `ratings` zu verknüpfen.
- Implementiere den Event-Handler für die Änderung der Bewertung.

**Code:**

```svelte
<script>
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";
  import Button from "@smui/button";
  import Slider from "@smui/slider";

  // Ziel: Verwende Bindings, um das Feedback-Formular mit den Variablen zu verknüpfen

  let message = ""; // Bindings: binde diese Variable mit einem Textfeld

  let ratings = [
    { id: "delivery", name: "Delivery Time", value: 3 },
    { id: "taste", name: "Taste", value: 3 },
    { id: "freshness", name: "Freshness", value: 3 },
    { id: "satisfaction", name: "General Satisfaction", value: 3 },
  ];

  // Event-Handler für die Änderung der Bewertung
  function handleRatingChange(event, ratingId) {
    const index = ratings.findIndex((rating) => rating.id === ratingId);
    ratings[index].value = event.detail;
  }
</script>

<div class="container">
  <h1>Rate Us</h1>
  <p>We value your feedback. Please rate us on the following aspects:</p>

  <form class="feedback-form">
    <div class="field-group">
      <!-- Aufgabe 5: Verwende bind:, um die message Variable zu binden -->
      <Textfield
        textarea
        style={"width: 100%;"}
        value={message}
        label="Your Feedback"
      >
        <HelperText slot="helper">
          Remember, Mario and Luigi know where you live.
        </HelperText>
      </Textfield>
    </div>

    <div class="field-group">
      <p style="text-align: center; font-weight: bold;">
        Rating System: 1 (Not Good) - 5 (Fantastic)
      </p>
      {#each ratings as rating (rating.id)}
        <div class="rating">
          <span style="width: 100px; margin-left:15px">
            {rating.name}:
          </span>
          <span>{rating.value}</span>
          <!-- Aufgabe 5: Verwende bind, um den Wert der Bewertung zu binden -->
          <!-- Aufgabe 5: Füge den Event-Handler im on:change hinzu -->
          <Slider
            style="max-width: 200px; flex-grow: 1;"
            value={rating.value}
            on:change={(event) => console.log("Hinweis: handleRatingChange")}
            min={1.0}
            max={5.0}
          />
        </div>
      {/each}
    </div>
    <Button
      on:click={(e) => {
        e.preventDefault();
        alert("Thanks for your feedback");
      }}
    >
      Submit
    </Button>
  </form>

  <p>Your message:</p>
  <div class="message">
    <!-- Aufgabe 5: Zeige die gebundene message Variable an -->
  </div>
</div>
```

### Aufgabe 6: Event Dispatching und Await-Block

Dispatche ein Event, wenn der Dialog geschlossen wird und wenn die Bestellung erfolgreich oder fehlgeschlagen ist. Verwende den Await-Block, um die Bestellung zu verarbeiten.

**Anweisungen:**

- Finde die `OrderProcess.svelte`
- Erstelle einen Event Dispatcher.
- Dispatche ein Custom Event, wenn die Bestellung erfolgreich ist.
- Setze den Warenkorb zurück, wenn die Bestellung erfolgreich ist.
- Dispatche ein Custom Event, wenn die Bestellung fehlschlägt.
- Dispatche ein Custom Event, wenn der Dialog geschlossen wird.
- Verwende den Await-Block, um die Bestellung zu verarbeiten.
- Zeige während der Wartezeit "Processing order..." an.
- Im Erfolgsfall zeige die Erfolgsmeldung und einen Button, der die `handleClose`-Funktion aufruft.
- Im Fehlerfall zeige die Fehlermeldung in Rot und einen Button, der die `handleClose`-Funktion aufruft.

**Code:**

```svelte
<script>
  import { cart } from "./stores";
  import { createEventDispatcher } from "svelte";
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
  import Button, { Label } from "@smui/button";

  // Ziel: Dispatche ein Event, wenn der Dialog geschlossen wird und wenn die Bestellung erfolgreich oder fehlgeschlagen ist
  // Aufgabe 6: Erstelle einen Event Dispatcher
  // const dispatch = createEventDispatcher();

  let orderPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Order successful!");
        // Aufgabe 6: dispatche ein Custom Event, wenn die Bestellung erfolgreich ist
        // Aufgabe 6: Setze den Warenkorb zurück, wenn die Bestellung erfolgreich ist
      } else {
        reject(new Error("Order failed. Please try again."));
        // Aufgabe 6: dispatche ein Custom Event, wenn die Bestellung fehlschlägt
      }
    }, 2000); // Simuliere Netzwerkverzögerung
  });

  function handleClose() {
    // Aufgabe 6: dispatche ein Custom Event, wenn der Dialog geschlossen wird.
    document.body.style.overflow = "auto";
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
   <!-- Aufgabe 6: Verwende den Await-Block, um die Bestellung zu verarbeiten -->
    <!-- Zeige während der Wartezeit "Processing order..." an -->
    <!-- Im Erfolgsfall zeige die Erfolgsmeldung und einen <Button>, der die handleClose()-Funktion aufruft -->
    <!-- Im Fehlerfall zeige die Fehlermeldung in Rot und einen <Button>, der die handleClose()-Funktion aufruft -->

    <!--
        Hinweis: so muss das html strukturiert sein im {:then} und {:catch} :

        <p>{message}</p>
        <Actions>
          <Button on:click={...}>
            <Label>Close</Label>
          </Button>
        </Actions>""
      -->
</Dialog>
```

### Aufgabe 7: Initialisieren von Audio-Objekten und Anzeigen des OrderProcess

Initialisiere die Audio-Objekte für die Bestellstatus-Sounds im `onMount`-Hook und zeige den `OrderProcess` an, wenn `isOrderProcessing` true ist.

**Anweisungen:**

- Finde die `App.svelte`
- Initialisiere die Audio-Objekte für die Bestellstatus-Sounds im `onMount`-Hook.
- Verwende einen `if`-Block, um `OrderProcess` anzuzeigen, wenn `isOrderProcessing` true ist und die `$cart`-Store nicht leer ist.
- Füge der `OrderProcess`-Komponente Events hinzu, die beim Schließen des Dialogs `isOrderProcessing` auf `false` setzen und die entsprechenden Sounds abspielen (`orderCompleted` oder `orderFailure`).

**Code:**

```svelte
<script>
  import Hero from "./lib/Hero.svelte";
  import Menu from "./lib/Menu.svelte";
  import Cart from "./lib/Cart.svelte";
  import OrderProcess from "./lib/OrderProcess.svelte";
  import Footer from "./lib/Footer.svelte";
  import { onMount } from "svelte";
  import orderSuccess from "./assets/success.mp3";
  import orderFailed from "./assets/fail.mp3";
  import Contact from "./lib/Contact.svelte";

  // Ziel: Initialisiere die Audio-Objekte für die Bestellstatus-Sounds im onMount-Hook und zeige den OrderProcess an, wenn isOrderProcessing true ist

  let isOrderProcessing = false;

  let orderCompleted = new Audio(orderSuccess);
  let orderFailure = new Audio(orderFailed);

  // Aufgabe 7: Initialisiere die Audio-Objekte für die Bestellstatus-Sounds im onMount-Hook
</script>

<main>
  <Hero />
  <Menu />
  <Cart
    on:click={() => {
      isOrderProcessing = true;
    }}
  />
  <!-- Aufgabe 7: Verwende einen if-Block, um OrderProcess anzuzeigen, wenn isOrderProcessing true ist und die $cart-Store nicht leer ist -->
  <!--
  Füge der OrderProcess-Komponente die Component/Custom Events hinzu,
  die in Aufgabe 6 dispatched wurden. Diese Events setzen beim Schließen
  des Dialogs isOrderProcessing auf false und spielen die entsprechenden
  Sounds ab (orderCompleted oder orderFailure).
  -->
  <Contact />
  <Footer />
</main>
```
