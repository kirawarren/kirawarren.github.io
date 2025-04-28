const input = document.getElementById('phone');

const remap = {
'0': '8',
'1': '9',
'2': '7',
'3': '6',
'4': '5',
'5': '4',
'6': '3',
'7': '2',
'8': '1',
'9': '0'
};

input.addEventListener('keydown', function(e) {

if (e.key >= '0' && e.key <= '9') {
    e.preventDefault(); 

    const wrongDigit = remap[e.key];
    input.value += wrongDigit;
}

log.console(input.value);
});


