document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".info-box, .form-section");

  function animateOnScroll() {
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  // Запускаем анимацию сразу при загрузке
  animateOnScroll();

  // И при скролле страницы
  window.addEventListener("scroll", animateOnScroll);
});

// Обработка формы (простейшая, чтобы форма не отправлялась и показывала сообщение)
function handleSubmit(event) {
  event.preventDefault();

  alert("Дякуємо за вашу заявку! Ми зв'яжемося з вами найближчим часом.");

  // Можно сбросить форму
  event.target.reset();

  return false; // Чтобы не перезагружать страницу
}
