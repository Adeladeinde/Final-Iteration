// app.js

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Function to fetch projects from an external API and display them on the page
function fetchProjects() {
    $.ajax({
      url: 'https://www.adebaconnector.com/connector-core-magazine/edition-8-2023/',
      method: 'GET',
      success: function(response) {
        // Assuming the API returns an array of project objects
        response.forEach(function(project) {
          $('#project-list').append('<div class="project">' +
                                    '<h3>' + project.title + '</h3>' +
                                    '<p>' + project.description + '</p>' +
                                    '</div>');
        });
      },
      error: function() {
        console.error('Error fetching projects');
      }
    });
  }
  
  // Event listener for form submission
  $('#contact-form').submit(function(event) {
    event.preventDefault();
    // Assuming you want to log the form data for now
    var formData = $(this).serialize();
    console.log('Form data:', formData);
  });
  
  // Call the fetchProjects function when the page is loaded
  $(document).ready(function() {
    fetchProjects();
  });

  