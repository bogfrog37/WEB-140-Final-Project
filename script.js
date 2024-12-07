$(document).ready(function() {
  // Function to toggle the sidebar visibility
  function toggleSidebar() {
    $('#sideNav').toggleClass('open');
    $('.content').toggleClass('shifted'); // Move content when sidebar is open
  }

  // Attach toggleSidebar function to hamburger button click event
  $('.hamburger-btn').click(function() {
    toggleSidebar();
  });

  // Image switching functionality
  const images = ['sheep.jpeg', 'Cows.jpeg']; // Add your image paths here
  let currentImageIndex = 0;

  function switchImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    $('#image').attr('src', images[currentImageIndex]); // Using jQuery to update the src attribute
  }

  // Set the interval to switch images every 3 seconds (3000 milliseconds)
  setInterval(switchImage, 3000);

  // Job list hover functionality to show descriptions
  $('.job-list li').hover(function () {
    // Get the description from the 'data-description' attribute
    const description = $(this).data('description');

    // Display the description in the '.job-description' div
    $('.job-description').text(description).fadeIn();
  }, function () {
    // Hide the description when hover ends
    $('.job-description').fadeOut();
  });

  // Add a blue vertical line to the left side of the body content
  $('body').prepend('<div id="left-line"></div>');  // Add left line
});
