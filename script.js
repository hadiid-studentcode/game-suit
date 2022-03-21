class Main {
  constructor() {
    this.playerName = "KAMU";
    this.botName = "KOMPUTER";
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

  set setNamaPemain(nama) {
    this.playerName = nama;
  }

  get getNamaPemain() {
    return this.playerName;
  }
}

var namakamu = prompt("SEBELUM BERMAIN MASUKKAN NAMA DULU Y");


function Optionplayer(params) {
  let main = new Main();
  main.setNamaPemain = namakamu;
  main.setPlayerOption = params;
  main.setBotOption = main.botBrain();
  main.wincalculation();

  const result = document.getElementById("result");
  const player = document.getElementById("player");
  const komputer = document.getElementById("komputer");

  player.textContent = main.getNamaPemain +" : ";
  komputer.textContent = "Komputer : ";
  result.textContent = "....";

  setTimeout(() => {
    player.textContent = main.getNamaPemain+ " : " + main.getPlayerOption;
    komputer.textContent = "Komputer : " + main.botOption;

    result.textContent = main.matchResult();
  }, 1500);
}
