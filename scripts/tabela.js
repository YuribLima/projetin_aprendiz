let jovens= JSON.parse(localStorage.getItem('jovens'))

let tabela = document.getElementById('tabela-jovens')

jovens.forEach(function(jovem,indice) {
let linha = tabela.insertRow()
let nome = linha.insertCell(0)
nome.innerHTML= jovem.nome
let idade = linha.insertCell(1)
idade.innerHTML = jovem.data
let cpf = linha.insertCell(2)
cpf.innerHTML=jovem.cpf
let email = linha.insertCell(3)
email.innerHTML = jovem.email

var img = document.createElement('img')
img.src= './imagens/apagar.jpg'
img.style.width='15px'
let acoes = linha.insertCell(4)
acoes.appendChild(img)

var lps = document.createElement('img')
lps.src="./imagens/editar.png"
lps.style.width='15px'
acoes.appendChild(lps)

img.addEventListener('click', ()=> apagar(indice))
lps.addEventListener('click',() => editar(indice))
})

function apagar(indice){
    jovens.splice(indice,1)
    localStorage.setItem('jovens',JSON.stringify(jovens))
    document.location.reload()
}

function editar(indice){
    console.log('chamou função editar')
    window.location.href= './aprendiz.html?indice='+indice

}