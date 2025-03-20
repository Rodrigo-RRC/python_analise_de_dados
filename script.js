let pyodideReady = false;
let pyodide;

async function loadPyodideAndRun() {
    if (!pyodideReady) {
        pyodide = await loadPyodide();
        pyodideReady = true;
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
        outputElement.textContent = "Erro: " + error;
    }
}

// Carregar o Pyodide uma única vez ao iniciar a página
loadPyodideAndRun();
