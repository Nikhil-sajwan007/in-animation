
// Function to animate elements when they come into view
function animation(selector, animationClass) {
    let elements = [].slice.call(document.querySelectorAll(selector));

    if ("IntersectionObserver" in window) {
        let observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        });

        elements.forEach(function(element) {
            observer.observe(element);
        });
    }
}

// Apply animation to elements with .slide-left class
animation(".slide-left", "active-animation");
