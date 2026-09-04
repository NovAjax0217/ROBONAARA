const cursor = document.querySelector(".custom-cursor");

if (cursor) {

    document.addEventListener("mousemove", function(e) {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

    const hoverElements = document.querySelectorAll(
        "a, button, .btn, .member, .member-card, .info-card, .eng-card, .step"
    );

    hoverElements.forEach(function(element) {

        element.addEventListener("mouseenter", function() {
            cursor.classList.add("hover");
        });

        element.addEventListener("mouseleave", function() {
            cursor.classList.remove("hover");
        });

    });

}
