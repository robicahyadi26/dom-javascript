const sectionA = document.getElementById('a');

const p1 = document.querySelector('p');


const pNew = document.createElement('p');
const textP = document.createTextNode('ini isi paragraf');

pNew.appendChild(textP);

sectionA.replaceChild(pNew,p1);

pNew.style.fontSize = '20px';
pNew.style.backgroundColor = 'lightgreen';

const link = sectionA.querySelector('a');

sectionA.removeChild(link);

const sectionB = document.getElementById('b');

const p4 = sectionB.querySelector('p');

const pBaru= document.createElement('h3');
const txtPbaru = document.createTextNode('Judul Baru');

pBaru.appendChild(txtPbaru);
sectionB.replaceChild(pBaru, p4);

pBaru.style.color = 'salmon';
pBaru.style.background = 'lightblue';