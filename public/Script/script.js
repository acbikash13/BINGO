
let doneButton = document.getElementById("done");
let fillButton = document.getElementById("fill");
let inputs = document.getElementsByTagName("input");
let audio = document.querySelector("#audioButton");

// Makes the input field read only.

$("input").prop('readonly', true);


var isDone= false;        
//isDone checks whether the elements are set to non editable or not.
//code to set the numbers when clicked on the done button. This will not let change the numbers 
// we will store the indexes of the crossed 
doneButton.addEventListener('click', done);
function done(){ 
    $(".fill").css("display","none");
    $(".done").css("display","none");

    doneButton.style.backgroundColor = 'red';
    isDone = true;
    for (let i= 0; i<25; i++){
        inputs[i].setAttribute('readonly', true);
    }
    console.log(isDone + " inside the blockj")
 
    // this block of code is to cross the numbers whenever the users clicks on the numbers,or we can just change the color of the blocks.
    // First we have to make sure, the numbers are set Done i.e they are read only afer we click the done button, or the Done button and we have to store the numbers click on some sort of grid.

console.log( isDone + " isdone out side the block")
if(isDone){ 
    for(let i = 0; i < inputs.length; i++){  
        inputs[i].addEventListener('click',function(){
                inputs[i].style.backgroundColor = 'purple';
                audio.playbackRate = 2;
                audio.play();
                
            });
    }
} }

// this block of code is to cross the numbers whenever the users clicks on the numbers,or we can just change the color of the blocks.
// First we have to make sure, the numbers are set Done, or the Done button is clicked.
//does not work when I check with isDone === true is not updated to true even though the required event is triggered.

// no since we have the numbers that are unique, when clicked on the 
fillButton.addEventListener('click',fill);
  
function fill(){
    axios.get('/game/getNumbers')
    .then(function(response){
        console.log(response);
        let listOfNumbers = response.data;
        console.log(listOfNumbers);
        console.log(typeof(listOfNumbers));
        for (let i= 0; i<25; i++){
            //inputs[i].value='0';
            inputs[i].setAttribute('value',listOfNumbers[i]);
        }
    }).catch(function(error){
        console.log(error);
        console.log("Error in fill function")
    })
}
