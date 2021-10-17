
const search = document.getElementById('search')
const matchList = document.getElementById('match-list')
const api_url = 'https://api1.binance.com/api/v3/ticker/price'

const addCosas = [];
//Precios ya establecidos BTC ETH
/*  */
//____________________________

//Introduce con un click tu Crypto que quieres observar
const add = () => {
    let ident = event.target.id;
    console.log(ident);
    fetch(api_url)
        .then(response => response.json())
        .then(binancePrice => {
            binancePrice;
            let nuDeIn = binancePrice.findIndex((objeto, indice, cosas) => {
                if (objeto.symbol == ident) {
                    const arr = objeto;
                    console.log(arr.price);
                    UI.addCryptoToList(arr);
                }
            });
            matchList.innerHTML = '';

        });
}
//_____________________________________

const buscadatos = async  precios => {
    const response = await fetch(api_url);
    const datos = await response.json();
    let matches = datos.filter(dato =>{
        const regex = new RegExp(`^${precios}`, 'gi');
        return dato.symbol.match(regex) /*|| dato.price.match(regex)*/;
    });
/*     console.log(matches);
 */
    if(precios.length === 0 )
    {
        matches = [];
        matchList.innerHTML = '';
    }
    outputHtml(matches);


};

// Show results in html
const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `<form id="bloque">
            <div  class="card card-body mb-1">
              <h4>${match.symbol} <span class="text-primary">${match.price}</span>    <button id="${match.symbol}" type="button" onclick="add()" class="btn btn-secondary">Add</button>

              </h4>
            </div>
            </form>
        
        `)
            .join('');
        matchList.innerHTML = html;
/*         document.querySelector('#bloque').addEventListener('submit', (event) => {
            event.preventDefault();
            const newPrice = document.querySelector('#${match.symbol}').value;
            const cript = new Crypto(symbol)
            console.log(cript);
        }) */
    }
}

 // representa una moneda cripto
 class Crypto {
    constructor(objeto) {
        this.objeto = objeto;
     }
 }
 class UI {
     static displayCrypto() {
         //Brocker Binance
         const pri = async () => {
            const live = document.getElementById('crypto-list');
             const response = await fetch(api_url);
             const datos = await response.json();
             const cryptos = [datos[11], datos[12]];
             console.log(cryptos);
             cryptos.forEach((crypto) => UI.addCryptoToList(crypto));
             console.log(live);

         }
         pri();
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

     static deleteCrypto(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
            
        }
    }
 }
//Delete
document.querySelector('#crypto-list').addEventListener('click', function cosi(event) {
    UI.deleteCrypto(event.target);
});

// Event: Display Crypto

/* const $semantico = document.getElementById("clasico");
$semantico.onclick = nombre; */


document.addEventListener('DOMContentLoaded', UI.displayCrypto);
//Event: Add

search.addEventListener('input', () => buscadatos(search.value));


/* document.querySelector('#bloque').addEventListener('submit', function aro(event) {
    event.preventDefault();
    const newPrice = document.querySelector('#${match.symbol}').value;
    const cript = new Crypto(symbol)
    console.log(cript);
}); */