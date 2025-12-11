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