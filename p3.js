document.addEventListener('DOMContentLoaded', () => {
    let logo = document.querySelector('.habiba .br');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = "scale(1.08)";
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = "scale(1)";
        });
    }
    let headerLinks = document.querySelectorAll('.habiba .df a');
    headerLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = "translateY(-3px)";
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = "translateY(0)";
        });
    });
    let searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('mouseenter', () => {
            searchInput.style.transform = "scale(1.02)";
        });
        searchInput.addEventListener('mouseleave', () => {
            searchInput.style.transform = "scale(1)";
        });
    }
});