
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
         list.appendChild(row);
                 row.innerHTML = `
                <td class="sim" value="sip" id="simbolo">${crypto.symbol}</td>
                <td class="precio">${parseFloat(crypto.price)}</td>
                <td>0</td>
                <td>0</td>
                <td><a href="#" class="btn btn-danger btn-sm delete" >X</a></td>
            `;
         const clickPrecio = document.getElementsByClassName('sim');
         //console.log(clickPrecio);
         const pri = async () => {
             const pux = [];
             const listaDePrecios = [];
             //esta es la constante con la clase del precio dentro del row.innerHTML
             const live = document.getElementsByClassName('precio'),
                 response = await fetch(api_url),
                 datos = await response.json();
             //constante que me deja entrar a la clase del td y me permite ver su contenido con unas iteraciones
             // Itero en la variante ClickPrecio y obtengo su informacion en este caso los simblolos del cripto deseado
             for (let cell of clickPrecio) {
                 let val = cell.innerText.split(/("")/u);
                 let compa = datos.findIndex((objeto, indice, cosa) => {
                 if (objeto.symbol == val) {
                     const resul = objeto;
                     listaDePrecios.push(resul);
                     }
             });
                 
             }
             
             for (let [i, cripi] of (listaDePrecios).entries()) {
                            live[i].innerHTML = `${parseFloat(cripi.price)}`;
                            
       
                        }
                }
                setInterval(() => {
                    pri();
                }, 10000);
         /* var table = document.getElementById('crypto-list');
         const flu = table.rows;
         console.log(flu);
         for (let row of table.rows) {
             for (let cell of row.cells) {
                 console.log(cell.innerText.split(/("")/u))
             }
         } */
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
