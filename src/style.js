function generatePoem(event) {
    event.preventDefault();

    new Typewriter('#poem', {
        strings: "Rose are red",
        autoStart: true,
        delay: 1,
        cursor: null,
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem);
