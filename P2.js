document.getElementById("Boton").addEventListener("click", function() {
    let texto = document.getElementById("Texto").value;
    let correo = document.getElementById("Correo").value;
    let contraseña = document.getElementById("Contraseña").value;
    
    alert(texto + " " + contraseña + " " + correo + " ");

    console.log("Boton presionado. Texto ingresado: " + texto);
    console.log("Boton presionado. Correo ingresado: " + correo);
    console.log("Boton presionado. Contraseña ingresada: " + contraseña);

    document.getElementsByTagName("p")[0].innerText = "Has ingresado: " + texto;
    document.getElementsByTagName("p")[1].innerText = "Tu correo es: " + correo;  
    document.getElementsByTagName("p")[2].innerText = "Tu contraseña es: " + contraseña;  
});