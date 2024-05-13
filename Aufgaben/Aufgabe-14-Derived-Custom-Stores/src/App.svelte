<script>
	import { onDestroy } from 'svelte';
	import { elapsed } from './stores';
 	import { feedback, hinweis } from './store_bindings.js';
 	import { count } from './stores';

	function handleFeedback() {
    alert('Thank you for your feedback!');
	$feedback = '';
  	}

	function reminder() {
    alert('Are you still there?');
  	}
	const interval = setInterval(reminder, 20000);
	onDestroy(() => {
		clearInterval(interval);
	});
	
</script>

<main>
	<h1>Mario & Luigi's Pizza</h1>
	<h2>Almost there! </h2>
	<h3>Your order at Mario and Luigis's Pizza is almost complete. If you have any feedback for us, please let us know here:</h3>

	<p>{$hinweis}</p>
	<!-- im folgenden input-Element muss bind ergänzt werden -->
	<input value={$feedback} />

	<!-- dem folgenden Button muss on:click und eine Funktion ergänzt werden -->
	<button>
		"I am satisfied!"
	</button>

	<button on:click={handleFeedback}>
		Send
	</button>

	<h3>Do you need additional disposable cutlery for your order?</h3>
	<p>I need {$count} sets of cutlery.</p>

	<button on:click={count.increment}>+</button>
	<button on:click={count.reset}>reset</button>


	<p>This page has been open for {$elapsed} seconds. <br/>
		After 5 minutes the order process is automatically cancelled.
	</p>
</main>

<style>

	main {
	  font-family: "Comic Sans MS", cursive;
		 text-align: center;
		 background-color: #e3caa5;
		 padding: 50px;
	}
	button {
		background-color: #fc4100;
		color: white;
		border: none;
		padding: 10px 20px;
		cursor: pointer;
		border-radius: 5px;
		font-size: 16px;
  	}
 	button:hover {
    	background-color: #c40c0c;
 	}

</style>