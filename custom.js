// take input button 
const inputPhoneButon = () => {
    document.getElementById('cards').innerHTML = '';
    document.getElementById('details').innerHTML = '';
    document.getElementById('mainFeatures').innerHTML = '';
    const searchBox = document.getElementById('search-input').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchBox}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data =>  {
        console.log(data.data.length)
        if(data.data.length == 0){
            phoneList2(data.data)
            
        }
        else{
            phoneList(data.data)
        }
    });
    document.getElementById('search-input').value = '';
}
// all phone show
const phoneList = (phones) => {
    const topPhones = phones.slice(0, 20);
    for (let phone of topPhones){
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
// phone notfound part
const phoneList2 = () => {
        const allCards = document.getElementById('cards');
        const div = document.createElement('div');
        div.innerHTML = `
            
                    <h4 class="text-center w-50 mx-auto text-danger p-1 rounded bg-black"> Search With Correct Name </h4>
        `;
        allCards.appendChild(div);
}
// get phones id
const phoneDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.data));
}
// show phone details
const displayDetails = (allData) => { 
    const phoneDetails = document.getElementById('details');
    const phoneFeatures = document.getElementById('mainFeatures');
    // const phoneOthers = document.getElementById('others');
    phoneFeatures.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 g-4 p-4 my-4 mb-4">
    <div class="col ">
      <div class="card">
        <div class="card-body ">
            <h4><b>Main features</b></h4>
            <h6>
                <b>STORAGE:</b> ${allData.mainFeatures.storage}
            </h6>
            <h6>
                <b>DISPLAY:</b> ${allData.mainFeatures.displaySize}
            </h6>
            <h6>
                <b>CHIPSET:</b> ${allData.mainFeatures.chipSet}
            </h6>
            <h6>
                <b>MEMORY:</b> ${allData.mainFeatures.memory}
            </h6>
            <h6>
                <b>SENSOR:</b> ${allData.mainFeatures.sensors[0]}, ${allData.mainFeatures.sensors[1]}, ${allData.mainFeatures.sensors[2]}, ${allData.mainFeatures.sensors[3]}, ${allData.mainFeatures.sensors[4]}, ${allData.mainFeatures.sensors[5]}
            </h6>
        </div>
      </div>
    </div>
    <div class="col ">
      <div class="card">
        <div class="card-body ">
            <h4><b>Other's</b></h4>           
    <h6>
        <b>BLUETOOTH:</b> ${allData.others.Bluetooth}
    </h6>
    <h6>
        <b>GPS:</b> ${allData.others.GPS}
    </h6>
    <h6>
        <b>NFC:</b> ${allData.others.NFC}
    </h6>
    <h6>
        <b>RADIO:</b>  ${allData.others.Radio}
    </h6>
    <h6>
        <b>USB:</b> ${allData.others.USB}
    </h6>
    <h6>
        <b>WLAN:</b> ${allData.others.WLAN}
    </h6>
        </div>
      </div>
    </div>
</div>
    `;
    phoneDetails.innerHTML = `
    <div class="card ms-5 mt-4 p-3 h-100" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-5">
              <img src="${allData.image}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-7">
              <div class="card-body">
                  <h1>
                      ${allData.brand}
                  </h1>
                  <h3>
                      ${allData.name}
                  </h3>
                  <h5 class="py-2">
                      Release: ${allData.releaseDate}
                  </h5>
              </div>
            </div>
        </div>
    </div>
    `;
}