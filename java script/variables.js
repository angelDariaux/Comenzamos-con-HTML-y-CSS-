var x, y, z;       // Declare Variables
x = 5; y = 6;      // Assign Values
z = x + y;         // Compute Values

// https://www.w3schools.com/js/js_syntax.asp como escibir java
//https://www.w3schools.com/js/js_comments.asp como agregar comentarios
//https://www.w3schools.com/js/js_variables.asp tipos de varialbes y como escribirlas
// https://www.w3schools.com/js/js_operators.asp comparadores y operadores
//https://www.w3schools.com/js/js_arithmetic.asp operaciones matematicas
//https://www.w3schools.com/js/js_functions.asp sintaxys de funciones
//https://www.w3schools.com/js/js_objects.asp 
var angel = {
   primerNombre : 'Angel',
   apellido: 'Hernandez',
   edad: 24,
   nombreCompleto : function()
   {
      return (`${this.primerNombre} ${this.apellido}`); //un metodo es una funcion guardada como propiedad dentro de un objeto
   }
};

//https://www.w3schools.com/js/js_events.asp
//https://www.w3schools.com/js/js_strings.asp

var x = "We are the so-called "Vikings" from the north."; //The string will be chopped to "We are the so-called ".
      //ver el link the w3schools para aprender a resolver este problema con \

      //https://www.w3schools.com/js/js_string_methods.asp
//https://www.w3schools.com/js/js_number_methods.asp
//https://www.w3schools.com/js/js_number_methods.asp
//https://www.w3schools.com/js/js_arrays.asp


var array1 = ['angel', 'casa', 'arbol'];
      /*Arrays use numbers to access its "elements", Objects use names to access its "members"*/

      var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;
      /*You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.*/

//https://www.w3schools.com/js/js_array_methods.asp
//https://www.w3schools.com/js/js_random.asp

Math.floor(Math.random() * 11); // returns a random integer from 0 to 10

function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    } //con esto creamos la formula apropiada para crear numeros aleatorios
    // incluyendo al min y al max, ver w2schools para ver mas variables de esto

//https://www.w3schools.com/js/js_booleans.asp
//https://www.w3schools.com/js/js_comparisons.asp 

var voteable = (age < 18) ? "Too young":"Old enough"; // (Ternary) If the variable age is a value below 18, the value of the variable voteable will be "Too young", otherwise the value of voteable will be "Old enough".

//https://www.w3schools.com/js/js_if_else.asp

      // If time is less than 10:00, create a "Good morning" greeting, 
      //if not, but time is less than 20:00, create a "Good day" greeting, 
      //otherwise a "Good evening":

if (time < 10) {
      greeting = "Good morning";
    } else if (time < 20) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }

//https://www.w3schools.com/js/js_switch.asp

      /*This is how it works:
      The switch expression is evaluated once.
      The value of the expression is compared with the values of each case.
      If there is a match, the associated block of code is executed.
      If there is no match, the default code block is executed.*/
    // ver detalles muy intersantes sobre switch en w3schools 

//https://www.w3schools.com/js/js_loop_for.asp

      /*for - loops through a block of code a number of times
      for/in - loops through the properties of an object
      for/of - loops through the values of an iterable object
      while - loops through a block of code while a specified condition is true
      do/while - also loops through a block of code while a specified condition is true */

//https://www.w3schools.com/js/js_loop_while.asp
//https://www.w3schools.com/js/js_scope.asp ARTICULO MUY INTERESANTE
//https://www.w3schools.com/js/js_hoisting.asp To avoid bugs, always declare all variables at the beginning of every scope.
//https://www.w3schools.com/js/js_strict.asp
//https://www.w3schools.com/js/js_this.asp
//https://www.w3schools.com/js/js_let.asp
//https://www.w3schools.com/js/js_const.asp
//https://www.w3schools.com/js/js_arrow_function.asp

hello = function() {
      return "Hello World!";
    }

hello = () => {
      return "Hello World!";
    }

   /*It gets shorter! If the function has only one statement, 
   and the statement returns a value, you can remove the brackets and the 
   return keyword:*/ //Note: This works only if the function has only one statement.

hello = () => "Hello World!";

//https://www.w3schools.com/js/js_debugging.asp --sept 29 2020--
//https://www.w3schools.com/js/js_conventions.asp
//https://www.w3schools.com/js/js_best_practices.asp
//https://www.w3schools.com/js/js_mistakes.asp

//https://www.w3schools.com/js/js_object_definition.asp si entiendes los objetos entiendes java script

      //objeto literal//
var angel = {
   primerNombre : 'Angel',
   apellido: 'Hernandez',
   edad: 24
};
      //objeto usando 'new' keyword//
var persona = new Object();
   persona.primerNombre = 'Angel';
   persona.apellido = 'Hernandez';
   persona.edad = 24;
