//creates a function for grading marks provided
function studentMarks(marks){
    if(marks < 40){
        return "Grade E";
    }
    else if(marks >=40 && marks < 50){
        return "Grade D";
    }
    else if(marks >=50 && marks <60){
        return "Grade C"
    }
    else if(marks >= 60 && marks <80){
        return "Grade B";
    }
    else if(marks>=80 && marks <=100){
        return "Grade A";
    }
    else{
        return "Not a valid number";
    }
}
