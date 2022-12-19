/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/

function myFunction() {

  fetch("https://some-random-api.ml/facts/cat")
    .then(response => response.json())
    .then(data => {
      
      console.log(data)
      document.getElementById("fact").textContent = data.fact
    })
}

function newTheme() {
  
  var element = document.body;
  element.classList.toggle("newTheme");
  
      //  document.body.classList.add("newTheme")

}