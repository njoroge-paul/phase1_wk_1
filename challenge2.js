//speed Detector 
function speedDetector(speed){
    if(speed <70){
        return "Okay";

    }else if(speed > 70){
        const demeritPoints = Math.floor((speed - 70)/5);
        return `You have ${demeritPoints} demerit points`;

}


}
console.log(speedDetector(80));