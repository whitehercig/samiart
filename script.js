// Функция для открытия модального окна
function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = imageSrc;
  }
  
  // Функция для закрытия модального окна
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  