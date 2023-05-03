const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

function render(){
  let output = ''

  const thisMonth = months[new Date().getMonth()]

  for(let month of months){
    const active = thisMonth == month ? 'active' : '';
    output += `<div class="${active}" data-month="${month}">${month}</div>`;
    
  }
  return output;

}

app.querySelector('main').innerHTML = render()
app.querySelector('header span').innerHTML = new Date().getFullYear()


  const anoAnterior = document.querySelector('#ano-anterior');
  const anoPosterior = document.querySelector('#ano-posterior');

  const limiteMinimo = 2000;
  let anoAtual = new Date().getFullYear();

  anoAnterior.addEventListener("click", function(){
    if(anoAtual > limiteMinimo){
      anoAtual--;
      document.querySelector('header span').innerHTML = anoAtual;
    }
  })

  anoPosterior.addEventListener("click", function(){
      anoAtual++;
      document.querySelector('header span').innerHTML = anoAtual;
  })

  const meses = document.querySelectorAll('main div');
  const container = document.querySelector('.calendar-container');

  for (const element of meses) {
    element.addEventListener('click', function() {
      // remove a classe "active" dos outros elementos
      for (const element of meses) {
        element.classList.remove('active');
      }
      // adiciona a classe "active" ao mês selecionado
      this.classList.add('active');
      
    });
  }