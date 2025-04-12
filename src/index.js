function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#sweet-poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3f2d7e74630cb3758ac3e06t5aof40f8";
  let context =
    "You are a poem expert and love to write short 4 line poems.Please seperate each line with a <br />";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let generatorElement = document.querySelector("#sweet-poem");
  generatorElement.classList.remove("hidden");
  generatorElement.innerHTML = `<div class="generating">⏳Generating a poem about ${instructionsInput.value}</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let generatorPoemElement = document.querySelector("#generate-poem");
generatorPoemElement.addEventListener("submit", generatePoem);
