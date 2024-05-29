/*document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");

    window.appendToDisplay = function(input) {
        if (input === 'c') {
            // Clear the display
            display.value = '';
        } else if (input === '=') {
            // Evaluate the expression
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        } else {
            // Append input to the display
            display.value += input;
        }
    };
});
*/
const display=document.getElementById("display");
function appendToDisplay(input){
    display.value +=input;
}
function cleardisplay(){
    display.value= "";
}
function calculate(){
    try{
        display.value =eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
function back(){
    display.value=display.value.slice(0,-1);
}
