const irParaNovoAluno = () => {
    window.location.href = '../pages/novoAluno.html'
}

const irParaEditarAluno = () => {
    window.location.href = '../pages/editarAluno.html'
} 

const selectionAlunos = async (alunos) => {
    const content = document.getElementById('contentAluno')
    alunos.forEach((aluno) => {
        const contentHTML = `
        <tr>
        <td>${aluno.nome}</td>
        <td>${aluno.turma}</td>
        <td>
          <span>${aluno.ativo ? "<img src='../assets/img/ToggleGreen.png' alt='botão ativado' > " : "<img src='../assets/img/ToggleRed.jpg' alt='botão desativado' "}</span>
        </td>
        <td>
          <div class="acoes">
            <div onclick="irParaEditarAluno(${aluno.id})" class="botaoAcoesTbody">
              <img
                src="../assets/img/Edit_fill.png"
                alt="botão de editar professor"
              />
            </div>
            <div onclick="excluirAluno(${aluno.id})" class="botaoAcoesTbodyDois">
              <img
                src="../assets/img/delete.png"
                alt="botão de deletar professor"
              />
            </div>
          </div>
        </td>
      </tr>
        `

        content.innerHTML = content.innerHTML + contentHTML
    })
}

const getAlunos = async () => {
    const url = await fetch('http://localhost:3000/alunos')
    const alunos = await url.json()
    selectionAlunos(alunos)
}

getAlunos()

const excluirAluno = async (id) => {
  await fetch(`http://localhost:3000/alunos/${id}`, {method:'DELETE'})
  window.location.reload()
}

// FUNÇÃO PESQUISAR ALUNO 

const pesquisaProf = async () => {
  const content = document.getElementById("contentAluno");
  const nomeInputPesquisa = document.getElementById("pesquisaAluno").value;
  const outraUrl = await fetch(
    `http://localhost:3000/alunos?nome_like=${nomeInputPesquisa}`
  );
  const alunoAcionado = await outraUrl.json();
  exibirAluno(alunoAcionado);
};

function exibirAluno(aluno) {
  const tbody = document.getElementById("contentProf");
  const contentHTML = `
    ${aluno.map(
      (aluno) => ` 
      <tr>
      <td>${aluno.nome}</td>
      <td>${aluno.turma}</td>
      <td>
        <span>${aluno.ativo ? "<img src='../assets/img/ToggleGreen.png' alt='botão ativado' > " : "<img src='../assets/img/ToggleRed.jpg' alt='botão desativado' "}</span>
      </td>
      <td>
        <div class="acoes">
          <div onclick="irParaEditarAluno(${aluno.id})" class="botaoAcoesTbody">
            <img
              src="../assets/img/Edit_fill.png"
              alt="botão de editar professor"
            />
          </div>
          <div onclick="excluirAluno(${aluno.id})" class="botaoAcoesTbodyDois">
            <img
              src="../assets/img/delete.png"
              alt="botão de deletar professor"
            />
          </div>
        </div>
      </td>
    </tr>
    `
    )}
    `;

  tbody.innerHTML = contentHTML;
}