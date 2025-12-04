const modalBtn = document.getElementById("modal_btn");
const form = document.querySelector("form");
const totalCookingTime = 40;

const calcRemaingTime = (timeInOven) => {
    if (timeInOven <= 0) return totalCookingTime;
    return totalCookingTime - timeInOven;
}
const calcLayerTime = (layers) => layers * 2;
const calcTotalTime = (preparationTime) => {
    if (!preparationTime) {
        alert("No se ha podido calcula el tiempo total de trabajo");
        return;
    }
    return totalCookingTime + preparationTime;
};

const timeInOven = Number(prompt("Ingresa el tiempo en el horno:") ?? 0);
const layers = Number(prompt("Ingresa las capas de la lasagna:") ?? 0);

const remainingTime = calcRemaingTime(timeInOven);
const preparationTime = calcLayerTime(layers);
const totalTime = calcTotalTime(preparationTime);

const resultsContainer = document.getElementById("results_container");
resultsContainer.innerHTML = `
    <p class="bg-body-secondary p-2 rounded border"><strong>Tiempo restante en el horno:</strong> ${remainingTime}min</p>
    <p class="bg-body-secondary p-2 rounded border"><strong>Tiempo total de preparacion:</strong> ${preparationTime}min</p>
    <p class="bg-body-secondary p-2 rounded border"><strong>Tiempo total de trabajo:</strong> ${totalTime}min</p>
   `;
modalBtn.click();