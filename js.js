let fon = document.querySelector('.fon')
let clivk = document.querySelector('.clivk')
let numer = document.querySelector('#numer')





setInterval(

    function (){
let r = Math.floor(Math.random() * 255);
let r2 = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let g2 = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let b2 = Math.floor(Math.random() * 255);
let fColor = 'rgb(' + r+ ',' + g+ ' ,' + b+ ')';
let fColor2 = 'rgb(' + r2+ ',' + g2+ ' ,' + b2+ ')';
r = Math.floor(Math.random() * 255);
r2 = Math.floor(Math.random() * 255);
g = Math.floor(Math.random() * 255);
g2 = Math.floor(Math.random() * 255);
b = Math.floor(Math.random() * 255);
b2 = Math.floor(Math.random() * 255);
        let a = Number(numer.value);
        let d = a + 1
        numer.value = d;
let sColor = 'rgb(' + r+ ',' + g+ ' ,' + b+ ')';
let sColor2 = 'rgb(' + r2+ ',' + g2+ ' ,' + b2+ ')';
        let randomColor = `radial-gradient(${fColor},${sColor} )`;
        let randomColor2 = `radial-gradient(${fColor2},${sColor2} )`;

        fon.style.background = randomColor
        numer.style.background = randomColor2
            clivk.addEventListener('click', function (){
                    numer.style.background = randomColor
                    fon.style.background = randomColor2
                    let a = Number(numer.value);

                    d = d + 1
                    numer.value = d;
            })

    }, 1000

);



let odin = document.querySelector('.in1');
let dva = document.querySelector('.in2');
let vivod = document.querySelector('.vivod');

odin.oninput = function (){
    let aa = Number(odin.value)
    let bb = Number(dva.value)
    let cc = aa + bb
    vivod.value = cc;
}
dva.oninput = function (){
    let aa = Number(odin.value)
    let bb = Number(dva.value)
    let cc = aa + bb
    vivod.value = cc;
}





