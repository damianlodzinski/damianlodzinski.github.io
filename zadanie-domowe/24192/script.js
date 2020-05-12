'use strict'




$('button').on({
  'click': function() {
      $.getJSON (
          "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
          function(json) {
              $('body').prepend(`<div><li>Imię: ${json.imie}</li> 
                      <li>Nazwisko: ${json.nazwisko}</li>
                      <li>Zawod: ${json.zawod}</li>
                      <li>Firma: ${json.firma}</li></div>`)
          
          }
      )
  }
})