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
        question1: ["私の娘はおばあちゃんを訪ねます","私の娘はよく祖母を訪ねます"],
        question2: ["私の母は彼の友達と日本語を話します","私の母は日本語を彼の友達と話します"],
        question3: ["はい私は毎朝お茶を飲みます"],
        question4: ["この写真は私の父です"],
        question5: ["チーズサンドイッチを一つとコーヒーを一つください","チーズサンドイッチとコーヒーください"],
        question6: ["yes","Yes","YES"],
        question7: ["私は英語をあのカフェで毎日勉強しています","私は毎日そのカフェで英語を勉強しています"],
        question8: ["My mom is a nurse she is always tired","my mom is a nurse she is always tired"],
        question9: ["私の医者は毎朝読書します"],
        question10: ["あなたの弁護士"]
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
