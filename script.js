function addRecommendation() {
  let input = document.getElementById("new_recommendation");
  if (!input) {
    console.error('Element with ID "new_recommendation" not found.');
    return;
  }
  let text = input.value.trim();

  if (text !== "") {
    let recommendation = document.createElement("div");
    recommendation.className = "recommendation";
    recommendation.innerText = text;

    let recommendationsContainer = document.getElementById("recommendations");
    if (!recommendationsContainer) {
      console.error('Element with ID "recommendations" not found.');
      return;
    }
    recommendationsContainer.appendChild(recommendation);
    input.value = "";

    // Show confirmation popup
    showPopup(true);
  }
}

function showPopup(show) {
  let popup = document.getElementById("popup");
  if (!popup) {
    console.error('Element with ID "popup" not found.');
    return;
  }
  if (show) {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}
