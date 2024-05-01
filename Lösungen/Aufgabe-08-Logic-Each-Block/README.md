# Aufgabe 08 - Logik-Each-Block

## Überblick

Diese Aufgabe soll dir helfen, den `{#each}`-Block von Svelte zu üben, um Listen dynamisch zu rendern statt sie zu hardcoden. Du wirst eine statische Darstellung einer Pizzaliste in eine dynamische Liste basierend auf einem Array von Pizzen umwandeln.

## Ziele

- Implementiere den `{#each}`-Block, um Listenpunkte dynamisch zu rendern.
- Verstehe und wende die Verwendung von Schlüsseln an, um das Rendern zu optimieren.

## Aufgaben

### Aufgabe 1: Implementiere den `{#each}`-Block für die Pizzen

Deine Aufgabe ist es, eine gegebene statische Liste in eine dynamische Liste mithilfe des `{#each}`-Blocks umzuarbeiten. Du sollst das Array `pizzas` verwenden, um Listenpunkte dynamisch zu erstellen.

### Aufgabe 2: Implementiere den `{#each}`-Block für die Warenkorbpositionen

Überarbeite den Warenkorb-Zusammenfassungsbereich, um Elemente dynamisch mithilfe des `{#each}`-Blocks zu rendern, wobei der Fokus auf Pizzen liegt, die eine Bestellmenge größer als null haben.

### Aufgabe 3: Füge Schlüssel zu den `{#each}`-Blöcken hinzu

Ändere sowohl die `{#each}`-Blöcke für Pizzen als auch für Warenkorbpositionen so ab, dass `keys` eingefügt werden. Verwende die eindeutigen Id's für Pizzen, um sicherzustellen, dass Svelte jedes DOM-Element effizient verfolgen kann. Diese Praxis reduziert potenzielle Fehler und verbessert die Leistung deiner Anwendung sobald es um größere und vielleicht auch dynamische Daten geht.

## Anweisungen

Hier ist die Vorlage für deine `App.svelte`. Folge den Kommentaren im Code, um die Aufgaben zu vervollständigen.

```svelte
<script>
  let pizzas = [
    { id: 1, name: "Goomba's Special", emoji: "🍄", quantity: 0 },
    { id: 2, name: "Yoshi's Veggie", emoji: "🦕", quantity: 0 },
    { id: 3, name: "Bowser's Blaze", emoji: "🐢", quantity: 0 },
    { id: 4, name: "Peach's Royal", emoji: "👑", quantity: 0 },
  ];

  // Funktionen zum Ändern der Pizza-Mengen sind bereits implementiert
  function addToCart(pizza) {
    pizza.quantity += 1;
    pizzas = pizzas.slice(); // Triggers reactivity
  }

  function removeFromCart(pizza) {
    if (pizza.quantity > 0) {
      pizza.quantity -= 1;
      pizzas = pizzas.slice(); // Triggers reactivity
    }
  }
  // Declaration, um nur ausgewählte Pizzen anzuzeigen
  $: cartItems = pizzas.filter(p => p.quantity > 0);
</script>

<main>
  <h1>Mario & Luigi's Pizza Ordering System</h1>
  <ul>
     <!-- Aufgabe 1: Ersetze statische Listenpunkte durch dynamische Punkte mithilfe von `{#each}` -->
  </ul>
  <div class="cart">
    <h2>Your Cart:</h2>
     <!-- Aufgabe 2: Verwende `{#each}` um die Warenkorb-Zusammenfassung dynamisch zu rendern -->
  </div>
    <!--Aufgabe 3: füge in jedem `{#each}` block ein key hinzu, um sicherzustellen, dass Svelte jedes DOM-Element effizient verfolgen kann-->
</main>
```
