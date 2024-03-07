document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const plusIcon = button.querySelector('#plus-icon');
      const minusIcon = button.querySelector('#minus-icon');
      const answer = button.parentElement.nextElementSibling; // Get the parent's next sibling element (answer)

      plusIcon.classList.toggle('hide-icon'); // Toggle visibility of plus icon
      minusIcon.classList.toggle('hide-icon'); // Toggle visibility of minus icon
      answer.classList.toggle('show-answer'); // Toggle visibility of answer
    });
  });
});
