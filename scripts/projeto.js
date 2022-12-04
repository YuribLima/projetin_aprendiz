const url = 'http://ntcursoapi-env.eba-hvwnzgx7.us-east-1.elasticbeanstalk.com/nt-curso-api/jovens/'


const id = location.search.split('=')[1]
const ehEdicao = id !== undefined
console.log(id)
if(ehEdicao){
    preencheFormulario(id)
    fetch(url + id)
    .then(function(response) {
      console.log('Encontrado jovem com id' + id)
      return response.json()
    })
    .then(function(jovem){
        preencheFormulario(jovem)
    })
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

    if(nome === undefined || nome === null || nome === ''){
        document.getElementById('erro-nome').classList.remove('fade')
        setTimeout(() =>{
            document.getElementById('erro-nome').classList.add('fade')
        }, 3000)
        return
    }
    if(cpf === undefined || cpf === null || cpf === ''){
        document.getElementById('erro-cpf').classList.remove('fade')
        setTimeout(() =>{
            document.getElementById('erro-cpf').classList.add('fade')
        }, 3000)
        return
    }
    if(telefone === undefined || telefone === null || telefone === ''){
        document.getElementById('erro-telefone').classList.remove('fade')
        setTimeout(() =>{
            document.getElementById('erro-telefone').classList.add('fade')
        }, 3000)
        return
    }
    if(email === undefined || email === null || email === ''){
        document.getElementById('erro-email').classList.remove('fade')
        setTimeout(() =>{
            document.getElementById('erro-email').classList.add('fade')
        }, 3000)
        return
    }
    
    
    let j_vens = {
        nome: nome,
        cpf: cpf,
        data: data,
        telefone: telefone,
        email: email,
        endereco:endereço,
        marca: marca,
        curriculo: curriculo,
    }
    let metodo
    if (ehEdicao){
        metodo ='PUT'
        j_vens.id = id
    } else{
        metodo= 'POST'   
    }

    console.log(j_vens)

    fetch(url, {method: metodo , headers:{'Content-Type': 'application/json'}, body:JSON.stringify(j_vens) })
    .then(function(response) {
      console.log('Salvo com sucesso', response)
    })

    document.getElementById('sucesso').classList.remove('fade')
    setTimeout(() =>{
        document.getElementById('sucesso').classList.add('fade')
    }, 3000)
    Limpar()
}
function preencheFormulario(JovEm){
    console.log('refazendo formulario do jovem: ' + JovEm.id)
    console.log('Jovem: '+ JovEm.nome)
    document.getElementById('nome').value = JovEm.nome
    document.getElementById('cpf').value = JovEm.cpf
    document.getElementById('data').value = JovEm.data
    document.getElementById('telefone').value = JovEm.telefone
    document.getElementById('email').value = JovEm.email
    document.getElementById('endereço').value = JovEm.endereço
    document.getElementById('marca').value = JovEm.marca
}
function Limpar(){
    document.getElementById('nome').value = ""
    document.getElementById('cpf').value = ""
    document.getElementById('data').value = ""
    document.getElementById('telefone').value = ""
    document.getElementById('email').value = ""
    document.getElementById('endereço').value = ""
    document.getElementById('marca').value = ""
    document.getElementById('curriculo').value = ""
}
