// メニュー開閉
document.addEventListener("DOMContentLoaded", () => {
  const Menutab = document.getElementById('menutab');
  const Menuicon = document.getElementById('menuicon');
  const Batsu = document.getElementById('batsu');

  if (Menuicon && Menutab) {
    Menuicon.addEventListener('click', () => {
      Menutab.classList.toggle('active');
    });
  }

  if (Batsu && Menutab) {
    Batsu.addEventListener('click', () => {
      Menutab.classList.remove('active');
    });
  }
/*
  // 共通ヘッダーとフッターの読み込み
  fetch("../shared/header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header").innerHTML = data);

  fetch("../shared/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);
    */
});
