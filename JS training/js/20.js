/* Напишите функцию, которая принимает html в виде строки и возвращает html без элементов div (и всего что внутри), 
все остальные элементы сохраняются. Используйте createElement, querySelectorAll и innerHTML.*/


const removeDivs = html => {
    const root = document.createElement('span');
    root.innerHTML = html
    const divs = root.querySelectorAll('div')
    divs.forEach(elem => {
        elem.parentNode.removeChild(elem)
    })
    return console.log(root.innerHTML   )
}


const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';

removeDivs(html)