/* Добавил плавное изменение цвета текста в зависимости от размера окна */

let res = document.querySelector('div.size');

function textColor() {   //функция для смены цветов
    if (window.innerWidth < 600) {
        res.style.color = "green";
    }
    else if (window.innerWidth < 1000) {
        res.style.color = "yellow";
    }
    else if (window.innerWidth < 1400) {
        res.style.color = "orange";
    }
    else {
        res.style.color = "red";
    }
}

res.textContent = 'Ширина: ' + window.innerWidth + ', высота: ' + window.innerHeight; //костыльно, но работает
textColor();

window.onresize = function() {
    res.textContent = 'Ширина: ' + window.innerWidth + ', высота: ' + window.innerHeight;
    textColor();
};


