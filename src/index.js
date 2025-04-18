function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3f2d7e74630cb3758ac3e06t5aof40f8";
  let context =
    "You are a quote expert and love to write short unique motivational quote.Please seperate each line with a <br />";
  let prompt = `Generate a quote about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let generatorElement = document.querySelector("#quote");
  generatorElement.classList.remove("hidden");
  generatorElement.innerHTML = `<div class="generating">⏳Generating a quote about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let generatorQuoteElement = document.querySelector("#generate-quote");
generatorQuoteElement.addEventListener("submit", generateQuote);
