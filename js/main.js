document.getElementById("btt_calcular").onclick = function () {
    const form_box = document.getElementById("form_box");
    const form_resp = document.getElementById("form_resp");

    const peso = parseFloat(document.getElementById("i_peso").value);
    const altura = parseFloat(document.getElementById("i_altura").value);
    const nome = document.getElementById("i_nome").value.trim();
    const resultado = document.getElementById("resultado");
    const body = document.body;
    body.className = "";

    form_box.style.display = "none";
    form_resp.style.display = "block";

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || nome === "") {
        resultado.innerText = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        body.classList.add("abaixo");
    } else if (imc <= 24.9) {
        classificacao = "Peso normal";
        body.classList.add("normal");
    } else if (imc <= 29.9) {
        classificacao = "Sobrepeso";
        body.classList.add("sobrepeso");
    } else {
        classificacao = "Obesidade";
        body.classList.add("obesidade");
    }

    resultado.innerHTML = `
        <strong>${nome}</strong><br>
        Seu IMC é <strong>${imc.toFixed(2)}</strong><br>
        Classificação: <strong>${classificacao}</strong>
    `;
};
