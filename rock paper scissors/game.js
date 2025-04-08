
let myMove ='';
function botMove(){
  let comMove ='';
  Random = Math.random();
  if(Random <= 1/3){
    comMove = 'Rock';
    if(myMove === comMove){
      alert(`Mymove:${myMove} comMove=${comMove} result=Tie!`);
    }else if(myMove === 'Paper'){
      alert(`Mymove:${myMove} comMove=${comMove} result=Win!`);
    } else{
      alert(`Mymove:${myMove} comMove=${comMove} result=Lose!`);
    }
  }else if(Random > 1/3 && Random <= 2/3){
    comMove = 'Paper';
    if(myMove === comMove){
      alert(`Mymove:${myMove} comMove=${comMove} result=Tie!`);
    }else if(myMove === 'Rock'){
      alert(`Mymove:${myMove} comMove=${comMove} result=Lose!`);
    } else{
      alert(`Mymove:${myMove} comMove=${comMove} result=Win!`);
    }
  } else{
    comMove = 'Scissors';
    if(myMove === comMove){
      alert(`Mymove:${myMove} comMove=${comMove} result=Tie!`);
    }else if(myMove === 'Rock'){
      alert(`Mymove:${myMove} comMove=${comMove} result=Win!`);
    } else{
      alert(`Mymove:${myMove} comMove=${comMove} result=Lose!`);
    }
  }
  return comMove ;
}


