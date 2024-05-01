// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Calista.E
// Created on: Apr 2024
// This file contains the JS functions for index.html
"use strict"

function calculate() {
    let size = document.getElementById("size").value
    let topping = document.getElementById("topping").value

    let sizePrice = 0
    let toppingPrice = 0

    if (size == "Large") {
        sizePrice = 6.00;
    } else if (size == "Extra Large") {
        sizePrice = 10.00;
    } else {
        document.getElementById("size").innerHTML = "Error";
    }

    if (usertopping == "onion") {
        toppingPrice = 1.00;
    } else if (usertopping == "tomatoes") {
        toppingPrice = 1.75;
    } else if (usertopping == "ham") {
        toppingPrice = 2.50;
    } else if (usertopping == "pineapple") {
        toppingPrice = 3.35;
    }else {
        document.getElementById("size").innerHTML = "Error";
    }

    let totalPrice = ( sizePrice + toppingPrice ) * 0.13 + ( sizePrice + toppingPrice );

    document.getElementById("total").innerHTML =
    "Your total will be $" + totalPrice + "! Enjoy your pizza!"
}