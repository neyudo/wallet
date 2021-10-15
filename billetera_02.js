function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);
  tick();

const api_url2 = 'https://api1.binance.com/api/v3/ticker/price'
async function loadNames(link) {
    const response = await fetch(link);
    const Names = await response.json();
    pocas.push(Names)
    chu()
};
loadNames(api_url2);
const pocas = [];


const chu = () => {
    let paco = pocas[0][1007];
    console.log(paco);
}

//prueba

/* setTimeout(() => {
    (async () => { 
        try { 
            const val = await Promise.resolve (pocas[0][12]); 
            const val2 = await Promise.resolve (pocas[0][1670]); 
            const vals = [val,val2]
        
            console.log (vals); 
        } catch (err) { 
          console.log (err); 
        } 
      }) ();
      let nuDeIn = pocas[0].findIndex((objeto, indice, cosas) => {
        return objeto.symbol == 'BNBUSDT'
    })
    console.log(nuDeIn);  

}, 2000); */




/* setTimeout(() => {
    console.log(pocas[0].length);
    console.log(pocas[0][1007]); 
    let nuDeIn = pocas[0].findIndex((objeto, indice, cosas) => {
        return objeto.symbol == 'BNBUSDT'
    })
    console.log(nuDeIn);
}, 2000); */




/*
setTimeout(() => {
    cosita[0].forEach(({symbol, price}) => {
        console.log(`symbol : ${symbol}, price : ${price}`);
    })

}, 2000);
*/



/*
//Brocker Binance
const api_url2 = 'https://api1.binance.com/api/v3/ticker/price'
let datos2 = [];
let datos3;
let muss;
async function precios()
    {
        const response = await fetch(api_url2);
        datos3 = await response.json();
        muss = datos3.find(item => 
            {
                return item.symbol === "ETHBTC"
            });
        for (let z in datos3) {
            datos2.push(datos3[z])              
        }
    };
precios();
console.log(muss);


const porFin = setTimeout(function(){ 
    console.log(datos2[0]); 
}, 2000);
//console.log(datos2);



    setTimeout(function(){ 
        console.log(porFin); 
    }, 2000);
*/

/*
const ethBtc = datos2.find(item => 
    {
        return item.symbol == "ETHBTC"
    });
    console.log(ethBtc);
/*
const api_url2 = 'https://api1.binance.com/api/v3/ticker/price'
var algo = [];
fetch(api_url2)
    .then(response => response.json())
    .then(binancePrice => console.log(binancePrice) );




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
        console.log(BrockerCrypto);
        const ethbtc = BrockerCrypto.find(item => 
            {
                return item.symbol === "ETHBTC"
            })
            console.log(ethbtc);


/*
/*
const api_url = 'https://api1.binance.com/api/v3/ticker/price'
async function precios() {
    const response = await fetch(api_url);
    const data = await response.json();
   
    const {price, symbol} = data[1007];
    console.log(textContent = price);
    console.log(textContent = symbol);

    document.getElementById("kusamap").textContent = price;
    document.getElementById("kusamas").textContent = symbol;



    var texto_Derecho = document.getElementById("texto_lineasD");
    var boton_Derecho = document.getElementById("botonD");
    boton_Derecho.addEventListener("click", criptoactivo);
    

    var texto_Izquierdo = document.getElementById("texto_lineasI");
    var boton_Izquierdo = document.getElementById("botonI");
    boton_Izquierdo.addEventListener("click", cantidadEnCripto);

    function criptoactivo(params) {
        const found = data.find(({symbol}) => symbol == texto_Derecho.value)
        console.log(found);
    }
    function cantidadEnCripto(params) {
        const found = data.find(({symbol}) => symbol == texto_Derecho.value);
        console.log(texto_Izquierdo.value * found.price);
        
    }


}
precios();
*/
 /*


     const data2 = data.map(element => element.shape);
    console.log(data2);


       
    console.log(found);
    if (data.find(({symbol}) => symbol === "BNBUSDT")) {
        document.write(found.price * 2)
    }

    console.log(data.forEach(function(elemento, indice, array) {
        console.log(indice, elemento);
      
      }));

        //te hace una lista en texto plano
        data.forEach(({ symbol, price}) =>{
        document.write(`symbol: ${symbol}, price: ${price}<br />`)
      })


      
      Object.keys(data).forEach(key => console.log(key, data[key]))

      for (let i = 0; i < data.length; i++) {
          const element = data[i];
          console.log(i, element);
          
      }

}
*/
