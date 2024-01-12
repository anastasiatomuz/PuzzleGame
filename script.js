const answerKey = [[],[],[],[]] //hold the image paths that would be correct if the image was solved
const objGrid = [[],[],[],[]] // holds the image objects for the puzzle
let prevObjClicked = null;


function init(){ 
    const randomArr = randomize();
    for (let r = 0; r < 4; r ++){
        for (let c = 0; c < 4; c ++){
            //fills in with the image path for the answer key
            answerKey[r].push("/numbers/" + ((r *4 ) + (c + 1) ) + ".PNG");
            //create and add image objects to the objGrid
            let imgObj = document.getElementById("" + r + "" + c);
            imgObj.addEventListener("click", function() {cardClicked(imgObj);});
            
            objGrid[r][c] = imgObj;
            imgObj.src = "/numbers/" + randomArr[((r *4 ) + c )] + ".PNG";
        }
    }
    console.log(answerKey);
}

function cardClicked(clickedObj){
    if (prevObjClicked == null){
        prevObjClicked = clickedObj;
    } else if (prevObjClicked !== clickedObj) {
        //switch the images for two objects
        let temp = clickedObj.src; //hols the image path for the piece that was just clicked
        clickedObj.src = prevObjClicked.src;
        prevObjClicked.src = temp; 
        prevObjClicked = null;
        if (checkGameWon()){
            gameWon();
        } 
    }
    
    
}

init();


function printObjGrid(){

}


function checkGameWon(){

    for (let r = 0; r < 4; r ++){
        for (let c = 0; c < 4; c ++){
            let objPath = objGrid[r][c].src.substring(objGrid[r][c].src.indexOf("numbers") - 1);
            if (answerKey[r][c] !== objPath){
                console.log(objPath + "|" + answerKey[r][c])
                return false;
            }
        }
    }
    console.log("you game won");
    return true;
}

function gameWon(){
    for (let r = 0; r < 4; r ++){
        for (let c = 0; c < 4; c ++){
            objGrid[r][c].disabled = true;
        }
    }
    const para = document.createElement("p");
    para.textContent = "You won!";
    console.log("you finished");
    document.body.appendChild(para);
}


//credits for the shuffling part of the code: https://stackoverflow.com/a/12646864 
function randomize(){
    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    let array = [];
    for (let i=1; i < 17; i ++){
        array.push(i);
    }
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;
}
