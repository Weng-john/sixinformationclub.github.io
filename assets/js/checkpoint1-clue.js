var Btn = document.getElementById("clueBtn");
Btn.onclick = function(){
    var username = document.connectClue.username.value;
    var clue = document.connectClue.clue.value;
    var done = 0
    
    if((username == "第一小隊" && clue == "convolution") ||
        (username == "第二小隊" && clue == "algorithm") ||
        (username =="第三小隊" && clue == "neural_network") ||
        (username == "第四小隊" && clue == "priority_queue") ||
        (username == "第五小隊" && clue == "activation")){
            window.open("https://colab.research.google.com/drive/1v_J-dffR5GFQWwmpYWh3C5pL3J-7wPYN");
            done = 1;
    }
    if (done == 0){
        alert("             輸入錯誤>_<\n                重新找找吧!!!");
    }
}