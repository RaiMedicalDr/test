// パスワードの確認
function checkPassword() {
    const correctPassword = "292908"; 
    const inputPassword = document.getElementById("password").value.trim();

    if (inputPassword === correctPassword) {
        document.getElementById("testContainer").style.display = "block"; // テストを表示
        document.getElementById("passwordForm").style.display = "none"; // パスワード入力フォームを隠す
    } else {
        alert("パスワードが間違っています");
    }
}

// テスト提出機能
function submitTest() {
    const correctAnswers = {
        question1: ["あの猫は私のテーブルの上にいます","その猫は私のテーブルの上にいます"],
        question2: ["私の叔母はよく私の祖母を訪ねます","私の叔母は良く私の祖母を訪ねます","私のおばはよく私の祖母を訪ねます","私のおばは良く私の祖母を訪ねます"],
        question3: ["yes"],
        question4: ["これはあなたの新しい猫ですかこの猫はとても頭が悪いです"],
        question5: ["yes","Yes","YES"],
        question6: ["yes","Yes","YES"],
        question7: ["it's sunny today"],
        question8: ["今日は曇りです"],
        question9: ["私はタバコが必要ですあなたは"],
        question10: ["私はタバコを持っていますこのタバコは美味しいです"]
    };

    const userAnswers = {};
    for (let i = 1; i <= 10; i++) {
        userAnswers[`question${i}`] = document.getElementById(`question${i}`).value.trim().toLowerCase();
    }

    let score = 0;
    for (let question in correctAnswers) {
        if (correctAnswers[question].some(answer => answer.toLowerCase() === userAnswers[question])) {
            score++;
        }
    }

    // 結果を表示
    document.getElementById("result").innerText = `あなたのスコアは ${score} / 10 です。`;
}
