
// // enum

enum Color{
    Red ,
    Green=4,
    Yellow = 5,
}

 let trafficLight:Color =Color.Red
// console.log(Color.Yellow);
if(trafficLight== Color.Red){
    console.log("stop")};

// 3 type
enum Color2{Red =1, Green= 2, Yellow=4};


console.log(Color2.Green)
console.log(Color2[2])
console.log(Color2["Green"])


const enum Color3{Red =1, Green= 3, Yellow=4};


console.log(Color3.Green)
console.log(Color3["3"])
console.log(Color3["Green"])

enum CoffeeType{
    espresso,
    cappuccino,
    latte,
    americano
}


let fruits= ["Apple", "Mango", "Banana","Orange"];

let i= 2
fruits[i]
console.log(fruits[i])
fruits[1]
fruits[2]
fruits[3]


 for (let i =0; i  <= 3; i ++) {         // index k i k bad o hata k 1 lagya to 1 sy hi print hoga
     console.log(fruits[i]);          // i ka mtlb 0 sy count hoga 
    }
