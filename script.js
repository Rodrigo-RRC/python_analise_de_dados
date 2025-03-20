let pyodideReadyPromise = loadPyodide();

async function runPython() {
    let code = document.getElementById("code-editor").value;
    let outputElement = document.getElementById("output");

    try {
        let pyodide = await pyodideReadyPromise;
        let output = await pyodide.runPythonAsync(code);
        outputElement.textContent = output;
    } catch (error) {
        outputElement.textContent = "Erro ao executar o código: " + error;
        console.error(error);
    }
}
