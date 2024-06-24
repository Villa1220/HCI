
document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    
    function enlargeImage(index) {
        carouselItems[index].querySelector('img').classList.add('enlarge');
        
        setTimeout(function() {
            carouselItems[index].querySelector('img').classList.remove('enlarge');
            
        
            const nextIndex = (index + 1) % carouselItems.length;
            enlargeImage(nextIndex); 
        }, 2000); 
    }
    

    enlargeImage(0);
});






