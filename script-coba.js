const sectionA = document.getElementById('a');

const p1 = document.querySelector('.p1');
// const p2 = document.querySelector('.p2');


const pNew = document.createElement('p');
// const pNew2 = document.createElement('p');
const textP1 = document.createTextNode('ini isi paragraf');
// const textP2 = document.createTextNode('Paragraf 3 diganti');

pNew.appendChild(textP1);
// pNew2.appendChild(textP2);

sectionA.replaceChild(pNew,p1);
// sectionA.replaceChild(pNew,p2);

pNew.style.fontSize = '20px';
pNew.style.backgroundColor = 'lightgreen';

const link = sectionA.querySelector('a');

const p3 = sectionA.querySelector('.p3');

sectionA.removeChild(link);

const sectionB = document.getElementById('b');

const p4 = sectionB.querySelector('p');

const pBaru= document.createElement('h3');
const txtPbaru = document.createTextNode('Judul Baru');

pBaru.appendChild(txtPbaru);
sectionB.replaceChild(pBaru, p4);

pBaru.style.color = 'salmon';
pBaru.style.background = 'lightblue';













