document.querySelector('#simple-1 input[type="checkbox"]').addEventListener('change', function () {
        z('#simple-1 input[type="submit"]').toggleAttr('disabled');
    },
    false);
document.querySelector('#simple-2 input[type="checkbox"]').addEventListener('change', function () {
        z('#simple-2 input[type="submit"]').toggleAttr('class', 'bg-blue');
    },
    false);

document.querySelector('#simple-3 input[type="checkbox"]').addEventListener('change', function () {
        z('#simple-3 input[type="text"]').toggleAttr('readonly');
    },
    false);
