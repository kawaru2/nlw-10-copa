function createGame(player1, hour, player2) {
  return `
        <li>
          <img src="./assets/icon-${player1}.svg" alt="Ícone do ${player1}">
          <strong>${hour}</strong>
          <img src="./assets/icon-${player2}.svg" alt="Ícone da ${player2}">
        </li>

  `
}
let delay = -0.5;
function createCard(date, day, games) {
  delay = delay + 0.5;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `

}

document.querySelector("#cards").innerHTML =
  createCard ("20/11", "domingo",
    createGame("qatar","13:00","ecuador")) +
  
  createCard("21/11", "segunda-feira",
    createGame("england", "10:00", "iran") +
    createGame("senegal", "13:00", "netherlands") +
    createGame("usa", "16:00", "wales")) +
  
    createCard ("22/11", "terça-feira",
    createGame("argentina", "07:00", "saudi-arabia") +
    createGame("denmark", "10:00", "tunisia") +
    createGame("mexico", "13:00", "poland") +
    createGame("france", "16:00", "australia")) +
  createCard ("23/11", "quarta-feira",
    createGame("marocco", "07:00", "croatia") +
    createGame("germany", "10:00", "japan") +
    createGame("spain", "13:00", "costa-rica") +
    createGame("belgium", "16:00", "canada")) +
  
  createCard("24/11", "quinta-feira",
    createGame("switzeland","07:00", "cameroon") +
    createGame("uruguay", "10:00","south-korea") +
    createGame("portugal","13:00","ghana")+
    createGame("brazil", "16:00", "serbia")) +
  
  createCard ("25/11", "sexta-feira",
    createGame("wales", "07:00", "iran") +
    createGame("qatar", "10:00", "senegal") +
    createGame("netherlands", "13:00", "ecuador") +
    createGame("england", "16:00", "usa")) +
  
  createCard("28/11", "segunda-feira",
    createGame("cameroon", "07:00", "serbia") + 
    createGame("south-korea", "10:00", "ghana") +
    createGame("brazil", "13:00", "switzeland") +
    createGame("portugal", "16:00", "uruguay")) +
  
  createCard("02/12", "sexta-feira",
    createGame("south-korea", "12:00", "portugal") +
    createGame("ghana", "12:00", "uruguay") +
    createGame("brazil", "16:00", "cameroon") +
    createGame("serbia", "16:00", "switzeland"))
