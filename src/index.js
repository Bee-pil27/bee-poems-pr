function showPoem(event) {
  event.preventDefault();

  new Typewriter("#sweet-poem", {
    strings: "Gods plan will always prevail",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let generatorPoemElement = document.querySelector("#generate-poem");
generatorPoemElement.addEventListener("submit", showPoem);
