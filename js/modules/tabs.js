export const tabs = () => {
  const buttons = document.querySelectorAll(".map-button");
  const block = document.querySelector(".map-wrapper");

  function toggleButtonDesc(event) {
      const greenBackground =  "#6ABF4B";
      const blueBackground = "#3877EE";
      const button = event.target;
      const buttonDesc = button.querySelector(".map-button-desc");
      if (buttonDesc.style.display === "none") {
          closeAllLabels();
         buttonDesc.style.display = "block";
          button.style['background-color'] = button.classList.contains("map-button-green") ? greenBackground : blueBackground;
      } else {
          buttonDesc.style.display = "none";
      }
  }

  function closeAllButtonDesc() {
      for (let button of buttons) {
          const buttonDesc = button.querySelector(".map-button-desc");
          button.style['background-color'] = 'unset';
          buttonDesc.style.display = "none";
      }
  }

  for (let button of buttons) {
      button.addEventListener("click", toggleButtonDesc);
  }

  block.addEventListener("click", function(event) {

      if (event.target === block) {
        closeAllButtonDesc();
      }
  });

}
