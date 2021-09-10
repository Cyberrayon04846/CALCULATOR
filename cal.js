buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

var screenValue = ``;
// screenValue.toArra ;
console.log(typeof screenValue)

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log(typeof buttonText);

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
        else if (buttonText == `B`) {
            screenValue = screen.value;
            screen1 = screenValue;
            screen2 = screen1.slice(0, -1);
            screen.value = screen2;



        }


        else {
            screenValue += buttonText;
            screen.value = screenValue;

        }


    })
}