let pyodideReadyPromise;

async function loadPyodideAndRun() {
    if (!pyodideReadyPromise) {
        pyodideReadyPromise = loadPyodide();
    }
    let pyodide = await pyodideReadyPromise;
    await pyodide.loadPackage(["pandas", "matplotlib"]);
    return pyodide;
}

async function runPython() {
    let code = document.getElementById("code-editor").value;
    let outputElement = document.getElementById("output");

    try {
        let pyodide = await loadPyodideAndRun();
        let output = await pyodide.runPythonAsync(code);
        outputElement.textContent = output;
    } catch (error) {
        outputElement.textContent = "Erro ao executar o código: " + error;
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadPyodideAndRun();
});
