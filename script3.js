function addRecommendation() {
    const nameInput = document.getElementById("recommender-name");
    const recommendationInput = document.getElementById("new-recommendation");
    const recommendationList = document.getElementById("recommendation-list");

    const name = nameInput.value.trim();
    const recommendation = recommendationInput.value.trim();

    if (name === "" || recommendation === "") {
        alert("Please enter both your name and a recommendation.");
        return;
    }

    // Create a new recommendation element
    const newRecommendation = document.createElement("div");
    newRecommendation.className = "recommendation";
    newRecommendation.innerHTML = `
        <p>"${recommendation}"</p>
        <h4>- ${name}</h4>
    `;

    // Append the new recommendation to the list
    recommendationList.appendChild(newRecommendation);

    // Clear input fields
    nameInput.value = "";
    recommendationInput.value = "";

    // Confirmation popup
    alert("Thank you for your recommendation!");
}
