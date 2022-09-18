let lista = document.getElementById('Lista-jovens')
let jovens = JSON.parse(localStorage.getItem('jovens'))
for(let jovem of jovens){
    let item = document.createElement('li')
    let text = jovem.nome + '-' + jovem.email + '-' + jovem.telefone_celular + '-' + jovem.cpf
    let textItem = document.createTextNode(text)
    item.appendChild(textItem)
    lista.appendChild(item)
}