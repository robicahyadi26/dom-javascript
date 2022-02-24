//Dom Selection

const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Robi Cahyadi';

//document.getElementsByTagName('p') -> mengembalikan HTML Collection

const p = document.getElementsByTagName('p');

for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1');

h1[0].style.fontSize = '50px';

 //document.getElementsByClassName('p1');
 //-> HTMLCollection

 const p1 = document.getElementsByClassName('p1')[0];

 p1.innerHTML = 'ini dirubah dari javascript';
 p1.style.color = "salmon";
 
 const p2 = document.getElementsByClassName('p2')[0];
 p2.innerHTML = 'Merubah tulisan pada paragraf ke 2';

 
