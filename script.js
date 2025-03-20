async function runPython() {
    let code = document.getElementById("code-editor").value;
    let outputElement = document.getElementById("output");
    
    try {
        let pyodide = await loadPyodide();
        let output = pyodide.runPython(code);
        outputElement.textContent = output;
    } catch (error) {
        outputElement.textContent = "Erro: " + error;
    }
}
