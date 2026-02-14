// Page fade-in
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Scroll reveal
const elements = document.querySelectorAll(".card, .section h2");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.6s ease";
    observer.observe(el);
});
