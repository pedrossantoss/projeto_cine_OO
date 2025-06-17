document.getElementById("form-filme").addEventListener("submit", function(e) {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const nota = document.getElementById("nota").value;
    const critica = document.getElementById("critica").value;

    const li = document.createElement("li");
    li.innerHTML = `<strong>${titulo}</strong> — Nota: ${nota}<br><em>${critica}</em>`;

    document.getElementById("filmes-ul").appendChild(li);

    this.reset();
});
