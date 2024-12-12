document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const question = document.getElementById('question').value; // Получаем значение из поля ввода
    if (question) {
        document.getElementById('successMessage').style.display = 'block'; // Показываем сообщение об успехе
        this.reset(); // Сбрасываем форму
    } else {
        alert('Пожалуйста, введите ваш вопрос.'); // Сообщение об ошибке
    }
});
