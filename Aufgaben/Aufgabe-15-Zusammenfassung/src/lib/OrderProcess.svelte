<script>
  import { cart } from "./stores";
  import { createEventDispatcher } from "svelte";
  import Dialog, { Title, Content, Actions } from "@smui/dialog";
  import Button, { Label } from "@smui/button";

  // Ziel: Dispatche ein Event, wenn der Dialog geschlossen wird und wenn die Bestellung erfolgreich oder fehlgeschlagen ist
  // Aufgabe 6: Erstelle einen Event Dispatcher

  let orderPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Order successful!");
        // Aufgabe 6: dispatche ein Custom Event, wenn die Bestellung erfolgreich ist
        // Aufgabe 6: Setze den Warenkorb zurück, wenn die Bestellung erfolgreich ist
      } else {
        reject(new Error("Order failed. Please try again."));
        // Aufgabe 6: dispatche ein Custom Event, wenn die Bestellung fehlschlägt ist
      }
    }, 2000); // Simulate network delay
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

        "<Actions>
          <Button on:click={...}>
            <Label>Close</Label>
          </Button>
        </Actions>""
      -->
  </Content>
</Dialog>
