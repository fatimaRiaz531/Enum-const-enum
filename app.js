"use strict";
// // enum
Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Yellow"] = 5] = "Yellow";
})(Color || (Color = {}));
let trafficLight = Color.Red;
// console.log(Color.Yellow);
if (trafficLight == Color.Red) {
    console.log("stop");
}
;
// 3 type
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Yellow"] = 4] = "Yellow";
})(Color2 || (Color2 = {}));
;
console.log(Color2.Green);
console.log(Color2[2]);
console.log(Color2["Green"]);
;
console.log(3 /* Color3.Green */);
console.log(Color3[3]);
console.log(3 /* Color3["Green"] */);
var CoffeeType;
(function (CoffeeType) {
    CoffeeType[CoffeeType["espresso"] = 0] = "espresso";
    CoffeeType[CoffeeType["cappuccino"] = 1] = "cappuccino";
    CoffeeType[CoffeeType["latte"] = 2] = "latte";
    CoffeeType[CoffeeType["americano"] = 3] = "americano";
})(CoffeeType || (CoffeeType = {}));
let fruits = ["Apple", "Mango", "Banana", "Orange"];
let i = 2;
fruits[i];
console.log(fruits[i]);
fruits[1];
fruits[2];
fruits[3];
for (let i = 0; i <= 3; i++) { // index k i k bad o hata k 1 lagya to 1 sy hi print hoga
    console.log(fruits[i]); // i ka mtlb 0 sy count hoga 
}
