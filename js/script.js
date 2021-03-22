const bt_menu = document.querySelector('#bt_menu');
const menu = document.querySelector('#menu');
const bg_menu = document.querySelector('.bg_menu');
const icon_bt_menu = document.querySelector('#icon_bt_menu');

bt_menu.addEventListener("click", () => {
  if (menu.style.left == "-250px") {
    menu.style.left = "0";
    bg_menu.style.display = "block"
    icon_bt_menu.classList.remove("fa-bars");
    icon_bt_menu.classList.add("fa-times");
  } else{ menu.style.left = "-250px";
    bg_menu.style.display = "none"
    icon_bt_menu.classList.remove("fa-times");
    icon_bt_menu.classList.add("fa-bars");
  }
});
bg_menu.addEventListener("click", () => {
  menu.style.left = "-250px";
  bg_menu.style.display = "none"
  icon_bt_menu.classList.remove("fa-times");
  icon_bt_menu.classList.add("fa-bars");
});