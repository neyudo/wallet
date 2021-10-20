
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
            cryptos = [btc, eth];
            //console.log(cryptos);
            cryptos.forEach((crypto) => UI.addCryptoToList(crypto));
        }    
        pri();
    }
    
     static addCryptoToList(crypto) {
         const list = document.querySelector('#crypto-list');

         const row = document.createElement('tr');
         row.setAttribute("id", "otro")

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
/*              for (const iterator of clickPrecio) {
                 const valCryptoIter = iterator.innerText;
                 let compa = datos.findIndex((objeto, indice, cosas) => {
                     if (objeto.symbol == valCryptoIter) {
                         const respuesta = objeto,
                             precioFinal = respuesta.price;
                         
                         console.log(precioFinal);
                         for (const iterator2 of precioFinal) {
                             iterator2 += 1;
                            console.log(iterator2);
                        }
                     }
                 }); */
             for (let index = 0; index < clickPrecio.length; index++) {
                 const element = clickPrecio[index].innerHTML,
                     raya = element.split(/("")/u);
                 let compa = datos.findIndex((objeto, indice, cosa) => {
                     if (objeto.symbol == raya) {
                         const resul = objeto;
                         console.log(resul);
                         for (let [i, cripi] of [resul].entries()) {
                             live[i].innerHTML = `${cripi.price}`;
                             
                             //console.log(cripSymbol === iterP);
        
                         }
                     }
                 })
                 //console.log(raya);
                 
             }
                 //https://www.iteramos.com/pregunta/20124/como-puedo-iterar-a-traves-de-las-filas-de-la-tabla-y-las-celdas-en-javascript
                 //console.log(compa);
/*                  for (let [i, cripi] of [compa].entries()) {
                     live[i].innerHTML = `${cripi.price}`;
                     //console.log(cripSymbol === iterP);

                 } */
             //}

             //console.log(clickPrecio);
             //console.log(cryptos);
             //https://es.stackoverflow.com/questions/313984/como-actualizar-una-tabla-despues-de-eliminar-un-dato
             //cryptos.forEach(element => console.log(element), console.clear());

             //cryptos.forEach(crip => live.innerHTML = crip.price);

             //console.log(live);
         }
         setInterval(() => {
             pri();
         }, 4000);
         list.appendChild(row);
                 row.innerHTML = `
                <td class="sim" value="sip" id="simbolo">${crypto.symbol}</td>
                <td class="precio">0</td>
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