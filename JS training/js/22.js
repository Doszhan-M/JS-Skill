/* Создайте раскрывающийся блок (accordion). Сверху блок с заголовком, при нажатии на который снизу показывается 
блок с текстом, при повторном нажатии блок с текстом скрывается.*/

const initAccordians = element => {
    const head = element.querySelector('.head')
    const panel = element.querySelector('.panel')
    // console.log(head, panel)
    head.addEventListener('click', () => {
        panel.classList.toggle('panel_opened')
    });
}

const cards = document.querySelectorAll('.card')
cards.forEach(initAccordians)
  
