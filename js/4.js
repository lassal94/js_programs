/* В документе присутствует несколько ссылок
Работа начинается по нажанию кнопки и прекращается по команте пользователя
Пользователь сам выбирает атрибуты какой ссылки он хочет посмотреть (вводит название ссылки)
В случае отсутствия у ссылки атрибутов указанных в задании выводится значение "атрибут отсутствует"
Вся работа происходит во всплывающих окнах и пользователь может прекратить ее в любой момент */

function getAttributes() {
    let link_names = ['itProger', 'Внутренняя ссылка', 'Пустая ссылка'];
    let attrs = ['type', 'hreflang', 'rel', 'target', 'href'];
    let links = document.querySelectorAll('a');

    do {
        let res = [];
        let link_name = prompt("Введите название ссылки, атрибуты которой хотите узнать:");
        if (link_name && link_names.includes(link_name)) {
            for (item of links) {
                if (item.textContent == link_name) {
                    var link = item;
                    break;
                }
            }
            attrs.forEach(function(attr) {
                if (link.hasAttribute(attr)) {
                    res.push('Значение атрибута ' + attr + ': ' + link.getAttribute(attr));}
                else {res.push('Значение атрибута ' + attr + ': атрибут отсутствует');}
            })
            alert(res.join('\n'))
        }
        else if (!link_name) {
            break;
        }       
        else {
            alert('Ссылка с таким именем отсутствует!');
        }
        let dec = confirm("Продолжить работу?");
        if (!dec) 
            break;
    } while (true);   
}

