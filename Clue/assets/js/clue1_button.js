var btn = document.getElementById("clue");
btn.onclick = function(){
    var frequency = prompt("請輸入您想要第幾條線索:\n格式:第X條線索");
    if (frequency == "第一條線索"){
        alert("字根字首真是背單字的最佳利器")
    }
    else if (frequency == "第二條線索"){
        alert("網頁製作者最崇尚共產主義了");
    }
    else if (frequency == "第三條線索"){
        alert("渦形是個美妙的圖形")
    }
    else if (frequency == null){}
    else {
        alert("若需更多線索，請拿著小隊財產去找活動組組長")
    }
}