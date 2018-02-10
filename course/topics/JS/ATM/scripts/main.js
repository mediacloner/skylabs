/*
Write a program that accepts a string and outputs
the smallest number of coins needed to make change,
using only quarters, dimes, nickels, and pennies.

//NOTE: coin values are:
//- quarter -> 25 cents
//- dime -> 10 cents
//- nickels -> 5 cents
//- penny -> 1 cent

Example:
input: 1.05
output: "4 Quarters, 1 Nickel"
*/
"use strict"

function getCash$(value) {

coinResult = {dollar: 0, quarter:0, dime:0, nickels:0, penny:0}
giveMeCoins = (value, callback) => {
    coins = [100, 25, 10, 5, 1];


}

getCoins  = (value, coin)=>{

    let coins = Math.trunc(value/coin)
    value = value%coin;

    return {coins: coins, rest: value};

}

return cash;
}

