

function handleHomeSearch(event) {
    if (event.key === "Enter") {
        let searchValue = event.target.value.trim();
        if (searchValue !== "") {
            window.location.href = "product.html?search=" + encodeURIComponent(searchValue);
        }
    }
}
function filterProducts() {
    let searchInput = document.getElementById('productSearch');
    if (!searchInput) return;

    let filter = searchInput.value.toLowerCase().trim();
    let cards = document.querySelectorAll('.product-card');
    let noResultsMsg = document.getElementById('noResultsMsg');
    let hasResults = false;

    cards.forEach(card => {
        let productName = card.querySelector('h3 a').textContent.toLowerCase();

        if (productName.includes(filter)) {
            card.style.display = ""; 
            hasResults = true;
        } else {
            card.style.display = "none"; 
        }
    });
    if (hasResults) {
        noResultsMsg.style.display = "none";
    } else {
        noResultsMsg.style.display = "block";
    }
}
window.addEventListener('DOMContentLoaded', () => {
    let searchInput = document.getElementById('productSearch');
    if (searchInput) {
        let params = new URLSearchParams(window.location.search);
        let searchWord = params.get('search');
        if (searchWord) {
            searchInput.value = searchWord;
            filterProducts(); 
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    let cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = "translateY(-8px) scale(1.02)";
            card.style.boxShadow = "0 15px 30px rgba(72, 41, 41, 0.25)"; 
            card.style.filter = "brightness(1.05)"; 
            

            let img = card.querySelector('img');
            if(img) img.style.transform = "scale(1.03)";
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = "translateY(0) scale(1)";
            card.style.boxShadow = "none";
            card.style.filter = "brightness(1)";
            
            let img = card.querySelector('img');
            if(img) img.style.transform = "scale(1)";
        });
    });
});





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