// //FORMA DE CREAR OBJETOS CON NOTACION LITERAL

// let person = {
//     name:'matias',
//     age:30,
//     location:'San Miguel de Tucuman',
//     hobbies:['andar en bici', 'programar'],
//     pet:[
//         {
//             name:'firulais',
//             type:'dog'
//         },
//         {
//             name:'blanco',
//             type:'cat'
//         }
        
//     ],
//     children:false,
//     saludar: function () {
//         console.log('Hola chicos soy Matias!')
//     }
// }


// let persona2 = {
//     name:'Lionel Messi',
//     age:36,
//     dni:25677656,
//     children:[{
//         name:'Thiago',
//         age:10
//     },
//     {
//         name:'Mateo',
//         age:7
//     },
//     {
//         name:'Ciro',
//         age:4,
//         pet: ['toto','coco']
//     }
// ]

// }

//CREANDO OBJETOS A PARTIR DE FUNCIONES CONSTRUCTORAS

// function Team (name,colors,people){
//     this.name = name;
//     this.colors = colors;
//     this.people = people;
// }
// let atletico = new Team('Atletico Tucuman',['celeste','blanco'],71000)
// let boca = new Team('Boca Juniors',['azul','amarilo'],70000)
// console.log(atletico)

//CREANDO OBJETOS A PARTIR DE CLASES

// class country{
//     constructor(name,people){
//         this.name = name;
//         this.people = people;
//     }
// }

// const Argentina = new country('Argentina',40000000) //instanciando
// const Brasil = new country('Brasil',80000000)//instanciando

// let productos = [
//     {id:1, nombre:'fideos',descripcion:'tirabuzon', precio: 200, categoria:['familiar','alimento']},
//     {
//         id:2, nombre:'arroz',descripcion:'arroz largo',precio:150,categoria:['familiar','alimento']}
    
// ]
// console.log(productos.nombre)
// console.log(productos[0].nombre)

// let peliculas = [
//     {id:1, nombre:'Titanic',genero:'romance', año:1998,sinopsis:'Una joven de la alta sociedad abandona a su arrogante pretendiente por un artista humilde en el trasatlántico que se hundió durante su viaje inaugural.'},
//     {id:2, titulo:"rapidos y furiosos", genero:"accion", año:2001, sinopsis:"El oficial Brian O'Conner debe decidir dónde queda su lealtad cuando se enamora del mundo de las carreras callejeras, donde trabaja como agente encubierto con la misión de desaparecerlas"},
//     {id:3, nombre:'transformers', genero:'accion', año:2007,sinopsis:'Durante la década de 1990, los Maximals, Predacons y Terrorcons se unen a la batalla existente en la Tierra entre Autobots y Decepticons.'}
// ]
// console.log(peliculas)



// const series = [{
//     nombre:'Friends',
//     temporadas:10,
//     descripcion:'Un grupo de amigos que se divierten y la pasan bien',
//     mostrarDesc: function(){
//         alert(`La serie se llama ${this.nombre} y se trata de ${this.descripcion}`)
//     }},
    
//         {nombre:'Breaking Bad',
//         temporadas:5,
//         descripcion:'De un quimico que cocina metanfetamina',
//         mostrarDesc: function(){
//             alert(`La serie se llama ${this.nombre} y se trata de ${this.descripcion}`)
//         }
// }]

// series.forEach(serie => serie.mostrarDesc())



// let persona = {
//     name:'matias',
//     age:30,
//     location:'San Miguel de Tucuman',
//     hobbies:['andar en bici', 'programar'],
//     pet:[
//         {
//             name:'firulais',
//             type:'dog'
//         },
//         {
//             name:'blanco',
//             type:'cat'
//         }
        
//     ],
//     children:false,
//     saludar: function () {
//         console.log('Hola chicos soy Matias!')
//     }
//}
//HERENCIA: SE PUEDE HEREDAR COSAS DE OTROS OBJETOS
class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    saludar(){
        console.log('Hola soy ' + this.name)
    }
}
class estudiante extends person{
constructor(name,age,comision){
    super(name,age);
    this.comision = comision;
}
}

let Ivan = new estudiante('Ivan', 30, 'Comision 59i');

let SuperHeroe extends person {
    co
}