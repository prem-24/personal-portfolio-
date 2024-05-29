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

  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    sendEmail(); // Call the sendEmail function
    resetForm(); // Call the resetForm function
  });
});

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "prem2452000@gmail.com",
    Password: "612B8B9725C34BEB5D367CF20416F427D951",
    To: 'prem24052000@gmail.com',
    From: document.querySelector('#email').value,
    Subject: "This is the subject",
    Body: "Name: " + document.querySelector('#name').value + "<br>Email: " + document.querySelector('#email').value + "<br>Message: " + document.querySelector('#message').value
  }).then(
    message => alert(message)
  );
}

function resetForm() {
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#message').value = '';
}
