var Btn = document.getElementById("clueBtn");
Btn.onclick = function(){
    var username = document.connectClue.username.value;
    var clue = document.connectClue.clue.value;
    var done = 0
    
    if((username == "第一小隊" && clue == "1") ||
        (username == "第二小隊" && clue == "2") ||
        (username =="第三小隊" && clue == "3") ||
        (username == "第四小隊" && clue == "4") ||
        (username == "第五小隊" && clue == "5")){
            window.open("https://colab.research.google.com/drive/1v_J-dffR5GFQWwmpYWh3C5pL3J-7wPYN");
            done = 1;
    }
    if (done == 0){
        alert("             輸入錯誤>_<\n                重新找找吧!!!");
    }
}