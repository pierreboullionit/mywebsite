const numberDisplay = document.createElement('div');
numberDisplay.id = 'number-display';
numberDisplay.style.fontSize = '2em';
document.body.appendChild(numberDisplay);

const messageContainer = document.getElementById('message-container');

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const digit = this.textContent;
        
        const message = getRandomMessage();
        
        // Change background color for specific digits
        if (digit === '1' || digit === '3' || digit === '5' || digit === '7' || digit === '9') {
            document.body.style.backgroundColor = '#7021bf';
        } else {
            document.body.style.backgroundColor = '';
        }

        // Display the message in the message-container div
        messageContainer.textContent = message;
    });
});

function getRandomMessage() {
    const messages = [
        "Believe in yourself and all that you are.",
        "You have within you greatness, but it takes discipline to develop it.",
        "It always seems impossible until it’s done.",
        "You miss 100% of the shots you don’t take.",
        "You have the power to shape your future.",
        "Every step forward is progress, no matter how small.",
        "Your dreams are waiting for you to take action.",
        "Believe in yourself because the world will let you down first.",
        "You are stronger than you think.",
        "Success comes from effort and persistence.",
        "Failure is just a stepping stone to success.",
        "The only limits we have are the ones we set ourselves.",
        "Never give up, for great things take time.",
        "Your uniqueness is your greatest strength.",
        "You are capable of achieving more than you imagine.",
        "Today is the first day of the rest of your life.",
        "Focus on what you can control.",
        "Challenges are opportunities for growth and learning.",
        "Trust in the process, even when it seems slow.",
        "Your mindset determines your altitude.",
        "You deserve to be happy and fulfilled.",
        "Small actions lead to big changes.",
        "Your attitude is your greatest asset.",
        "You are not defined by your failures.",
        "The future holds infinite possibilities, only you can make them real.",
        "Confidence comes from believing in yourself.",
        "Every day is a new beginning.",
        "You have the power to change your life with small choices.",
        "Your value is not defined by external validation.",
        "Persistence leads to success when nothing else works.",
        "Success is sweeter when you earn it through hard work.",
        "Trust yourself, for you know more than you think.",
        "The path forward may be unclear, but the journey is worth taking.",
        "You are enough exactly as you are.",
        "Growth comes from embracing challenges.",
        "Your effort today will pay off tomorrow.",
        "Never underestimate the power of your actions.",
        "Every setback is a setup for an upturn.",
        "You are capable of more than you can imagine.",
        "The only way to do great work is to love what you do.",
        "Your mindset shapes your reality.",
        "Trust in yourself, and the universe will trust in you too.",
        // Add more inspirational messages here...
    ];

    return messages[Math.floor(Math.random() * messages.length)];
}
