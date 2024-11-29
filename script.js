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
        question1: ["これはあなたの家ですか", "これはあなたのいえですか"],
        question2: ["私は学生ですこの学校はとても美しいです"],
        question3: ["iam tommy", "yes i am tommy"],
        question4: ["これはあなたの新しいペットですかこの新しいペットはとても可愛いです"],
        question5: ["yes","Yes","YES"],
        question6: ["彼女は医者ですこの医者は頭が悪いです", "彼女は医者ですこの医者は頭が良くありません"],
        question7: ["today is a happy day"],
        question8: ["no","No","NO"],
        question9: ["私はリンゴが必要ですあなたは"],
        question10: ["私はペンを持っています"]
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
