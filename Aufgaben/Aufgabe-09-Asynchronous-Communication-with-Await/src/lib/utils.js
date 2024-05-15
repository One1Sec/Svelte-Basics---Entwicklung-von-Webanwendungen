export async function processOrder() {
    // returns a message of the status of the completed process or an error with a delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    let randomNumber = Math.random()
    if(randomNumber < 0.8){
        return "Your order has bee processed and will be deliverd to you soon"
    }else{
        throw new Error("Something went wrong, please try again")
    }  
}