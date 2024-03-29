const modals = document.querySelector(".modal");
const modalContainer = modals.querySelectorAll(".modal-container");
let addressModal=Array.from(document.getElementsByClassName('address-modal'));

modalContainer.forEach((item) => {
  const buttonId = item?.dataset?.button;
  const button = document?.getElementById(buttonId);
  const closeButton = item?.querySelector(".close-button");
  const modalContent = item?.querySelector(".modal-content");

  const close = () => {
    document.documentElement.style.overflow = "";
    item.style.visibility = "hidden";
    item.style.opacity = "0";
  };
  const open = () => {
    item.style.visibility = "visible";
    item.style.opacity = "1";
    document.documentElement.style.overflow = "hidden";
  };

  button?.addEventListener("click", open);
  item?.addEventListener("click", close);
  closeButton?.addEventListener("click", close);
  modalContent?.addEventListener("click", (e) => e.stopPropagation());
});

addressModal.forEach((item)=>{
  item.addEventListener('click',function () {
    document.querySelector('.address-modal-modal').style.visibility='visible';
    document.querySelector('.address-modal-modal').style.opacity='1';
  })
})