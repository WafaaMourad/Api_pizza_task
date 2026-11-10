
function getApi() {

    var xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function (){
        if(this.readyState ==4 && this.status ==200){
            var result = this.responseText;
            var ali = JSON.parse(result);
            var mohamed = ali.data.recipes;

            var basket = "";
            for(var i=0; i<mohamed.length;i++){

                var cartoona = `<div class="md:col-4 text-center mb-12" >
                                    <img src="${mohamed[i].image_url}" class="w-100" style='height:350px'>
                                    <h4>${mohamed[i].title}</h4>
                                    <h6>${mohamed[i].publisher}</h6>
                                </div>
                                `;
                basket = basket + cartoona;
            }

            document.querySelector(".test").innerHTML = basket;


        }
    }

    xhttp.open("GET","https://forkify-api.jonas.io/api/v2/recipes?search=pizza",true);
    xhttp.send();

}

getApi();