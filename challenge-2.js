function speedDetector(speed){
    if(speed <= 70){
        console.log("Ok")
    }
    else if(speed >70){
        let demerit = Math.floor((speed - 70)) /5;
         while(demerit <=12){
            console.log(`Point: ${demerit}`)
            demerit++;
        }
        return "License suspended"     
    }
}
speedDetector(75)