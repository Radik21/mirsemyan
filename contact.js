document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const question = document.getElementById('question').value; 
    if (question) {
        document.getElementById('successMessage').style.display = 'block'; 
        this.reset(); 
    } else {
        alert('Пожалуйста, введите ваш вопрос.');
    }
});
