<script>
    import { pizzaGoombaCount } from "./stores";
    import { pizzaYoshiCount } from "./stores";

    import { yoshiPizza } from "./stores";
    import {goombaPizza} from "./stores"

    let pizzaGoombasSpecialCount

    pizzaGoombaCount.subscribe((value) => {
		pizzaGoombasSpecialCount = value;
	});

</script>

<div>
    {#if pizzaGoombasSpecialCount > 0}
    <p>{pizzaGoombasSpecialCount} * {goombaPizza}</p>
    {/if}
    {#if $pizzaYoshiCount > 0}
    <p>{$pizzaYoshiCount} * {yoshiPizza}</p>
    {/if}
</div>

<style>

</style>