import { getMemberData } from "./modalFunctions.mjs";

const closeModalButton = document.querySelector("#closeModal");;

//Close the modal
closeModalButton.addEventListener("click", () => {
    const modal = document.querySelector("#primarchModal");
    if (modal) {
        modal.close();
    } else {
        console.error('Modal not found');
    }
});


const primarchs = "/data/primarchs.json";
getMemberData(primarchs);

//Display between grid or list //
const listDisplay = document.querySelector("#grid-list");
const cardsArea = document.querySelector("#cards-area");

listDisplay.addEventListener("click", () => {
    cardsArea.classList.toggle("list");
});
