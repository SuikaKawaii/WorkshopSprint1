    
export function search(data){
    let  cardContainer = document.getElementById("country")
    let cards = cardContainer.getElementsByClassName("card");
    // var els = document.querySelectorAll(".el");
    let input= document.getElementById("input").value
    let i 
    console.log(input)
    data.forEach(countryF => {
        let title = cards[i].querySelector(".card-body h5.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    });
  
    

    
    
}