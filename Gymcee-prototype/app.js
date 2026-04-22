let historyData = JSON.parse(localStorage.getItem("gymceeHistory")) || [];

function saveWorkout() {
    const workout = document.getElementById("workout").value;
    const duration = document.getElementById("duration").value;

    if (!workout || !duration) {
        alert("Please fill in all workout fields");
        return;
    }

    const entry = `Workout: ${workout} (${duration} mins)`;
    historyData.push(entry);
    localStorage.setItem("gymceeHistory", JSON.stringify(historyData));

    updateSummary();
    updateHistory();
}

function saveMeal() {
    const meal = document.getElementById("meal").value;
    const calories = document.getElementById("calories").value;

    if (!meal || !calories) {
        alert("Please fill in all meal fields");
        return;
    }

    const entry = `Meal: ${meal} (${calories} calories)`;
    historyData.push(entry);
    localStorage.setItem("gymceeHistory", JSON.stringify(historyData));

    updateSummary();
    updateHistory();
}

function updateSummary() {
    const summary = document.getElementById("summary");
    summary.innerHTML = "";

    const today = historyData.slice(-2); // last two logs (meal + workout)
    today.forEach(item => {
        const p = document.createElement("p");
        p.textContent = item;
        summary.appendChild(p);
    });
}

function updateHistory() {
    const list = document.getElementById("history");
    list.innerHTML = "";

    historyData.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

updateSummary();
updateHistory();