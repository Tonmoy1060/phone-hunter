const inputPhoneButon = () => {
    const searchBox = document.getElementById('search-input').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchBox}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data =>  phoneList(data.data));
}
const phoneList = (phones) => {
    for (let phone of phones){
        const allCards = document.getElementById('cards');
        const div = document.createElement('div');
        div.classList.add("col-md-4")
        div.innerHTML = `
            
                    <div class="card h-100">
                        <img class="w-50" src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Brand: ${phone.brand}</h5>
                            <p class="card-text">Name: ${phone.phone_name}</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" onclick="phoneDetails('${phone.slug}')" class="btn btn-primary">Details</a>
                        </div>
                    </div>
        `;
        allCards.appendChild(div);

    }
}
const phoneDetails = (id) => {
    console.log(id)
}