let h3=document.querySelector("h3");

let gameseq=[];
let userseq=[];

let color=["red","yellow","green","purple"];


let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game start");
        started=true;
        levelUp();
   
    };

   

});
 

function flash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
};

function userflash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
};


function levelUp(){
    userseq=[];
   level++;
   h3.innerText=`level ${level}`;
    
let ranind=Math.floor(Math.random()*4);
let rancolor=color[ranind];
  let ranbtn=document.querySelector(`.${rancolor}`);

//   console.log(ranind);
//   console.log(rancolor);
//   console.log(ranbtn);
  gameseq.push(rancolor);
  console.log(gameseq);
flash(ranbtn);

};

function btnclick(){
    
  
    userflash(this);
    let usercolor=this.getAttribute("id");
      userseq.push(usercolor);

      // console.log(userseq);
      
    //   console.log(userseq)
      matchseq(userseq.length-1);

};



function matchseq(idx){
    console.log(idx);
    console.log(gameseq[idx]);
    console.log(userseq[idx]);
  if(gameseq[idx]===userseq[idx]){
    console.log("good");
  if(gameseq.length===userseq.length){
    setTimeout(levelUp,1000);
  };

}

  else{
    h3.innerText=`Game Is Over!Your score was ${level}.
    
     Press any key to start`;
    let body= document.querySelector("body");
          body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },350);

        // let h2=document.querySelector("h2");
        // let high=`Highest score is ${level}`
        //         h2.innerText=high;
        
        

    reset();
    
  }
};





let Allbtn=document.querySelectorAll(".button");

for(btn of Allbtn){
    btn.addEventListener("click",btnclick)
}



function reset(){
   started=false;

    userseq=[];
    gameseq=[];
    level=0;
}






















// let nomans=document.querySelectorAll(".noman");



  let random=Math.floor(Math.random()*4)+1;
//   console.log(random);
    
//   for(noman of nomans){



// noman.addEventListener("click", function(){
//           console.dir("random");
//         console.log(random);
// })};








