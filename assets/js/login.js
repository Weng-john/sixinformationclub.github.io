var btn = document.getElementById("passBtn");
btn.onclick = function(){
    var done = 0;
    var team = document.login.username.value;
    var password = document.login.password.value;
    
    if (team == "第一小隊" && password == "1"){
        window.open("checkpoint-1.html");
        done = 1;
    }
    if (team == "第二小隊" && password == "2"){
        window.open("checkpoint-2.html");
        done = 1;
    }
    if (team =="第三小隊" && password == "3"){
        window.open("checkpoint-3.html");
        done = 1;
    }
    if (team == "第四小隊" && password == "4"){
        window.open("checkpoint-4.html");
        done = 1;
    }
    if (team == "第五小隊" && password == "5"){
        window.open("checkpoint-5.html");
        done = 1;
    }
    if (done == 0){
        alert("             輸入錯誤>_<\n                重新找找吧!!!");
    }
}