var jovens = []
function guardar(){

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
    jovens.push(j_vens)
    console.log(j_vens)
}