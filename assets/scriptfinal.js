countdown();
function countdown() {
let data = new Date();
data.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
var atual = new Date().getTime();
var end = new Date('Jan 23, 2022 00:00:00').getTime();
var restante = end - atual;
var dias = Math.floor(restante / (1000 * 60 * 60 * 24));
var horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
var segundos = Math.floor((restante % (1000 * 60)) / 1000);
if(dias <= 0 && horas <= 0 && minutos <= 0 && segundos <= 0){
    location.replace('https://tribalworldwide.vercel.app/') 
}
else{
    setTimeout(countdown, 1000);
}
}
