interface ResultAPIUsers {
  id: number
  login: string
  name: string
  bio: string
  public_repos: number
  repos_url: string
  message?: "Not Found"
}

interface resultRepoResponse{
  name: string
  description: string
  fork: boolean
  star_count: number
}

const users: ResultAPIUsers[] = []

async function consultaAPIuser(name:string) {
  const response = await fetch(`https://api.github.com/users/${name}`)
  const user:ResultAPIUsers = await response.json()

  if(user.message){
    console.log('Usuário não encontrado!')
  }else{
    users.push(user)
    console.log(`
    O usuário ${user.login} foi salvo
    id: ${user.id}
    login: ${user.login}
    nome: ${user.name}
    bio: ${user.bio}
    repositórios públicos: ${user.public_repos}
    `)
  }
}


async function showUser(username: string){
  const user = users.find(user => user.login === username)
  if(typeof user === 'undefined'){
    console.log('O usuário não foi encontrado')
  }else{
    const response = await fetch(`${user.repos_url}`)
    const infoUserRepo: resultRepoResponse[] = await response.json()
  
    let mensagem = `
    login: ${user.login}
    nome: ${user.name}
    bio: ${user.bio}
    repositórios públicos: ${user.public_repos}
    `
    infoUserRepo.forEach((repo:resultRepoResponse) => {
      mensagem += `
      Nome: ${repo.name}
      Descrição: ${repo.description}
      Estrelas: ${repo.star_count}
      É um fork?: ${repo.fork ? 'Sim' : 'Não'}
      `
    })
    console.log(mensagem)
  } 
}

function showAllUser(){
  let message = ''
  users.forEach((user)=>{
    message += `User: ${user.login}\n`
  }) 
  console.log(message)
}

function sumRepos(){
  const sumRepos = users.reduce((accumulator, user) => accumulator + user.public_repos, 0)
  console.log(`A soma dos repositórios são: ${sumRepos}`)
}

function top5(){
  const topFive = users.slice().sort((a,b) =>  b.public_repos - a.public_repos).slice(0,5)

  let message = 'Top 5 usuarios com mais repositorios publicos:\n'
  topFive.forEach((user, index) =>{
    message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios` 
  })
  console.log(`${message }`)
}

async function main() {
  await consultaAPIuser('isaacpontes')
  await consultaAPIuser('FeTBello')
  await consultaAPIuser('pcaldass')

  await showUser('FeTBello')

  showAllUser()
  sumRepos()
  top5()
}