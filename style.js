window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.querySelector(".principal").style.transform = `translateY(${distance * 2}px)`;
});


