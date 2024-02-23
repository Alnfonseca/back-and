
function custodoproduto() {
 //custo do produto 
    var valorCusto = document.querySelector("#Custo").value;
  
    document.querySelector("#Valor").textContent = valorCusto;
  }
  
  function porcentagem(){
    var mark = document.querySelector("#Porcentagem").value;
    var valorporcem = mark * 1/100 + "%";

    document.querySelector('#mark').textContent = valorporcem;
  }

  function custocomarkup(){
    var customark = porcentagem + 1 * custodoproduto;
   
    document.querySelector("#custoComMarkUp").textContent = customark;
  }




  /*function mostrar(event){
    event.preventDefault();
    var custo = Number(document.querySelector("#Custo").value);
    document.querySelector("#Valor").textContent = custo.toFixed(2);
  
    var mark = document.querySelector("#Porcentagem").value;
    var porcentagem = mark/100;
  
    document.querySelector("#mark").textContent = porcentagem + '%';
  }*/