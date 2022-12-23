let secret = Math.trunc(Math.random()*(5))+1; //generates a random number between 1 and 5
let tries = 3;
let button = document.querySelector('.punda-guess'); //for blocking the input column 

// again button
document.querySelector('.punda-again').addEventListener('click', function()
{secret =  Math.trunc(Math.random()*(5))+1;
    document.querySelector('.punda-messages').textContent = 'keep trying da punda';
    message('start guessing da punda');
    button.disabled = false;
    tries = 3;})

// check button    
document.querySelector('.punda-check').addEventListener('click', function()
{   
    let guessPunda =(document.querySelector('.punda-guess').value);
    
    if (!guessPunda)
    {
        message('Punda gaali ah irukku da');
    }
    else if (guessPunda == secret)
    {
        message('Womma dei super da');
        tries = 0;
        document.querySelector('.punda-messages').textContent = 'CLICK AGAIN DA PUNDA';
    }
    else if (guessPunda != secret)
    {
        message('WRONG DA PUUUUUUUNNNNNNNNNDDDDDDDAAAAAAAAAA')
        tries = tries - 1;
        if (tries === 0)
        {
            document.querySelector('.punda-messages').textContent = 'GAME OVER DA PUNDA  CLICK AGAIN DA PUNDA MAVANEY';
            button.disabled = true;
        }
    }
})
function message(text)
{
    return document.querySelector('.punda-message').textContent = text;
};
  