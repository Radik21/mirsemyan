document.addEventListener('DOMContentLoaded', function() {
    const newElement = document.createElement('div');
    
    document.body.appendChild(newElement);
});


const button = document.querySelector('.catalog-button');


button.addEventListener('click', function() {
    const flowerSeedsSection = document.querySelector('.flower-seeds');
    
    const sectionPosition = flowerSeedsSection.getBoundingClientRect().top + window.scrollY;

    
    window.scrollTo({
        top: sectionPosition - -75, 
        behavior: 'smooth' 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("order-modal");
    const closeModal = document.getElementById("close-modal");
    const orderButtons = document.querySelectorAll(".cart-icon");
    const orderButton = document.getElementById("order-button");
    const notification = document.getElementById("notification");

    orderButtons.forEach(button => {
        button.onclick = function(event) {
            event.preventDefault(); 
            modal.style.display = "block"; 
        }
    });

    
    closeModal.onclick = function() {
        modal.style.display = "none"; 
    }

    
    orderButton.onclick = function() {
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;

        if (phone && address) {
            modal.style.display = "none"; 
            notification.style.display = "block"; 

            setTimeout(() => {
                notification.style.display = "none";
            }, 3000);
        } else {
            alert("Пожалуйста, заполните все поля.");
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});






document.addEventListener('DOMContentLoaded', function() {
    const flowerCards = document.querySelectorAll('.flower-card');
    
    
    const flowerModal = document.getElementById('flower-modal');
    const closeFlowerModalButton = document.getElementById('close-flower-modal');
    const modalFlowerTitle = document.getElementById('modal-flower-title');
    const modalFlowerDescription = document.getElementById('modal-flower-description');
    const modalFlowerPrice = document.getElementById('modal-flower-price');
    const modalFlowerImage = document.createElement('img'); 
    modalFlowerImage.classList.add('modal-flower-image'); 
    flowerModal.querySelector('.modal-content').appendChild(modalFlowerImage); 

    
    flowerCards.forEach(card => {
        const flowerImage = card.querySelector('.flower-image');
        const flowerTitle = card.querySelector('.flower-title');

        function openModal() {
            modalFlowerTitle.textContent = card.dataset.flowerName;
            modalFlowerDescription.textContent = card.dataset.flowerDescription;
            modalFlowerPrice.textContent = 'Цена: ' + card.dataset.flowerPrice + ' руб.';
            modalFlowerImage.src = card.dataset.flowerImage; 
            flowerModal.style.display = 'block';
        }


        flowerImage.addEventListener('click', openModal);
        flowerTitle.addEventListener('click', openModal);
    });


    closeFlowerModalButton.onclick = function() {
        flowerModal.style.display = 'none';
        modalFlowerImage.src = ''; 
    };


    window.onclick = function(event) {
        if (event.target === flowerModal) {
            flowerModal.style.display = 'none';
            modalFlowerImage.src = ''; 
        }
    };
});
