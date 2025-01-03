function displayPoem(response) {

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
    let context = "You are a professional romantic poet. Make it short and romantic in English, add a </br> element, with a translation in Spanish below in italics. The Spanish must rhyme also. Write only a 4-line poem that rhyme and must be in basic html. Do not include the words html. Sign with SheCodes AI a the very body inside a <strong></strong> element. The poem though is not in bold. Make sure to follow the user instructions";
    let prompt = `User instructions: Generate a romantic poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">🖋️ Writing beautiful poetry for you about ${instructionsInput.value}!</div>`;

    axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem);
