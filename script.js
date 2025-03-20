let pyodideReady = false;
let pyodide;

async function loadPyodideAndRun() {
    if (!pyodideReady) {
        pyodide = await loadPyodide();
        pyodideReady = true;
        console.log("Pyodide carregado com sucesso!");
    }
}

async function runPython() {
    let code = document.getElementById("code-editor").value;
    let outputElement = document.getElementById("output");

    try {
        if (!pyodideReady) {
            await loadPyodideAndRun();
        }
        let output = pyodide.runPython(code);
        outputElement.textContent = output;
    } catch (error) {
        outputElement.textContent = "Erro ao executar o código: " + error;
        console.error(error);
    }
}

// Garante que o Pyodide carregue corretamente ao iniciar a página
window.onload = async function() {
    await loadPyodideAndRun();
};
