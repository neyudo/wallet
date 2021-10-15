const search = document.getElementById('search')
const matchList = document.getElementById('match-list')
//JSON online en la web
const api_url = 'https://tokens.pancakeswap.finance/pancakeswap-extended.json'
const buscadatos = async  precios => {
    const response = await fetch(api_url);
    const datos = await response.json();

    let matches = datos.tokens.filter(dato =>{
        const regex = new RegExp(`^${precios}`, 'gi');
        return dato.symbol.match(regex) /*|| dato.price.match(regex)*/;

    });
    console.log(matches);
    if(precios.length === 0 )
    {
        matches = [];
        matchList.innerHTML = '';
        
    }
    //Ver el precio con el smartContract
    if (precios.length == 42 )
    {function name(params) 
    {
        if (precios.length == 42)
        {
            // inserto el array con un .push en arr1
            var arr1 = [];
            let contrato = search.value;
            fetch('https://api.pancakeswap.info/api/v2/tokens' + "/" + contrato.replace(/(\r\n|\n|\r|"| )/gm, ""))
            .then(response => response.json())    
            .then(rContrato => { 
                arr1.push(rContrato.data)
                //console.log(arr);
                const html1 = arr1.map(match => `
                <div class="card card-body mb-1">
                <h4>${match.symbol} <span class="text-primary">${match.price}</span> </h4>
                </div>
            
            `)
            .join('');
            matchList.innerHTML = html1;  

            } ); 
        } 
        else 
    {
        const noHay = (nomatch => `
        <div class="card card-body mb-1">
          <h4> SmartContract no Found <span class="text-primary"><br />Try another</span> </h4>
        </div>
    
    `);
matchList.innerHTML = noHay;  
    } 
    }
    name();};



    // creo una constante que me da los Match que es igual a lo que se escribio en la caja
    const piru = matches.map(match => `
    ${match.address}`);
    //console.log(piru);
    //funcion en la que encadeno los match con la api 
        for (let index = 0; index < piru.length; index++) {
            const element = piru[index];
            // var url = "https://api.pancakeswap.info/api/v2/tokens" + "/" + element;
            // url = url.replace(/(\r\n|\n|\r|"| )/gm, "");
            //console.log(url);
            var arr = [];
            fetch('https://api.pancakeswap.info/api/v2/tokens' + "/" + element.replace(/(\r\n|\n|\r|"| )/gm, ""))
            .then(response => response.json())    
            .then(cosa => { 
                arr.push(cosa.data)
                const html = arr.map(match => `
                <div class="card card-body mb-1">
                  <h4>${match.symbol} <span class="text-primary">${match.price}</span> </h4>
                </div>
            
            `)
            .join('');
        matchList.innerHTML = html;  

            } );
           
        }


    
};
search.addEventListener('input', () => buscadatos(search.value));
/*
const api_url2 = 'https://api1.binance.com/api/v3/ticker/price'
const datitos = [];
let datos2 = [];
let datos3;
 async  function llama()
    {
        const response = await fetch(api_url2);
        const datos1 = await response.json();
        datos1.map(post => post.price)
        datos1.forEach(function(element, index){
            datos2.push(element);

        })


        for (let z = 0; z < datos1.length; z++) {
            const sico = datos1[z];
            datitos.push(sico)
            
        }
    }
llama()
const porFin = setTimeout(function(){ 
    console.log(datitos[0]); 
}, 2000);
console.log(porFin);
*/


//Brocker Binance
const api_url2 = 'https://api1.binance.com/api/v3/ticker/price'
var algo = [];
fetch(api_url2)
    .then(response => response.json())
    .then(binancePrice =>
        {
            for (let z = 0; z < binancePrice.length; z++) {
                const sico = binancePrice[z];
                algo.push(sico);
                
            }
 
        } );
let pic = 
setTimeout(() => {
            algo[0]
        }, 2000);

console.log(pic);

// representa una moneda cripto
class Crypto 
    {
        constructor(crypto, precio) 
        {
            this.crypto = crypto;
            this.precio = precio;
        }
    }
class UI 
    {
        static displayCrypto() 
        {
            const BrockerCrypto = [
                {
                    symbol: 'ETHBTC', 
                    price: '0.06911900'
                },
                {
                    symbol: 'LTCBTC', 
                    price: '0.00347600'
                }


            ];
            const cryptos = BrockerCrypto;
            cryptos.forEach((crypto) => UI.addCryptoToList(crypto));
            console.log(cryptos);
            cryptos.find(dat => dat.symbol == 0);
            cryptos.some(da => da.symbol == "ETHBTC");
            cryptos.map(pasito => pasito.symbol)


        }

        static addCryptoToList(crypto)
            {
                const list = document.querySelector('#crypto-list');

                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${crypto.symbol}</td>
                    <td>${crypto.price}</td>
                    <td>${crypto.symbol}</td>
                    <td>${crypto.symbol}</td>
                    <td><a href="#" class="btn btn-danger btn-sm delete" >X</a></td>
                `;

                list.appendChild(row);
            }
    }

document.addEventListener('DOMContentLoaded', UI.displayCrypto);
