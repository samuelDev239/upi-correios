var div1 = document.querySelector(".cep")
var div2 = document.querySelector(".logradouro")
var div3 = document.querySelector(".bairro")
var div4 = document.querySelector(".localidade")
var div5 = document.querySelector(".uf")
var tab = document.querySelector('.table')



console.log(tab);






var input = SelecionarTags('#cep');
var divRes = SelecionarTags('.resultado');
var btn = SelecionarTags ('.btn');

function BuscarCep(){
    
   
    var cep = input.value;
    var url = `https://viacep.com.br/ws/${cep}/json/`

//realizar uma reqisiçao do tipo GET 
fetch(url)
//receber a promese e dela pegar o response e tranformar o response em json
.then(function(response){
    return response.json()
})
//relizar qualquer operacao que eu quiser 
.then(function(response){
    tab.classList.remove("table");
    tab.classList.add("tablevisible");
    var p1 = document.createElement('p') 
var p2 = document.createElement('p')
var p3 = document.createElement('p')
var p4 = document.createElement('p')
var p5 = document.createElement('p')
var p6 = document.createElement('p')

 

p1.textContent = response.cep
p2.textContent = response.logradouro
p3.textContent = response.bairro
p4.textContent = response.localidade
p5.textContent = response.uf


div1.appendChild(p1)
    div2.appendChild(p2)
    div3.appendChild(p3)
    div4.appendChild(p4)
    div5.appendChild(p5)
    

})
}

btn.onclick = BuscarCep;

function SelecionarTags(tag){
    var selecao = document.querySelector(tag)
    return selecao;
}



