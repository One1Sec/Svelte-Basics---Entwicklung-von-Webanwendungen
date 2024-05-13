# Aufgabe 12 - Lifecycle

## Übersicht

In der folgenden Aufgabe werden verschiedene Lifecycle-Methoden angewandt. Mithilfe dieser wird das Laden einer Audiodatei, das kurze Anzeigen eines Hinweises und das "Aufräumen" des Codes nach einer bestimmten Aktion implementiert.

## Aufgaben

### onMount

Ziel der ersten Aufgabe ist das Implementieren der onMount-Funktion, damit der Sound nach dem Abschließen einer Bestellung korrekt geladen wird. 

1. Importiere "onMount" aus "svelte"
2. Implementiere die fehlende Funktion für onMount. Deklariere dafür in der Funktion eine neues Audio-Objekt und weise ihm "order_confirm" zu. Setze anschließend die Eigenschaft "preload" von audio auf "auto", damit die Audiodatei im Hintergrund geladen wird, sobald diese verfügbar ist.

### onDestroy

1. Importiere "onDestroy" aus "svelte"

Im Script werden bereits die folgenden Variablen deklariert:
  - let showOrderButton = true;
  - let orderButton;

In der Funktion handleOrder wird der Wert für showOrderButton nach dem Anklicken des Buttons auf "false" gesetzt. Da die If-Bedingung in "main" damit nicht mehr erfüllt wird, verschwindet der Button. 
Damit der Button aus der DOM entfernt wird, soll zusätzlich onDestroy implementiert werden: 

2. Implementiere die Funktion onDestroy
3. Überprüfe, ob das orderButton-Element existiert und ein übergeordnetes Element (parentNode) hat
4. Entferne das orderButton-Element aus seinem übergeordneten Element (Hinweis: removeChild)

```svelte
<script>
 
  import PizzaList from "./lib/PizzaList.svelte";
  import OrderSummary from "./lib/OrderSummary.svelte";
  import order_confirm from "./assets/mario-lets-go.mp3";
  import ThisWeeksSpecial from "./lib/WeeklySpecial.svelte"

  let cart = [];
  let audio;
  let showOrderButton = true;
  let orderButton;

// Ergänze hier die fehlende Funktion für onMount
  
  function handleAddPizza(event) {
    const { topping } = event.detail;
    
    if (cart.some(item => item.id === topping.id)) return;

    cart = [...cart, topping];
  }

  function handleOrder() {
    if (cart.length === 0) return;

    audio.play();
    const toppings = cart.map((item) => item.name).join(", ");
    alert(`Your Pizza with ${toppings} will be baked🍕🎉`);
    cart = [];
    showOrderButton = false;
  }
  
// Ergänze hier die fehlende Funktion für onDestroy

</script>

<main>
  <h1>Create Your Own Super Mario Pizza!</h1>
  <PizzaList on:addTopping={handleAddPizza} />
  <ThisWeeksSpecial />
  <OrderSummary
    on:removeTopping={(event) =>
      (cart = cart.filter((item) => item.id !== event.detail.id))}
    {cart}
  />

  {#if showOrderButton}
    <button bind:this={orderButton} on:click={handleOrder}>Complete Order</button>
  {/if}

</main>
```

### tick

Wechsel hierfür zuerst zu "WeeklySpecial.svelte"

1. Importiere "tick" aus "svelte"
2. Implementiere die asynchrone Funktion "showNotification", die die message aus "showLimitedEditionNotification" übergeben bekommt.
    Damit die Funktion korrekt funktioniert müssen zunächst folgende Variablen deklariert werden:
    - notificationMessage - hier soll die Nachricht übergeben werden, die letztendlich ausgegeben werden soll
    - notificationVisible - boolean, der steuert, ob die Nachricht angezeit wird oder nicht (siehe If-Bedingung zu notificationVisible)
3. Implementiere tick() um sicherustellen, dass vor dem Anzeigen der Benachrichtigung die Benutzeroberfläche und die Variable notificationVisible korrekt aktualisiert werden
4. Implementiere die Funktion setTimeout, die den boolean von notificationVisible ändert und dafür sorgt, dass die Nachricht nach ca. 3 Sekunden wieder verschwindet

```svelte
<script>

let notificationVisible = false;
let notificationMessage = "";

// Ergänze hier die fehlende async function showNotification

function showLimitedEditionNotification() {
  	showNotification("Unfortunately this Weeks Special-Sauce is already sold out☹️. Stay tuned for next week!");
    }

</script>

{#if notificationVisible}
<div class="notification">{notificationMessage}</div>
{/if}

<button on:click={showLimitedEditionNotification}>
This Weeks Special 🎉
</button>
``` 