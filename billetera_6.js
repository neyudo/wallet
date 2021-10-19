
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
         const list = document.querySelector('#crypto-list');

         const row = document.createElement('tr');
         row.setAttribute("id", "otro")
         console.log(row)


         row.innerHTML = `
                <td class="sim" value="sip" id="simbolo">${crypto.symbol}</td>
                <td class="precio">0</td>
                <td>0</td>
                <td>0</td>
                <td><a href="#" class="btn btn-danger btn-sm delete" >X</a></td>
            `;
         const pri = async () => {
             //esta es la constante con la clase del precio dentro del row.iinerHTML
             const live = document.getElementsByClassName('precio'),
                 response = await fetch(api_url),
                 datos = await response.json(),
                 //ejemplos cada uno seleccionado para poder crae un array
                 btc = datos[11],
                 eth = datos[12],
                 ksm = datos[1007],
                 cryptos = [btc, eth, ksm];
             //constante que me deja entrar a la clase del td y me permite ver su contenido con unas iteraciones
             let clickPrecio = document.getElementsByClassName('sim');
             for (const iterator of clickPrecio) {
                 const valCryptoIter = iterator.innerText;
                 let compa = datos.findIndex((objeto, indice, cosas) => {
                     if (objeto.symbol == valCryptoIter) {
                         const arr = objeto;
/*                          for (let [i, cripi] of arr.price)
                         live[i].innerHTML = `${cripi.price}`; */
                         console.log(arr);
                         //UI.addCryptoToList(arr);
/*                          for (let [i, cripi] of cryptos.entries()) {
                             let iterP;
                             live[i].innerHTML = `${cripi.price}`;
                             iterP = live[i].innerHTML;
                             //console.log(cripSymbol === iterP);

                         } */
                     }
                 });
             }
             /*              for (let cell of clickPrecio) {
                              let val = cell.innerText;
                              console.log(val);
                              const cripSymbol = [];
                              for (let [i, cripi] of cryptos.entries()) {
                                 let iterP;
                                 live[i].innerHTML = `${cripi.symbol}`;
                                 iterP = live[i].innerHTML;
                                 
                             }
                          } */
             //console.log(clickPrecio);
             //console.log(cryptos);
             //https://es.stackoverflow.com/questions/313984/como-actualizar-una-tabla-despues-de-eliminar-un-dato
             //cryptos.forEach(element => console.log(element), console.clear());

             //cryptos.forEach(crip => live.innerHTML = crip.price);

             //console.log(live);
         }
         setInterval(() => {
             pri();
         }, 3000);
         list.appendChild(row);
         /*         document.addEventListener('list.appendChildLoaded', 
                     live2.innerHTML = crypto[0].price,
                     console.log(live2)
                 ); */


         /*         const live2 = document.getElementById('DOMContentLoaded', 'otro');
                 live2.innerHTML = crypto[0].price;
                 console.log(live2.innerHTML); */



         /* const list = document.querySelector('#crypto-list');
         const btcp = crypto[0].price;
         let btcPMasTusCrip = btcp * 0.017387 
         //list.innerHTML = crypto[0].price;
         //const row = document.createElement('tr');
         const row = document.createElement('tr'); */
         /*          list.innerHTML = `
                          <tr>
                             <td>${crypto[0].symbol}</td>
                             <td id="symbol">${parseFloat(btcp)}</td>
                             <td>${0.01}</td>
                             <td>${btcPMasTusCrip.toFixed(2)}</td>
                             <td><a href="#" class="btn btn-danger btn-sm delete" >X</a>
                          </td>
                          <tr>
                          <td>${crypto[1].symbol}</td>
                          <td id="symbol">${parseFloat(crypto[1].price)}</td>
                          <td>${crypto[1].symbol}</td>
                          <td>${crypto[1].symbol}</td>
                          <td><a href="#" class="btn btn-danger btn-sm delete" >X</a>
                       </td>
                  `; 
                  row.innerHTML = `
                  <td>${crypto.symbol}</td>
                  <td>${crypto.price}</td>
                  <td>${crypto.price}</td>
                  <td>${crypto.price}</td>
                  <td><a href="#" class="btn btn-danger btn-sm delete" >X</a>
                  `;
                  list.appendChild(row);
                  console.log(zip.innerHTML);
                  */
         /* 
                  row.innerHTML = `
                         ${crypto[0].price}
                  `;
                  
                  `
                          <td>${crypto[0].symbol}</td>
                          <td> <strong id="otro">${crypto[0].price}</strong> </td>
                          <td>${crypto.symbol}</td>
                          <td>${crypto.symbol}</td>
                          <td><a href="#" class="btn btn-danger btn-sm delete" >X</a></td>
                      `;     
                  list.appendChild(row);*/

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