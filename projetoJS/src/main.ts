import "./style.css";
import { Veiculo, Nave, Personagem, Filme, Planeta } from "./Interfaces";
//const app = document.querySelector<HTMLDivElement>('#app')!

const retornaPersonagensFilme = async (numeroDoFilme: number) => {
  const response = await (
    await fetch(`https://swapi.dev/api/films/${numeroDoFilme}/`)
  ).json();
  const filme: Filme = response;
  for (const character of filme.characters) {
    const response2 = await (await fetch(`${character}`)).json();
    const personagem: Personagem = response2;
    console.log(personagem.name);
  }
};

const retornaVeiculosFilme = async (numeroDoFilme: number) => {
  const response = await (
    await fetch(`https://swapi.dev/api/films/${numeroDoFilme}/`)
  ).json();
  const filme: Filme = response;
  for (const vehicle of filme.vehicles) {
    const response2 = await (await fetch(`${vehicle}`)).json();
    const Veiculo: Veiculo = response2;
    console.log(Veiculo.name);
  }
};

const retornaNavesFilme = async (numeroDoFilme: number) => {
  const response = await (
    await fetch(`https://swapi.dev/api/films/${numeroDoFilme}/`)
  ).json();
  const filme: Filme = response;
  for (const starship of filme.starships) {
    const response2 = await (await fetch(`${starship}`)).json();
    const nave: Nave = response2;
    console.log(nave.name);
  }
};

const retornaPlanetasFilme = async (numeroDoFilme: number) => {
  const response = await (
    await fetch(`https://swapi.dev/api/films/${numeroDoFilme}/`)
  ).json();
  const filme: Filme = response;
  for (const planet of filme.planets) {
    const response2 = await (await fetch(`${planet}`)).json();
    const planeta: Planeta = response2;
    console.log(planeta.name);
  }
};

const retornaPersonagensAlturaFilme = async (
  altura: number,
  numeroDoFilme: number,
  maior:boolean,
) => {
  const response = await (
    await fetch(`https://swapi.dev/api/films/${numeroDoFilme}/`)
  ).json();
  const filme: Filme = response;
  for (const character of filme.characters) {
      const response2 = await (await fetch(`${character}`)).json();
      const personagem: Personagem = response2;
      if(parseFloat(personagem.height) > altura && maior){
        console.log(`${personagem.name} tem altura maior que ${altura}` );
      }
      else if(parseFloat(personagem.height) < altura && !maior){
        console.log(`${personagem.name} tem altura menor que ${altura}`);
      }
  }
};

const retornaPersonagensPesoFilme = async (
  peso: number,
  numeroDoFilme: number,
  maior:boolean,
) => {
  const response = await (
    await fetch(`https://swapi.dev/api/films/${numeroDoFilme}/`)
  ).json();
  const filme: Filme = response;
  for (const character of filme.characters) {
      const response2 = await (await fetch(`${character}`)).json();
      const personagem: Personagem = response2;
      if(parseFloat(personagem.mass) > peso && maior){
        console.log(`${personagem.name} tem peso maior que ${peso}` );
      }
      else if(parseFloat(personagem.mass) < peso && !maior){
        console.log(`${personagem.name} tem peso menor que ${peso}`);
      }
  }
};

const retornaPersonagemFilmeCor = async (
  cor: String,
  numeroDoFilme: number,
) => {
  const response = await (
    await fetch(`https://swapi.dev/api/films/${numeroDoFilme}/`)
  ).json();
  const filme: Filme = response;
  for (const character of filme.characters) {
      const response2 = await (await fetch(`${character}`)).json();
      const personagem: Personagem = response2;
      if(personagem.skin_color === cor ){
        console.log(`${personagem.name} tem a cor ${cor}` );
      }
      else if(personagem.skin_color != cor){
        console.log(`${personagem.name} não tem a cor ${cor}`);
      }
  }
};

const velocidadeMediaFilme = async (numeroDoFilme: number)=>{
  const response = await (
    await fetch(`https://swapi.dev/api/films/${numeroDoFilme}/`)
  ).json();
  const filme: Filme = response;
  let velocidades: number = 0;
  for (const vehicle of filme.vehicles) {
    const response2 = await (await fetch(`${vehicle}`)).json();
    const veiculo: Veiculo = response2;
    velocidades += parseFloat(veiculo.max_atmosphering_speed);
  }
  console.log(velocidades/filme.vehicles.length);
}

const populacaoMediaFilme = async (numeroDoFilme: number)=>{
  const response = await (
    await fetch(`https://swapi.dev/api/films/${numeroDoFilme}/`)
  ).json();
  const filme: Filme = response;
  let massa: number = 0;
  for (const planet of filme.planets) {
    const response2 = await (await fetch(`${planet}`)).json();
    const planeta: Planeta = response2;
    massa += parseFloat(planeta.population);
  }
  console.log(massa/filme.planets.length);
}

const menu = async ()=>{
  let opcao = 0;
  while(opcao!= 12){
    opcao = parseInt( prompt(
      `Selecione uma das opções \n1:retorna Personagens do Filme \n2:retorna Veiculos do Filme \n3:retorna Naves do Filme
4:retorna Planetas do Filme \n5:retorna Personagens maiores do que a altura do Filme \n6:retorna Personagens menores do que a altura do Filme 
7:retorna Personagens mais pesados do que o peso informado do Filme \n8:retorna Personagens mais leves do que o peso informado do Filme 
9:retorna se o Personagem tem a cor informada \n10:Velocidade Media dos veiculos do filme \n11:População media dos planetas do filme
12:Sair`
    ));
      
    
    switch(opcao){
      case 1:
        let filme = prompt("digite o numero do filme");
        await retornaPersonagensFilme(filme);
        break;
      case 2:
        filme = prompt("digite o numero do filme");
        await retornaVeiculosFilme(filme);
        break;
      case 3:
        filme = prompt("digite o numero do filme");
        await retornaNavesFilme(filme);
        break;
      case 4:
        filme = prompt("digite o numero do filme");
        await retornaPlanetasFilme(filme);
        break;
      case 5:
        filme = prompt("digite o numero do filme");
        let altura = prompt("digite a altura");
        await retornaPersonagensAlturaFilme(altura,filme,true);
        break;
      case 6:
        filme = prompt("digite o numero do filme");
        altura = prompt("digite a altura");
        await retornaPersonagensAlturaFilme(altura,filme,false);
        break;
      case 7:
        filme = prompt("digite o numero do filme");
        let peso = prompt("digite o peso");
        await retornaPersonagensPesoFilme(peso,filme,true);
        break;
      case 8:
        filme = prompt("digite o numero do filme");
        peso = prompt("digite o peso");
        await retornaPersonagensPesoFilme(peso,filme,false);
        break;
      case 9:
        filme = prompt("digite o numero do filme");
        let cor = prompt("digite a cor");
        await retornaPersonagemFilmeCor(cor, filme);
        break;
      case 10:
        filme = prompt("digite o numero do filme");
        await velocidadeMediaFilme(filme);
        break;
      case 11:
        filme = prompt("digite o numero do filme");
        await populacaoMediaFilme(filme)
        break;
      case 12: 
        console.log("Saindo")
        break;
    }

  }
}

menu();
//retornaPersonagensFilme(4);
//retornaVeiculosFilme(4);
//retornaNavesFilme(4);
//retornaPlanetasFilme(4);
//retornaPersonagensAlturaFilme(180,4,true);
//retornaPersonagensAlturaFilme(180,4,false);
//retornaPersonagensPesoFilme(50,4,true);
//retornaPersonagemFilmeCor("fair",4)