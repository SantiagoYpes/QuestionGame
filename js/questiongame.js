/**
 * Primero Creamos la clase Pregunta y le definimos los valores
 * Luego Creamos la clase Nivel y le asignamos los atributos
 */
class Question {
    constructor(question, answers,answer_good) {
      this.question = question;
      this.answers = answers;
      this.answer_good=answer_good
    }

    function (params) {
        
    }
}
class Level{
    constructor(level,questions,bonus){
        this.level=level
        this.questions=questions
        this.bonus=bonus
    }
}
/**
 * Procedemos a Crear las preguntas por cada nivel y a signarlas a las clases preguntas
 * y a su vez asignar preguntas al nivel
 */
//Questions

//level1
const question1_1= "¿Cuantos años tiene un año bisiesto?"
const answer_bad1_1= ["367","368","365","366"]
const answer_good1_1="366"

const question1_2= "¿Cuál es la capital de Italia?"
const answer_bad1_2= ["Florencia","Atenas","Venecia","Roma"]
const answer_good1_2="Roma"

const question1_3= "¿Cuál de los siguientes gestores de bases de datos es no relacional?"
const answer_bad1_3= ["MySql","Oracle","SQL Server","MongoDB"]
const answer_good1_3="MongoDB"

const question1_4= "¿Cuál de los siguientes colores es considerado como primario"
const answer_bad1_4= ["Verde","Morado","Naranja","Rojo"]
const answer_good1_4="Rojo"

const question1_5= "¿Cuántas silabas tiene la palabra perro?"
const answer_bad1_5= ["Tres","Cuatro","Una","Dos"]
const answer_good1_5="Dos"


const quest1_1 = new Question(question1_1, answer_bad1_1,answer_good1_1)
const quest1_2 = new Question(question1_2, answer_bad1_2,answer_good1_2)
const quest1_3 = new Question(question1_3, answer_bad1_3,answer_good1_3)
const quest1_4 = new Question(question1_4, answer_bad1_4,answer_good1_4)
const quest1_5 = new Question(question1_5, answer_bad1_5,answer_good1_5)
///////////////////////////////////////////////////////////////////////////////////
//level 2
const question2_1= "¿Que idioma se habla en Francia?"
const answer_bad2_1= ["Frances","Aleman","Español","Ingles"]
const answer_good2_1="Frances"

const question2_2= "¿Cuál es el país mas grande de America Latina?"
const answer_bad2_2 =["Brasil","Colombia","Argentina","Perú"]
const answer_good2_2="Brasil"

const question2_3= "¿De que color esel logo de Twitter?"
const answer_bad2_3= ["Rojo","Verde","Azul","Gris"]
const answer_good2_3="Azul"

const question2_4= "¿Quien Creó Facebook?"
const answer_bad2_4= ["Zuckerberg","Bill Gates","Elon Musk", "Steve Jobs"]
const answer_good2_4="Zuckerberg"

const question2_5= "¿Cada cuanto se elige presidente en Colombia?"
const answer_bad2_5= ["Tres años","Cuatro años","Un año","Cinco años"]
const answer_good2_5="Cuatro años"

const quest2_1 = new Question(question2_1, answer_bad2_1,answer_good2_1)
const quest2_2 = new Question(question2_2, answer_bad2_2,answer_good2_2)
const quest2_3 = new Question(question2_3, answer_bad2_3,answer_good2_3)
const quest2_4 = new Question(question2_4, answer_bad2_4,answer_good2_4)
const quest2_5 = new Question(question2_5, answer_bad2_5,answer_good2_5)
////////////////////////////////////////////////////////////
//Level 3
const question3_1= "A caballo regalado....."
const answer_bad3_1= ["No se le mira el diente","Se recibe y se guarda","Vendo uno y compro", "No sabe no responde"]
const answer_good3_1="No se le mira el diente"

const question3_2= "¿Cuál es la traducción al inglés de conocimiento?"
const answer_bad3_2= ["Knowledge","Know","Smart","Info"]
const answer_good3_2="Knowledge"

const question3_3= "¿Quien escribió la Odisea?"
const answer_bad3_3= ["Homero","Miguel de Cervantes","Edgar Allan Poe","Gabo"]
const answer_good3_3="Homero"

const question3_4= "¿Cuál es el lugar más frío de la tierra?"
const answer_bad3_4= ["Rusia","La antártida","Canadá","Groenlandia"]
const answer_good3_4="La antártida"

const question3_5= "¿Cuál es el río más largo del mundo?"
const answer_bad3_5= ["Amazonas","Nilo","Yangtsé","Misisipi"]
const answer_good3_5="Amazonas"


const quest3_1 = new Question(question3_1, answer_bad3_1,answer_good3_1)
const quest3_2 = new Question(question3_2, answer_bad3_2,answer_good3_2)
const quest3_3 = new Question(question3_3, answer_bad3_3,answer_good3_3)
const quest3_4 = new Question(question3_4, answer_bad3_4,answer_good3_4)
const quest3_5 = new Question(question3_5, answer_bad3_5,answer_good3_5)
/////////////////////////////////////////////////////////////////
//level 4
const question4_1= "¿Qué cantidad de huesos en el cuerpo humano?"
const answer_bad4_1= ["206","300","211","208"]
const answer_good4_1="206"

const question4_2= "¿Cuándo acabó la II Guerra Mundial?"
const answer_bad4_2= ["1918","1940","1943","1945"]
const answer_good4_2="1945"

const question4_3= "¿Quién escribió el origen?"
const answer_bad4_3= ["Dawn Brown","Nietzsche","Rafael Pombo","Oscar Wilde"]
const answer_good4_3="Dawn Brown"

const question4_4= "Quien compuso For Elise"
const answer_bad4_4= ["Beethoven","Mozart","Chopin","Liszt"]
const answer_good4_4="Beethoven"

const question4_5= "¿Quién es considerado el destructor de la moral?"
const answer_bad4_5= ["Nietzsche","Sam Harris","Bertrand Russel","Daniel Denneth"]
const answer_good4_5="Nietzsche"

const quest4_1 = new Question(question4_1, answer_bad4_1,answer_good4_1)
const quest4_2 = new Question(question4_2, answer_bad4_2,answer_good4_2)
const quest4_3 = new Question(question4_3, answer_bad4_3,answer_good4_3)
const quest4_4 = new Question(question4_4, answer_bad4_4,answer_good4_4)
const quest4_5 = new Question(question4_5, answer_bad4_5,answer_good4_5)
//////////////////////////////////////////////////////////////////////////////////////////
//level 5
const question5_1= "Si 50 es el 100%, ¿cuánto es el 90%"
const answer_bad5_1= ["20","45","30","35"]
const answer_good5_1="45"

const question5_2= "¿Cuál de estos países no es pertenece a la union Europea?"
const answer_bad5_2= ["Alemania","Eslovenia","Estonia","Rusia"]
const answer_good5_2="Rusia"

const question5_3= "¿Cuántos países tiene el planeta tierra?"
const answer_bad5_3= ["165","194","191","198"]
const answer_good5_3="194"

const question5_4= "¿Cómo se llama el animal más rápido del mundo"
const answer_bad5_4= ["Guepardo","Tigre","Avestruz","León"]
const answer_good5_4="Guepardo"

const question5_5= "¿Un personaje del retrato de Dorian Grey es:?"
const answer_bad5_5= ["Basil","Julia","Marco","David"]
const answer_good5_5="Basil"

const quest5_1 = new Question(question5_1, answer_bad5_1,answer_good5_1)
const quest5_2 = new Question(question5_2, answer_bad5_2,answer_good5_2)
const quest5_3 = new Question(question5_3, answer_bad5_3,answer_good5_3)
const quest5_4 = new Question(question5_4, answer_bad5_4,answer_good5_4)
const quest5_5 = new Question(question5_5, answer_bad5_5,answer_good5_5)


/////////////////////////////////////////////////////////////////////////////////////
//Question levels
const level1_question= [quest1_1,quest1_2,quest1_3,quest1_4,quest1_5]
const level2_question= [quest2_1,quest2_2,quest2_3,quest2_4,quest2_5]
const level3_question= [quest3_1,quest3_2,quest3_3,quest3_4,quest3_5]
const level4_question= [quest4_1,quest4_2,quest4_3,quest4_4,quest4_5]
const level5_question= [quest5_1,quest5_2,quest5_3,quest5_4,quest5_5]
//Levels
const Level1 =new Level(1,level1_question,"0")
const Level2 =new Level(2,level2_question,"500")
const Level3 =new Level(3,level3_question,"1000")
const Level4 =new Level(4,level4_question,"2000")
const Level5 =new Level(5,level5_question,"4000")


//Iniciamos con el nivel 1
let level=1

/**
 * Esta funcion nos abre la base de datos de indexed db
 * Posteriormente nos carga un nivel 
 */
function Start_game(){
	var solicitud = indexedDB.open("mibase3");
	solicitud.onsuccess = function(e){
		bd = e.target.result;
	}
	solicitud.onupgradeneeded = function(e){
		bd = e.target.result;
		var tbUsuarios = bd.createObjectStore("scores", {keyPath: "score"});
		//Definimos uno o varios índices secundarios
		tbUsuarios.createIndex("score", "score", { unique: false});
	}
    Load_level(level)  
}
/**
 * Esta funcion nos añade el puntaje obtenido a la base de datos
 */
function Add_Score(score){
	var transaccion = bd.transaction(["scores"], "readwrite");
	var almacen = transaccion.objectStore("scores");
	var agregar = almacen.add({score:score});
	//Si agregar el objeto (registro) es exitoso, se ejecuta --> mostrar
	alert("Se ha agregado una nueva puntuacion")
    let level=1
    alert("Empezar de Nuevo")
    Load_level(level,score)

}
/**
 * Con esta Funcion cargamos un nivel, si el nivel excede los niveles disponibles
 * entonces muestra el mensaje de ganador, sino, carga niveles con una pregunta aleatoria
 */
function Load_level(level,bonus){
    if (level==6){
        alert("Felicidades Ganaste")
        Add_Score(bonus)
    }
    else {
        let txtquestion = document.getElementById("question")
        let txtlevel = document.getElementById("txt_level")
        txtlevel.value = "Pregunta Nivel : " + level
        question_game = getQuestion(level)
        txtquestion.value = question_game.question
        question_answers = fill_fields(question_game.answers)
        btnSalir = document.getElementById("btnSalir");
        //btnSalir.addEventListener("click", Load_level(1), false)
    }
}

/**
 * Esta funcion espera a que se haga clic sobre una opción y evalua si es correcta o no
 * si es correcta incrementa el nivel y llama a la funcion que carga los niveles
 * sino indica que el usuario ha perdido y vuelve a inicar el juego
 */
function push_button(i){
    bonus=document.getElementById("txt_bonus").value
    if(question_answers[i]==question_game.answer_good){
        level+=1
        
        //alert(level)
        if(level<6){
            alert("Respuesta Corresta:     Siguiente nivel: "+level)
            Load_level(level,bonus)
        }
        if(level==6){
            Load_level(level,bonus)
        }
    }
    else{
        //alert(bonus)
        Add_Score(bonus)    
    }
}


/**
 * Primero esta funcion desordena la lista de las respuestas ademas
 * Esta funcion llena los divs que están en el HTML y les asigna las posibles respuestas.
 */
function fill_fields(question_answers){
    question_answers.sort(()=>Math.random()-0.5)
    document.getElementById("btn1").innerHTML=question_answers[0]
    document.getElementById("btn2").innerHTML=question_answers[1]
    document.getElementById("btn3").innerHTML=question_answers[2]
    document.getElementById("btn4").innerHTML=question_answers[3]
    return question_answers
}

function generateRandom(max,min){
    const r = Math.random()*(max-min) + min
    //alert(Math.floor(r))
    return Math.floor(r)
}

/**
 *Esta funcion obtiene una pregunta aleatoria dependiendo del nivel en el que se encuentre
 *despues le devuelve esa pregunta
 */
function getQuestion(level){
    const max=5
    const min=0
    let txtbonus=document.getElementById("txt_bonus")
    const random = generateRandom(min,max)
    if (level==1){
        let question_game=Level1.questions[random]
        txtbonus.value = Level1.bonus
        return question_game
    }
    if (level==2){
        let question_game=Level2.questions[random]
        txtbonus.value = Level2.bonus
        return question_game
    }
    if (level==3){
        let question_game=Level3.questions[random]
        txtbonus.value = Level3.bonus
        return question_game
    }
    if (level==4){
        let question_game=Level4.questions[random]
        txtbonus.value = Level4.bonus
        return question_game
    }
    if (level==5){
        let question_game=Level5.questions[random]
        txtbonus.value = Level5.bonus
        return question_game
    }
}
//Se ejecuta al cargar la página
window.addEventListener("load", Start_game, false)