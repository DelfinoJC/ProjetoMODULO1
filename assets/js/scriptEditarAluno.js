const voltarParaLista = () => {
    window.location.href = "../pages/alunos.html";
  };
  
  let idAluno;
  
  const pegaDiretorio = () => {
    const paramentro = new URLSearchParams(window.location.search);
    const id = paramentro.get("id");
    idProfessor = id;
    carregarDados(idAluno);
  };
  
  const buscarAluno = async (id) => {
    const response = await fetch(`https://db-json-d0xw.onrender.com/alunos/${id}`);
    const professor = await response.json();
    return professor;
  };
  
  const dadosFormulario = async (aluno) => {
    document.getElementById("nome").value = aluno.nome;
    document.getElementById("turma").value = aluno.perfil;
    document.getElementById("ativo").checked = aluno.ativo;
  };
  
  const carregarDados = async (id) => {
    if (id) {
      const aluno = await buscarAluno(id);
      dadosFormulario(aluno);
    }
  };
  
  const editarAluno = async () => {
    const nome = document.getElementById("nome").value;
    const disciplina = document.getElementById("disciplina").value;
    const perfil = document.getElementById("perfil").value;
    const ativo = document.getElementById("ativo").checked;
  
    const prof = {
      nome,
      disciplina,
      perfil,
      ativo,
    };
  
    await fetch(`https://db-json-d0xw.onrender.com/professores/${idProfessor}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prof),
    });
  
    window.location.href = "../pages/listaProfessores.html";
  };
  pegaDiretorio();
  
  console.log(idProfessor);