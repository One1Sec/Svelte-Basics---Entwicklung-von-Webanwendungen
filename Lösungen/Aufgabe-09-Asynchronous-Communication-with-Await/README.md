# Asynchronous communication with Await

## Überblick

In dieser Übung lernt ihr den Await-Block kennen sowie den event modifier once. Implementiert einen Button, der beim clicken die Bestellung abgibt und daraufhin diese verarbeitet wird. Die Verarbeitung benötigt ca 2 Sekunden. Damit die Bestellung nicht mehrfach verarbeitet wird soll ein Event Modifier verhindern, dass die Methode beim clicken mehrfach aufgerufen werden kann.

## Aufgaben

1. **Bestellung abegeben und Ergebnis anzeigen**: Erstelle einen Button, der die Methode processOrder aufruft und das Ergebnis in der Variable Promise speichert. Unter dem Button soll nach dem Klicken dann "Processing ..." angezeigt werde solange die Bestellung verarbeitet werden und anschließend das Ergebnis der Verarbeitung. Bei der Verarbeitung kann auch ein Error geworfen werden, der auf der Webseite dann in rot angezeigt werden soll. Beachte, dass vor dem Button-Klick kein weiterer Text (wie z.B. "undefined") angezeigt werden soll. 

2. **Extra Aufgabe - Verbesserungsmöglichkeit**: Beim Ausprobieren des Ergebnisses aus 1. wird schnell klar, dass der Event-modifier "once" nicht ideal für diese Aufgabe ist. Warum ist dies so? und wie könnte alternativer Code aussehen, der diese Problem nicht hat? (Die Methode processOrder soll nicht verändert werden und es muss auch keine noch unbekannten Svelte-Methode oder Syntax verwendet werden)

## Hinweis zur Aufgabe 2:
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
|
|
|
Das Problem liegt darin, dass durch "once" jeglicher Versuch die Methode processOrder durch den Button-Klick nach dem ersten Klick aufzurufen fehlschlägt, auch wenn diese Methode einen Fehler zurückgegeben hat. Wird also zufällig beim ersten Versuch die Bestellung zu verarbeiten ein Fehler zurückgegeben, kann nicht noch ein weiterer Versuch gestartet werden ohne die komplette Seite neu zu laden. Wie könnte man also den Code abändern, dass bei einem Fehler noch einmal ein Versuch gestartet werden kann?