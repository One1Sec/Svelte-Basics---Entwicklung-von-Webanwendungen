# Aufgabe 5 - Warenkorb mit Arrays

## Überblick

Diese Übung kombiniert vorangegangene Übungen mit Arrays. Ihr implementiert die Grundlagen für den Warenkorb der Pizzaria und überarbeitet das Design der Seite. Es sollen zwei verschiedene Pizzen im Angebot sein, die über einen Klick in den Warenkorb aufgenommen werden. Neben dem Inhalt, soll auch der Gesamtpreis angegeben werden. Zuletzt soll für den Warenkorb auch noch ein Limit gesetzt werden.

Am Ende soll die Seite in etwa so aussehen: 
![Alt text](public/images/solution_screenshot.png?raw=true "Solution screenshot")

## Aufgaben

1. **Pizza - Objekte und Array**: Erstelle zwei Pizzaobjekte (standard javascript) für die gegebenen Variablen. Die Objekte sollen eine id, den Namen der Pizza sowie einen Preis enthalten. Implementiere anschließend die Funktion addPizzaToCart, die dem Einkaufswagen-array eine Pizza hinzufügen soll.

2. **Pizza zum Warenkorb hinzufügen**: Erstelle für beide Pizzas je einen Button, der beim betätigen dem Array die entsprechende Pizza hinzufügen soll.

3. **Gesamtpreis der Bestellung**: Verwende die Variable totalPrice und nutze reactive declaration, um den Gesamtpreis dynamisch zu generieren basierend auf dem Inhalt des Warenkorbes. Verwende ein passendes html tag, um das Ergebnis anzuzeigen

4. **Bestellungsinhalt anzeigen**: Verwende die Variable pizzaList und nutze reactive declaration, um den Inhalt der Bestellung dynamisch zu generieren. Es soll wie im Screenshot gezeigt die Anzahl und Art der bestellten Pizzen nacher auf der Webseite angezeigt werden. Verwende für die Anzeige nur die eine String-Variable und achte darauf, dass nicht bestellte Pizzas (Pizza-Count = 0) auch nicht aufgelistet werden sollen, und falls beide Arten von Pizzas bestellt wurden, diese untereinander angezeigt werden.
Für diese und die nächste Aaufgabe bietet es sich an die beiden Variable pizzaJoshiCount und pizzaGoombaCount reaktiv zu deklarieren. (Es geht auch einfacher für diese Aufgabe aber zu Übungszwecken gerne basierend auf dem Warenkorb die variablen dynamisch ändern) 

5. **Warnung und Warenkorb-Limit**: Ändere den Warenkorb so ab, dass nur noch maximal 10 Pizzas ausgewählt werden können. Wird das Limit erreicht soll immer wenn versucht wird eine neue Pizza dem Warenkorb hinzuzufügen, ein Pop-up erscheinen, das dem User das Limit verdeutlicht.

## Hinweise zu den Aufgaben bei Bedarf weiter unten

|
|
|
|
|
|
|
|
|
|
|
|
|
|
|

1. **Pizza - Objekte und Array**: Objekte werden in javascript folgendermaßen erstellt: 
objectName = {attribute: value, attribute2 : value2}

2. **Pizza zum Warenkorb hinzufügen**: Verwende das on:clik attribut , dass die zugehörige Methode aufruft. Dadurch, dass die Methode einen Parameter benötigt, müssen Arrowfunctions innerhalb einer {} benutzt werden

3. **Gesamtpreis der Bestellung**: Verwende die standard methode array.reduce((acc,arrayelement)=>...,startwert) . acc für den Akkumulator, der den kumulierten Wert während der Reduzierung des Arrays darstellt. Er wird anfangs mit "startwert" initialisiert und kann bei jedem Durchlauf der Reduzierung angepasst werden.  

4. **Bestellungsinhalt anzeigen**: Verwende die Variablen pizzaJoshiCount und pizzaGoombaCount. Für das Zählen kann wie bei 3. die array.reduce Methode verwendet werden. Nicht vergessen wenn: "=> { dein Code}" muss in "dein Code" auch ein return sein. 
Um die Pizza liste dynamisch in nur einem String zu generieren, kann der Conditional-operator (?) verwendet werden. 
    --> Bedingung? wertWennTrue : wertWennFalse 
Um die Pizzatypen untereinander anzuzeigen, wenn beide in der Bestellung enthalten sind, kann der html tag <br> (<!--br-->) im String verwendet werden.

