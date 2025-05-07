// ex1.js
const frm = document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const n = Number(frm.inNumero.value);
    if(n % 2 == 0){
        resp.innerText = `O número ${n} é Par`;
    }else{
        resp.innerText = `O número ${n} é Impar`;
    }
})