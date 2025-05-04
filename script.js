    function openModal(imageSrc) {
      var modal = document.getElementById("myModal");
      var modalImg = document.getElementById("img01");
      modal.style.display = "flex";
      modalImg.src = imageSrc;
  }

  function toggleZoom(modal) {
      var img = modal.querySelector(".modal-content");
      img.classList.toggle("zoomed");
  }

  document.getElementById("myModal").addEventListener("click", function(event) {
      if (event.target === this) {
          this.style.display = "none";
          this.querySelector(".modal-content").classList.remove("zoomed");
      }
  });
