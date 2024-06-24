// Esperar a que el contenido de la página esté cargado
document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    
    // Función para manejar el efecto de agrandamiento
    function enlargeImage(index) {
        // Aplicar la clase 'enlarge' a la imagen en el índice dado
        carouselItems[index].querySelector('img').classList.add('enlarge');
        
        // Remover la clase 'enlarge' después de 1 segundo
        setTimeout(function() {
            carouselItems[index].querySelector('img').classList.remove('enlarge');
            
            // Avanzar al siguiente índice
            const nextIndex = (index + 1) % carouselItems.length;
            enlargeImage(nextIndex); // Llamar recursivamente para el siguiente índice
        }, 3000); // 1000 milisegundos = 1 segundo
    }
    
    // Iniciar el efecto de agrandamiento desde el primer índice
    enlargeImage(0);
});
