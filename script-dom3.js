// DOM manipulation

//menambahkan paragraf baru pada section A
const pNew = document.createElement('p');
const txtPNew = document.createTextNode('Paragraf Baru');

// simpan tulisan kedalam paragraf
pNew.appendChild(txtPNew);

// simpan PNew pada akhir section A
const SectionA = document.getElementById('a');
SectionA.appendChild(pNew);




//membuat element list li
const liNew = document.createElement('li');
//mebuat tulisan pada list li
const txtLiNew = document.createTextNode('Item Baru');
liNew.appendChild(txtLiNew);
//memilih section posisi li akan ditempatkan
const ul = document.querySelector('section#b ul')
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
//memilih posisi INSERT BEFORE li akan ditempatkan
const li2 = ul.querySelector('li:nth-child(2)');
//menambahkan li sebelum elemen li2.
ul.insertBefore(liNew, li2);



//menghapus dengan Javascript

//menangkap dan memilih section yang akan dihapus
const link = document.getElementsByTagName('a')[0];

//menghapus elemen pada sectionA
SectionA.removeChild(link);


//Mengganti elemen dengan javascript

//menangkap section B dan memilih elemen yang akan diganti
const sectionB = document.getElementById('b');
//melilih elemen yang akan diganti
const p4 = sectionB.querySelector('p');

//membuat elemen baru untuk pengganti
const h2New = document.createElement('h2');
//membuat isi text pada elemen pengganti
const h2TxtNew = document.createTextNode('Judul Baru');
//memasukan isi teks kedalam elemen baru
h2New.appendChild(h2TxtNew);
//mengganti elemen yang lama p4 dengan h2New.
sectionB.replaceChild(h2New, p4);


h2New.style.backgroundColor = 'lightblue';
pNew.style.backgroundColor = 'lightblue';
liNew.style.backgroundColor = 'lightblue';










