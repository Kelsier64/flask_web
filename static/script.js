// 獲取分數顯示區域和貓咪圖片
let score = 0;
const scoreElement = document.getElementById("score");
const popcat1 = document.getElementById("popcat1");
const popcat2 = document.getElementById("popcat2");

// 點擊事件
popcat1.addEventListener("mousedown", function () {
    score += 1;
    scoreElement.innerText = score;
    popcat1.style.display = "none";
    popcat2.style.display = "block";
});

popcat1.addEventListener("touchstart", function () {
    score += 1;
    scoreElement.innerText = score;
    popcat1.style.display = "none";
    popcat2.style.display = "block";
});

popcat2.addEventListener("mouseup", function () {
    popcat2.style.display = "none";
    popcat1.style.display = "block";
});

popcat2.addEventListener("touchend", function () {
    popcat2.style.display = "none";
    popcat1.style.display = "block";
});
