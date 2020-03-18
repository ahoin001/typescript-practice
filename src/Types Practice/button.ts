// * '!' Lets TS know that this element will exsist
const button = document.getElementById('myButton')!;

// * W/o '!' above, TS will alert is button may be null
button.addEventListener('click', () => {
    console.log('The button was clicked on page')
})