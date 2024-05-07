# Aufgabe 04 - Reactivity in Svelte

## Überblick

In dieser Übung implementiert ihr ein reaktives System in einer Svelte-Anwendung für Mario & Luigis Pizza. Das Ziel ist es, Pizza-Bestellungen zu verwalten und die Benutzeroberfläche reaktiv basierend auf Benutzerinteraktionen zu aktualisieren.

## Aufgaben

1. **Initialisieren der Pizzazählung**:Weise einer Variablen einen Wert zu, um die Anzahl der bestellten Pizzen zu verfolgen.
2. **Berechnen des Gesamtpreises**: Implementiere eine **decleration**, die den Gesamtpreis basierend auf der Anzahl der bestellten Pizzen berechnet.
3. **Erstellen einer Bestellfunktion**: Schreibe eine Funktion, um die Anzahl der Pizzen zu erhöhen, wenn eine Pizza bestellt wird.
4. **Behandeln von übermäßigen Bestellungen** : Füge eine **decleration** hinzu, um die Pizzazählung zurückzusetzen, wenn sie einen bestimmten Grenzwert überschreitet.

## Anweisungen

Folge den Kommentaren im bereitgestellten Code-Snippet, um die fehlenden Teile zu vervollständigen. Jede Aufgabe entspricht einem bestimmten Kommentar im Code.

```svelte
<script>
  // Aufgabe 1:
  let pizzaCount; // <-- Weise hier einen Wert zu, um die Anzahl der bestellten Pizzen zu verfolgen (Standardmäßig 0)

  // Aufgabe 2: Den Gesamtpreis mit einer declaration reaktiv berechnen (gehe davon aus, dass jede Pizza 10€ kostet)
  // <-- Dein Code hier

  function orderPizza() {
    // Aufgabe 3: Erhöhe hier die Pizzazählung
    // <-- Dein Code hier
  }

  // Aufgabe 4: Declaration hinzufügen, um übermäßige Pizzabestellungen zu handeln (Limit von 6) und die Anzahl zurücksetzen
  // <-- Dein Code hier

</script>

<main>
  <h1>Mario & Luigi's Pizza</h1>
  <button on:click={orderPizza}>Order Mario's Special</button>
  <p>Total Pizzas Ordered: {pizzaCount}</p>
  <p>Total Price: {totalPrice}€</p>
</main>
```
