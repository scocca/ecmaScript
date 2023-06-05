const fnAsync =() =>{
    return new Promise((resolve, reject)=>{
        (true)
        ?setTimeout(()=>resolve('Async!'),2000)
        :reject(new Error('Error'));
    })
}

const anotherFunction= async ()=>{
    const something = await fnAsync();
    console.log(something);
    console.log('Hello')
}

console.log('Before');

anotherFunction();

console.log('After')

//Ejercicio 1

/*Descripción: Utiliza una función async para hacer una solicitud a 
una API y obtener datos. Puedes utilizar la API de ejemplo JSONPlaceholder 
(https://jsonplaceholder.typicode.com/posts) para simular esta solicitud.)*/

async function fetchData(){
    
        const response = await fetch('https://jsonplaceholder.typicode.com/postsssss')
        if(response.ok){
            const data = await response.json()
            console.log(data)
        }else{
            throw new Error ('404 not found')
        }

}



//fetchData()

const anotherFunction2 = async () => {
    try {
      const something2 = await fetchData();
      console.log('Hello');
    } catch (error) {
      console.log(error);
    }
  }
  
  anotherFunction2();
 
  /*Descripción: Escribe un ejercicio donde debas realizar
   varias solicitudes a una API utilizando funciones async y 
   await. Por ejemplo, puedes obtener datos de diferentes rutas
    de una API y combinar los resultados en un solo objeto.
    
    APIS:
    https://jsonplaceholder.typicode.com/users
    https://restcountries.com/v3.1/all
    https://api.openweathermap.org/data/2.5/weather?q=London&appid={tu_app_id}
    https://api.thedogapi.com/v1/breeds
    https://api.spacexdata.com/v4/launches/lates
    */


  async function multipleApis(){
    
    const url =['https://jsonplaceholder.typicode.com/posts','https://jsonplaceholder.typicode.com/albums']
    
       const response = await Promise.all(url.map(link=>fetch(link)));
       if(response.every(resp => resp.ok)){
         const datos = [];
         datos.push(await Promise.all(response.map(date=>date.json())));
         console.log(datos)
        }
        else{
            throw new Error ('404 not found')
        }
    }
  


//multipleApis()

const anotherFunction3 = async () => {
    try {
      const something3 = await multipleApis();
      console.log('Hello');
    } catch (error) {
      console.log(error);
    }
  }
  

anotherFunction3();

/* Crea una función async que implemente una cola de tareas asincrónicas. 
La cola debe procesar las tareas secuencialmente y esperar a que cada tarea 
se complete antes de pasar a la siguiente.*/

//const palabras = ['manzana', 'perro', 'amarillo', 'guitarra', 'libro', 'sol', 'felicidad', 'playa', 'ciudad', 'amigo'];

async function anotherfunction4(array = palabras){
    await new Promise((resolve, reject)=>{
        (true)
        ?setTimeout(()=>resolve(console.log(array[0])),2000)
        :reject(new Error('Error'));
        if(resolve){
            new Promise ((resolve, reject)=>{
                (true)
                ?setTimeout(()=>resolve(console.log(array[1])),2000)
                :reject (new Error('Error2'))})
            }
        })
}
anotherfunction4()

const palabras = ['manzana', 'perro', 'amarillo', 'guitarra', 'libro', 'sol', 'felicidad', 'playa', 'ciudad', 'amigo'];



    function word(array){
        return new Promise((resolve)=>{console.log(array.length)
        resolve()})
    }

    function index(array){
        return new Promise((resolve)=>{console.log(Object.values(array))
        resolve()})
    }

    async function asyncTask(array=palabras){
        
            await index(array).then(()=>word(array))
        
    }



asyncTask()
  
  
