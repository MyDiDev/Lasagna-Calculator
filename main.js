const totalCookingTime = 40;

const calcRemaingTime = (timeInOven) => {
    if (timeInOven <= 0) return totalCookingTime;
    return totalCookingTime - timeInOven;
}

