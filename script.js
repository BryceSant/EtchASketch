let bigBox = document.querySelector("#overall-box");
const colours = ["red", "blue", "violet", "pink", "yellow", "orange", "green"]
makeBoxes(20);

bigBox.addEventListener("mouseover", (event) => {
    event.preventDefault();
    let target = event.target;
    target.style["background-color"] = colours[Math.floor(Math.random() * colours.length)];
    console.log(target.style["opacity"])
    if (parseFloat(target.style["opacity"]) !== 1.0) {
        target.style["opacity"] = (parseFloat(target.style["opacity"]) + 0.1).toString();
    }
    console.log(target.style["opacity"])
    



});

function makeBoxes(num) {
    for (let x = 0; x < num; x++) {
        const divContainer = document.createElement("div");

        for(let i = 0; i < num; i++) {
            let rectangleDiv = document.createElement("div");
            rectangleDiv.style["opacity"] = "0.0";
            rectangleDiv.style["border-width"] = "0.05rem";
            rectangleDiv.style["border-style"] = "solid";
            rectangleDiv.classList.add("squares");
            rectangleDiv.style["width"] = `100%`
            rectangleDiv.style["height"] = `${100/num}%`

            divContainer.appendChild(rectangleDiv);

        }
        divContainer.classList.add("square-columns");
        divContainer.style["width"] = `${100/num}%`
        divContainer.style["height"] = `100%`
        bigBox.appendChild(divContainer);
    }

};


