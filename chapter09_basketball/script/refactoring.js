let comScore = 0;
let userScore = 0;
let isComputerTurn = true;
let shootLeft = 15;

// 여기에 리팩토링의 첫 번째 단계 함수화 진행 -> 반복되는데 짧아서 대체 가능한 애

function showText(s) {
  let textElement = document.getElementById('text');
  textElement.innerHTML = s;
}

function updateComScore(score) {
  let comScoreElement = document.getElementById('computer-score');
  comScore += score;

  comScoreElement.innerHTML = comScore;
}


// 기능 구현 완료 후에 리팩토링이 적용되는 부분
function onComputerShoot() {
  if(!isComputerTurn) return;

  let shootType = Math.random() < 0.5 ? 2 : 3;

  let comScoreElement = document.getElementById('computer-score');

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      showText('컴퓨터가 2점슛을 성공시켰습니다.🏀 now - user');
      updateComScore(2);
    } else {
      showText('컴퓨터가 2점슛을 실패했습니다!🎈 now - user');
    }
  } else {
    if(Math.random() < 0.33) {
      showText('컴퓨터가 3점슛을 성공시켰습니다ㅠㅠ 🎆 now - user');
      updateComScore(3);
    } else {
      showText('컴퓨터가 3점슛을 실패했습니다!👓 now - user');
    }
  }

  isComputerTurn = false;

  let computerButtons = document.getElementsByClassName('btn-computer');

  for ( let i = 0 ; i < computerButtons.length ; i++) {
    computerButtons[i].disabled = true;
  }

  let userButtons = document.getElementsByClassName('btn-user');

  for ( let i = 0 ; i < userButtons.length ; i++) {
    userButtons[i].disabled = false;
  }
}

function onUserShoot(shootType) {
  if(isComputerTurn) return;

  let userScoreElement = document.getElementById('user-score');

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      showText('2점슛을 성공시켰습니다.🏀 now - computer');
      userScore += 2;

      userScoreElement.innerHTML = userScore;
    } else {
      showText('2점슛을 실패했습니다!🎈 now - computer');
    }
  } else {
    if(Math.random() < 0.33) {
      showText('3점슛을 성공시켰습니다 🎆 now - computer');
      userScore += 3;

      userScoreElement.innerHTML = userScore;
    } else {
      showText('3점슛을 실패했습니다ㅜㅜㅜ👓 now - computer');
    }
  }

  isComputerTurn = true;

  let computerButtons = document.getElementsByClassName('btn-computer');

  for ( let i = 0 ; i < computerButtons.length ; i++) {
    computerButtons[i].disabled = false;
  }

  let userButtons = document.getElementsByClassName('btn-user');

  for ( let i = 0 ; i < userButtons.length ; i++) {
    userButtons[i].disabled = true;
  }

  shootLeft --;

  let shootLeftElement = document.getElementById('shots-left')
  shootLeftElement.innerHTML = shootLeft;

  if (shootLeft === 0) {
    if (userScore > comScore) {
      alert('이겼습니다');
      showText('이겼습니다');
    } else if (userScore < comScore) {
      alert('졌습니다');
      showText('졌습니다');
    } else {
      alert('비겼습니다');
      showText('비겼습니다');
    }
  }
}