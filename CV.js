//Calcula la edad respecto a la fecha que tiene el sistema

{getEdad("1986/09/26 11:30:00")}
function getEdad(dateString) {
    let hoy = new Date()
    let fechaNacimiento = new Date(dateString)
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--
    }
      document.getElementById('edad').innerHTML = edad
  }
 
 
  //Efecto de barrido de las barras rojas en los titulos
 
  let i=100;
  function temporizador() {
    i--;
    setTimeout(funcionConRetraso,5);    
  }
   function funcionConRetraso() {
    document.documentElement.style.setProperty('--wi', i +"%");
    if (i>25){
      temporizador();
      }
    }

  

  