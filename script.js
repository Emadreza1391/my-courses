const courses = document.querySelectorAll('.course-card');
const popup = document.getElementById('passwordPopup');
const enterBtn = document.getElementById('enterBtn');
const closeBtn = document.getElementById('closePopup');
let selectedCourse = '';

const passwords = {
  arduino: '1234',
  ai: '5678',
  astronomy: 'abcd',
  webdesign: '9999',
  'verbal-intelligence': '5555',
  upload : 0000,
  support : 0000
};

// باز شدن پاپ‌آپ هنگام کلیک روی کارت
courses.forEach(card => {
  card.addEventListener('click', () => {
    selectedCourse = card.dataset.course;
    popup.style.display = 'flex';
  });
});

// بستن پاپ‌آپ
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  document.getElementById('coursePassword').value = '';
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

// بستن پاپ‌آپ با ESC
document.addEventListener('keydown', (e) => {
  if(e.key === "Escape") {
    popup.style.display = 'none';
    document.getElementById('coursePassword').value = '';
  }
});

