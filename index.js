
const input= document.getElementById('input')

function addEventListener() {
    function clickAlert () {
        alert('I was clicked!');
    }


input.addEventListener('click', clickAlert);
}