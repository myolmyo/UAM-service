document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.onclick = function() {
            this.nextElementSibling.style.display = 
                this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
        };
    });
});