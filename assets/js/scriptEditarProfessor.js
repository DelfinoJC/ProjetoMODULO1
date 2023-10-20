const voltarParaLista = () => {
  window.location.href = "../pages/listaProfessores.html";
};

let idProfessor;

const pegaDiretorio = () => {
  const paramentro = new URLSearchParams(window.location.search);
  const id = paramentro.get("id");
  idProfessor = id;
  carregarDados(idProfessor);
};

const buscarProfessor = async (id) => {
  const response = await fetch(`http://localhost:3000/professores/${id}`);
  const professor = await response.json();
  return professor;
};

const dadosFormulario = async (professor) => {
  document.getElementById("nome").value = professor.nome;
  document.getElementById("disciplina").value = professor.disciplina;
  document.getElementById("perfil").value = professor.perfil;
  document.getElementById("ativo").checked = professor.ativo;
};

const carregarDados = async (id) => {
  if (id) {
    const professor = await buscarProfessor(id);
    dadosFormulario(professor);
  }
};

const editarProfessor = async () => {
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

  await fetch(`http://localhost:3000/professores/${idProfessor}`, {
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
