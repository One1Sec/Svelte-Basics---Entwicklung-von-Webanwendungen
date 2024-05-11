<script>
    import { pizzaGoombaCount } from "./stores";
    import { pizzaYoshiCount } from "./stores";

    import { yoshiPizza } from "./stores";
    import {goombaPizza} from "./stores"

    const srcGoombaPizzaImg = "images/Goomba's Special.jpeg"
    const altGoombaPizzaImg = "Pizza: Goomba's Special"

    const srcYoshiPizzaImg = "images/Yoshi's Veggi.webp"
    const altYoshiPizzaImg = "Pizza: Yoshi's Veggi"

    function incrementGoombaCount(){
        pizzaGoombaCount.update((count)=>count +1)
    }

    function incrementYoshiCount(){
        pizzaYoshiCount.update((count)=>count +1)
    }
</script>

<div id = "menu">
    <div class="left">
        <img src = {srcGoombaPizzaImg} alt={altGoombaPizzaImg}>
        <p>{goombaPizza}</p>
        <button on:click = {incrementGoombaCount}>Add to cart</button>
    </div>
    <div class ="right">
        <img src = {srcYoshiPizzaImg} alt={altYoshiPizzaImg}>
        <p>{yoshiPizza}</p>
        <button on:click = {incrementYoshiCount}>Add to cart</button>
    </div>
</div>

<style>
    img {
        width: 300px;
        height: 200px;
    }

    #menu {
        display: flex;
        justify-content: space-between;
    }

    #menu .left,
    #menu .right {
        background-color: white;
        padding: 20px;
        text-align: center;
        flex-basis: calc(50% - 10px); /* Berechne die Breite der Container */
        border-radius: 10px;
    }

    #menu .right {
        margin-left: 20px; /* Füge den Abstand zwischen den Containern hinzu */
    }
</style>