const search = document.getElementById('search')
const matchList = document.getElementById('match-list')


const api_url = 'https://api1.binance.com/api/v3/ticker/price'
const buscadatos = async  precios => {
    const response = await fetch('https://api1.binance.com/api/v3/ticker/price');
    const datos = await response.json();
    
    let matches = datos.filter(dato =>{
        const regex = new RegExp(`^${precios}`, 'gi');
        return dato.symbol.match(regex) /*|| dato.price.match(regex)*/;
    });
    console.log(matches);

    if(precios.length === 0 )
    {
        matches = [];
        matchList.innerHTML = '';
    }
    outputHtml(matches);


};

// Show results in html
const outputHtml = matches => 
{
    if (matches.length > 0) 
    {
        const html = matches.map(match => `
            <div class="card card-body mb-1">
              <h4>${match.symbol} <span class="text-primary">${match.price}</span>    <button id="${match.symbol}" type="button" onclick="addCosas()" class="btn btn-secondary">Add</button>

              </h4>
            </div>
        
        `)
        .join('');
    matchList.innerHTML = html;   
    }
}
//Add crypto to a Array
/* const numAdd = [];
const add = () => {
    const enviarTuCrypto = Array();
    let ident = event.target.id;
    console.log(ident);
    fetch(api_url)
        .then(response => response.json())
        .then(binancePrice => {
            binancePrice;

            let nuDeIn = binancePrice.findIndex((objeto, indice, cosas) => {
                return objeto.symbol == ident;
            });
            numAdd.push(nuDeIn)
            console.log(numAdd);
            matchList.innerHTML = '';

        });

} */
//________________
 // representa una moneda cripto
 class Crypto {
     constructor(crypto, precio) {
         this.crypto = crypto;
         this.precio = precio;
     }
 }
 class UI {
     static displayCrypto() {
         //Brocker Binance
         var algo = [];
         fetch(api_url)
             .then(response => response.json())
             .then(binancePrice => {
                 binancePrice;
                 algo.push(binancePrice[12])
                 algo.unshift(binancePrice[11])
                 algo.push(binancePrice[98])
                 const cryptos = algo;
                 cryptos.forEach((crypto) => UI.addCryptoToList(crypto));
             });
     }

     static addCryptoToList(crypto) {
         const list = document.querySelector('#crypto-list');

         const row = document.createElement('tr');

         row.innerHTML = `
                 <td>${crypto.symbol}</td>
                 <td>${parseFloat(crypto.price)}</td>
                 <td>${crypto.symbol}</td>
                 <td>${crypto.symbol}</td>
                 <td><a href="#" class="btn btn-danger btn-sm delete" >X</a></td>
             `;

         list.appendChild(row);
     }
 }

// Event: Display Crypto

/* const $semantico = document.getElementById("clasico");
$semantico.onclick = nombre; */


document.addEventListener('DOMContentLoaded', UI.displayCrypto);
search.addEventListener('input', () => buscadatos(search.value));
