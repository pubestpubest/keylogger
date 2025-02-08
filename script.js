const logdiv = document.getElementById('log');
const nkey = document.getElementById('key');
const hexkey = document.getElementById('hexkey');
const binkey = document.getElementById('binkey');
const clear = document.getElementById('clear');

let swapper = false;

function log(key) {
    const logMessage = `${key}`;
    const span = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    
    if(swapper) {
        span.style.backgroundColor = 'black';
        span.style.color = 'white';
        span2.style.backgroundColor = 'black';
        span2.style.color = 'white';
        span3.style.backgroundColor = 'black';
        span3.style.color = 'white';
        swapper = false;
    }
    else {
        span.style.backgroundColor = 'white';
        span.style.color = 'black';
        span2.style.backgroundColor = 'white';
        span2.style.color = 'black';
        span3.style.backgroundColor = 'white';
        span3.style.color = 'black';
        swapper = true;
    }
    // nkey.innerText += logMessage;
    span.textContent = logMessage;
    nkey.appendChild(span);
    span2.textContent = `0x`+hex(logMessage);
    hexkey.appendChild(span2);
    span3.textContent = bin(logMessage);
    binkey.appendChild(span3);

    logdiv.scrollTop = logdiv.scrollHeight;
    
}

//function to take a key and return it in hexadecimal
function hex(key) {
    return key.charCodeAt(0).toString(16);
}

//function to take a key and return it in binary
function bin(key) {
    return key.charCodeAt(0).toString(2);
}

//function to clear the log
function clearLog() {
    nkey.textContent = '';
    hexkey.textContent = '';
    binkey.textContent = '';
}

document.addEventListener('keydown', (event) => {
    let key = event.key;
    log(key);
});

clear.addEventListener('click', clearLog);