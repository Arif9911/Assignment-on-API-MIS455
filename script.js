async function searchCountry() {
    const countryInput = document.getElementById('countryInput').value;
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryInput}`);
    const data = await response.json();

    const countryContainer = document.getElementById('countryContainer');
    countryContainer.innerHTML = '';

    data.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');

        const countryName = document.createElement('h2');
        countryName.textContent = country.name.common;

        const moreDetailsBtn = document.createElement('button');
        moreDetailsBtn.textContent = 'More Details';
        moreDetailsBtn.addEventListener('click', () => showMoreDetails(country));

        countryCard.appendChild(countryName);
        countryCard.appendChild(moreDetailsBtn);
        countryContainer.appendChild(countryCard);
    });
}

function showMoreDetails(country) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    modal.style.display = 'block';

    modalContent.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <h2><label>${country.name.common}</label></h2>
        <h3><label>Official name: ${country.name.official}</label></h3><br>
        <label><b>Population:</b> ${country.population}</label> <br>
        <label><b>Capital: </b>${country.capital}</label><br>
        <label><b>Continent: </b>${country.continents}</label><br>
        <label><b>Sub Continent: </b>${country.subregion}</label><br> <br>
        <img src="${country.flags.png}" alt="${country.name.common} Flag">
    `;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
