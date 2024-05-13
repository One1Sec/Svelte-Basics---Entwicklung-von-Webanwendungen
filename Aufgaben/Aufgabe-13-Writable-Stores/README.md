# Writable Stores

## Überblick

Diese Aufgabe beschäftigt sich mit writable und readable stores. Diese dienen dazu schreibbare und oder lesebare Veränderliche in ein Datei zu deklarieren und in verschiedenen Komponenten nutzbar zu machen. Im Rahmen unseres Pizza-Services, soll die Anzahl an bestellten Pizzen sowie eine aktuelle Uhrzeit in stores ausgelagert und verschieden verwendet werden.

## Aufgaben

1. **Writable Stores für die Pizzabestellung**

Deklariere in der Datei stores.js zwei Variablen als Stores, die die Anzahl der jeweiligen bestellten Pizzaart speichern.

2. **Pizza der Bestellung hinzufügen**

Implementiere die zwei Methoden incrementGoombaCount und incrementYoshiCount aus der Komponente Menu.svelte, die den Wert des jeweiligen stores um 1 erhöhen sollen.

3. **Bestellung anzeigen**

Nutze die Komponente OrderSummary.svelte, um die aktuelle Bestellung anzuzeigen (Anzahl und Art der bestellten Pizzas). Verwende dazu die subscribe Methode des Stores für die Pizzaart "Goomba's Special", für "Yoshi's Veggi" soll auto-subscription verwendet werden. 

4. **Bestellung abbrechen**

Implementiere die CancelOrder Funktion aus CancelOrder.svelte, sodass die Bestellung zurückgesetzt wird. 

5. **Readable Store für die aktuelle Zeit**

Ändere in stores.js die Konstante time zu einem readable store ab, der immer die aktuelle Zeit beinhaltet. Zeige die Zeit in der OpeningHours Komponente an.
