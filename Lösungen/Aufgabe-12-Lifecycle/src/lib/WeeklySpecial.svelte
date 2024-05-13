<script>

import { tick } from 'svelte';
let notificationVisible = false;
let notificationMessage = "";

async function showNotification(message) {
    notificationMessage = message;
    notificationVisible = true;
    await tick(); // Warte auf das Ende des Mikro-Aktualisierungszyklus
    setTimeout(() => {
      notificationVisible = false; // Nach einer Verzögerung die Benachrichtigung ausblenden
    }, 3000);
  }

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

<style>
    button {
      width: 200px;
      padding: 10px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 4px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      margin-top: 25px
    }
    button:hover {
      background-color: #45a049;
    }
  </style>