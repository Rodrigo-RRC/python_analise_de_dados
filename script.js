let pyodide;

async function loadPyodideAndRun() {
    if (!pyodide) {
        pyodide = await loadPyodide();
        console.log("Pyodide carregado com sucesso!");
    }
}

async function runPython() {
    let code = document.getElementById("code-editor").value;
    let outputElement = document.getElementById("output");

    try {
        if (!pyodide) {
            await loadPyodideAndRun();
        }
        let output = await pyodide.runPythonAsync(code);
        outputElement.textContent = output;
    } catch (error) {
        outputElement.textContent = "Erro ao executar o código: " + error;
        console.error(error);
    }
}

// Garante que Pyodide seja carregado ao iniciar a página
window.onload = async function() {
    await loadPyodideAndRun();
};
