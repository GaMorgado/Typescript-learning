type currentySituation = "habitado" | "inabitavel" | "habitável" | "inexplorado"
type PlanetCoords = [number, number, number, number]

type Planet = {
  nome: string,
  coordenadas: PlanetCoords,
  situacao: currentySituation,
  satelite: string[]
}

let option:number
let list:string = ''
let i:number
const planets: Planet[] = []

function addPlanet(nome: string, coordenadas: PlanetCoords, situacao: currentySituation){
  planets.push({
    nome,
    coordenadas,
    situacao,
    satelite: []
  })
  alert(`O planeta ${nome} foi adicionado com sucesso!`)
}

function SwitchSituation(planet:Planet, situacao:currentySituation){
  planet.situacao = situacao

  alert(`a situação do planeta ${planet.nome} já foi atualizada`)
}

function addSatelite(planet:Planet, NewSatelite:string){
  planet.satelite.push(NewSatelite)
  alert(`O satelite ${NewSatelite} foi adicionado no planeta ${planet.nome}`)
}

function removeSatelite(planet:Planet, sateliteName:string){
  planet.satelite = planet.satelite.filter((satelite) => satelite != sateliteName)
  alert(`O satelite ${sateliteName} foi removido do planeta ${planet.nome}`)
}

function listPlanet(){
  planets.forEach((planet) => list += planet)
}

function findPlanet(planetName:string){
  const planet = planets.find((planet) => planet.nome == planetName)
  return planet ?? false
}

function validaSituacao(){
  let situacao: currentySituation
  let validaSitacao = false

  while (!validaSitacao){
    const situacaoInput = prompt("Digite a situação do planeta \n1)Habitado\n2)Habitável\n3)Inabitavel\n4)Inexplorado ")

    switch (situacaoInput) {
      case "1":
        situacao = 'habitado'
        validaSitacao = true
        break;
      case "2":
        situacao = 'habitável'
        validaSitacao = true
        break;
      case "3":
        situacao = 'inabitavel'
        validaSitacao = true
        break;
      case "4":
        situacao = 'inexplorado'
        validaSitacao = true
      break;
      default:
        alert('Situação incorreta, tente novamente')
        break;
    }
  }
  return situacao
}

do {
  option = Number(prompt("O que você deseja fazer no planetário?\n1)Adicionar um planeta\n2)Mudar situação do planeta\n3)Adicionar um satelite\n4)Remover um satelite\n5)Listar todos os planetas catalogados\n6)Encerrar"))
  switch(option){
    case 1:
      const nome:string = prompt("Digite o nome do planeta")
      const coord1:number = Number(prompt("Digite o primeiro número da coordenada"))
      const coord2:number = Number(prompt("Digite o segundo número da coordenada"))
      const coord3:number = Number(prompt("Digite o terceiro número da coordenada"))
      const coord4:number = Number(prompt("Digite o quarta número da coordenada"))
      const situacao = validaSituacao()
      const coords:PlanetCoords = [coord1, coord2, coord3, coord4]
      addPlanet(nome, coords ,situacao)
      break;
    case 2:
      const name:string = prompt('Digite o nome do planeta que você deseja alterar a situação')
      const planeta = findPlanet(name)
      if(planeta){
        const situacao = validaSituacao()
        SwitchSituation(planeta, situacao)
      }else{
        alert("nenhum planeta catalogado")
      }
      break;
    case 3:
      const planetName:string = prompt('Digite o nome do planeta que você deseja adicionar um satelite')
      const NewSatelite = prompt("Digite o nome do novo satelite")
      const planet = findPlanet(planetName)
      if(planet){
        addSatelite(planet, NewSatelite)
      }else{
        ("nenhum planeta catalogado")
      }
      break;
    case 4:
      const planetsName:string = prompt('Digite o nome do planeta que você deseja remover um satelite')
      const Satelite = prompt("Digite o nome do satelite")
      const planetas = findPlanet(planetsName)
      if(planetas){
        removeSatelite(planetas, Satelite)
      }else{
        ("nenhum planeta catalogado")
      }
      break;
    case 5:
      planets.forEach((world, i) => {
        alert(`planeta-${i}:
        \nNome: ${world.nome}
        \nCoordenadas: ${world.coordenadas}
        \nSituação: ${world.situacao}
        \nSatélites: ${world.satelite}
        `)
      })
      break;
    case 6:
      alert('Encerrando...')
    break;
    default:
      alert("Opção inválida")
      break;
  }
} while (option != 6);