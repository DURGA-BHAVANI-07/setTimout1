// setTimeout(()=>{
//     alert("alert after 5 sec")
// },5000)
// console.log("bhavani")
// console.log("bhavani1")
// console.log("bhavani2")
// console.log("order placed")
// console.log("waiting for order")

// setTimeout(()=>{
   
//     // console.log("hello guys")
//     setTimeout(()=>{
//         alert("order caame!!!!")
//     },3000)
//      alert("wait for order");
// },10000)

// console.log("waiting for order")

// console.log("Starting multiple timers");

// setTimeout(() => {
//   console.log("Timer 1: Executes after 1 second");
// }, 1000);

// setTimeout(() => {
//   console.log("Timer 2: Executes after 3 seconds");
// }, 3000);

// setTimeout(() => {
//   console.log("Timer 3: Executes after 5 seconds");
// }, 5000);

// console.log("All timers are set");



// console.log("Sequence started");

// setTimeout(() => {
//   console.log("Message 1: Delayed by 1 second");

//   setTimeout(() => {
//     console.log("Message 2: Delayed by an additional 2 seconds");

//     setTimeout(() => {
//       console.log("Message 3: Delayed by an additional 3 seconds");
//     }, 3000);
//   }, 2000);
// }, 1000);


// Step 1: Buy ingredients
function buyIngredients(callback) {
    setTimeout(() => {
        console.log("Bought ingredients.");
        callback();
    }, 1000);
}

// Step 2: Prepare ingredients
function prepareIngredients(callback) {
    setTimeout(() => {
        console.log("Ingredients prepared.");
        callback();
    }, 1000);
}

// Step 3: Cook the meal
function cookMeal(callback) {
    setTimeout(() => {
        console.log("Meal cooked.");
        callback();
    }, 1000);
}

// Step 4: Serve the meal
function serveMeal(callback) {
    setTimeout(() => {
        console.log("Meal served. Enjoy!");
        callback();
    }, 1000);
}

// Callback hell with nested callbacks
buyIngredients(() => {
    prepareIngredients(() => {
        cookMeal(() => {
            serveMeal(() => {
                console.log("All tasks done!");
            });
        });
    });
});


