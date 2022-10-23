
let jovens = JSON.parse(localStorage.getItem('jovens'))
if(jovens == null){
    jovens = []
}

const indice = location.search.split('=')[1]
const ehEdicao = indice !== undefined
console.log(indice)
if(ehEdicao){
    preencheFormulario(indice)
} 




function salvar(){
    let nome= document.getElementById('nome').value
    let cpf= document.getElementById('cpf').value
    let data= document.getElementById('data').value
    let telefone= document.getElementById('telefone').value
    let email= document.getElementById('email').value
    let endereço= document.getElementById('endereço').value
    let marca= document.getElementById('marca').value
    let curriculo= document.getElementById('curriculo').value
    
    let j_vens = {
        nome: nome,
        cpf: cpf,
        data: data,
        telefone: telefone,
        email: email,
        endereço:endereço,
        marca: marca,
        curriculo: curriculo,
    }
    
    if (ehEdicao){
        jovens[indice]=j_vens
    } else{
        jovens.push(j_vens)   
    }

    console.log(j_vens)
    localStorage.setItem("jovens",JSON.stringify(jovens))
}
function preencheFormulario(indice){
    console.log('refazendo formulario do jovem: ' + indice)
    let JovEm = jovens[indice]
    console.log('Jovem: '+ JovEm.nome)
    document.getElementById('nome').value = JovEm.nome
    document.getElementById('cpf').value = JovEm.cpf
    document.getElementById('data').value = JovEm.data
    document.getElementById('telefone').value = JovEm.telefone
    document.getElementById('email').value = JovEm.email
    document.getElementById('endereço').value = JovEm.endereço
    document.getElementById('marca').value = JovEm.marca
}
