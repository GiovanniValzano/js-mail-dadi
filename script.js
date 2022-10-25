const mailList = ['giovanni@gmail.com', 'henri@gmail.com', 'domenico@gmail.com', 'francesco@gmail.com']
const accedi = document.getElementById("accedi")
const diceGame = document.getElementById("dice-game")
accedi.addEventListener('click', 
    function() {
        const mail = document.getElementById("mail").value;
        if(mailList.includes(mail)) {
                console.log("Email valida. Benvenuto!")
                diceGame.classList.remove('hidden')
        }
        else{
                console.log("Email non valida. Riprovare.")
                alert("Non puoi giocare se non sei iscritto!")
                diceGame.classList.add('hidden')
        }
    }
);

let myscore = document.getElementById("myscore")
let cpuscore = document.getElementById("cpuscore")
const roll = document.getElementById("roll");

roll.addEventListener('click',
    function() {
        const myDice = Math.floor(Math.random() * 6 ) + 1;
        console.log('Ti è uscito ' + myDice)
        myscore.innerHTML = myDice

        const cpuDice = Math.floor(Math.random() * 6 ) + 1;
        console.log('All\'avversario è uscito ' + cpuDice)
        cpuscore.innerHTML = cpuDice

        myscore.classList.add('diceborder')
        cpuscore.classList.add('diceborder')

        const message = document.getElementById("message")
        if(myDice > cpuDice){
            console.log('Hai vinto!')
            message.innerHTML = "Hai Vinto!"

        }
        else if(myDice < cpuDice){
            console.log('Hai perso!')
            message.innerHTML = "Hai Perso!"
        }
        else{
            console.log('Pareggio!')
            message.innerHTML = "Pareggio!"
        }
        });
