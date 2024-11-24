const d = document
export function exitMeet(buttomSelector){
    d.addEventListener("click", (e)=>{
        if(e.target.matches(buttomSelector) || e.target.matches(buttomSelector+" *")){
            location.href="salir.html";
        }
    })
}