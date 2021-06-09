/* На сайте reddit ссылки на разделы (сабреддиты) формируются следующим образом: https://reddit.com/r/название_раздела/ 
Напишите функцию, которая принимает ссылку на раздел и возвращает название раздела. */

function getSubredditName (link){
    lastStr = link.length - 2
    firstStr = link.lastIndexOf('/', lastStr) + 1
    str = link.slice(firstStr, -1)
    return str
}

console.log(getSubredditName('https://reddit.com/r/название_раздела/'))