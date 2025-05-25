function calcular(operacao) {
  const inputA = document.getElementById('a');
  const inputB = document.getElementById('b');
  const resultado = document.getElementById('resultado');

  const a = inputA.value.trim();
  const b = inputB.value.trim();

  if (a === '' || b === '') {
    alert("Preencha os campos");
    return;
  }

  const numA = Number(a);
  const numB = Number(b);
  let resultadoFinal;

  switch (operacao) {
    case 'soma':
      resultadoFinal = numA + numB;
      break;
    case 'subtracao':
      resultadoFinal = numA - numB;
      break;
    case 'multiplicacao':
      resultadoFinal = numA * numB;
      break;
    case 'divisao':
      if (numB === 0) {
        alert("Não é possível dividir por zero");
        return;
      }
      resultadoFinal = numA / numB;
      break;
    case 'porcentagem':
      resultadoFinal = (numA / 100) * numB;
      break;
    default:
      alert("Operação inválida");
      return;
  }

  resultado.value = resultadoFinal;
  inputA.value = '';
  inputB.value = '';
}

// Eventos dos botões
document.querySelector('.somar').addEventListener('click', () => calcular('soma'));
document.querySelector('.subtrair').addEventListener('click', () => calcular('subtracao'));
document.querySelector('.multiplicar').addEventListener('click', () => calcular('multiplicacao'));
document.querySelector('.divisao').addEventListener('click', () => calcular('divisao'));
document.querySelector('.porcentagem').addEventListener('click', () => calcular('porcentagem'));

// Botão de limpar
document.querySelector('.clear').addEventListener('click', () => {
  document.getElementById('resultado').value = '';
  document.getElementById('a').value = '';
  document.getElementById('b').value = '';
});
