// // FUNCIONES DECLARATIVAS:
// function hello(){
//     console.log("Hola mundo desde la funcion declarativa")
// } 

// // FUNCIONES ANONIMAS:
// const hello2 = function (){
//     console.log("Hola mundo desde la funcion anonima")
// }


// // ARROW FUNCTION

// const hello3 = () => {
//     console.log("Hola mundo desde la funcion de flecha")
// }
// hello()
// hello2()
// hello3()
// function invertircad (){
//     let texto = prompt("Ingrese su texto:")
//     let separartexto = texto.split("")
//     let invertirtexto = separartexto.reverse("")
//     let unirtexto = invertirtexto.join("")
//     alert(unirtexto)
// }
// invertircad()
// let cadena = prompt("Ingrese el texto")
// let cadenaguion = ("")

// for (let i = 0; i < cadena.length; i++){
//     cadenaguion += cadena[i];
//     if(i !== cadena.length -1){
//         cadenaguion +=("-")
//     }
// }
// alert(`El texto con guiones quedaria:${cadenaguion}`)

// let numero1 
// let numero2
// while (true) {
//     numero= prompt("")
// }


// LAS FUNCIONES CALLBACK SON FUNCIONES QUE SE PASAN COMO ARGUMENTO DE OTRAS FUNCIONES

// const hi = nombre => alert("Hola " + nombre);
// const bye = nombre => alert("Chau "+ nombre)
// function userRegister(saludo){
//     const name = prompt("Como es tu nombre?");
//     saludo(name)
// }
// userRegister(hi)
// userRegister(bye)


//METODOS FILTER, FIND, MAP, FOREACH

// crea un nuevo array con todos los elementos que cumplen con la condicion dada en la funcion
const ageDataBase = [23,30,45,37,25,18,16];

function mayoresde25(edad){
    if(edad>=25){
        return edad
        // console.log(edad)
    }
}
const respuestMayores2 = ageDataBase.filter(mayoresde25)

const respuestMayores = ageDataBase.filter(edad => edad >= 25)
// console.log (respuestMayores)
// console.warn(respuestMayores2)

// duevuelve al PRIMER ELEMENTO que cumpla copn la condicion espeficada
const respuestMayores3 = ageDataBase.find(age => age>=25)
// console.warn(respuestMayores3)



//MAP ejecuta una accion sobre cada uno de los elementos, los modifica y los guarda de nuevo
const en20anos = ageDataBase.map(edadfinal => edadfinal + 20);
// console.log(en20anos)


// FOREACH no devuelve nada, tampoco modifica el array original, pide prestado, hace algo, y lo vuelve a guardar.

const en20anoss = ageDataBase.foreach(age => console.log(age + 20))