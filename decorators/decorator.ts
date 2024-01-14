function Log() {
  return function(key, descriptor){
    const originalMethod = descriptor.value

    descriptor.value = function(...args: any[]){
      console.log('------------------------------')
      console.log(`Chamando o método ${key} com os parametros: ${JSON.stringify(args)}`)
      
      const result = originalMethod.apply(this, args)

      console.log(`O método ${key} retornou ${JSON.stringify(result)}`)
      console.log('------------------------------')
      return result
    }
  }
}
class Planetas {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @Log()
  calculate(value: number) {
    console.log(`calculando ${value}`);
    return value * 2;
  }

  @Log()
  invertedName(){
    return this.name.split('').reverse().join('')
  }
}

const planetesa = new Planetas('Marte');

const result = planetesa.calculate(5);

const resultADO = planetesa.invertedName();

