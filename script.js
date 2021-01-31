const BTNS = document.querySelectorAll('button');

BTNS[1].addEventListener("click", doorTransition);

function doorTransition() {
    const DOOR = document.getElementById('door');
    DOOR.classList.add('closeDoor');
    setTimeout(() => DOOR.className = '', 650);
}