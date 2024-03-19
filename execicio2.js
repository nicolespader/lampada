const input = document.getElementById("vanessa");
const button = document.getElementById("vanossa");
const img = document.getElementById("imagem");
const cpf = document.getElementById("cpf");
const saudacao = document.getElementById("saudacao");
const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const body = document.querySelector("body");
const corfundo = document.getElementById("corfundo")
const contador = document.getElementById("contador")
var i = 0;

function incrementarContador() {
    i++;
    contador.innerText = `você clicou ${i}`
}

button.addEventListener("click", function() {
    alert(`O Nome Completo é: ${input.value} (${input.value.length}) `);
})

img.addEventListener("click", function(){
    img.src = "lampada2.png"
})

img.addEventListener("mouseover", function(){
    img.src = "lampada1.jpg"
})


saudacao.addEventListener("click", function(){
    alert(`Olá ${nome.value} ${sobrenome.value}`);
    body.style.backgroundColor = corfundo.value;
})



//alert("mensagem");
//alert(2 + 2)
