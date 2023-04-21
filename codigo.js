//-------------------------arduino keypad-----------------------------

// #include <Keypad.h>
// const byte filas = 4;
// const byte columnas = 4;
// char keys [filas][columnas] ={
//   {'1','2','3','A'},
//   {'4','5','6','B'},
//   {'7','8','9','C'},  
//   {'*','0','#','D'}
// };
// byte pinesFilas[filas] = {9,8,7,6};
// byte pinesColumnas[columnas] = {5,4,3,2};

// Keypad teclado = Keypad(makeKeymap(keys),pinesFilas,pinesColumnas,filas,columnas); 

// char tecla;
//                         char clave[7];
// char clave_maestra[7] = "123456";
// byte indice = 0;

// void setup(){
//     Serial.begin(9600);
// }
// void loop(){
//     tecla = teclado.getKey();
//     if(tecla){
//         clave[indice]= tecla;
//         indice++;
//         Serial.print(tecla);
      
//     }
//     if(indice == 6){
//         if(!strcmp(clave , clave_maestra)){
//             Serial.println(" ");
//             Serial.println("correcta");
//            indice=0;
//         }
//         else{
//             Serial.println("incorrecta");
//             indice=0;
//         }
//     }
// }
// let cantidad = prompt("Cuantos alumnos son?");
// let alumnostotales = [];
// for (i=0; i < cantidad; i++){
//     alumnostotales[i] = [prompt("nombre del alumno"), 0];
    
// }
// const tomarAsistencia = (nombre,p)=>{
//     let presencia = prompt(nombre);
//     if (presencia =="p"|| presencia =="P" ){
//         alumnostotales[p][1]++;
//     }
// }

// for(i=0; i < 5; i++){
//     for (alumno in alumnostotales){
//         tomarAsistencia(alumnostotales[alumno][0], alumno);
//     }
// }
// for(alumno in alumnostotales){
//     let resultado = `${alumnostotales[alumno][0]}:<br>
//     _____Asistencias:${alumnostotales[alumno][1]}<br>
//     _____Ausencias: ${5-alumnostotales[alumno][1]}<br>`;
//     if(5-alumnostotales[alumno][1]>1){
//         resultado+="Reprobado por inasistencias";
//     }else{
//         resultado+="<br><br>";
//     }
//     document.write(resultado);
// }
class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${especie}, tengo ${edad} años, y soy color ${color}`
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
    // ladrar(){
    //     if(this.especie == "perro"){
    //         document.write("wow <br>");
    //     }else{
    //         document.write("no puede <br>");
    //     }
    // }
}
class Perro extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    static ladrar(){
        alert(`¡WAW!`);
    }
    set modificarRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro("perro",5,"verde","Irlandes");
const gato = new animal("gato",3,"negro");



// Perro.ladrar();
// perro.verInfo();
// gato.verInfo();
// perro.modificarRaza = "Pedro";
// document.write(perro.raza);

// document.write(perro.getRaza);

// --------- Cofla 3 --------------

class Celulares{
    constructor(color,peso,rdp,rsc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rsc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    botonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        }else{
            alert("Celular apagado");
            this.encendido = false;
        }
    }
   reinicira(){
    if(this.encendido == true){
        alert("Reiniciando celular");
    }else{
        alert("El celular esta apagado");
    }

   }
   tomarFotos(){
    alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
   }
    grabarVideos(){
        alert(`Grabando video en resolucion de: ${this.resolucionDeCamara}`);
    }
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.resolucionDePantalla}</b><br>
        Resolucion de camara: <b>${this.resolucionDeCamara}</b><br>
        Resolucion de video: <b>${this.resolucionDeCamara}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br>
        `
    }
}

class CelularaltaGamma extends Celulares{
    constructor(color,peso,rdp,rsc,ram,rdce){
        super(color,peso,rdp,rsc,ram);
        this.ressolucionDeCamarExtra =rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    infoAltaGamma(){
        return this.mostrarInfo()  + `Resolucion camara extra:<b> ${this.ressolucionDeCamarExtra}</b> `;
    }

}

// celular1 = new Celulares("rojo","150g","5'","full hd","2GB");
// celular2 = new Celulares("negro","154g","5.4'"," hd","1GB");
// celular3 = new Celulares("blanco","146g","5.9'","full hd","2GB");



// celular1.botonEncendido();
// celular1.tomarFotos();
// celular1.grabarVideos();
// celular1.reinicira();
// celular1.botonEncendido();
celular1 =new CelularaltaGamma("rojo","130g","5.2'","4K","3GB","full hd"); 
celular2 =new CelularaltaGamma("negro","142g","6'","4K","3GB","hd");
document.write(`
    ${celular1.infoAltaGamma()}<br><br>
    ${celular2.infoAltaGamma()}<br>
    
`)
class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada == false){
            alert("Se inicio la aplicacion");
            this.iniciada = true;
        }   else{
            alert("Se cerro la aplicacion");
            this.iniciada = false;
        }
     }
     instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("Aplicacion instalada");
        }
     }
     desinstalar(){
        if(this.instalada == true){
            this.instalada=false;
            alert("Aplicacion Desinstalada");
        }git 
     }
     appInfo(){
        return`
        Descargas: <b>La aplicacion tiene ${this.descargas} descargas</b><br>
        Calificacion: <b>${this.puntuacion}</b><br>
        Peso: <b>La aplicacion pesa ${this.peso} mb</b><br>
        `
     }
}

app = new App("16.000","5 estrellas","900mb");

app.instalar()
app.abrir();
document.write(`
    <br>${app.appInfo()}<br><br>
    
    
`)
