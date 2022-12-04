const url = 'http://ntcursoapi-env.eba-hvwnzgx7.us-east-1.elasticbeanstalk.com/nt-curso-api/jovens/'

fetch(url).then(function (response) {
    console.log('Sucesso!', response.status)
    return response.json();
})

    .then(function (jovens) {
        console.log(jovens)
        let tabela = document.getElementById('tabela-jovens')

        jovens.forEach(function (jovem, indice) {
            let linha = tabela.insertRow()
            let nome = linha.insertCell(0)
            nome.innerHTML = jovem.nome
            let idade = linha.insertCell(1)
            idade.innerHTML = jovem.data
            let cpf = linha.insertCell(2)
            cpf.innerHTML = jovem.cpf
            let email = linha.insertCell(3)
            email.innerHTML = jovem.email

            var img = document.createElement('img')
            img.src = './imagens/apagar.jpg'
            img.style.width = '15px'
            let acoes = linha.insertCell(4)
            acoes.appendChild(img)

            var lps = document.createElement('img')
            lps.src = "./imagens/editar.png"
            lps.style.width = '15px'
            acoes.appendChild(lps)

            img.addEventListener('click', () => apagar(jovem.id))
            lps.addEventListener('click', () => editar(jovem.id))
        })
    })

    .catch(function (erro) {
        console.warn('Algo deu errado', erro)
    });



function apagar(id) {
    fetch(url + id , {method: 'DELETE' })
      .then(function(response) {
        console.log('Apagado com sucesso', response)
        document.location.reload()
      })
    }

function editar(id) {
    window.location.href = './aprendiz.html?indice=' + id

}