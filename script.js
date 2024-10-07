const images = document.querySelectorAll('.master img');
const items = document.querySelectorAll('.item');

const setActive = (elements, element) => {
    elements.forEach(i => {
        i.classList.remove('active')
        
    });
    element.classList.add('active');
};
items.forEach((element, index) => {
    element.addEventListener('click', () => {
        setActive(items, element)
        setActive(images, images[index])
    })
})
