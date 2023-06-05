const countries ={ MX: 'mexico', CO: 'colombia', CL: 'Chile', PE: 'peru'};
console.log(Object.values(countries));

const country ={ MX: 'mexico', CO: 'colombia', CL: 'Chile', PE: 'peru'};
console.log(Object.entries(country));

const frutas = {
    manzana: 'roja',
    plátano: 'amarillo',
    pera: 'verde'
  };

  console.log(Object.values(frutas));

  const texto ='abracadabra';
  console.log(Object.entries(texto));

  const datos = {
    nombre: 'Juan',
    edad: 30,
    direccion: 'Calle Principal',
    salario: 2500
  };
  console.log(Object.entries(datos));

  const newArray ={};
  const entries = Object.entries(datos);
  for (const[clave,valor] of entries ){
    if (typeof valor === 'number'){
        newArray[clave]=valor;
    }
  }
  console.log(newArray);

  const productos = {
    producto1: {
      nombre: 'Camiseta',
      precio: 25,
      categoria: 'Ropa'
    },
    producto2: {
      nombre: 'Zapatos',
      precio: 80,
      categoria: 'Calzado'
    },
    producto3: {
      nombre: 'Bolso',
      precio: 50,
      categoria: 'Accesorios'
    }
  };
  //object values
    // console.log(Object.values(productos))
  //object entries
    //console.log(Object.entries(productos))
  const resultArray = Object.entries(productos)
  
  function filter(keyWord = 'Zapatos', array = resultArray){
    const filtred = [];
    for( const [x,y] of array){
         const {nombre, precio, categoria}=y;
                if ( nombre === keyWord || precio===keyWord||categoria===keyWord){
                    filtred.push([x,y])
                }
            }
        console.log(filtred) 
    }
filter()
  filter('Ropa', resultArray)


  //

  const inventario = {
    item1: {
      nombre: 'Lápiz',
      cantidad: 5
    },
    item2: {
      nombre: 'Borrador',
      cantidad: 2
    },
    item3: {
      nombre: 'Cuaderno',
      cantidad: 10
    }
  };


  function filter2 (operator, parameter, array=inventario){
    const filtred2=[]
    const entry = Object.entries(array)
    
    for(const[x,y] of entry){
        const {nombre, cantidad} = y;
        switch(operator){
            case '<' :if(cantidad<parameter){filtred2.push([x,y])}; break;
            case '>' :if(cantidad>parameter ){filtred2.push([x,y])} break;
    }
    
  }
  console.log(filtred2)
}

  filter2( '<' , 7 ,inventario)
  filter2('>',4,inventario)
