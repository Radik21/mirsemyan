document.addEventListener('DOMContentLoaded', function() {
    const newElement = document.createElement('div');
    
    document.body.appendChild(newElement);
});

// Получаем кнопку по её классу
const button = document.querySelector('.catalog-button');

// Добавляем обработчик события 'click'
button.addEventListener('click', function() {
    // Находим секцию с семенами цветов
    const flowerSeedsSection = document.querySelector('.flower-seeds');
    
    // Получаем координаты секции
    const sectionPosition = flowerSeedsSection.getBoundingClientRect().top + window.scrollY;

    // Прокручиваем страницу к элементу с семенами цветов с учетом смещения
    window.scrollTo({
        top: sectionPosition - -75, // Смещение на 100 пикселей выше
        behavior: 'smooth' // Плавная прокрутка
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("order-modal");
    const closeModal = document.getElementById("close-modal");
    const orderButtons = document.querySelectorAll(".cart-icon");
    const orderButton = document.getElementById("order-button");
    const notification = document.getElementById("notification");

    // Открытие модального окна
    orderButtons.forEach(button => {
        button.onclick = function(event) {
            event.preventDefault(); // Предотвращаем переход по ссылке
            modal.style.display = "block"; // Показываем модальное окно
        }
    });

    // Закрытие модального окна
    closeModal.onclick = function() {
        modal.style.display = "none"; // Скрываем модальное окно
    }

    // Обработка заказа
    orderButton.onclick = function() {
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;

        if (phone && address) {
            modal.style.display = "none"; // Скрываем модальное окно
            notification.style.display = "block"; // Показываем уведомление

            // Скрываем уведомление через 3 секунды
            setTimeout(() => {
                notification.style.display = "none";
            }, 3000);
        } else {
            alert("Пожалуйста, заполните все поля.");
        }
    }

    // Закрытие модального окна при клике вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

