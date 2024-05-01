// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Calista.E
// Created on: Apr 2024
// This file contains the JS functions for index.html
"use strict"

function calculate() {
  let usersize = document.getElementById("size-container").value
  let usertooping = document.getElementById("tooping-container").value

  let sizePrice = 0
  let toopingPrice = 0

  if (usersize == "Large") {
    sizePrice = 6.00
  } else if (usersize == "Extra Large") {
    sizePrice = 10.00
  } else {
    document.getElementById("size").innerHTML = "Error"
  }

  if (usertooping == "Onion") {
    toopingPrice = 1.00
  } else if (usertooping == "Tomatoes") {
    toopingPrice = 1.75
  } else if (usertooping == "Ham") {
    toopingPrice = 2.50
  } else if (usertooping == "Pineapple") {
    toopingPrice = 3.35
  }else {
    document.getElementById("size").innerHTML = "Error"
  }

  let totalPrice = sizePrice + toopingPrice

  document.getElementById("total").innerHTML =
    "Your total will be $" + totalPrice + "! Enjoy your pizza!"
}