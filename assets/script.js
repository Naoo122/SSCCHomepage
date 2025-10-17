// メニュー開閉
const Menutab = document.getElementById('menutab');
const Menuicon = document.getElementById('menuicon');

if (Menuicon && Menutab) {
  Menuicon.addEventListener('click', () => {
    Menutab.classList.toggle('active');
  });
}

window.batsu = () => {
  if (Menutab) Menutab.classList.remove('active');
};

// 共通ヘッダーとフッターの読み込み
document.addEventListener("DOMContentLoaded", () => {
  fetch("/shared/header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header").innerHTML = data);

  fetch("/shared/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);
});
