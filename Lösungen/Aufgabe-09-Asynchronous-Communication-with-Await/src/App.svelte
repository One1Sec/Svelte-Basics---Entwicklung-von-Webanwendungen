<script>
  import { processOrder } from "./lib/utils";
  let promise;
</script>

<main>
  <h1>Mario & Luigi's Pizza</h1>

  <button on:click|once={ () => promise = processOrder() }>
    Complete order
  </button>
  {#if promise!=undefined}
  {#await promise}
	<p>Processing...</p>
  {:then promise}
    <p> {promise} </p>
  {:catch error}
    <p id = "error_msg">{error.message}</p>
  {/await}
  {/if}

</main>

  <!-- Mögliche Lösung von Aufgabe 2: -->
  <!--
    <script>
      import { processOrder } from "./lib/utils";
      let promise;
      let buttonEnabled = true
    </script>


    <main>
      <h1>Mario & Luigi's Pizza</h1>

      <button on:click = {() => {if(buttonEnabled){
          promise = processOrder()
          buttonEnabled = false
        }}}>
        Process Order
      </button>
      {#if promise!=undefined}
        {#await promise}
          <p>Processing...</p>
        {:then promise}
          <p> {promise} </p>
        {:catch error}
          <p id="error_msg">{error.message}</p>
          <img on:error={() => buttonEnabled = true} class="hidden" src="definetly not a correct url" />
        {/await}
      {/if}
    </main>
  -->

<style>
  .hidden{
    visibility: hidden;
  }
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
  #error_msg{
    color: crimson;
  }
</style>
