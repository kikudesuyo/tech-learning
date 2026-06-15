class ButtonHandler {
  constructor() {
    this.buttons = document.querySelectorAll("button");
  }

  goToPage(targetPage) {
    location.href = targetPage;
  };


  addEventListeners(className, targetPage) {
    this.buttons.forEach(button => {
      if (button.classList.contains(className)) {
        button.addEventListener("click", () => {
          this.goToPage(targetPage);
        });
      };
    });
  };
};

const instance = new ButtonHandler();
instance.addEventListeners("login", "./login.html");
instance.addEventListeners("signup", "./signup.html");
// ToDo: 認証する際は入力していることを確認する(制御させる)
instance.addEventListeners("login-authenticate", "./mypage.html");
instance.addEventListeners("signup-authenticate", "./index.html");