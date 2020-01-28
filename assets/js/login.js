var btn = document.getElementById("passBtn");
var time = 0;
btn.onclick = function(){
    var done = 0;
    var team = document.login.username.value;
    var password = document.login.password.value;
    
    if (team == "第一小隊" && password == "1"){
        window.open("第二關/checkpoint-1.html");
        done = 1;
    }
    if (team == "第二小隊" && password == "2"){
        window.open("第二關/checkpoint-2.html");
        done = 1;
    }
    if (team =="第三小隊" && password == "3"){
        window.open("第二關/checkpoint-3.html");
        done = 1;
    }
    if (team == "第四小隊" && password == "4"){
        window.open("第二關/checkpoint-4.html");
        done = 1;
    }
    if (team == "第五小隊" && password == "5"){
        window.open("第二關/checkpoint-5.html");
        done = 1;
    }
    if (done == 0){
        time = time+1;
        alert("             輸入錯誤>_<\n                重新找找吧!!!");
    }
    if (time == 3){
        alert("線索會不會藏在某些東西後面呢???")
    }
}