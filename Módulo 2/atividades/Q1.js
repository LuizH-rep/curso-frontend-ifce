let listaCompras = ["arroz", "feijão", "macarrão", "leite", "pão"];

function verificarItem(item) {
  if (listaCompras.includes(item)) {
    console.log("✅ Item encontrado");
  } else {
    console.log("❌ Item não está na lista");
  }
}

verificarItem("feijão");
verificarItem("carne");