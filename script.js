    // Функция для открытия модального окна
    function openModal(imageSrc) {
      var modal = document.getElementById("myModal");
      var modalImg = document.getElementById("img01");
      modal.style.display = "flex";
      modalImg.src = imageSrc;
  }

  // Функция для увеличения/уменьшения изображения
  function toggleZoom(modal) {
      var img = modal.querySelector(".modal-content");
      img.classList.toggle("zoomed");
  }

  // Закрытие модального окна при клике вне изображения
  document.getElementById("myModal").addEventListener("click", function(event) {
      if (event.target === this) {
          this.style.display = "none";
          this.querySelector(".modal-content").classList.remove("zoomed");
      }
  });