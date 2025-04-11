/**
 * პირობა იხილეთ HTML ფაილში
 */
const products = [
    {
      id: 1,
      name: "LG OLED TV",
      description: "65-inch OLED 4K Smart TV",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 2,
      name: "Sonos Arc",
      description: "Premium Smart Soundbar",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 3,
      name: "Dyson V15 Detect",
      description: "Cordless Vacuum Cleaner",
      image: "https://fakeimg.pl/150x150",
    },
    {
      id: 4,
      name: "Instant Pot Duo",
      description: "7-in-1 Electric Pressure Cooker",
      image: "https://fakeimg.pl/150x150",
    },
  ];

  document.getElementById(toggleButton).addEventListener('click',function(){
    const newdiv = document.createElement('div')
    newdiv.classList.add('product-list')
    newdiv.innerHTML = `
      <div class="card">
          <div class="card-header">
            <div class="product-info">
              <div class="avatar">
                <img src=${products.image} alt=${products.name}/>
              </div>
              <div class="product-name">
                <h3>LG OLED TV</h3>
                <p class="product-info">65-inch OLED 4K Smart TV</p>
              </div>
            </div>
          </div>
          <div class="card-content">
            <p class="product-id">Product ID: ${products.id}</p>
          </div>
        </div> 
    `
    document.querySelector('.container').appendChild(newdiv)
    const divebi = documument.getElementsByClassName('container')
    const btn = document.getElementsByClassName('toggleButton')
    function myfunc(){
        divebi.classList.toggle('hidden')
    }
    
  })