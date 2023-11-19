document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var numeroSecreto = parseInt(Math.random() * 1001);
    var chute = prompt('Digite um número entre 1 e 1000 para tentar acertar o Número Secreto');

    if (chute == numeroSecreto) {
      alert('Acertou! Parabéns!!');
    } else if (chute < numeroSecreto) {
      alert('Errou! Tente com um número maior');
    } else if (chute > numeroSecreto) {
      alert('Errou! Tente com um número menor');
    }

    while (chute != numeroSecreto) {
      chute = prompt('Digite um número entre 1 e 1000');

      if (chute == numeroSecreto) {
        alert('Acertou! Parabéns!');
      } else if (chute < numeroSecreto) {
        alert('Errou! Tente com um número maior');
      } else if (chute > numeroSecreto) {
        alert('Errou! Tente com um número menor');
      }
    }
  }, 1000); // Aguarda 1 segundo antes de exibir o prompt

  // Adiciona estilo para posicionar o prompt na parte inferior da tela
  var style = document.createElement('style');
  style.innerHTML = '.prompt-overlay { bottom: 10px !important; }'; // Ajuste conforme necessário
  document.head.appendChild(style);
});
