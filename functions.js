  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleBtn");
    const closeBtn = document.getElementById("closeBtn");
    const navList = document.getElementById("navList");

   

    
    toggleBtn.addEventListener("click", function () {
      navList.classList.toggle("translate-x-full");
    closeBtn.classList.toggle("hidden");
    });

    closeBtn.addEventListener("click", function () {
      navList.classList.add("translate-x-full");
      closeBtn.classList.add("hidden");
    });
  });