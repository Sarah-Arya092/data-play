"use strict";

fetch('../assets/sleep.json')
 .then((response) => {
     console.log('Success!');
 }, (response) => {
    console.log('Error :(');
 });

