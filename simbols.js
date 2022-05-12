const simbols = {
    'en': [
        {
            key: '`',
            shift: '~',
            code: 'Backquote',             
        },
        {
            key: '1',
            shift: '!',
            code: 'Digit1',            
        },
        {
            key: '2',
            shift: '@',
            code: 'Digit2',             
        },
        {
            key: '3',
            shift: '#',
            code: 'Digit3',             
        },
        {
            key: '4',
            shift: '$',
            code: 'Digit4',             
        },
        {
            key: '5',
            shift: '%',
            code: 'Digit5',             
        },
        {
            key: '6',
            shift: '^',
            code: 'Digit6',             
        },
        {
            key: '7',
            shift: '&',
            code: 'Digit7',             
        },
        {
            key: '8',
            shift: '*',
            code: 'Digit8',             
        },
        {
            key: '9',
            shift: '(',
            code: 'Digit9',             
        },
        {
            key: '0',
            shift: ')',
            code: 'Digit0',             
        },
        {
            key: '-',
            shift: '_',
            code: 'Minus',             
        },
        {
            key: '=',
            shift: '+',
            code: 'Equal',             
        },
        {
            key: 'Backspace',
            shift: 'Backspace',
            code: 'Backspace',            
        },
        {
            key: 'Tab',
            shift: 'Tab',
            code: 'Tab',          
        },
        {
            key: 'q',
            shift: 'Q',
            code: 'KeyQ',             
        },
        {
            key: 'w',
            shift: 'W',
            code: 'KeyW',             
        },
        {
            key: 'e',
            shift: 'E',
            code: 'KeyE',             
        },
        {
            key: 'r',
            shift: 'R',
            code: 'KeyR',             
        },
        {
            key: 't',
            shift: 'T',
            code: 'KeyT',             
        },
        {
            key: 'y',
            shift: 'Y',
            code: 'KeyY',             
        },
        {
            key: 'u',
            shift: 'U',
            code: 'KeyU',             
        },
        {
            key: 'i',
            shift: 'I',
            code: 'KeyI',             
        },
        {
            key: 'o',
            shift: 'O',
            code: 'KeyO',             
        },
        {
            key: 'p',
            shift: 'P',
            code: 'KeyP',             
        },
        {
            key: '[',
            shift: '{',
            code: 'BracketLeft',             
        },
        {
            key: ']',
            shift: '}',
            code: 'BracketRight',             
        },
        {
            key: '\\',
            shift: '|',
            code: 'Backslash',             
        },         
        {
            key: 'CapsLock',
            shift: 'CapsLock',
            code: 'CapsLock',            
        },
        {
            key: 'a',
            shift: 'A',
            code: 'KeyA',             
        },
        {
            key: 's',
            shift: 'S',
            code: 'KeyS',             
        },
        {
            key: 'd',
            shift: 'D',
            code: 'KeyD',             
        },
        {
            key: 'f',
            shift: 'F',
            code: 'KeyF',             
        },
        {
            key: 'g',
            shift: 'G',
            code: 'KeyG',             
        },
        {
            key: 'h',
            shift: 'H',
            code: 'KeyH',             
        },
        {
            key: 'j',
            shift: 'J',
            code: 'KeyJ',             
        },
        {
            key: 'k',
            shift: 'K',
            code: 'KeyK',             
        },
        {
            key: 'l',
            shift: 'L',
            code: 'KeyL',             
        },
        {
            key: ';',
            shift: ':',
            code: 'Semicolon',             
        },
        {
            key: "'",
            shift: '"',
            code: 'Quote',             
        },
    
        {
            key: 'Enter',
            shift: 'Enter',
            code: 'Enter',            
        },
        {
            key: 'Shift',
            shift: 'Shift',
            code: 'ShiftLeft',            
        },
        {
            key: 'z',
            shift: 'Z',
            code: 'KeyZ',             
        },
        {
            key: 'x',
            shift: 'X',
            code: 'KeyX',             
        },
        {
            key: 'c',
            shift: 'C',
            code: 'KeyC',             
        },
        {
            key: 'v',
            shift: 'V',
            code: 'KeyV',             
        },
        {
            key: 'b',
            shift: 'B',
            code: 'KeyB',             
        },
        {
            key: 'n',
            shift: 'N',
            code: 'KeyN',             
        },
        {
            key: 'm',
            shift: 'M',
            code: 'KeyM',             
        },
        {
            key: ',',
            shift: '<',
            code: 'Comma',             
        },
        {
            key: '.',
            shift: '>',
            code: 'Period',             
        },
        {
            key: '/',
            shift: '?',
            code: 'Slash',             
        },
        {
            key: '&#9650;',
            shift: '&#9650;',
            code: 'ArrowUp',             
        },
        {
            key: 'Shift',
            shift: 'Shift',
            code: 'ShiftRight',             
        },
        {
            key: 'Ctrl',
            shift: 'Ctrl',
            code: 'ControlLeft',            
        },
        {
            key: 'Win',
            shift: 'Win',
            code: 'Win',             
        },
        {
            key: 'Alt',
            shift: 'Alt',
            code: 'AltLeft',             
        },
        {
            key: '&#8212;',
            shift: '&#8212;',
            code: 'Space',           
        },
        {
            key: 'Alt',
            shift: 'Alt',
            code: 'AltRight',             
        },
        {
            key: 'Ctrl',
            shift: 'Ctrl',
            code: 'ControlRight',            
        },
        {
            key: '&#9668;',
            shift: '&#9668;',
            code: 'ArrowLeft',             
        },
    
        {
            key: '&#9660;',
            shift: '&#9660;',
            code: 'ArrowDown',             
        },
        {
            key: '&#9658;',
            shift: '&#9658;',
            code: 'ArrowRight',             
        },
        {
            key: 'Del',
            shift: 'Del',
            code: 'Delete',             
        },
    ],
    'ru': [
        {
            key: 'ё',
            shift: 'Ё',
            code: 'Backquote',             
        },
        {
            key: '1',
            shift: '!',
            code: 'Digit1',             
        },
        {
            key: '2',
            shift: '"',
            code: 'Digit2',             
        },
        {
            key: '3',
            shift: '№',
            code: 'Digit3',             
        },
        {
            key: '4',
            shift: ';',
            code: 'Digit4',             
        },
        {
            key: '5',
            shift: '%',
            code: 'Digit5',             
        },
        {
            key: '6',
            shift: ':',
            code: 'Digit6',             
        },
        {
            key: '7',
            shift: '?',
            code: 'Digit7',             
        },
        {
            key: '8',
            shift: '*',
            code: 'Digit8',             
        },
        {
            key: '9',
            shift: '(',
            code: 'Digit9',             
        },
        {
            key: '0',
            shift: ')',
            code: 'Digit0',             
        },
        {
            key: '-',
            shift: '_',
            code: 'Minus',             
        },
        {
            key: '=',
            shift: '+',
            code: 'Equal',             
        },
        {
            key: 'Backspace',
            shift: 'Backspace',
            code: 'Backspace',           
        },
        {
            key: 'Tab',
            shift: 'Tab',
            code: 'Tab',            
        },
        {
            key: 'й',
            shift: 'Й',
            code: 'KeyQ',             
        },
        {
            key: 'ц',
            shift: 'Ц',
            code: 'KeyW',             
        },
        {
            key: 'у',
            shift: 'У',
            code: 'KeyE',             
        },
        {
            key: 'к',
            shift: 'К',
            code: 'KeyR',             
        },
        {
            key: 'е',
            shift: 'Е',
            code: 'KeyT',             
        },
        {
            key: 'н',
            shift: 'Н',
            code: 'KeyY',             
        },
        {
            key: 'г',
            shift: 'Г',
            code: 'KeyU',             
        },
        {
            key: 'ш',
            shift: 'Ш',
            code: 'KeyI',             
        },
        {
            key: 'щ',
            shift: 'Щ',
            code: 'KeyO',             
        },
        {
            key: 'з',
            shift: 'З',
            code: 'KeyP',             
        },
        {
            key: 'х',
            shift: 'Х',
            code: 'BracketLeft',             
        },
        {
            key: 'ъ',
            shift: 'Ъ',
            code: 'BracketRight',             
        },
        {
            key: '\\',
            shift: '|',
            code: 'Backslash',             
        },
        {
            key: 'CapsLock',
            shift: 'CapsLock',
            code: 'CapsLock',            
        },
    
        {
            key: 'ф',
            shift: 'Ф',
            code: 'KeyA',             
        },
        {
            key: 'ы',
            shift: 'Ы',
            code: 'KeyS',             
        },
        {
            key: 'в',
            shift: 'В',
            code: 'KeyD',             
        },
        {
            key: 'а',
            shift: 'А',
            code: 'KeyF',             
        },
        {
            key: 'п',
            shift: 'П',
            code: 'KeyG',             
        },
        {
            key: 'р',
            shift: 'Р',
            code: 'KeyH',             
        },
        {
            key: 'о',
            shift: 'О',
            code: 'KeyJ',             
        },
        {
            key: 'л',
            shift: 'Л',
            code: 'KeyK',             
        },
        {
            key: 'д',
            shift: 'Д',
            code: 'KeyL',             
        },
        {
            key: 'ж',
            shift: 'Ж',
            code: 'Semicolon',             
        },
        {
            key: 'э',
            shift: 'Э',
            code: 'Quote',             
        },
        {
            key: 'Enter',
            shift: 'Enter',
            code: 'Enter',            
        },
        {
            key: 'Shift',
            shift: 'Shift',
            code: 'ShiftLeft',           
        },
        {
            key: 'я',
            shift: 'Я',
            code: 'KeyZ',             
        },
        {
            key: 'ч',
            shift: 'Ч',
            code: 'KeyX',             
        },
        {
            key: 'с',
            shift: 'С',
            code: 'KeyC',             
        },
        {
            key: 'м',
            shift: 'М',
            code: 'KeyV',             
        },
        {
            key: 'и',
            shift: 'И',
            code: 'KeyB',             
        },
        {
            key: 'т',
            shift: 'Т',
            code: 'KeyN',             
        },
        {
            key: 'ь',
            shift: 'Ь',
            code: 'KeyM',             
        },
        {
            key: 'б',
            shift: 'Б',
            code: 'Comma',             
        },
        {
            key: 'ю',
            shift: 'Ю',
            code: 'Period',             
        },
        {
            key: '.',
            shift: ',',
            code: 'Slash',             
        },
        {
            key: '&#9650;',
            shift: '&#9650;',
            code: 'ArrowUp',             
        },
        {
            key: 'Shift',
            shift: 'Shift',
            code: 'ShiftRight',             
        },
        {
            key: 'Ctrl',
            shift: 'Ctrl',
            code: 'ControlLeft',            
        },
        {
            key: 'Win',
            shift: 'Win',
            code: 'Win',             
        },
        {
            key: 'Alt',
            shift: 'Alt',
            code: 'AltLeft',             
        },
        {
            key: '&#8212;',
            shift: '&#8212;',
            code: 'Space',            
        },
        {
            key: 'Alt',
            shift: 'Alt',
            code: 'AltRight',             
        },
        {
            key: 'Ctrl',
            shift: 'Ctrl',
            code: 'ControlRight',           
        },
        {
            key: '&#9668;',
            shift: '&#9668;',
            code: 'ArrowLeft',             
        },
    
        {
            key: '&#9660;',
            shift: '&#9660;',
            code: 'ArrowDown',             
        },
        {
            key: '&#9658;',
            shift: '&#9658;',
            code: 'ArrowRight',             
        },
        {
            key: 'Del',
            shift: 'Del',
            code: 'Delete',             
        },
    ]
};

export default simbols;