
let currentSlideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlides(index) {
    const totalSlides = document.querySelectorAll('.image-container').length;
    const slidesToShow = 3;

    if (index >= totalSlides - slidesToShow + 1) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - slidesToShow;
    } else {
        currentSlideIndex = index;
    }

    slides.style.transform = `translateX(${-100 * currentSlideIndex}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

function currentSlide(index) {
    showSlides(index);
}


showSlides(currentSlideIndex);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index));
});





document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function() {
        const imageName = this.getAttribute('data-image');
        document.getElementById('project-image').src = `/images/${imageName}`;
        
  
        document.querySelectorAll('.project').forEach(p => p.classList.remove('highlighted'));
        
   
        this.classList.add('highlighted');
    });
});




function openModal() {
    document.getElementById('contactModal').style.display = "block";
}

function closeModal() {
    document.getElementById('contactModal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('contactModal')) {
        closeModal();
    }
}
