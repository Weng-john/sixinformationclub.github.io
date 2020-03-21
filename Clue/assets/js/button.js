var btn = document.getElementById("return");
btn.onclick = function(){
    var team = prompt("請問是第幾小隊？\n格式：第X小隊");
    var item = prompt("請輸入您在會場找到的物品：");
    if ((team == "第一小隊" && item == "元素週期表") ||
        (team == "第二小隊" && item == "密碼轉換表") ||
        (team == "第三小隊" && item == "密碼轉換表") ||
        (team == "第四小隊" && item == "密碼轉換表") ||
        (team == "第五小隊" && item == "密碼轉換表")){
            alert("這件物品將有助於你通過第二關");
            window.open("https://hackmd.io/@Weng-John/SJlc_daZL");
            
    }
    else if (item == null){
        var result = confirm("是不知道該輸入甚麼嗎???");
        if (result){
            alert("可以去問活動組組長喔！");
        }
    }
    else {
        alert("你們手上的東西是其他組的喔!!!\n趕快去找屬於你們的物品吧~~\n這個物品將會幫助你們通過第二關");
    }
}