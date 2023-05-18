const theme = document.getElementById("button-theme");
const body = document.querySelector("body");
const whiteTheme = document.querySelector(".button");

theme.addEventListener("click", () => {
    const darkThemeTrue = body.classList.contains("dark-theme");
    console.log(darkThemeTrue);

    body.classList.toggle("dark-theme");

    if(darkThemeTrue) {
        whiteTheme.setAttribute("src", "src/imagens/sun.png");
    } else {
        whiteTheme.setAttribute("src", "src/imagens/moon.png");
    }
});
