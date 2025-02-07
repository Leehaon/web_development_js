// if (true) console.log("사실"); // 제가 잘 작성하는 방식은 아닌데 실행문이 한 줄이면 {}를 생략 가능합니다.
// if (false) {
//   console.log("거짓");
// }

// 이상의 코드의 경우 거의 사용되지 않습니다.
// true -> false로 바꿀 방법이 없기 때문에.

// let open = true;

// if (open) console.log("안녕하세요.");

// open = false;

// if (open) {
//   console.log("찾아주셔서 감사합니다. 금일은 휴일입니다. 이모지");
// }

// 이상의 코드는 boolean 값을 변수에 대입하여 분기를 조절할  수  있습니다. 11번 라인은 open으로 실행된데 반해, 15번 라인은 동일하게 open 변수임에도 실행된지 않는다는 점에서 분기를 조절 가능합니다.

// true를 반환하는 코드 혹은 false를 반환하는 코드
// let n = 1;
// if (n > 0) {  // true를 반환하는 코드 혹은 false를 반환하는 코드 : 조건식
//   console.log("자연수입니다.");
// }


// open = !open;

// if (open) {
//   console.log("안녕하세요.");
//   console.log("자리로 안내하겠습니다.");
// } else {
//   console.log("영업 종료되었습니다. 죄송합니다.");
// }

// if절 내의 조건식이 참이면 else는 실행되지 않는 
// true 거나 false인 구조이기 때문에
// else 뒤에는 조건식을 명시하지 않음.

// const a = 1;
// const b = 2;
// if (a < b) {
//   console.log("a가 b보다 작다.");
// } else if (a > b) {
//   console.log("a가 b보다 크다")
// } else {
//   console.log("같습니다.")
// }

이거 github에서 가지고오기

let yoot = "도";

switch (yoot) {
  case "도":
    console.log("1칸 전진");
    break;
  case "개":
    console.log("2칸 전진");
    break;
  case "걸":
    console.log("3칸 전진");
    break;
  case "윷":
    console.log("4칸 전진");
    break;
  case "모":
    console.log("5칸 전진");
    break;
  default:
    console.log("무효");
}