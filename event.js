const sectionA = document.getElementById('a');

// const p3 = document.querySelector('.p3');
// p3.style.backgroundColor = 'lightblue';

// const p2 = sectionA.querySelector('.p2');



// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'lightblue';
// }

// function ubahWarnaP3(){
//     p3.style.backgroundColor = 'green';
// }

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){

//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const txtLiBaru = document.createTextNode(' item baru');
//     liBaru.appendChild(txtLiBaru);
//     ul.appendChild(liBaru);
// });

// p3.addEventListener('click', function(){
//     p3.getElementsByClassName.backgroundColor = 'lightblue';
// })

// const sectionA = document.querySelector('section#a');

const p2 = document.querySelector('section#a .p2');

p2.addEventListener('click', function(){
    p2.style.backgroundColor = 'lightblue';
});

const p3 = document.querySelector('section#a .p3');

p3.addEventListener('click', function(){
    p3.style.backgroundColor = 'lightgreen';
});


const li = document.querySelector('section#b ul li:nth-child(2)');
li.addEventListener('dblclick',function(){
    li.style.backgroundColor = 'salmon';
});

const p4 = document.querySelector('section#b p');
p4.addEventListener('mouseenter', function(){
    p4.style.color = 'red';
    p4.style.backgroundColor = 'orange'
});

const p4L = document.querySelector('section#b p');
p4L.addEventListener('mouseleave', function(){
    p4L.style.color = 'black';
    p4L.style.backgroundColor = 'white'
});