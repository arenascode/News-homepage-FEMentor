const btnBurguer = document.getElementById('btnMenu')
const modal = document.getElementById('myModal')
const closeModal = document.getElementById('closeModalBton')
console.log(btnBurguer);
console.log(modal);
console.log(closeModal);

btnBurguer.onclick = function () {
  modal.style.display = "block"
  setTimeout(() => {
    modal.style.opacity= 1;
  }, 10)
}

closeModal.onclick = async function () {
  modal.style.opacity = 0;
  setTimeout(() => {
  modal.style.display = "none"
  }, 500);
}

window.onclick = function (e) {
  if (e.target === modal) {
  modal.style.opacity = 0;
  setTimeout(() => {
    modal.style.display = "none";
  }, 600);
}
}

window.addEventListener('resize', function () {
  let container = document.querySelector('container')
  if (window.innerWidth >= 1440) {
    
  }
})
console.log(window.innerWidth);