const voltarParaLista = () => {
    window.location.href = '../pages/listaProfessores.html'
}

const form = document.getElementById('formulario')

const cadastrarProfessor = async () => {

    const nome = document.getElementById('nome').value
    const disciplina = document.getElementById('disciplina').value
    const perfil = document.getElementById('perfil').value
    const ativo = document.getElementById('ativo').checked

    const prof = {
        nome, 
        disciplina, 
        perfil,
        ativo
    }

    const dadoEspecifico = await fetch('https://db-json-d0xw.onrender.com/professores',{
      method:'POST',  
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(prof)
    })

    if(dadoEspecifico.status == 201){
        window.location.href = '../pages/listaProfessores.html'
    } else {
        alert('Erro ao criar professor.')
    }
}

