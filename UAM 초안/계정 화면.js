document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const profileIcon = document.getElementById('profileIcon');
    const nameSection = document.getElementById('nameSection');

    dropdownButton.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    dropdownMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            dropdownButton.innerHTML = `${e.target.dataset.value} <i class="icon-user"></i>`;
            dropdownMenu.style.display = 'none';
        }
    });

    document.addEventListener('click', function(e) {
        if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    profileIcon.addEventListener('click', function() {
        window.location.href = '계정 화면 - 사람 모양.html';
    });

    nameSection.addEventListener('click', function() {
        window.location.href = '계정 화면 - 이름.html';
    });
});
