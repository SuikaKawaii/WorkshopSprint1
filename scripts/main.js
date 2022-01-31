import {url1} from "./url.js";
import {changeTheme} from "./theme.js";
import {getCountry} from "./getCountries.js";
import {showCards, showModal} from "./showCards.js";
import {search} from "./search.js";

const theme = document.getElementById("theme")
const showCountry = document.getElementById('country');
const btnFilter = document.getElementById('dropdownMenuButton1');
const searchInput = document.getElementById("input");

document.addEventListener('DOMContentLoaded', async () => {
    const data = await getCountry(url1);
    showCards(data, showCountry);
})
btnFilter.addEventListener('click', async (e) => {
    const filterR = e.target.classList.contains('dropdown-item')
    const region = e.target.id
    if (filterR) {
        const data = await getCountry(url1)
        console.log(data)
        let filterRegion = data.filter(c => c.region.toLocaleLowerCase() === region.toLocaleLowerCase());
        showCards(filterRegion, showCountry)
    }
})

theme.addEventListener('click', () => {
    changeTheme()
})
showCountry.addEventListener('click', async (e) => {
    console.log(e)
    const data = await getCountry(url1);
    if (e.target.classList.contains('mostrar')) {
        let idM = e.target.id;
        showModal(data, idM)
    }

})
searchInput.addEventListener('keyup', async () => {
    const data = await getCountry(url1);
    search(data, showCountry);    
})