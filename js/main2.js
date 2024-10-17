const imageOverlay = document.getElementById('imageOverlay');
const secretCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
let inputSequence = [];

document.addEventListener('keydown', (event) => {
  inputSequence.push(event.keyCode);

  if (inputSequence.length > secretCode.length) {
    inputSequence.shift(); // 最初の要素を削除
  }

  if (inputSequence.toString() === secretCode.toString()) {
    // 確認ダイアログを表示
    const confirmation = confirm("ヤツを表示させますか？後悔しない？");
    if (confirmation) {
      imageOverlay.style.display = 'flex';
      imageOverlay.style.opacity = '1'; // オーバーレイを表示
    } else {
      inputSequence = []; // キャンセルした場合は入力履歴をリセット
    }
  }
});

imageOverlay.addEventListener('click', () => {
  imageOverlay.style.opacity = '0'; // フェードアウト
  setTimeout(() => {
    imageOverlay.style.display = 'none'; // フェードアウト後に非表示
  }, 500); // CSSのトランジションに合わせて時間を設定
});
