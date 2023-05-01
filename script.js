const sec = 1000;
const min = sec * 60;
const ore = min * 60;
const gg = ore * 24;
setInterval( timing, 1000);
function timing (){
    const elegiorno = document.querySelector(".giorni");
    let eleora = document.querySelector(".ore")
    let eleminuto = document.querySelector(".minuti")
    let elesecondo = document.querySelector(".secondi")
    
    let today = parseInt((new Date().getTime() ));
    let date = (new Date('2023-07-02T02:00:00').getTime() );
    let delta = parseInt(date - today);
    let day = parseInt(delta / gg);
    let hour = parseInt((delta % gg) / ore);
    let minute = parseInt(((delta % gg) % ore) / min);
    let second = parseInt((((delta % gg) % ore) % min) / sec);
    console.log(day, hour, minute, second);
    elegiorno.innerHTML = `${day}`;
    eleora.innerHTML = `${hour}`;
    eleminuto.innerHTML = `${minute}`;
    elesecondo.innerHTML = `${second}`;
   

    
}