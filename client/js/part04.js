const content = getNode(".contents");

function handleClick(e) {
  e.preventDefault();
  let target = e.target;

  while (!target.getAttribute("data-name")) {
    target = target.parentElement;

    if (target.tagName === "BODY") {
      target = null;
      return;
    }
  }

  const template = /* html */ `
  <div class="id">₩
    <div class="profile_img border_over"><img src="./assets/part03/tigerr.png" alt="프로필사진"></div>
    <div class="comment_field">
        <div class="text_container">
            <div class="name"><a href="#">심심</a></div>
            <div class="text_field">value</div>
        </div>
    </div>
</div>
`;

  console.log(target);
}

content.addEventListener("click", handleClick);
