/* Создайте кнопку, которая при клике создает другую кнопку, которая в свою очередь создает другую кнопку, и т.д. */


const createNewButton = text => {
    const newButton = document.createElement('button');
    newButton.innerHTML = text;
    newButton.type = 'button';
    newButton.addEventListener('click', () => createNewButton('newButton'))

    const parent = document.querySelector('.buttons')
    parent.appendChild(newButton);
}

const [button] = document.getElementsByTagName('button')
button.addEventListener('click', () => createNewButton('newButton'))
