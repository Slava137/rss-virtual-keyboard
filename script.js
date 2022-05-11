import simbols from './simbols.js';
// alert (`Извините, но я ещё не успел доделать этот таск!!\nПрошу по возможности проверить работу в последний день или\n оставить в комментариях к проверке свой discord для связи. \nКак только я доделаю достаточно функционал, я вам напишу. \nА пока можете расслабиться и выпить чашечку чая :) Заранее спасибо`)

let lang =  localStorage.getItem('lang') || 'en';

function setLocalStorage() {
    localStorage.setItem('lang', lang);
};
window.addEventListener('beforeunload', setLocalStorage);

const body = document.querySelector('body');
let container = document.createElement('div');
container.classList.add('container');
body.append(container);

let title = document.createElement('h1');
title.innerHTML = 'RSS Виртуальная клавиатура';
container.append(title);

let textarea = document.createElement('textarea');
textarea.classList.add ('textarea');
container.append(textarea);

let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
container.append(keyboard);
addButtons();

let manual = document.createElement('p');
manual.innerText = 'Для переключения языка используйте комбинацию: левый alt + левый shift';
container.append(manual);

let remark = document.createElement('p');
remark.innerText = 'Клавиатура создана в ОС Windows';
container.append(remark);



function addButtons() {
    for (let i = 0; i < simbols.en.length; i++) {        
        let button = document.createElement('button');
        button.classList.add('button__keyboard');     
        button.innerHTML = valueButton(i);

        if (button.innerHTML === 'Backspace' || button.innerHTML === 'CapsLock' || button.innerHTML === 'Tab' || button.innerHTML === 'Enter' ||  button.innerHTML === 'Shift' ||  button.innerHTML === 'Ctrl' ) {
            button.classList.add('button__keyboard_wide');
        } else if (simbols.en[i].class === 'button__space') {
            button.classList.add('button__keyboard_extra-wide');
        } else if (button.innerHTML === 'Del') {
            button.classList.add('button__keyboard_delete');
        }

        keyboard.append(button);
        }
};

function valueButton(i) {
    if (lang === 'en') {        
        return simbols.en[i].key;
    } else {
        return simbols.ru[i].key;
    };
};

function toggleLang() {
    if (lang === 'en') {
      lang = 'ru';
    } else {
      lang = 'en';
    };
    localStorage.setItem('lang', lang);
};

function restart() {
    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < simbols.en.length; i++) {
      buttons[i].innerHTML = valueButton(i);
    };
};

document.addEventListener('keydown', (event) => {
    const textarea = document.querySelector('textarea');
    textarea.focus();

    const buttons = document.querySelector('keyboard');
    if ((event.code === 'ShiftLeft' && event.altKey) || (event.code === 'AltLeft' && event.shiftKey)) {
        toggleLang();
        restart();
    };
});