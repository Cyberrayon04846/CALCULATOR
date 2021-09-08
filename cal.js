;
buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

var screenValue = ``;
// screenValue.toArra ;
console.log(typeof screenValue)

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == `X`) {
            buttonText = `*`;
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == `=`) {
            screen.value = screen.value + `=` + eval(screenValue);


        }
        else if (buttonText == `C`) {

            screenValue = ``;
            screen.value = screenValue;



        }
        else if (buttonText == `B`){
           
                
              screenValue.slice(0,-1);
              screen.value=screenValue;
          
                
            
            
        }


        else {
            screenValue += buttonText;
            screen.value = screenValue;

        }


    })
}