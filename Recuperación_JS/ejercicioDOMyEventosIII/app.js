const nights = document.querySelector("#nights");
const cities = document.querySelector("#cities");
const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener('click',calcularCoste);

function calcularCoste(){
    let night = parseInt(nights.value);
    let city = cities.options[cities.selectedIndex].value;
    let costeNoches = costeHotel(night);
    let costeViaje = costeAvion(city);
    let costeCoche = costeAlquilerCoche(night);
    let costeTotal = costeNoches + costeViaje + costeCoche;
    
    let hotel = document.createElement('p');
    let textHotel = document.createTextNode(`Coste Hotel: ${costeNoches}`);
    hotel.appendChild(textHotel);

    let viaje = document.createElement('p');
    let textViaje = document.createTextNode(`Coste viaje: ${costeNoches}`);
    viaje.appendChild(textViaje);

    let coche = document.createElement('p');
    let textCoche = document.createTextNode(`Coste alquiler de coches: ${costeCoche}`);
    coche.appendChild(textCoche);

    let total = document.createElement('p');
    let textTotal = document.createTextNode(`Coste Total ${costeTotal}`);
    total.appendChild(textTotal);

    if(costeTotal <= 199){
        textTotal.parentElement.setAttribute("style","color:green")
    }else if(costeTotal <= 500){
        textTotal.parentElement.setAttribute("style","color:yellow")
    }else{
        textTotal.parentElement.setAttribute("style","color:red")
    }

    result.appendChild(hotel);
    result.appendChild(viaje);
    result.appendChild(coche);
    result.appendChild(total);

}

function costeHotel(night){
    return night * 140;
}

function costeAvion(city, night){
    const citiesCost = {
        "oviedo":15,
        "tokio":700,
        "madrid":90,
        "barcelona":90
    }
    const prices = [15,700,90,90];
    let precioAvion = 0;
    let cityKey = Object.keys(citiesCost);
    for(let i=0; i< 4; i++){
        if(cityKey[i] == city){
            precioAvion = prices[i]
        }
    }
    let precioTotal = 0;

    if(night>3){
        precioTotal = precioAvion *0.10
    }else{
        precioTotal = precioAvion;
    }
    return precioTotal;
}

function costeAlquilerCoche(night){
    costePorDia = night * 40;
    if(night >= 7){
        costePorDia -= 50;
    }else if(night >= 3){
        costePorDia -= 20;
    }
    return costePorDia;
}

