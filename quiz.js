function checkAnswer() {
  const correctAnswer = "4"; // Replace with the correct answer for your quiz
  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  const feedback = document.getElementById("feedback");

  if (userAnswer) {
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Incorrect. Try again.";
      feedback.style.color = "red";
    }
  } else {
    feedback.textContent = "Please select an answer.";
    feedback.style.color = "orange";
  }
}

// Add an event listener to the "Submit Answer" button
const submitAnswer = document.getElementById("submit-answer");
submitAnswer.addEventListener("click", checkAnswer);
