document.getElementById("submitButton").addEventListener("click", function() {
    const color = document.getElementById("colorInput").value;
    
    const imageFile = document.getElementById("imageInput").files[0];
    const audioFile = document.getElementById("audioInput").files[0];
    const videoFile = document.getElementById("videoInput").files[0];
    
    console.log("=== DATOS DEL FORMULARIO ===");
    console.log("Color seleccionado:", color);
    console.log("Color RGB:", hexToRgb(color));
    
    if (imageFile) {
        console.log("Imagen:", imageFile.name);
        console.log("Tamaño imagen:", imageFile.size, "bytes");
        console.log("Tipo imagen:", imageFile.type);
    } else {
        console.log("Imagen: No seleccionada");
    }
    
    if (audioFile) {
        console.log("Audio:", audioFile.name);
        console.log("Tamaño audio:", audioFile.size, "bytes");
        console.log("Tipo audio:", audioFile.type);
    } else {
        console.log("Audio: No seleccionado");
    }
    
    if (videoFile) {
        console.log("Video:", videoFile.name);
        console.log("Tamaño video:", videoFile.size, "bytes");
        console.log("Tipo video:", videoFile.type);
    } else {
        console.log("Video: No seleccionado");
    }
    console.log("============================");
    
    let mensaje = "Color: " + color + "\n";
    mensaje += "Imagen: " + (imageFile ? imageFile.name : "No seleccionada") + "\n";
    mensaje += "Audio: " + (audioFile ? audioFile.name : "No seleccionado") + "\n";
    mensaje += "Video: " + (videoFile ? videoFile.name : "No seleccionado");
    alert(mensaje);
});

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}