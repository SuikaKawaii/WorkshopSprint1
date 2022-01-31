
const template = document.getElementById('template-card').content
const fragment = document.createDocumentFragment();
const modal = document.querySelector('.modal-body');

export const showCards = (data, showCountry) =>{
    showCountry.innerHTML = ''
    data.forEach(c =>{
        const {id, country, population, region, capital, image} = c;
        template.querySelector('h5').textContent = country;
        template.querySelector('img').setAttribute('src', image);
        template.querySelector('img').setAttribute('id', id);
        template.querySelector('#population').textContent = population;
        template.querySelector('#region').textContent = region;
        template.querySelector('#capital').textContent = capital;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);

    })
    showCountry.appendChild(fragment);
    
    // showCountry.addEventListener('click',(e)=>{
    //     console.log(e)
    // })
}
export const showModal = (data, idM) =>{
    console.log(modal)
    modal.innerHTML = '';
    data.forEach(c =>{        
        const {id, country, population, region, capital, image, description} = c;        
        if(idM == id){            
            modal.innerHTML += `         
            
                <img id="" src="${image}" alt="" class="img-thumbnail my-4 mostrar" style=" height:200px; width:100%">
                <h5>${country}</h5>
                <h6 id="population">${population}</h6>
                <h6 id="region">${region}</h6>
                <h6 id="capital">${capital}</h6>
                <p id="descripcion">${description}</p>                  
            `
        }
    })
}






