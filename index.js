const buttons = document.querySelectorAll('.kamen');
const header = document.querySelector('h1');

const playTone = (button) => {
    const text = button.textContent;
    if (header) {
        header.textContent = text;
    }
    const zvuk = new Audio(`tony/${text}.mp3`);
    if (zvuk) {
        zvuk.play();
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playTone(button);
    })
});

document.body.addEventListener('keyup', (e) => {
    if (!e.code.includes('Digit')) {
        return;
    }
    const digit = Number(e.code[e.code.length - 1]);
    if (digit <= buttons.length) {
        playTone(buttons[digit - 1]);
    }
})