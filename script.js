document.addEventListener("DOMContentLoaded", function () {
  const helloButton = document.getElementById("hello-btn");

  if (helloButton) {
    helloButton.addEventListener("click", function () {
      // نضيف كلاس مؤقت للزر عشان يعطي حركة
      helloButton.classList.add("active");

      // نعرض رسالة أنيقة داخل الصفحة بدل الـ alert
      const msg = document.createElement("div");
      msg.textContent = " Thank you for visiting my website 🌟.";
      msg.className = "popup-message";
      document.body.appendChild(msg);

      // نخفي الرسالة بعد 3 ثواني
      setTimeout(() => {
        msg.remove();
        helloButton.classList.remove("active");
      }, 3000);
    });
  }

  // سكربت الكتابة والمسح (Typing Effect)
  const elements = document.querySelectorAll(".typing");
  elements.forEach(el => {
    let words = JSON.parse(el.getAttribute("data-text"));
    let i = 0, j = 0, currentWord = words[0], isDeleting = false;

    function type() {
      el.textContent = currentWord.substring(0, j);

      if (!isDeleting && j < currentWord.length) {
        j++;
        setTimeout(type, 150);
      } else if (isDeleting && j > 0) {
        j--;
        setTimeout(type, 100);
      } else {
        if (!isDeleting) {
          isDeleting = true;
          setTimeout(type, 1000);
        } else {
          isDeleting = false;
          i = (i + 1) % words.length;
          currentWord = words[i];
          setTimeout(type, 200);
        }
      }
    }

    type();
  });
});