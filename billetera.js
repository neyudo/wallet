

const api_url2 = 'https://api.pancakeswap.info/api/v2/tokens'
async function preciosPanceke() {
    const response = await fetch(api_url2);
    const data = await response.json();
    Object.keys(data.data).forEach(key => console.log(key, data.data[key]));

    for (let [key, value] of Object.entries(data.data)) {
        precios =  value;
        numero = key;
        let nueva = [];
        nueva = precios.symbol;
        console.log(nueva);


        function autocomplete(inp, arr) {
            /*the autocomplete function takes two arguments,
            the text field element and an array of possible autocompleted values:*/
            var currentFocus;
            /*execute a function when someone writes in the text field:*/
            inp.addEventListener("input", function(e) {
                var a, b, i, val = this.value;
                /*close any already open lists of autocompleted values*/
                closeAllLists();
                if (!val) { return false;}
                currentFocus = -1;
                /*create a DIV element that will contain the items (values):*/
                a = document.createElement("DIV");
                a.setAttribute("id", this.id + "autocomplete-list");
                a.setAttribute("class", "autocomplete-items");
                /*append the DIV element as a child of the autocomplete container:*/
                this.parentNode.appendChild(a);
                /*for each item in the array...*/
                for (i = 0; i < arr.length; i++) {
                  /*check if the item starts with the same letters as the text field value:*/
                  if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("DIV");
                    /*make the matching letters bold:*/
                    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(val.length);
                    /*insert a input field that will hold the current array item's value:*/
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function(e) {
                        /*insert the value for the autocomplete text field:*/
                        inp.value = this.getElementsByTagName("input")[0].value;
                        /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
                        closeAllLists();
                    });
                    a.appendChild(b);
                  }
                }
            });
            /*execute a function presses a key on the keyboard:*/
            inp.addEventListener("keydown", function(e) {
                var x = document.getElementById(this.id + "autocomplete-list");
                if (x) x = x.getElementsByTagName("div");
                if (e.keyCode == 40) {
                  /*If the arrow DOWN key is pressed,
                  increase the currentFocus variable:*/
                  currentFocus++;
                  /*and and make the current item more visible:*/
                  addActive(x);
                } else if (e.keyCode == 38) { //up
                  /*If the arrow UP key is pressed,
                  decrease the currentFocus variable:*/
                  currentFocus--;
                  /*and and make the current item more visible:*/
                  addActive(x);
                } else if (e.keyCode == 13) {
                  /*If the ENTER key is pressed, prevent the form from being submitted,*/
                  e.preventDefault();
                  if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (x) x[currentFocus].click();
                  }
                }
            });
            function addActive(x) {
              /*a function to classify an item as "active":*/
              if (!x) return false;
              /*start by removing the "active" class on all items:*/
              removeActive(x);
              if (currentFocus >= x.length) currentFocus = 0;
              if (currentFocus < 0) currentFocus = (x.length - 1);
              /*add class "autocomplete-active":*/
              x[currentFocus].classList.add("autocomplete-active");
            }
            function removeActive(x) {
              /*a function to remove the "active" class from all autocomplete items:*/
              for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
              }
            }
            function closeAllLists(elmnt) {
              /*close all autocomplete lists in the document,
              except the one passed as an argument:*/
              var x = document.getElementsByClassName("autocomplete-items");
              for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                  x[i].parentNode.removeChild(x[i]);
                }
              }
            }
            /*execute a function when someone clicks in the document:*/
            document.addEventListener("click", function (e) {
                closeAllLists(e.target);
            });
          }
        var countries = ["Cake","WBNB","BUSD","USDT","ETH","BTCB","USDC","MBOX","TUSD","DOT","HERO","SAFEMOON","BELT","LINK","ALPACA","ADA","XRP","QBT","XVS","BTT","C98","UNI","BabyDoge","TRX","DOGE","AXS","SFP","VAI","ALPHA","PVU","DAI","UST","SUSHI","CBET","TKO","WIN","ALICE","TLM","rUSD","TSC","HUNNY","BEL","DODO","INJ","YOOSHI","WOOP","LTC","BP","CLU","PING","SGO","BUNNY","PORNROCKET","CP","WHALE","RAMP","REEF","SXP","RACA","RISE","TPT","TWT","CHR","MASK","BAND","SFUND","FEED","DOGE","EPS","SMARS","LBNB","SBNB","IOTX","ZIL","CHESS","BMON","MiniDOGE","PHA","ITAM","ONE","BSCPAD","DEGO","ELEPHANT","NEWB","SGRv2","HOTCROSS","POSI","LINA","WOO","NBL","FLOKI","SPS","BTCST",];
        
          autocomplete(document.getElementById("myInput"), countries);  
        

        
    }



    var texto_Derecho = document.getElementById("texto_lineasD");
    var boton_Derecho = document.getElementById("botonD");
    //boton_Derecho.addEventListener("click", criptoactivo);

    function criptoactivo(params) {
        Object.entries(data.data).map(ult => {
            const found = ult.find(({symbol}) => symbol === texto_Derecho.value)
            console.log(found);
        })
    }
    
}
preciosPanceke(); 


        /*

    Object.entries(data.data).map(ult => {
        /* ult.find(({ symbol, price}) =>{
             document.write(`symbol: ${symbol}, price: ${price}<br />`)
           })
           
           const found = ult.find(({symbol}) => symbol === 'WBNB')
           console.log(found);
           const found2 = ult.find(({symbol}) => symbol == 'BUSD')
           console.log(found2);
           })

    
    /*
    (otros => {otros.find(({ symbol, price}) => {document.write(`symbol: ${symbol}, price: ${price}<br />`)
      })
    })
*/
          
  

    /*
        Object.keys(data.data).forEach(key => console.log( data.data[key]));
    */









/*




    Object.keys(data.data).forEach(key => console.log(key, data.data[key]))



    for (let [key, value] of Object.entries(data.data)) {
        console.log(key, value);
    }

const api_url2 = 'https://api.pancakeswap.info/api/v2/tokens'
async function preciosPanceke() {
    const response = await fetch(api_url2);
    const data = await response.json();
    Object.keys(data.data).forEach(key => console.log( data.data[key]))
}
preciosPanceke();



var colores = ['blanco', 'negro'];

colores.forEach(element => {
    console.log(element);
});

const url = 'https://api.pancakeswap.info/api/v2/tokens'
fetch(url)
    .then(response => response.json())
    .then(data => data)
    .then(error => console.log(error))


    /*
        Object.keys(data.data).forEach(function(element, index){
        console.log(element, index);
    })


    const found = data.find(({price}) => price === 'price');
    console.log(found);

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(i, element);
    }
    
        Object.keys(data.data).forEach(function(elemento, indice, array) {
        console.log(indice, elemento);
    })
    */

