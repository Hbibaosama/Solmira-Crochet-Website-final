

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