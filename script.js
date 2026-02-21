const courses = document.querySelectorAll('.course-card');
const popup = document.getElementById('passwordPopup');
const enterBtn = document.getElementById('enterBtn');
let selectedCourse = '';

const passwords = {
  arduino: '1234',
  ai: '5678',
  astronomy: 'abcd',
  webdesign: '9999',
  'verbal-intelligence': '5555'
};

// باز شدن پاپ‌آپ
courses.forEach(card => {
  card.addEventListener('click', () => {
    selectedCourse = card.dataset.course;
    popup.style.display = 'flex';
  });
});

// بررسی رمز
enterBtn.addEventListener('click', () => {
  const inputBox = document.getElementById('coursePassword');
  const input = inputBox.value;
  if(input === passwords[selectedCourse]) {
    window.location.href = selectedCourse + '.html';
  } else {
    alert('رمز اشتباه است!');
    inputBox.value = '';
  }
});
