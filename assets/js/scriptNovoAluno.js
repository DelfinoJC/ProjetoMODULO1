const voltarParaLista = () => {
    window.location.href = '../pages/alunos.html'
}

const form = document.getElementById('formulario')

const cadastrarAluno = async () => {

    const nome = document.getElementById('nome').value
    const turma = document.getElementById('turma').value
    const ativo = document.getElementById('ativo').checked

    const aluno = {
        nome,
        turma,
        ativo
    }

    const dadoEspecifico = await fetch('https://db-json-d0xw.onrender.com/alunos',{
      method:'POST',  
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(aluno)
    })

    if(dadoEspecifico.status == 201){
        window.location.href = '../pages/alunos.html'
    } else {
        alert('Erro ao criar aluno.')
    }
}