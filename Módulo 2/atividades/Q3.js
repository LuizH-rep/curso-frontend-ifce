let idades = [16, 18, 22, 15, 25, 19];

function jogadoresAdultos(listaIdades) {
  return listaIdades.filter(idade => idade >= 18);
}

console.log(jogadoresAdultos(idades));