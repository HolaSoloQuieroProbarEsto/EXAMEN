document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("buscador");
  const boton = document.getElementById("btnBuscar");
  const resultados = document.getElementById("resultados");

  const paginas = ["index.html", "P2.html", "P3.html", "P4.html", "P5.html", "P6.html", "P7.html", "P8.html"];

  boton.addEventListener("click", async () => {
    const palabra = buscador.value.toLowerCase();
    resultados.innerHTML = "";

    if (palabra.length === 0) {
      resultados.innerHTML = "<li>Escribe una palabra para buscar.</li>";
      return;
    }

    let encontrado = false;

    for (let pagina of paginas) {
      try {
        const respuesta = await fetch(pagina);
        const texto = await respuesta.text();

        if (texto.toLowerCase().includes(palabra)) {
          const li = document.createElement("li");
          li.innerHTML = `La palabra <b>${palabra}</b> está en <a href="${pagina}">${pagina}</a>`;
          resultados.appendChild(li);
          encontrado = true;
        }
      } catch (error) {
        console.error("Error al leer la página:", pagina, error);
      }
    }

    if (!encontrado) {
      resultados.innerHTML = `<li>No se encontró la palabra en el sitio.</li>`;
    }
  });
});