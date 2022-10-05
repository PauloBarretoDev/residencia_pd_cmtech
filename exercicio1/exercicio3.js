function temHabilidades(skills){
    if(skills.indexOf("JavaScript")>=0){
        return true;
    }else{
        return false;
    }
}

var skills = ["ReactJS","React Native","JavaScript"];
console.log(temHabilidades(skills));