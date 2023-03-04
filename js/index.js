const btnBurguer = document.getElementById('btnMenu')
const modal = document.getElementById('myModal')
const closeModal = document.getElementById('closeModalBton')
console.log(btnBurguer);
console.log(modal);
console.log(closeModal);

btnBurguer.onclick = function () {
  modal.style.display = "block"
}

closeModal.onclick = function () {
  modal.style.display = "none"
}

window.onclick = function (e) {
  if (e.target === modal) modal.style.display = "none"
}