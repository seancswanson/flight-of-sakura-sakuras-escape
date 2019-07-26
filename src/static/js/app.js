class init {
  constructor() {
    console.log("This is init constructor");

    this.query = document.querySelector.bind(document);
    this.queryAll = document.querySelectorAll.bind(document);

    this.initMenuClickHandlers();
  }

  initMenuClickHandlers() {
    // this.startPrompt = this.query(".prompt-start");
    this.mainMenu = this.query(".menu");
    this.playButton = this.query("#play-btn");
    this.gameWrapper = this.query("#game-wrapper");
    // this.introSplash = this.query("#intro-splash");
    // this.mainMenu = this.query("#main-menu");
    // this.resetButton = this.query(".reset-to-menu");

    this.playButton.addEventListener("click", () => {
      this.hideMenu();
      this.showGameWrapper();
    });

    // this.resetButton.addEventListener("click", () => {
    //     this.introMenu.classList.toggle('hidden');
    //     this.introMenu.classList.toggle('shown');
    // });
  }

  hideMenu() {
    this.mainMenu.classList.add("hidden");
  }

  showGameWrapper() {
    this.gameWrapper.classList.add("shown-flex");
  }
}

class game {
  constructor() {
    console.log("This is game constructor");
  }
}

new init();
