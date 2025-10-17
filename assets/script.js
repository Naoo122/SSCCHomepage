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
