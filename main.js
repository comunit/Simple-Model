// get modal element
var modal = document.getElementById('simpleModal');
// get open button
var modalBtn = document.getElementById('modalBtn');
//get the close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// Lisen for open click
modalBtn.addEventListener('click', openModal);
//listen for close click
closeBtn.addEventListener('click', closeModal);
//listen for outside click
window.addEventListener('click', clickOutside);
//function to open modal
function openModal() {
	modal.style.display = 'block';
}

//function to close modal
function closeModal() {
	modal.style.display = 'none';
}

//function to close modal if outside click
function clickOutside(e) {
    if(e.target == modal) {
     modal.style.display = 'none';
    }
}


