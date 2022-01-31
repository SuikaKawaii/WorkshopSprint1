    
export function search(data, showCountry){
    let input = document.getElementById("input").value    
    data.forEach(countryF => {        
        const {
            id,
            country,
            population,
            region,
            capital,
            image
        } = countryF
        let searched = country.toLocaleLowerCase();        
        if (searched.indexOf(input) !== -1) {            
            showCountry.innerHTML = ""
            showCountry.innerHTML += `
            <div class="card">
            <div class="card-body">
                <a href="#exampleModal" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img id="${id}" src="${image}" alt="" class="img-thumbnail my-4 mostrar" style=" height:200px; width:343px">
                </a>
                <h5>${country}</h5>
                <h6 id="population">${population}</h6>
                <h6 id="region">${region}</h6>
                <h6 id="capital">${capital}</h6>
            </div>
        </div>`
        } else {
            console.log('no encontrado')
        }
    });
  
    

    
    
}