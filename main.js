$(document).ready(function(){
  $('form#sortForm').on('submit', function(event){
    event.preventDefault();
    let inputArray = randomArray();
    let sortedArray = sortingModule.sort(inputArray);
    

    //Display on screen
    $('div#inputArray').html(inputArray.join(', '));
    $('div#sortedArray').html(sortedArray.join(', '));
  });
});


function randomArray() {
  let randomArray = [];

  for(let i = 0; i < 10; i++){
    let value = Math.floor((Math.random() * 50) + 1);
    randomArray.push(value);
  }

  return randomArray;
}