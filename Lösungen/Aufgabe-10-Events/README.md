# Aufgabe 10 - Event Handling in Sve

## Übersicht

Diese Übung verbessert dein Verständnis für das Event Handling in Svelte-Anwendungen. Du wirst am "Create Your Own Super Mario Pizza!" Bestellsystem arbeiten, mit Fokus auf das Dispatching und Handling von custom events, die Verwendung von event modifiers und die Implementierung von event forwarding.

## Ziele

- Implementiere und dispatche custom component events mit `createEventDispatcher`.
- Verwende event modifiers, um Benutzerinteraktionen zu steuern.
- Wende event forwarding an, um events effektiv über verschiedene Komponenten zu verwalten.

## Aufgaben

### Aufgabe 1: Dispatching von Component Events

Ändere `PizzaList.svelte`, um ein Event zu dispatchen, wenn ein Topping hinzugefügt wird. Dieses Event sollte die Details des Toppings enthalten.

**Anweisungen:**

- Finde die Funktion `addToPizza` in `PizzaList.svelte`.
- Verwende `createEventDispatcher`, um ein `addTopping` Event zu dispatchen, das die Details des Toppings enthält.

### Aufgabe 2: Handling von Component Events in App.svelte

Richte `App.svelte` ein, um das `addTopping` Event von `PizzaList.svelte` zu handhaben. Aktualisiere das cart Array entsprechend, um neue Toppings zu verwalten.

**Anweisungen:**

- Implementiere den event handler in `App.svelte`, um die Topping-Daten zu empfangen und das cart zu aktualisieren, wobei Duplikate vermieden werden.

### Aufgabe 3: Implementiere einen Inline Handler zum Löschen von Toppings in App.svelte

**Anweisungen:**

- Verwende das `on:removeTopping` component event und dessen `event.detail.id`, um das Topping aus dem `cart` zu filtern.

### Aufgabe 4: Implementiere Event Forwarding in OrderButton

Stelle sicher, dass die `OrderButton` Komponente das click event korrekt an `App.svelte` für die Bestellabschluss weiterleitet und nur `once` geklickt werden kann.

**Anweisungen:**

- Verbinde das `OrderButton` click event mit einer Funktion in `App.svelte`, die die Bestellung abschließt.
- Wende den `once` modifier auf den OrderButton in `App.svelte` an

## Code Vorlagen

**PizzaList.svelte**

```svelte
<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let toppings = [
    { id: 1, name: "Goomba's Mushroom", emoji: "🍄" },
    { id: 2, name: "Yoshi's Peppers", emoji: "🌶️" },
    { id: 3, name: "Bowser's Hot Sauce", emoji: "🔥" },
    { id: 4, name: "Peach's Pineapple", emoji: "🍍" },
  ];

  function addToPizza(topping) {
    // Aufgabe 1: Dispatche ein Event mit den Topping-Informationen
    // <-- code hier -->
  }
</script>

<ul>
  {#each toppings as topping (topping.id)}
    <li>
      <button on:click={() => addToPizza(topping)}>
        Add {topping.emoji} {topping.name}
      </button>
    </li>
  {/each}
</ul>
```

**App.svelte**

```svelte
<script>
  import PizzaList from "./lib/PizzaList.svelte";
  import OrderSummary from "./lib/OrderSummary.svelte";
  import OrderButton from "./lib/OrderButton.svelte";

  let cart = [];

  function handleAddPizza(event) {
    const { topping } = event.detail;
    if (cart[topping.id]) return; // <---keine doppelten toppings

    // Aufgabe 2: Handle das addTopping Event hier

  }

  function handleOrder() {
     if (cart.length === 0) return;

    const audio = new Audio(order_confirm);
    audio.play();
    const toppings = cart.map((item) => item.name).join(", ");
    alert(`Deine Pizza mit ${toppings} wird gebacken🍕🎉`);
    cart = [];
  }

    function handleRemoveTopping(event) {
    cart = cart.filter((item) => item.id !== event.detail.id);
  }
</script>

<main>
  <h1>Create Your Own Super Mario Pizza!</h1>
  <PizzaList on:addTopping={handleAddPizza} />
  <OrderSummary {cart} on:removeTopping={(event) => {
    // Aufgabe 3: Implementiere `handleRemoveTopping` als Inline Handler zum Löschen von Bestellungen
  }} />
  <OrderButton /> <!--Aufgabe 4: Leite das Klick-Event an handleOrder weiter. Verwende 'once' um Doppelbestellungen zu verhindern.-->
</main>
```

**OrderSummary.svelte**

```svelte
<script>
  import { createEventDispatcher } from 'svelte';
  export let cart;

  const dispatch = createEventDispatcher();

  function removeTopping(id) {
    dispatch('removeTopping', { id });
  }
</script>

<h2>Deine Bestellung:</h2>
<div class="container">
  <ul>
    {#each cart as item (item.id)}
      <li>
        {item.emoji} {item.name}
        <button on:click={() => removeTopping(item.id)}>x</button>
      </li>
    {/each}
  </ul>
</div>
```

**OrderButton.svelte**

```svelte
<button on:click> Complete Order </button>
```
