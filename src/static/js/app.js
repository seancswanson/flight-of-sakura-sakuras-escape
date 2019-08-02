const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);

class Init {
  constructor() {
    console.log("This is init constructor");

    this.initMenuClickHandlers();
  }

  initMenuClickHandlers() {
    this.mainMenu = query(".menu");
    this.playButton = query("#play-btn");
    this.gameWrapper = query("#game-wrapper");

    this.playButton.addEventListener("click", () => {
      this.hideMenu();
      this.showGameWrapper();
    });
  }

  hideMenu() {
    this.mainMenu.classList.add("hidden");
  }

  showGameWrapper() {
    this.gameWrapper.classList.add("shown-flex");
    const game = new Game();
  }
}

class Game {
  constructor() {
    const canvas = query("#game");
    const ctx = canvas.getContext("2d");

    console.log("This is game constructor");
  }
}

class Ship {
  constructor(canvas, ctx) {
    const shipPos = {
      x: canvas.width / 2,
      y: 10
    }
    
    const shipHeight = 10;
    const shipWidth = 40;

    ctx.
  }
}

new Init();
