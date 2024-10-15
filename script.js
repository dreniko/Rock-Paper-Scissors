function getComputerChoice() {
    const RandomNum = Math.random();

    if (RandomNum < 0.33) {
        return "rock";
    } else if (RandomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}