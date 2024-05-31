document.addEventListener("DOMContentLoaded", function() {
    const personalProfileButton = document.getElementById("personal-profile");
    const businessProfileButton = document.getElementById("business-profile");

    personalProfileButton.addEventListener("click", function() {
        personalProfileButton.classList.add("active");
        businessProfileButton.classList.remove("active");
    });

    businessProfileButton.addEventListener("click", function() {
        businessProfileButton.classList.add("active");
        personalProfileButton.classList.remove("active");
    });
});
