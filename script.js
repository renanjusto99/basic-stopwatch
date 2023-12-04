var relogio = document.querySelector("#relogio") //Variavel que coleta o visor do relógio.
//Variaveis que definem os valores iniciais do Cronômetro.
var hora = 0 
var min = 0
var seg = 0
var cronometro //Definição da variavel Cronômetro, que receberá no futuro os intervalos.

//Função responsável pela contagem do Cronômetro.
function contador(){
    //Variaveis responsáveis por formatar os numeros no cronômetro, inserindo 0 antes do n° se <10.
    let horValor = hora < 10 ? "0" + hora : hora 
    let minValor = min < 10 ? "0" + min : min
    let segValor = seg < 10 ? "0" + seg : seg

    //Mudança do visor estático, para o visor dinâmico.
    relogio.innerHTML = `${horValor}:${minValor}:${segValor}`
    seg++ //Início da contagem do Cronômetro.
    if (seg > 59){ 
        seg = 0
        min++
        if(min > 59){
            min = 0
            hora++
        }
    }        
}   

//Função responsável pelo inicio.
function iniciar(){
    relogio.classList.remove('pausa') //Remove a classe pausa do Cronômetro, caso ela exista.
    if(!cronometro){ 
        contador() //Chamada do contador
        cronometro = setInterval(contador, 1000) //Intervalo inserido na variavel cronômetro.
    }
}

//Função responsável pela pausa
function parar(){
    relogio.classList.add('pausa') //Adiciona a classe pausa do Cronômetro.
    clearInterval(cronometro) //Interrompimento do intervalo inserido na variavel Cronômetro.
    cronometro = null //null inserido na variavel cronômetro.
}

//Função responsável por zerar
function zerar(){
    relogio.classList.remove('pausa') //Remove a classe pausa do Cronômetro, caso ela exista.
    clearInterval(cronometro) //Interrompimento do intervalo inserido na variavel Cronômetro.
    cronometro = null //null inserido na variavel cronômetro.
    //Variaveis que definem os valores do Cronômetro redefinidas.
    hora = 0 
    min = 0
    seg = 0
    relogio.innerHTML = "00:00:00" //Mudança do visor dinâmico, para o visor estático.
}







