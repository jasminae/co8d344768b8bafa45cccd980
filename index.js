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