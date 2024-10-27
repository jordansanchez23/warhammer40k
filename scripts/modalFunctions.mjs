const modal = document.querySelector("#primarchModal");
const membersCards = document.querySelector(".members-card");

async function getMemberData(primarchs) {
    try {
        const response = await fetch(primarchs);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayPrimarchs(data.primarchs);
    } catch (error) {
        console.error('Error fetching primarch data:', error);
    }
}

const displayPrimarchs = (primarchs) => {
    membersCards.innerHTML = "";
    primarchs.forEach((primarch) => {
        let card = document.createElement("section");
        card.classList.add("member-card");
        card.dataset.name = primarch.primarch;
        card.dataset.image = primarch.image;
        card.dataset.legion = primarch.legion;
        card.dataset.homeworld = primarch.homeworld;
        card.dataset.skills = primarch.skills.join(", ");
        card.dataset.allegiance = primarch.allegiance;
        card.dataset.biography = primarch.biography;
        card.dataset.specialWeapons = primarch.specialWeapons.join(", ");
        card.dataset.notableBattles = primarch.notableBattles.join(", ");
        card.dataset.legionTraits = primarch.legionTraits.join(", ");
        card.dataset.status = primarch.status;
        card.dataset.motto = primarch.motto;

        let name = document.createElement("h2");
        let image = document.createElement("img");
        name.textContent = primarch.primarch;
        image.src = primarch.image;
        image.alt = `Image of ${primarch.primarch}`;
        image.width = 150; 
        image.height = 200; 
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(image);

        card.addEventListener("click", () => {
            showModal(primarch);
        });

        membersCards.appendChild(card);
    });
};

const showModal = (primarch) => {
    document.querySelector("#modalTitle").textContent = primarch.primarch;

    //Customizing Image//
    const modalImage = document.querySelector("#modalImage");
    modalImage.src = primarch.image;
    modalImage.alt = `Image of ${primarch.primarch}`;
    modalImage.style.width = "300px"; 
    modalImage.style.height = "400px";
    modalImage.loading = "lazy"; 

    document.querySelector("#modalLegion").textContent = `Legion: ${primarch.legion}`;
    document.querySelector("#modalHomeworld").textContent = `Homeworld: ${primarch.homeworld}`;
    document.querySelector("#modalSkills").textContent = `Skills: ${primarch.skills}`;
    document.querySelector("#modalAllegiance").textContent = `Allegiance: ${primarch.allegiance}`;
    document.querySelector("#modalBiography").textContent = `Biography: ${primarch.biography}`;
    document.querySelector("#modalSpecialWeapons").textContent = `Special Weapons: ${primarch.specialWeapons}`;
    document.querySelector("#modalNotableBattles").textContent = `Notable Battles: ${primarch.notableBattles}`;
    document.querySelector("#modalLegionTraits").textContent = `Legion Traits: ${primarch.legionTraits}`;
    document.querySelector("#modalStatus").textContent = `Status: ${primarch.status}`;
    document.querySelector("#modalMotto").textContent = `Motto: ${primarch.motto}`;

    modal.showModal();
}

export {getMemberData};