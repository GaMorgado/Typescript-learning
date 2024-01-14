"use strict";
let option;
let list = '';
let i;
const planets = [];
function addPlanet(nome, coordenadas, situacao) {
    planets.push({
        nome,
        coordenadas,
        situacao,
        satelite: []
    });
    alert(`O planeta ${nome} foi adicionado com sucesso!`);
}
function SwitchSituation(planet, situacao) {
    planet.situacao = situacao;
    alert(`a situação do planeta ${planet.nome} já foi atualizada`);
}
function addSatelite(planet, NewSatelite) {
    planet.satelite.push(NewSatelite);
    alert(`O satelite ${NewSatelite} foi adicionado no planeta ${planet.nome}`);
}
function removeSatelite(planet, sateliteName) {
    planet.satelite = planet.satelite.filter((satelite) => satelite != sateliteName);
    alert(`O satelite ${sateliteName} foi removido do planeta ${planet.nome}`);
}
function listPlanet() {
    planets.forEach((planet) => list += planet);
}
function findPlanet(planetName) {
    const planet = planets.find((planet) => planet.nome == planetName);
    return planet !== null && planet !== void 0 ? planet : false;
}
function validaSituacao() {
    let situacao;
    let validaSitacao = false;
    while (!validaSitacao) {
        const situacaoInput = prompt("Digite a situação do planeta \n1)Habitado\n2)Habitável\n3)Inabitavel\n4)Inexplorado ");
        switch (situacaoInput) {
            case "1":
                situacao = 'habitado';
                validaSitacao = true;
                break;
            case "2":
                situacao = 'habitável';
                validaSitacao = true;
                break;
            case "3":
                situacao = 'inabitavel';
                validaSitacao = true;
                break;
            case "4":
                situacao = 'inexplorado';
                validaSitacao = true;
                break;
            default:
                alert('Situação incorreta, tente novamente');
                break;
        }
    }
    return situacao;
}
do {
    option = Number(prompt("O que você deseja fazer no planetário?\n1)Adicionar um planeta\n2)Mudar situação do planeta\n3)Adicionar um satelite\n4)Remover um satelite\n5)Listar todos os planetas catalogados\n6)Encerrar"));
    switch (option) {
        case 1:
            const nome = prompt("Digite o nome do planeta");
            const coord1 = Number(prompt("Digite o primeiro número da coordenada"));
            const coord2 = Number(prompt("Digite o segundo número da coordenada"));
            const coord3 = Number(prompt("Digite o terceiro número da coordenada"));
            const coord4 = Number(prompt("Digite o quarta número da coordenada"));
            const situacao = validaSituacao();
            const coords = [coord1, coord2, coord3, coord4];
            addPlanet(nome, coords, situacao);
            break;
        case 2:
            const name = prompt('Digite o nome do planeta que você deseja alterar a situação');
            const planeta = findPlanet(name);
            if (planeta) {
                const situacao = validaSituacao();
                SwitchSituation(planeta, situacao);
            }
            else {
                alert("nenhum planeta catalogado");
            }
            break;
        case 3:
            const planetName = prompt('Digite o nome do planeta que você deseja adicionar um satelite');
            const NewSatelite = prompt("Digite o nome do novo satelite");
            const planet = findPlanet(planetName);
            if (planet) {
                addSatelite(planet, NewSatelite);
            }
            else {
                ("nenhum planeta catalogado");
            }
            break;
        case 4:
            const planetsName = prompt('Digite o nome do planeta que você deseja remover um satelite');
            const Satelite = prompt("Digite o nome do satelite");
            const planetas = findPlanet(planetsName);
            if (planetas) {
                removeSatelite(planetas, Satelite);
            }
            else {
                ("nenhum planeta catalogado");
            }
            break;
        case 5:
            planets.forEach((world, i) => {
                alert(`planeta-${i}:
        \nNome: ${world.nome}
        \nCoordenadas: ${world.coordenadas}
        \nSituação: ${world.situacao}
        \nSatélites: ${world.satelite}
        `);
            });
            break;
        case 6:
            alert('Encerrando...');
            break;
        default:
            alert("Opção inválida");
            break;
    }
} while (option != 6);
