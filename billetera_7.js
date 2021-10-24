
const search = document.getElementById('search')
const matchList = document.getElementById('match-list')
const api_url = 'https://api1.binance.com/api/v3/ticker/price'
const api_SoloPrecio = 'https://api1.binance.com/api/v3/avgPrice?symbol='

const addCosas = [];
//Precios ya establecidos BTC ETH
/*  */
//____________________________

//Introduce con un click tu Crypto que quieres observar
const add = async () => {
    let ident = event.target.id.split(/("")/u);
    /* let ident = event.target.id.split(/("")/u);
    console.log(ident);
    UI.addCryptoToList(ident);
    matches = [];
    matchList.innerHTML = ''; */
    /* const responseP = await fetch(api_SoloPrecio + ident);
    const datosSoloPrecio2 = await responseP.json();
    console.log(datosSoloPrecio2); */
    
    fetch(api_url)
        .then(response => response.json())
        .then(binancePrice => {
            binancePrice;
            let nuDeIn = binancePrice.findIndex((objeto, indice, cosas) => {
                if (objeto.symbol == ident) {
                    const arr = objeto;
                    console.log(arr);
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
        /* const cryptos = ['BTCUSDT', 'ETHUSDT', 'KSMUSDT'];
        cryptos.forEach((crypto) => UI.addCryptoToList(crypto.split(/("")/u))); */
        //
        const pri = async () => {
            const response = await fetch(api_url),
            datos = await response.json(),
            btc = datos[11],
            eth = datos[12],
            ksm = datos[1007],
                cryptos = [btc, eth, ksm];
            //console.log(cryptos);
            cryptos.forEach((crypto) => UI.addCryptoToList(crypto));
        }    
        pri();
    }
    
     static addCryptoToList(crypto) {
         console.log(crypto);
         const list = document.querySelector('#crypto-list');
         const row = document.createElement('tr');
         const live = document.getElementsByClassName('precio');
         row.setAttribute("id", "otro")
         const ulti = util => {
             for

         };
         //const clickPrecio = document.getElementsByClassName('sim');
         //console.log(clickPrecio);
         const listaDePrecios1 = [];

         //const clickPrecio = document.getElementsByClassName('sim');

         /* const flag = async picho => {
             for (let cell of crypto) {
                 //let val = cell.innerText.split(/("")/u);
                 const response2 = await fetch(api_SoloPrecio + cell);
                 const datosSoloPrecio = await response2.json();
                 console.log(datosSoloPrecio.price);
                 listaDePrecios1.push(datosSoloPrecio);
                 console.log(listaDePrecios1[0].price);
         document.getElementById('pre').textContent = listaDePrecios1[0].price;

             }
             }
         flag(); */
             /* for (let [i, cripi] of (listaDePrecios1).entries()) {
                 live[i].innerHTML = `${parseFloat(cripi.price)}`;


             } */

         
         list.appendChild(row);
         row.innerHTML = `
                        <td class="sim" onload="mifuc()" >${crypto.symbol}</td>
                        <td class="precio" id="pre">${crypto.price}</td>
                        <td>0</td>
                        <td>0</td>
                        <td><a href="#" class="btn btn-danger btn-sm delete" >X</a></td>
                    `;



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
document.addEventListener('DOMContentLoaded', UI.displayCrypto);
//Event: Add

search.addEventListener('input', () => buscadatos(search.value));
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
