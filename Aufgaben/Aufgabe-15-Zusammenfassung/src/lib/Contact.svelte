<script>
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";
  import Button from "@smui/button";
  import Slider from "@smui/slider";

  // Ziel: Verwende Bindings, um das Feedback-Formular mit den Variablen zu verknüpfen


  let message = ""; // Bindings: binde diese Variable mit einem Textfeld

  let ratings = [
    { id: "delivery", name: "Delivery Time", value: 3 },
    { id: "taste", name: "Taste", value: 3 },
    { id: "freshness", name: "Freshness", value: 3 },
    { id: "satisfaction", name: "General Satisfaction", value: 3 },
  ];
  // Event-Handler für die Änderung der Bewertung
  function handleRatingChange(event, ratingId) {
    const index = ratings.findIndex((rating) => rating.id === ratingId);
    ratings[index].value = event.detail;
  }
</script>

<div class="container">
  <h1>Rate Us</h1>
  <p>We value your feedback. Please rate us on the following aspects:</p>

  <form class="feedback-form">
    <div class="field-group">
      <!-- Aufgabe 5: Verwende bind:, um die message Variable zu binden -->
      <Textfield
        textarea
        style={"width: 100%;"}
        value={message}
        label="Your Feedback"
      >
        <HelperText slot="helper">
          Remember, Mario and Luigi know where you live.
        </HelperText>
      </Textfield>
    </div>

    <div class="field-group">
      <p style="text-align: center; font-weight: bold;">
        Rating System: 1 (Not Good) - 5 (Fantastic)
      </p>
      {#each ratings as rating (rating.id)}
        <div class="rating">
          <span style="width: 100px; margin-left:15px">
            {rating.name}:
          </span>
          <span>{rating.value}</span>
          <!-- Aufgabe 5: Verwende bind, um den Wert der Bewertung zu binden -->
          <!-- Aufgabe 5: Füge den Event-Handler im on:change hinzu -->
          <Slider
            style="max-width: 200px; flex-grow: 1;"
            value={rating.value}
            on:change={(event) => console.log("Hinweis: handleRatingChange")}
            min={1.0}
            max={5.0}
          />
        </div>
      {/each}
    </div>
    <Button
      on:click={(e) => {
        e.preventDefault();
        alert("Thanks for your feedback");
      }}
    >
      Submit
    </Button>
  </form>

  <p>Your message:</p>
  <div class="message">
    <!-- Aufgabe 5: Zeige die gebundene message Variable an -->
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: #f8f8f8;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .feedback-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
  }

  .field-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  .rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .message {
    background-color: white;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    min-height: 50px;
  }
</style>
