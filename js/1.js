/* Ну это классическая задачка =)
Программа работает, пока пользователь не решит остановиться
Число загадывается случайным образом (от 1 до 100)
Программа выдает подсказки 
Подсчитывает количество попыток*/

function getRand(min, max) { //пришлось рандомайзер самому писать, встроенного не нашел, как ни смешно
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

do {
    let num = getRand(1, 100); //загадываем число от 1 до 100
    let count = 0;
    while (true) {
        count++;
        let user = prompt('Введите число:');
        if (user == num) {
            alert('Вы угадали, это число ' + num + '. Вам понадобилось ' + count + ' попыток.');
            break;
        } 
        else if (user > num) {alert('Меньше...');}
        else if (user < num) {alert('Больше...');}
        else {alert('Некорректный ввод, введите число!');}
    }
    var dec = confirm('Хотите сыграть еще раз?'); //var - чтобы внешний цикл переменную видел
} while (dec);

