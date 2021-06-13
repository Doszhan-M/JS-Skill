xmlStr = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`

let result = {}
let student = {}
let list = []

const parser = new DOMParser
const xmlDom = parser.parseFromString(xmlStr, 'text/xml')
const studentNode = xmlDom.querySelectorAll('student')

studentNode.forEach(element => {
const  first = element.querySelector('first')
const  second = element.querySelector('second')
const  age = element.querySelector('age')
const  prof = element.querySelector('prof')
const  name = element.querySelector('name')
const lang = name.getAttribute('lang')

student = {
    name : first.textContent + ' ' + second.textContent,
    age : Number(age.textContent),
    prof : prof.textContent,
    lang : lang,
}
list.push(student)
})

result = {
    list : list,
}

console.log(JSON.stringify(result))
