var myFunction = function(){
    var SrpChoice = prompt("Input Nilai:\n-Batu = 0.\n-Kertas = 5.\n-Gunting = 2.");
    var HuChoice = parseInt(SrpChoice);
    
    var Srp= function (Choice) {
    while(SrpCom !== 2 && SrpCom !==0 && SrpCom !== 5){
        var SrpComTemp =  Math.random() * (6 - 0) + 0;
        var SrpCom = parseInt(SrpComTemp);
       }
        var checkChoice = function (Check, Player){
     if (Player === "Human"){
     var playerType = 1;
     }else{playerType = 2;}
     
        switch(playerType){
     case 1:
        if (Check === 2){
                document.getElementById("hasilH").innerHTML=( Player +"'s Choice = Gunting");
                }else if(Check === 0){
                    document.getElementById("hasilH").innerHTML=(Player +"'s Choice = Batu");
        }else{document.getElementById("hasilH").innerHTML=(Player +"'s Choice = kertas");         }break;
     case 2:
      if (Check === 2){
                document.getElementById("hasilC").innerHTML=( Player +"'s Choice = Gunting");
                }else if(Check === 0){
                    document.getElementById("hasilC").innerHTML=(Player +"'s Choice = Batu");
        }else{document.getElementById("hasilC").innerHTML=(Player +"'s Choice = Kertas"); }break;
     default: document.getElementById("hasilC").innerHTML="error"; 
       document.getElementById("hasilH").innerHTML="error";break;
     }
    }
    
    checkChoice(SrpCom, "Computer");
    checkChoice(Choice, "Human");
    
    //console.log(SrpCom);
    //console.log(Choice);
    
     switch(Choice){
        case 0:
            if(SrpCom === 2){
            document.getElementById("hasil").innerHTML=("Anda Menang!!");
             }else if(SrpCom === 5){
                 document.getElementById("hasil").innerHTML=("Anda Kalah!!");
                 }else{
                     document.getElementById("hasil").innerHTML=("Seri!!");
                     }break;
                     
        case 2:
         if(SrpCom === 5){
             document.getElementById("hasil").innerHTML="Anda Menang!!";
             }else if(SrpCom === 0){
                 document.getElementById("hasil").innerHTML= "Anda Kalah!!";
                 }else{
                     document.getElementById("hasil").innerHTML="Seri!!";
                     }break;
        
        case 5:
         if(SrpCom === 0){
             document.getElementById("hasil").innerHTML="Anda Menang!!";
             }else if(SrpCom === 2){
                 document.getElementById("hasil").innerHTML= "Anda Kalah!!";
                 }else{
                     document.getElementById("hasil").innerHTML="Seri!!";
                     }break;
                     
        default: console.log("error");break;        
        }
    }
    if(SrpChoice!=="0"&&SrpChoice!=="2"&&SrpChoice!=="5"){
        alert("0=Rock 2=Scissor 5=Paper !!");
        }else{Srp(HuChoice);}
    
    }
    