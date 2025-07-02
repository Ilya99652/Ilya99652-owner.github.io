document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
});

function initNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      switchSection(this);
    });
  });
}

function switchSection(clickedLink) {
  document.querySelectorAll('.nav-link, .section').forEach(el => {
    el.classList.remove('active');
  });

  clickedLink.classList.add('active');
  const targetId = clickedLink.getAttribute('href').substring(1);
  document.getElementById(targetId).classList.add('active');
  
  document.getElementById(targetId).scrollIntoView({
    behavior: 'smooth'
  });
}