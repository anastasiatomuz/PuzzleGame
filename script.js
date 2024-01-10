const answerKey = [[],[],[],[]] // will have the answer key of the completed puzzle
const holder = new Map(); //map that holds image bjects
function init(){
    
    for (let i = 0; i < 4; i ++){
        for (let j = 0; j < 4; j ++){
            //fills in with the image path for the answer key
            answerKey[i].push("/numbers/" + ((i *4 ) + (j + 1)) + ".PNG");
            //
            let imgObj = document.getElementById("" + i + "" + j);
            imgObj.addEventListener("click", function(this) {cardClicked(imgObj);});
            imgObj.src = answerKey[i][j];
        }
    }
    console.log(answerKey);

}

function cardClicked(imgObj){
    console.log("card was clicked!");
    console.log(typeof imgObj);
}

init();