function makeItVisible() {
    let passwordInput = document.querySelector('.k');
    let eyeIcon = document.querySelector('.eye-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = '&#47;'; 
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = '&#128065;'; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let logo = document.querySelector('.ss .b');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = "scale(1.08)";
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = "scale(1)";
        });
    }
    let headerLinks = document.querySelectorAll('.ss .f');
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

document.addEventListener('DOMContentLoaded', () => {
    let logo = document.querySelector('.ss .h');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = "scale(1.08)";
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = "scale(1)";
        });
    }
    let headerLinks = document.querySelectorAll('.ss .k');
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

document.addEventListener('DOMContentLoaded', () => {
    let logo = document.querySelector('.ss .h');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = "scale(1.08)";
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = "scale(1)";
        });
    }
    let headerLinks = document.querySelectorAll('.w');
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