function filterCharacters() {
    const planetFilter = document.getElementById("filterPlanet").value.toLowerCase();
    const speciesFilter = document.getElementById("filterSpecies").value.toLowerCase();
    
    document.querySelectorAll("#characterList li").forEach(li => {
        const planet = li.getAttribute("data-planet").toLowerCase();
        const species = li.getAttribute("data-species").toLowerCase();
        
        if ((planet.includes(planetFilter) || planetFilter === "") &&
            (species.includes(speciesFilter) || speciesFilter === "")) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    });
}

function resetFilters() {
    document.getElementById("filterPlanet").value = "";
    document.getElementById("filterSpecies").value = "";
    document.querySelectorAll("#characterList li").forEach(li => {
        li.style.display = "block";
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("/characters");
    const characters = await response.json();

    const planetFilter = document.getElementById("planetFilter");
    const speciesFilter = document.getElementById("speciesFilter");
    const characterTable = document.getElementById("characterTable");

    const planets = [...new Set(characters.map(c => c.homeworld))];
    const species = [...new Set(characters.map(c => c.species))];

    planets.forEach(planet => {
        let option = new Option(planet, planet);
        planetFilter.appendChild(option);
    });

    species.forEach(specie => {
        let option = new Option(specie, specie);
        speciesFilter.appendChild(option);
    });

    function filterCharacters() {
        const planet = planetFilter.value;
        const specie = speciesFilter.value;

        const filtered = characters.filter(c =>
            (planet === "" || c.homeworld === planet) &&
            (specie === "" || c.species === specie)
        );

        renderTable(filtered);
    }

    function resetFilters() {
        planetFilter.value = "";
        speciesFilter.value = "";
        renderTable(characters);
    }

    function renderTable(data) {
        characterTable.innerHTML = data.map(c => `
            <tr>
                <td>${c.name}</td>
                <td>${c.height} cm</td>
                <td>${c.mass} kg</td>
                <td>${c.eye_color}</td>
                <td>${c.homeworld}</td>
                <td>${c.species}</td>
            </tr>
        `).join("");
    }

    planetFilter.addEventListener("change", filterCharacters);
    speciesFilter.addEventListener("change", filterCharacters);

    renderTable(characters);
});

