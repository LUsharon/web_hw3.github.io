function emailClick(){
    let input = document.getElementById("email");
    input.style.color = "black";
    input.value = "";
}

function buttonHover() {

    document.querySelector('.btn.continue').style.backgroundColor = "#1b7f65";
}

function buttonLeave() {
    document.querySelector('.btn.continue').style.backgroundColor = '';
}