const logdiv = document.getElementById('log');
const nkey = document.getElementById('keyc');
const hexkey = document.getElementById('hexkey');
const binkey = document.getElementById('binkey');
const clear = document.getElementById('clear');
const key = document.querySelectorAll('.key');

let swapper = false;

function log(key) {
    const logMessage = `${key}`;
    const span = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    
    if(swapper) {
        span.style.backgroundColor = 'gray';
        span.style.color = 'white';
        span2.style.backgroundColor = 'gray';
        span2.style.color = 'white';
        span3.style.backgroundColor = 'gray';
        span3.style.color = 'white';
        swapper = false;
    }
    else {
        span.style.backgroundColor = 'white';
        span.style.color = 'gray';
        span2.style.backgroundColor = 'white';
        span2.style.color = 'gray';
        span3.style.backgroundColor = 'white';
        span3.style.color = 'gray';
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

function traceKey(event) {
    key.forEach((key) => {
        if(key.dataset.keyCode == event.keyCode) {
            key.style.background = 'rgba(0, 0, 0, 0.1)';
        }
    });
}

function releaseKey(event) {
    key.forEach((key) => {
        if(key.dataset.keyCode == event.keyCode) {
            key.style.background = 'transparent';
        }
    });
}
document.addEventListener('keydown', (event) => {
    let key = event.key;
    log(key);
    traceKey(event);
});

clear.addEventListener('click', clearLog);
document.addEventListener('keyup',releaseKey);
