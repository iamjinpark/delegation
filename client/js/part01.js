const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];

// navigation을 선택 후 이벤트 위임을 걸어주세요.
// 선택한 대상에 is-active 클래스를 넣어주세요.

const navigation = getNode(".navigation");
const visualImage = getNode(".visual img");
// const lis = document.querySelectorAll("li");

function handleClick(e) {
  e.preventDefault();
  let li = e.target.closest("li");
  if (!li) return;

  // is-active 전부 지워주기
  const list = Array.from(navigation.children);
  // list.forEach((li) => li.classList.remove("is-active"));
  list.forEach((li) => removeClass(li, "is-active"));

  // 클릭하면 해당 이미지로 바꿔주기
  const a = e.target.closest("a");
  visualImage.src = a.href;

  // 내가 n번째 li를 선택하고 있는가?
  // data-index 수집하기

  let index = li.dataset.index;
  console.log(index);
  visualImage.src = `./assets/part01/${data[index - 1].src}`;
  visualImage.alt = data[index - 1].alt;

  // is-active 추가해주기
  // li.classList.add("is-active");
  addClass(li, "is-active");
}

navigation.addEventListener("click", handleClick);

// gsap
const split = new SplitText("h3", { type: "chars" });

gsap.from(split.chars, {
  opacity: 0,
  y: 30,
  stagger: 0.05,
  ease: "back(2)",
  immediateRender: false,
});
