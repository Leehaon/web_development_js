

function showText(s) {
  let textElement = document.getElementById('text');
  textElement.innerHTML = s;
}

function updateComScore(score) {
  let comScoreElement = document.getElementById('computer-score');
  comScore += score;
  comScoreElement.innerHTML = comScore;
}

function updateUserScore(score) {
  let userScoreElement = document.getElementById('user-score');
  userScore += score;
  userScoreElement.innerHTML = userScore;
}

function disabledComButton(flag) {
  let computerButtons = document.getElementsByClassName('btn-computer');

  for ( let i = 0 ; i < computerButtons.length ; i++) {
    computerButtons[i].disabled = flag;
  }
}

function disabledUserButton(flag) {
  let userButtons = document.getElementsByClassName('btn-user');

  for ( let i = 0 ; i < userButtons.length ; i++) {
    userButtons[i].disabled = flag;
  }
}

function updateAI() {}




// 기능 구현 완료 후에 리팩토링이 적용되는 부분
function onComputerShoot() {

  if(!isComputerTurn) return;

  let shootType = Math.random() < 0.5 ? 2 : 3;

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
  disabledComButton(true);
  disabledUserButton(false);
}

function onUserShoot(shootType) {
  if(isComputerTurn) return;

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      showText('2점슛을 성공시켰습니다.🏀 now - computer');
      updateUserScore(2);
    } else {
      showText('2점슛을 실패했습니다!🎈 now - computer');
    }
  } else {
    if(Math.random() < 0.33) {
      showText('3점슛을 성공시켰습니다 🎆 now - computer');
      updateUserScore(3);
    } else {
      showText('3점슛을 실패했습니다ㅜㅜㅜ👓 now - computer');
    }
  }

  isComputerTurn = true;

  disabledComButton(false);
  disabledUserButton(true);

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
/