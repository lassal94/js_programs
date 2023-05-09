/* По умолчанию выделяет красным 
Можно выбрать цвет выделяемого текста
Увеличивает шрифт*/

let color = "red";

let colors = [document.getElementById('o_color'), document.getElementById('g_color'), document.getElementById('b_color')];
colors.forEach(function(el) {
    el.onclick = function() {
        color = el.value;
    }  
}); //для выбора цвета

let textall = document.querySelectorAll("p");
let boldText = document.querySelectorAll("p.bold > b");

textall.forEach(text => {
  text.onmouseover = function() {
    boldText.forEach(item => {
      item.style.color = color;
      item.style.fontSize = "20px";
    })
  }
}); //при наведении

textall.forEach(text => {
  text.onmouseout = function() {
    boldText.forEach(item => {
        item.style.color = 'black';
        item.style.fontSize = "16px";
    })
  }
}); //при отведении

