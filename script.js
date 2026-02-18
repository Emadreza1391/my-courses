// افکت شناور کوچک روی کارت‌ها هنگام حرکت موس
const cards = document.querySelectorAll('.course-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.transform = `translateX(${(x - rect.width/2)/20}px) translateY(${(y - rect.height/2)/20}px) scale(1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateX(0px) translateY(0px) scale(1)';
  });
});

// تغییر رنگ پس‌زمینه هنگام اسکرول
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  document.body.style.background = `linear-gradient(120deg, rgba(15,32,39,${1-scroll/1000}), rgba(32,58,67,${1-scroll/1000}), rgba(44,83,100,${1-scroll/1000}))`;
});
