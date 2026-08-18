let screen = document.getElementById('screen');

function append(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = "";
}

function deleteLast() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
  }
}

// Dark / Light Theme Toggle
function toggleTheme() {
  document.body.classList.toggle('light');
  let btn = document.getElementById('theme-toggle');
  btn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  if(!isNaN(e.key) || "+-*/.%()".includes(e.key)) append(e.key);
  if(e.key === 'Enter') calculate();
  if(e.key === 'Backspace') deleteLast();
});