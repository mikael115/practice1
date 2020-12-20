const quiz = [
  {question: 'ミカエルが今狂ってるCP名は？',
    answers: [
    'にゃんちょぎ',
    'ちょぎくに',
    '髭膝',
    'ちょぎにゃん'
  ],
  correct: 'ちょぎにゃん'
  }, {
    question: 'ところで膝丸ちゃんの理想のバストサイズは？',
    answers: [
      'Bカップ',
      'Cカップ',
      'Dカップ',
      'Fカップ'
    ],
    correct: 'Bカップ'
  } , {
    question: '触手の良さは？',
    answers: [
      '仲良く触手丼',
      '触手の生えた攻めが受けを犯しながら自分の触手に嫉妬してる',
      '触手に犯される受けを前に何もできない攻め',
      '腸内破壊'
    ],
    correct: '触手の生えた攻めが受けを犯しながら自分の触手に嫉妬してる'
  } , {
    question: '最近ミカエルが個人的にキテる南泉は？（クソ質問）',
    answers: [
      '青姦が一番興奮する南泉',
      '媚薬で素直になっちゃう南泉',
      '首絞めセッじゃないとイけない南泉',
      'オメガバースで突然ヒートが来てモブ姦される南泉'
    ],
    correct: '首絞めセッじゃないとイけない南泉'
  } , {
    question: 'もちもちマスコット（もち）の良さは？',
    answers: [
      '手のひらサイズが可愛い',
      '一緒にお出掛けして写真も撮れる',
      'いっぱい集めて楽園を築ける',
      'ひっくり返ってる姿が無力な虫っぽい'
    ],
    correct: 'ひっくり返ってる姿が無力な虫っぽい'
  } , {
    question: '全然関係ないけどミカエルのデレマスの担当は？',
    answers: [
      '一ノ瀬志希',
      '速水奏',
      '久川凪',
      '棟方愛海'
    ],
    correct: '速水奏'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('分かる（わかり哲也）');
    score++;
  }else {
    window.alert('それもいいね！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert('終了！あなたとミカエルの性癖共通ポイントは' + score + '/' + quizLength + 'です！');
    window.location.href = 'https://mikael115.github.io/practice1-answers/';
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
