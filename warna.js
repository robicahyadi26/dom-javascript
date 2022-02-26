const UbahWarna = document.getElementById('tUbahWarna');

// const tblAzure = document.getElementById('tblAzure');

UbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'lightgreen';

    // document.body.setAttribute('class','biru-muda');
    document.body.classList.toggle('biru-muda');
}

// tblAzure.onclick = function(){
//     //document.body.setAttribute('class', 'merah-muda');
//     document.body.classList.toggle('merah-muda');
// }

const tRandom = document.createElement('button');
const txtTblRandom = document.createTextNode('Rondom Color');

tRandom.appendChild(txtTblRandom);
tRandom.setAttribute('type', 'button');
UbahWarna.after(tRandom);

tRandom.addEventListener('click', function(){
   const r  = Math.round(Math.random() * 255 + 1);
   const g  = Math.round(Math.random() * 255 + 1);
   const b  = Math.round(Math.random() * 255 + 1);

   document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('change', function(){
    //console.log( sMerah.value);
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb( '+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('change', function(){
    //console.log( sMerah.value);
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb( '+ r +','+ g +','+ b +')';
});


sBiru.addEventListener('change', function(){
    //console.log( sMerah.value);
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb( '+ r +','+ g +','+ b +')';
});