var res = document.getElementById("ans").innerHTML
var leftElem = 0
function left(leftItem) {
    leftElem = leftItem
    return leftElem
}

var rightElem = 0
function right(rightItem) {
    rightElem = rightItem
    return rightElem
}
// console.log(right())

function submit() {
    console.log(leftElem)
    if(rightElem == leftElem) {
        document.getElementById("ans").innerHTML = "true"
        document.getElementById("ans").style.color = "green"
        rightElem = 0
        leftElem = 0
    }
    else {
        document.getElementById("ans").innerHTML = "false"
        document.getElementById("ans").style.color = "red"
        leftElem = 0
        rightElem = 0
    } 
    
}