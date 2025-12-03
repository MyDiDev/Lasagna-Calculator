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

form.addEventListener("submit", ev => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const timeInOven = Number(formData.get("timeNum")) ?? 0;
    const layers = Number(formData.get("layerNum")) ?? 0;

    const remainingTime = calcRemaingTime(timeInOven);
    const preparationTime = calcLayerTime(layers);
    const totalTime = calcTotalTime(preparationTime);

    const resultsContainer = document.getElementById("results_container");
    resultsContainer.innerHTML = `
    <p><strong>Tiempo restante en el horno:</strong> ${remainingTime}min</p>
    <p><strong>Tiempo total de preparacion:</strong> ${preparationTime}min</p>
    <p><strong>Tiempo total de trabajo:</strong> ${totalTime}min</p>
   `;
    modalBtn.click();
});