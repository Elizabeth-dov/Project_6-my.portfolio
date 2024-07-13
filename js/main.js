
document.querySelectorAll('.projects__content-more').forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); 
        const parent = item.closest('.projects__accordeon');
        parent.classList.toggle('projects__accordeon--active');
    });
});

