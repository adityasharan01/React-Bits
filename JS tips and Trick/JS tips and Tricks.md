
## Quick way to mask numbers using slice and ES8 padStart method

``` const creditCard = "4111111111114321"; // 16 digit credit card number
const lastFourDigits = creditCard.slice(-4); // get last 4 digits

// prepend * to lastFourDigits to make length equal to creditCard number length
const maskedNumber = lastFourDigits.padStart(creditCard.length, '*');

console.log(lastFourDigits); // 4321
console.log(maskedNumber); // ************4321

**********************************************************************************************************************
Execute an event handler only once
By passing { once: true } as the third argument to the addEventListener method, the event handler function will be executed only once.
document.getElementById("btn").addEventListener("click",
  function () {
    console.log("Button clicked!");
  },
  { once: true }
);
**********************************************************************************************************************
if(fruit === 'apple' || fruit === 'orange' || fruit ===='grapes' )
{
 //eat your fruit 
}
//The pro way 
if(['apple','orange','grapes'].includes(fruit)) {
//do something
}
**********************************************************************************************************************
<input type="email" id="email" />

const emailInput = document.getElementById('email');

emailInput.addEventListener('keyup',function (event) {

if(event.getModifierState('CapsLock') )
  console.log('caps lock is onn');
 else
  console.log('caps lock is off');
  
});

**********************************************************************************************************************
```
