
const NavesEspaciais = []

let opcao:number;
let texto:string = '';

do {
  texto = '';

  for (let i = 0; i < NavesEspaciais.length; i++) {
    texto += `${i + 1}° - ${NavesEspaciais[i].nome}\n`;
  }

  opcao = Number(prompt(`O que deseja fazer?\n${texto}\n1) Salvar nave\n2) Adicionar membro à tripulação\n3) Enviar para missão\n4) Visualizar tripulação\n5) Encerrar`));

  switch (opcao) {
    case 1:
      CriarNaveEspacial();
      break;
    case 2:
      AdicionarMembroNaTripulacao();
      break;
    case 3:
      EnviarParaMissao();
      break;
    case 4:
      mostraTripulação();
      break;
    case 5:
      alert('Encerrando...');
      break;
    default:
      alert('Opção inválida');
      break;
  }

} while (opcao !== 5);

function CriarNaveEspacial() {
  const nome:string = prompt('Digite o nome da nave:');
  const piloto:string = prompt('Digite o nome do Piloto:');
  const limiteTripulacao:number = Number(prompt('Digite o número máximo de pessoas na tripulação'));
  const nave = {
    nome: nome,
    piloto: piloto,
    limiteTripulacao: limiteTripulacao,
    tripulacao: [],
    inMission: false
  };
  NavesEspaciais.push(nave);

  alert(`${nave.nome} foi registrada com sucesso`)
}

function AdicionarMembroNaTripulacao() {
  const id:number = Number(prompt('Digite o id da nave à qual você deseja adicionar um membro')) - 1;

  if (id < 0 || id >= NavesEspaciais.length || typeof id != 'number') {
    alert('ID de nave inválido');
    return;
  }

  const novoMembro = prompt('Digite o nome do novo membro que deseja adicionar');

  if (NavesEspaciais[id].tripulacao.length < NavesEspaciais[id].limiteTripulacao) {
    NavesEspaciais[id].tripulacao.push(novoMembro);
    alert('Membro adicionado com sucesso!');
  } else {
    alert('Limite máximo de integrantes atingido');
  }
}

function EnviarParaMissao() {
  const id:number = Number(prompt('Digite o id da nave à qual você deseja mandar em missão')) - 1;

  if (id < 0 || id >= NavesEspaciais.length || typeof id != 'number') {
    alert('ID de nave inválido');
    return;
  }
  if(NavesEspaciais[id].emMissao == true){
    alert('A nave já está em uma missão')
  }else{
    NavesEspaciais[id].emMissao = true
  }
}

function mostraTripulação(){
  const id:number = Number(prompt('Digite o id da nave que você deseja consultar a tripulação')) - 1;

  if (id < 0 || id >= NavesEspaciais.length || typeof id != 'number') {
    alert('ID de nave inválido');
    return;
  }
  alert(`Os tripulantes são: ${NavesEspaciais[id].tripulacao}`)
}