const toggleButtons = document.querySelectorAll('.toggle');

for (let i = 0; i < toggleButtons.length; i++) {
  const toggleButton = toggleButtons[i];
  const content = toggleButton.nextElementSibling;

  toggleButton.addEventListener('click', function() {
    content.classList.toggle('hidden');
  });
}