<script>
    import { pizzaYoshiCount } from "./stores";
    import { pizzaGoombaCount } from "./stores";
    function cancelOrder(){
        pizzaGoombaCount.set(0)
        pizzaYoshiCount.set(0)
    }
</script>

<div>
    <button on:click={cancelOrder}>Cancel order</button>
</div>