// ==================== Saudação ====================
const saudacao = document.getElementById("saudacao");
const agora = new Date();
const hora = agora.getHours();
let mensagem;

if (hora < 12) {
    mensagem = "Bom dia";
} else if (hora < 18) {
    mensagem = "Boa tarde";
} else {
    mensagem = "Boa noite";
}

saudacao.innerHTML = `${mensagem}, <b>Werych Monteiro🤗</b>`;

const form = document.getElementById("formularioi");
const tasks = [];

const divFim = document.querySelector(".divfim");
const copiaDivFim = divFim.cloneNode(true);

let section = document.getElementById("Secfim");
if (!section) {
    section = document.createElement("div");
    section.setAttribute("id", "Secfim");
    document.querySelector(".divmain").append(section);
}

let counter = document.getElementById("counter");

const tarefasSalvas = localStorage.getItem("tarefas");
if (tarefasSalvas) {
    tasks.push(...JSON.parse(tarefasSalvas));
}

function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tasks));
}

function atualizarContador() {
    const concluidas = tasks.filter(t => t.done).length;
    if (!counter) {
        counter = document.createElement("h4");
        counter.setAttribute("id", "counter");
        document.querySelector(".divmain").append(counter);
    }
    counter.innerHTML = `${concluidas} de ${tasks.length} <strong class="concluida">concluídas</strong>`;
}
 
function renderTasks() {
    section.innerHTML = "";

    if (tasks.length === 0) {
        section.append(copiaDivFim);
        counter.style.display = "none";
        return;
    } else {
        counter.style.display = "block";
    }

    const ordenadas = tasks.filter(t => !t.done).concat(tasks.filter(t => t.done));

    ordenadas.forEach((task, index) => {
        const tarefabaixo = document.createElement("div");
        tarefabaixo.classList.add("tarefabaixo");
        section.append(tarefabaixo);

        const tarefaconteudo = document.createElement("div");
        tarefaconteudo.classList.add("tarefaconteudo");
        tarefabaixo.append(tarefaconteudo);

        const check = document.createElement("input");
        check.type = "checkbox";
        check.classList.add("check");
        check.checked = task.done;
        tarefaconteudo.append(check);

        const tarefatexto = document.createElement("div");
        tarefatexto.classList.add("tarefatexto");
        tarefaconteudo.append(tarefatexto);

        const h4 = document.createElement("h4");
        h4.innerHTML = task.nome;
        h4.classList.add("titulotarefa");

        const p = document.createElement("p");
        p.innerHTML = task.done ? `Concluída em ${task.data}` : `Criado em ${task.data}`;

        if (task.done) {
            tarefabaixo.style.backgroundColor = "#E4FFF6";
            tarefabaixo.style.border = "1px solid #02AF75";
            h4.style.color = "#02AF75";
        }

        tarefatexto.append(h4);
        tarefatexto.append(p);

        const lixeira = document.createElement("i");
        lixeira.classList.add("trash");
        lixeira.textContent = "⛌";
        lixeira.style.cursor = "pointer";
        lixeira.style.color = "#de015d";
        tarefabaixo.append(lixeira);

        check.addEventListener("change", function () {
            task.done = this.checked;
            salvarTarefas();
            renderTasks();
        });

        lixeira.addEventListener("click", function () {
            tasks.splice(tasks.indexOf(task), 1);
            salvarTarefas();
            renderTasks();
        });
    });

    atualizarContador();
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nomeInput = document.getElementById("pedir_tarefa");

    if (nomeInput.value.trim() === "") {
        alert("Por favor, digite o nome da tarefa!");
        return;
    }

    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const data = `${agora.getDate()} de ${meses[agora.getMonth()]} de ${agora.getFullYear()}`;

    const task = {
        nome: nomeInput.value,
        data: data,
        done: false
    };

    tasks.push(task);
    salvarTarefas();
    nomeInput.value = "";
    renderTasks();
});


renderTasks();
