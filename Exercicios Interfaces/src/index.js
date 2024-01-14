"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const users = [];
function consultaAPIuser(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.github.com/users/${name}`);
        const user = yield response.json();
        if (user.message) {
            console.log('Usuário não encontrado!');
        }
        else {
            users.push(user);
            console.log(`
    O usuário ${user.login} foi salvo
    id: ${user.id}
    login: ${user.login}
    nome: ${user.name}
    bio: ${user.bio}
    repositórios públicos: ${user.public_repos}
    `);
        }
    });
}
function showUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = users.find(user => user.login === username);
        if (typeof user === 'undefined') {
            console.log('O usuário não foi encontrado');
        }
        else {
            const response = yield fetch(`${user.repos_url}`);
            const infoUserRepo = yield response.json();
            let mensagem = `
    login: ${user.login}
    nome: ${user.name}
    bio: ${user.bio}
    repositórios públicos: ${user.public_repos}
    `;
            infoUserRepo.forEach((repo) => {
                mensagem += `
      Nome: ${repo.name}
      Descrição: ${repo.description}
      Estrelas: ${repo.star_count}
      É um fork?: ${repo.fork ? 'Sim' : 'Não'}
      `;
            });
            console.log(mensagem);
        }
    });
}
function showAllUser() {
    let message = '';
    users.forEach((user) => {
        message += `User: ${user.login}\n`;
    });
    console.log(message);
}
function sumRepos() {
    const sumRepos = users.reduce((accumulator, user) => accumulator + user.public_repos, 0);
    console.log(`A soma dos repositórios são: ${sumRepos}`);
}
function top5() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5);
    let message = 'Top 5 usuarios com mais repositorios publicos:\n';
    topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`;
    });
    console.log(`${message}`);
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield consultaAPIuser('isaacpontes');
        yield consultaAPIuser('FeTBello');
        yield consultaAPIuser('pcaldass');
        yield showUser('FeTBello');
        showAllUser();
        sumRepos();
        top5();
    });
}
