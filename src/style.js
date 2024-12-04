function displayPoem(response) {

    console.log("Poem generated");

    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: null,
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "e520df23o0033b9f5bbe4tf4ae4a9b0f";
    let context = "You are a professional romantic poet. Make it short and romantic in English with a translation in Spanish below in italics. The Spanish must rhyme also. Write only a 4-line poem that rhyme in basic html. Do not include the words html. Make sure to follow the user instructions";
    let prompt = `User instructions: Generate a romantic poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem);
