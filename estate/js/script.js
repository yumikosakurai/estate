const swiper = new Swiper('.swiper', {
  loop: true, // 画像が無限にループ

  pagination: {
    el: '.swiper-pagination',
    clickable: true, // 丸をクリックできる
  },

  navigation: {
    nextEl: '.swiper-button-next', // → ボタン
    prevEl: '.swiper-button-prev', // ← ボタン
  },

  autoplay: {
    delay: 3000, // 自動再生したい場合のみ
  },
});



// --- 以下にモーダルのコードを追加 ---
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const modalImg = document.getElementById("modalImg");
  const modalText = document.getElementById("modalText");
  const cards = document.querySelectorAll(".js-open-modal");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      modalImg.src = card.dataset.img;
      modalText.textContent = card.dataset.text;
      modal.style.display = "block";
    });
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});