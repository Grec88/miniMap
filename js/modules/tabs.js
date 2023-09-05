export const tabs = () => {
  const block = document.querySelector(".map-wrapper");
  const buttons = block.querySelectorAll(".map-button");
  const buttonDescs = block.querySelectorAll(".map-button-desc");

  function toggleButtonDesc(event) {
    const button = event.target;

    if (button.classList.contains("map-button")) {
      const buttonDesc = button.querySelector(".map-button-desc");
      const greenBackground = "#6ABF4B";
      const blueBackground = "#3877EE";

      if (!buttonDesc.classList.contains('map-button-desc-active')) {
        closeAllButtonDesc();
        buttonDesc.classList.add('map-button-desc-active');
        button.style["background-color"] =
          button.classList.contains("map-button-green")
            ? greenBackground
            : blueBackground;
      } else {
        buttonDesc.classList.remove('map-button-desc-active');
        button.style["background-color"] = "unset";
      }
    } else{
    closeAllButtonDesc();
    }
  }

  function closeAllButtonDesc() {

    for (let i = 0; i < buttons.length; i++) {
      buttonDescs[i].classList.remove('map-button-desc-active');
      buttons[i].style["background-color"] = "unset";
    }
  }

  block.addEventListener("click", toggleButtonDesc);
};
