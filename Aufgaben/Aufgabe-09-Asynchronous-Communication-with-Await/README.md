# Asynchronous communication with Await

## Überblick

In dieser Übung lernt ihr den Await-Block kennen sowie den event modifier once. Implementiert einen Button, der beim clicken die Bestellung abgibt und daraufhin diese verarbeitet wird. Die Verarbeitung benötigt ca 2 Sekunden. Damit die Bestellung nicht mehrfach verarbeitet wird soll ein Event Modifier verhindern, dass die Methode beim clicken mehrfach aufgerufen werden kann.

## Aufgaben

1. **Bestellung abegeben und Ergebnis anzeigen**: Erstelle einen Button, der die Methode processOrder aufruft und das Ergebnis in der Variable Promise speichert. Unter dem Button soll nach dem Klicken dann "Processing ..." angezeigt werde solange die Bestellung verarbeitet werden und anschließend das Ergebnis der Verarbeitung. Bei der Verarbeitung kann auch ein Error geworfen werden, der auf der Webseite dann in rot angezeigt werden soll. Beachte, dass vor dem Button-Klick kein weiterer Text (wie z.B. "undefined") angezeigt werden soll. 

2. **Extra Aufgabe - Verbesserungsmöglichkeit**: Beim Ausprobieren des Ergebnisses aus 1. wird schnell klar, dass der Event-modifier "once" nicht ideal für diese Aufgabe ist. Warum ist dies so? und wie könnte alternativer Code aussehen, der diese Problem nicht hat? (Die Methode processOrder soll nicht verändert werden und es muss auch keine noch unbekannten Svelte-Methode oder Syntax verwendet werden)

## Hinweise zu den Aufgaben unter den Code Vorlagen

## Code Vorlagen

### App.svelte
```svelte
<script>
  import { processOrder } from "./lib/utils";
  let promise;
</script>

<main>
  <h1>Mario & Luigi's Pizza</h1>

  <!--Dein Code hier-->

</main>

<style>
  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: "Comic Sans MS", cursive;
    text-align: center;
    background-color: #e3caa5;
    padding: 50px;
  }
  button {
    cursor: pointer;
    border-radius: 0;
    min-width: 100px;
  }
</style>
```
### lib/utils.js
```svelte
export async function processOrder() {
    // Fetch a random number between 0 and 100
    // (with a delay, so that we can see it)
    await new Promise(resolve => setTimeout(resolve, 2000));
    let randomNumber = Math.random()
    if(randomNumber < 0.8){
        return "Your order has bee processed and will be deliverd to you soon"
    }else{
        throw new Error("Something went wrong, please try again")
    }  
}
```
## Hinweise zu den Aufgaben

Das Problem liegt darin, dass durch "once" jeglicher Versuch die Methode processOrder durch den Button-Klick nach dem ersten Klick aufzurufen fehlschlägt, auch wenn diese Methode einen Fehler zurückgegeben hat. Wird also zufällig beim ersten Versuch die Bestellung zu verarbeiten ein Fehler zurückgegeben, kann nicht noch ein weiterer Versuch gestartet werden ohne die komplette Seite neu zu laden. Wie könnte man also den Code abändern, dass bei einem Fehler noch einmal ein Versuch gestartet werden kann?