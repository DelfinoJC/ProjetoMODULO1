const irParaNovoProf = () => {
  window.location.href = "../pages/novoProfessor.html";
};

const irParaEditarProf = (id) => {
  window.location.href = `../pages/editarProfessor.html?id=${id}`;
};

const selectionProf = async (professores) => {
  const content = document.getElementById("contentProf");
  professores.forEach((professor) => {
    const contentHTML = `
        <tr>
        <td>${professor.nome}</td>
        <td>${professor.disciplina}</td>
        <td>${professor.perfil}</td>
        <td>
          <span>${
            professor.ativo
              ? "<img src='../assets/img/ToggleGreen.png' alt='botão ativado' > "
              : "<img src='../assets/img/ToggleRed.jpg' alt='botão desativado' "
          }</span>
        </td>
        <td>
          <div class="acoes">
            <div onclick="irParaEditarProf(${
              professor.id
            })" class="botaoAcoesTbody">
              <img
                src="../assets/img/Edit_fill.png"
                alt="botão de editar professor"
              />
            </div>
            <div onclick="excluirProfessor(${
              professor.id
            })" class="botaoAcoesTbodyDois">
              <img
                src="../assets/img/delete.png"
                alt="botão de deletar professor"
              />
            </div>
          </div>
        </td>
      </tr>
        `;

    content.innerHTML = content.innerHTML + contentHTML;
  });
};

const getProfs = async () => {
  const url = await fetch("http://localhost:3000/professores");
  const professores = await url.json();
  selectionProf(professores);
};

getProfs();

const excluirProfessor = async (id) => {
  await fetch(`http://localhost:3000/professores/${id}`, { method: "DELETE" });
  window.location.reload();
};

// FUNÇÃO PESQUISA PROFESSOR
const pesquisaProf = async () => {
  const content = document.getElementById("contentProf");
  const nomeInputPesquisa = document.getElementById("pesquisaProf").value;
  const outraUrl = await fetch(
    `http://localhost:3000/professores?nome_like=${nomeInputPesquisa}`
  );
  const professorAcionado = await outraUrl.json();
  exibirProfessor(professorAcionado);
};

function exibirProfessor(prof) {
  const tbody = document.getElementById("contentProf");
  const contentHTML = `
    ${prof.map(
      (professor) => ` 
    <tr>
    <td>${professor.nome}</td>
    <td>${professor.disciplina}</td>
    <td>${professor.perfil}</td>
    <td>
      <span>${
        professor.ativo
          ? "<img src='../assets/img/ToggleGreen.png' alt='botão ativado' > "
          : "<img src='../assets/img/ToggleRed.jpg' alt='botão desativado' "
      }</span>
    </td>
    <td>
      <div class="acoes">
        <div onclick="irParaEditarProf(${
          professor.id
        })" class="botaoAcoesTbody">
          <img
            src="../assets/img/Edit_fill.png"
            alt="botão de editar professor"
          />
        </div>
        <div onclick="excluirProfessor(${
          professor.id
        })" class="botaoAcoesTbodyDois">
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