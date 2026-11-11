// カグチカ！ 共通 JavaScript

document.addEventListener("DOMContentLoaded", () => {
    console.log("カグチカ！ アプリケーション動作中");

    // 設定トグルの動作
    const toggles = document.querySelectorAll('.toggle-switch input');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            const label = e.target.closest('.toggle-group').querySelector('span').innerText;
            console.log(`${label} : ${e.target.checked ? 'ON' : 'OFF'}`);
        });
    });

    // コメントフォーム処理
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('comment-input');
            if (input && input.value.trim() !== '') {
                const list = document.getElementById('comment-list');
                const newItem = document.createElement('div');
                newItem.className = 'card';
                newItem.style.marginBottom = '8px';
                newItem.innerHTML = `<strong>神楽ファンA</strong> <span style="font-size:11px; color:#888;">たった今</span><p>${input.value}</p>`;
                list.prepend(newItem);
                input.value = '';
            }
        });
    }

    // RPG攻撃ボタン等の動作演出
    const atkBtns = document.querySelectorAll('.rpg-action-btn');
    atkBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const log = document.getElementById('battle-log');
            if(log) {
                log.innerText = `${btn.innerText} を繰り出した！ 敵にダメージを与えた！`;
            }
        });
    });
});
