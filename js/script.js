const DEFAULT_SIZE = 16;
let color = "black";

const container = document.querySelector("#container");

// sets active color
function setColor(c) {
    color = c;

    let menu_buttons = document.querySelectorAll(".menu-button");

    menu_buttons.forEach(menu_button => menu_button.classList.remove("active"));

    if (c === "black") {
        document.querySelector(".button-black").classList.add("active");
    } else if (c === "black-soft") {
        document.querySelector(".button-black-soft").classList.add("active");
    } else if (c === "random") {
        document.querySelector(".button-random").classList.add("active");
    }

}

// turns all squares back to white
function clearBoard() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.background = null;
        square.classList.remove("black", "black-10", "black-20", "black-30", "black-40", "black-50", "black-60", "black-70", "black-80", "black-90");
    });
}

// removes the whole grid (deletes all divs in the DOM)
function removeGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.parentNode.removeChild(square);
    });
}

// gets size value from user and calls buildGrid() to create new grid
function changeSize() {
    let size = prompt("Enter size (16-64)", "16");
    if (size === null || size < 4) {
        size = 16;
    } else if (size > 64) {
        size = 64;
    }
    removeGrid();
    buildGrid(size);
}

// builds a new grid with defined size
function buildGrid(size=DEFAULT_SIZE) {
    let square_width = Math.floor(800 / size) - 1;

    container_width = square_width * size + size * 1 + 1;
    container.style.width = `${container_width}px`;
    container.style.height = `${container_width}px`;
    
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const newDiv = document.createElement("div");

            
            newDiv.style.width = `${square_width}px`;
            newDiv.style.height = `${square_width}px`;
            newDiv.classList.add("square");

            if (y === 0) { 
                newDiv.classList.add("top");
            }

            if (x === 0) { 
                newDiv.classList.add("left");
            }

            newDiv.id = `${y}-${x}`;
            container.appendChild(newDiv);

            newDiv.onmouseover = (e) => changeSquareColor(e);
        }
    }
}

// changes color of square under the cursor to current selected color value
function changeSquareColor(event) {
    if (color === "black") {
        // fill square with black color
        event.target.style.background = null;
        event.target.classList.add("black");
    } else if (color === "black-soft") {
        // increase black color by 10%
        if (event.target.classList.contains("black-10")) {
            event.target.classList.remove("black-10");
            event.target.classList.add("black-20");
        } else if (event.target.classList.contains("black-20")) {
            event.target.classList.remove("black-20");
            event.target.classList.add("black-30");
        } else if (event.target.classList.contains("black-30")) {
            event.target.classList.remove("black-30");
            event.target.classList.add("black-40");
        } else if (event.target.classList.contains("black-40")) {
            event.target.classList.remove("black-40");
            event.target.classList.add("black-50");
        } else if (event.target.classList.contains("black-50")) {
            event.target.classList.remove("black-50");
            event.target.classList.add("black-60");
        } else if (event.target.classList.contains("black-60")) {
            event.target.classList.remove("black-60");
            event.target.classList.add("black-70");
        } else if (event.target.classList.contains("black-70")) {
            event.target.classList.remove("black-70");
            event.target.classList.add("black-80");
        } else if (event.target.classList.contains("black-80")) {
            event.target.classList.remove("black-80");
            event.target.classList.add("black-90");
        } else if (event.target.classList.contains("black-90")) {
            event.target.classList.remove("black-90");
            event.target.classList.add("black");
        } else if (event.target.classList.contains("black")) {
            event.target.classList.add("black");
        } else {
            event.target.style.background = null;
            event.target.classList.add("black-10");
        }
    } else {
        // fill square with random color
        let r = Math.floor(Math.random() * 256); 
        let g = Math.floor(Math.random() * 256); 
        let b = Math.floor(Math.random() * 256); 
        event.target.style.background = `rgb(${r}, ${g}, ${b})`;
    }
}

buildGrid();