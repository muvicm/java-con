// alert('welcome')
// selecting DOM elements
// console.log(document);
// selectors
// getElementByClassName, getElementByTagName, getElementByClassName, getElementByID,
// querySelectorAll, querySelectorALL,

// BY ID
const ul = document.getElementById('empty');
console.log(ul);

// By TagName\
const paragraph = document.getElementsByTagName('p')
console.log(paragraph[0].innerHTML);

for(let i = 0 ; i < paragraph.length; i++){
    console.log(paragraph[i]);
}

// By className
const eli = document.getElementsByTagName('li')
console.log(eli);

for(let i = 0 ; i < eli.length; i++){
    console.log(eli[i]);
}

// By class Name
const thirdpara = document.getElementsByClassName("third-para'")
console.log(thirdpara);

// by querySelector
const li = document.querySelector('li')
console.log(li.innerHTML);

const p = document.querySelector('p')
console.log(p.innerHTML);

// querySelectAll
const allpara = document.querySelectorAll('p')
console.log(allpara);

allpara.forEach(item => console.log(item.innerHTML)
);

const myImg = document.querySelector('img');
myImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAKME4XUpHxXAkUn7MCLfLRMhMxevJ1Gj70RDepHXkA&s')

li.innerHTML += `<li>this is my <b>NEW</b> content`