const voltarParaLista = () => {
  window.location.href = "../pages/alunos.html";
};

// let alunoId;

// const getIdUrl = () => {
//   const paramString = window.location.search;
//   const params = new URLSearchParams(paramString);
//   alunoId = params.get("id");
//   console.log(alunoId);
// };

// const buscarAluno = async (id) => {
//   const response = await fetch(`https://db-json-d0xw.onrender.com/alunos/${id}`);
//   const aluno = await response.json();
//   return aluno;
// };

// const dadosFormulario = async (aluno) => {
//   document.getElementById("nome").value = aluno.nome;
//   document.getElementById("turma").value = aluno.turma;
//   document.getElementById("ativo").checked = aluno.ativo;
// };

// const carregarDados = async (id) => {
//   if (id) {
//     const aluno = await buscarAluno(id);
//   dadosFormulario(aluno);
//   }
// };

// const editarAluno = async () => {
//   const nome = document.getElementById("nome").value;
//   const turma = document.getElementById("turma").value;
//   const ativo = document.getElementById("ativo").checked;

//   const aluno = {
//     nome,
//     turma,
//     ativo,
//   };

//   await fetch(`https://db-json-d0xw.onrender.com/alunos/${alunoId}`, {
//     method: "PUT",
//     headers: {
//       Accept: "application/json, text/plain, /",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(aluno),
//   });

//   window.location.href = "../pages/alunos.html";
// };

// getIdUrl();

// console.log(alunoId);

let alunoId;

const pegaDiretorio = () => {
  const paramentro = new URLSearchParams(window.location.search);
  const id = paramentro.get("id");
  alunoId = id;
  carregarDados(id);
};

const buscarAluno = async (id) => {
  const response = await fetch(`https://db-json-d0xw.onrender.com/alunos/${id}`);
  const aluno = await response.json();
  return aluno;
}; 

const dadosFormulario = (aluno) => {
  document.getElementById("nome").value = aluno.nome;
  document.getElementById("turma").value = aluno.turma;
  document.getElementById("ativo").checked = aluno.ativo;
};

const carregarDados = async (id) => {
  if (id) {
    const aluno = await buscarAluno(id);
    dadosFormulario(aluno);
    console.log(id);
  }
};

const editarAluno = async () => {
  const nome = document.getElementById("nome").value;
  const turma = document.getElementById("turma").value;
  const ativo = document.getElementById("ativo").checked;

  const aluno = {
    nome,
    turma,
    ativo
  };

  await fetch(`https://db-json-d0xw.onrender.com/alunos/${alunoId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, /",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(aluno),
  });

  window.location.href = "../pages/alunos.html";
};

pegaDiretorio();
