import simbols from './simbols.js';

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
let shiftValue = false;
let capsLockValue = false;
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
        button.setAttribute('data-code', simbols.en[i].code);   
        button.innerHTML = valueButton(i);

        if (button.innerHTML === 'Backspace' || button.innerHTML === 'CapsLock' || button.innerHTML === 'Tab' || button.innerHTML === 'Enter' ||  button.innerHTML === 'Shift' ||  button.innerHTML === 'Ctrl' ) {
            button.classList.add('button__keyboard_wide');
        } else if (simbols.en[i].code === 'Space') {
            button.classList.add('button__keyboard_extra-wide');
        } else if (button.innerHTML === 'Del') {
            button.classList.add('button__keyboard_delete');
        }

        keyboard.append(button);
        }
};

function valueButton(i) {
    if (lang === 'en') {  
        if (shiftValue === true || capsLockValue === true) {
            return simbols.en[i].shift;
        };   
        return simbols.en[i].key;
    } else {
        if (shiftValue === true || capsLockValue === true) {
            return simbols.ru[i].shift;
        };  
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
    const textarea = document.querySelector('.textarea');
    textarea.focus();
    
    let buttonActive = document.querySelector(`.button__keyboard[data-code=${event.code}]`);
    buttonActive.classList.add('active');    

    if ((event.code === 'ShiftLeft' && event.altKey) || (event.code === 'AltLeft' && event.shiftKey)) {
        toggleLang();
        restart();
    };

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight' || event.code === 'CapsLock') {
        if (capsLockValue === false) {
            shiftValue = true;
        } else {
            shiftValue = false;
        };        
        restart();
    };

    if (event.code === 'Tab') {
        event.preventDefault();
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, start) + '    ' + textarea.value.substring(end, textarea.value.length);
    };
});


document.addEventListener('keyup', (event) => {
    let buttonActive = document.querySelector(`.button__keyboard[data-code=${event.code}]`);
    buttonActive.classList.remove('active');

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        shiftValue = false;
        restart();
    };
});


document.addEventListener('mousedown', (event) => {     
    let buttons = document.querySelectorAll('.button__keyboard').forEach(function (element) {
        element.onclick = function(event) {
            const textarea = document.querySelector('.textarea');
            textarea.focus();

            let code = this.getAttribute('data-code');
            this.classList.add('active');
            
            let start = textarea.selectionStart;
            let end = textarea.selectionEnd;
            textarea.value = textarea.value.substring(0, start) + element.innerText + textarea.value.substring(end, textarea.value.length);
            console.log(event)
            if (code === 'ShiftLeft' || code === 'ShiftRight' || code === 'CapsLock') {
                if (capsLockValue === false) {
                    shiftValue = true;
                } else {
                    shiftValue = false;
                };        
                restart();
            };
        
            // if (event.code === 'Tab') {
            //     event.preventDefault();
            //     let start = textarea.selectionStart;
            //     let end = textarea.selectionEnd;
            //     textarea.value = textarea.value.substring(0, start) + '    ' + textarea.value.substring(end, textarea.value.length);
            // };
        };
    }); 
});

document.addEventListener('mouseup', (event) => {
    let buttons = document.querySelectorAll('.button__keyboard').forEach(function (element) {
        element.classList.remove('active');
    });
    

});