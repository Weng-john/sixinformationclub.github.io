var btn = document.getElementById("clue");
btn.onclick = function(){
    var frequency = prompt("請輸入您想要第幾條線索:\n格式:第X條線索");
    if (frequency == "第一條線索"){
        alert("英文是通用語言，密碼也不例外")
    }
    else if (frequency == "第二條線索"){
        alert("博愛座應讓有需求者優先使用");
    }
    else if (frequency == "第三條線索"){
        alert("看那長長的隊伍")
    }
    else if (frequency == null){}
    else {
        alert("若需更多線索，請拿著小隊財產去找活動組組長")
    }
}