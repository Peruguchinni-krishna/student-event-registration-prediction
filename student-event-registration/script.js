function predictEvent(){

let interest = document.getElementById("interest").value;

let event = "";

if(interest=="Programming"){
event="Coding Competition";
}

else if(interest=="AI/ML"){
event="AI Workshop";
}

else if(interest=="Public Speaking"){
event="Seminar";
}

else if(interest=="Innovation"){
event="Hackathon";
}

document.getElementById("result").innerHTML=
"Recommended Event: " + event;

}