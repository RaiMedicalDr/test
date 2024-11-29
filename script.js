// パスワードの確認
function checkPassword() {
    const correctPassword = "292908"; 
    const inputPassword = document.getElementById("password").value;

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
        question2: ["私は学生ですこの学校はとても美しいです", ""],
        question3: ["iam tommy"],
        question4: ["これはあなたの新しいペットですかこの新しいペットはとても可愛いです", "これはあなたの新しいペットですかこの新しいペットはとても可愛いですね"],
        question5: ["yes"],
        question6: ["彼女は医者ですこの医者は頭が悪いです", "彼女は医者ですこの医者は頭が良くありません", "彼女は医者ですこの医者は頭がわ良くないです"],
        question7: ["today is happy day", "Today is happy day"],
        question8: ["いいえ"],
        question9: ["私はリンゴが必要ですあなたは", "私はりんごが必要ですあなたは", ""],
        question10: ["私はペンを持っています"]
    };

    const userAnswers = {
        question1: document.getElementById('question1').value.trim().toLowerCase(),
        question2: document.getElementById('question2').value.trim().toLowerCase(),
        question3: document.getElementById('question3').value,
        question4: document.getElementById('question4').value.trim().toLowerCase(),
        question5: document.getElementById('question5').value,
        question6: document.getElementById('question6').value.trim().toLowerCase(),
        question7: document.getElementById('question7').value.trim().toLowerCase(),
        question8: document.getElementById('question8').value,
        question9: document.getElementById('question9').value.trim().toLowerCase(),
        question10: document.getElementById('question10').value.trim().toLowerCase(),
    };

    let score = 0;
    for (let question in correctAnswers) {
        if (correctAnswers[question].includes(userAnswers[question])) {
            score++;
        }
    }

    // 結果を表示してからダッシュボードに戻る
    document.getElementById("result").innerText = `あなたのスコアは ${score} / 10 です。`;
    
}

// ログイン処理
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // フォームのデフォルト動作を防止

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // シンプルなユーザー認証（ここではローカルにハードコード）
    const validUsername = "トミー";
    const validPassword = "292908";

    if (username === validUsername && password === validPassword) {
        // ログイン成功時
        localStorage.setItem('loggedIn', 'true'); // ローカルストレージにログイン状態を保存
        window.location.href = "dashboard.html"; // ダッシュボードにリダイレクト
    } else {
        // ログイン失敗時
        document.getElementById('loginMessage').textContent = "ユーザー名またはパスワードが間違っています。";
    }
});

// テスト選択ページと予定の保存と表示
window.onload = function() {
    // ログインチェック
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = "login.html"; // ログインしていなければリダイレクト
    }

    // 過去のテスト履歴を表示（ローカルストレージから取得）
    const pastTests = JSON.parse(localStorage.getItem('pastTests')) || [];
    const pastTestsList = document.getElementById('pastTests');
    pastTests.forEach(test => {
        const li = document.createElement('li');
        li.textContent = test;
        pastTestsList.appendChild(li);
    });

    // 今やるテストを選択
    document.getElementById('startTest').addEventListener('click', function() {
        const selectedTest = document.getElementById('currentTest').value;
        if (selectedTest) {
            if (selectedTest === 'test1') {
                window.location.href = 'test.html'; // テスト1を選択した場合にtest.htmlへリダイレクト
            } else {
                window.location.href = `${selectedTest}.html`; // 他のテストの場合
            }
        } else {
            alert('テストを選択してください');
        }
    });

    // 予定を保存
    document.getElementById('saveEvent').addEventListener('click', function() {
        const date = document.getElementById('calendarDate').value;
        const details = document.getElementById('eventDetails').value;

        if (date && details) {
            const events = JSON.parse(localStorage.getItem('events')) || [];
            events.push({ date: date, details: details });
            localStorage.setItem('events', JSON.stringify(events));

            displayEvents(); // 更新後の予定を表示
        } else {
            alert('日付と予定を入力してください');
        }
    });

    // 保存された予定を表示
    function displayEvents() {
        const events = JSON.parse(localStorage.getItem('events')) || [];
        const eventsList = document.getElementById('eventsList');
        eventsList.innerHTML = ''; // 一度クリア
        events.forEach(event => {
            const li = document.createElement('li');
            li.textContent = `${event.date}: ${event.details}`;
            eventsList.appendChild(li);
        });
    }

    displayEvents(); // 初期表示
};
