function custodoproduto() {
 //custo do produto 
    var valorCusto = document.querySelector("#Custo").value;
  
    document.querySelector("#Valor").textContent = valorCusto;
  }
  
  function porcentagem(){
    var mark = document.querySelector("#Porcentagem").value;
    var valorporcem = mark * 1/100

    document.querySelector('#mark').textContent = valorporcem;
  }

console.log("Ola mundo");