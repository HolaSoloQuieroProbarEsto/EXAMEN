document.addEventListener("DOMContentLoaded", () => {
    const minInput = document.getElementById("min");
    const maxInput = document.getElementById("max");
    const boton = document.getElementById("btnBuscar"); 
    const productos = document.querySelectorAll("#productos li");
    const resultados = document.getElementById("resultados");

    boton.addEventListener("click", () => {
        const min = parseFloat(minInput.value) || 0;
        const max = parseFloat(maxInput.value) || Infinity;

        resultados.innerHTML = "";
        let encontrados = false;

        productos.forEach(producto => { 
            const precio = parseFloat(producto.getAttribute("data-precio"));
            if (precio >= min && precio <= max) {
                const li = document.createElement("li");
                li.textContent = producto.textContent;
                resultados.appendChild(li);
                encontrados = true;
            }
        });
        
        if (!encontrados) {
            resultados.innerHTML = "<li>No se encontraron productos en ese rango de precio.</li>";
        }
    });
});