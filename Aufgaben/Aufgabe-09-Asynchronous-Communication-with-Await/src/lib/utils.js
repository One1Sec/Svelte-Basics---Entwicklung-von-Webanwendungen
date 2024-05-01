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