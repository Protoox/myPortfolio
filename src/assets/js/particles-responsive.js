window.addEventListener('resize', resizeParticlesContainer);

function resizeParticlesContainer() {
  var particlesContainer = document.getElementById('particles-js');
  particlesContainer.style.height = window.innerHeight + 'px';
}

// Llama a resizeParticlesContainer al cargar la página para asegurarte de que el contenedor tenga el tamaño correcto desde el principio.
window.onload = resizeParticlesContainer;