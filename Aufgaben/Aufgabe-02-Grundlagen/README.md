# Aufgabe 02 Grundlagen

## Überblick

In dieser Aufgabe wollen die Überschrift und ein Bild für unsere Pizzaria Webseite erstellen.

## Aufgaben

0. **Vorbereitung**

Führt den Befehl "npm install" in dem Ordener "app" aus, um alle dependecies zu installieren. Falls ihr eure Änderungen direkt nach dem Speichern überprüfen wollt, könnt ihr auch jetzt schon den Schritt 3. ausführen ("npm run dev" im Terminal ausführen)

1. **Überschrift**

Erstellt innerhalb der script-tags eine Variable für den Namen unserer Pizzaria (z.B. Mario & Luigi's Pizza) und weise einer Überschrift im main-teil dessen Wert zu. Anschließend führe auf der Überschrift innerhalb der Überschrift-tags eine Methode aus, die die Überschrift visuell verändert 
(z.B. toUpperCase())

2. **Bild**

Erstelle unterhalb der Überschrift ein Bild, dessen Attribute ebenfalls über Variablen gesetzt werden sollen. Verwende dazu die bereits definierte quelle (src) in der Aufgabe. 

3. **Programm ausführen**

Führe das Programm mit "npm run dev" aus und überprüfe über den entsprechenden localhost por, ob die Überschrift so angezeigt wird wie erwartet und darunter ein passendes Bild zu sehen ist. 

## Code Vorlagen

```svelte
<script>
  let src = "images/image.png"
  // add variables here
 </script>
 
 
 <main>
     <!-- add h1 and img here -->
 </main>
```