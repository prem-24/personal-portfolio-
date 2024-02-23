document.addEventListener("DOMContentLoaded", function() {
  let viewBtn = document.querySelector(".view-btn");
  let sectionProjects = document.querySelector(".section-projects-1");

  viewBtn.addEventListener("click", function() {
    // Toggle the visibility of the content
    if (sectionProjects.style.display === "none") {
      sectionProjects.style.display = "block";
      viewBtn.textContent = "Minimize"; // Change button text to "Minimize"
    } else {
      sectionProjects.style.display = "none";
      viewBtn.textContent = "View More"; // Change button text back to "View More"
    }
  });
});