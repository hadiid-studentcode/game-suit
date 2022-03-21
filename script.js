class Main {
  constructor() {
    this.playerName = "kamu";
    this.botName = "bot";
    this.playerOption;
    this.botOption;
    this.winner = "";
  }

  get getPlayerOption() {
    return this.playerOption;
  }

  set setPlayerOption(option) {
    this.playerOption = option;
  }

  get getBotOption() {
    return this.botOption;
  }

  set setBotOption(option) {
    this.botOption = option;
  }

  botBrain() {
    const option = ["🖐", "✌", "✊"];
    const bot = option[Math.floor(Math.random() * option.length)];

    return bot;
  }

  wincalculation() {
    if (this.botOption == "🖐" && this.playerOption == "✌") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "🖐" && this.playerOption == "✊") {
      return (this.winner = this.botName);
    } else if (this.botOption == "✌" && this.playerOption == "🖐") {
      return (this.winner = this.botName);
    } else if (this.botOption == "✌" && this.playerOption == "✊") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✊" && this.playerOption == "🖐") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✊" && this.playerOption == "✌") {
      return (this.winner = this.botName);
    } else {
      return (this.winner = "SERI !");
    }
  }

  matchResult() {
    if (this.winner != "SERI") {
      return `${this.winner} MENANG!`;
    } else {
      return `WAAA ${this.winner}, GAK ADA YG MENANG 🤪`;
    }
  }
}

function Optionplayer(params) {
  const main = new Main();
  main.setPlayerOption = params;
  main.setBotOption = main.botBrain();
  main.wincalculation();

   
  const result = document.getElementById("result");
  const player = document.getElementById("player");
  const komputer = document.getElementById("komputer");


  player.textContent = "Player : ";
  komputer.textContent = "Komputer : ";
  result.textContent = "....";

  setTimeout(() => {
 

    player.textContent = "Player :"+ main.getPlayerOption;
     komputer.textContent = "Komputer :"+ main.botOption;

    result.textContent = main.matchResult();
  }, 1500);
}
