


const options = {
    root: null,
    threshold: 0.9,

}




const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        let brasilImage = entry.target.querySelector("img")

 

        if (entry.isIntersecting) {
            brasilImage.src = brasilImage.getAttribute('data-src');
        } else {
            brasilImage.src = 'img/loading.jpg';
        }
    });
} , options);




document.querySelectorAll('.brasil_list li').forEach(item => {
    observer.observe(item);
});




