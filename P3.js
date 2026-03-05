document.getElementById('processButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('pdfFile');
    const paragraphs = document.querySelectorAll('p'); // Selecciona todos tus <p>
    const dataValue = document.getElementById('dataInput').value;

    if (fileInput.files.length === 0) {
        alert("Por favor, selecciona un archivo PDF primero.");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async function() {
        const typedarray = new Uint8Array(this.result);
        
        try {
            const pdf = await pdfjsLib.getDocument(typedarray).promise;
            
            const page = await pdf.getPage(1);
            const textContent = await page.getTextContent();
        
            const lines = textContent.items.map(item => item.str).filter(str => str.trim() !== "");

            paragraphs.forEach(p => p.textContent = "");

            lines.forEach((line, index) => {
                if (index < paragraphs.length) {
                    paragraphs[index].textContent = `Línea ${index + 1}: ${line}`;
                }
            });

            console.log("Dato extra del input:", dataValue);
            alert("PDF procesado con éxito.");

        } catch (error) {
            console.error("Error al procesar el PDF:", error);
            alert("No se pudo leer el PDF.");
        }
    };

    reader.readAsArrayBuffer(file);
});