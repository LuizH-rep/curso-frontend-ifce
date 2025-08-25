let usuarios = ["Levi", "joao", "maria"];

function login(nome) {
  if (usuarios.includes(nome)) {
    console.log(`Bem-vindo, ${nome}!`);
  } else {
    console.log("Usuário não encontrado");
  }
}

login("joao");
login("pedro");