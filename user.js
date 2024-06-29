function calculateRecommendation() {
    const distance = document.getElementById('distance').value;
    const urgency = document.getElementById('urgency').value;
    const cost = document.getElementById('cost').value;

    let recommendation = "";
    let iconClass = "";

    if (urgency === 'high' && cost === 'high') {
        recommendation = "긴급하면서도 비용을 최소화하는 최적의 선택으로는 항공기가 적당할 수 있습니다.";
        iconClass = "fa-plane";
    } else if (urgency === 'low' && cost === 'low') {
        recommendation = "시간과 비용에 여유가 있다면 드론택시를 추천해드립니다. 경제적이면서 여유로운 여행을 즐길 수 있습니다.";
        iconClass = "fa-helicopter";
    } else {
        if (distance > 1000) {
            recommendation = "장거리 여행에는 제트기를 추천드립니다.";
            iconClass = "fa-fighter-jet";
        } else if (distance > 500) {
            recommendation = "중거리 여행에는 항공기가 적합합니다.";
            iconClass = "fa-plane";
        } else {
            recommendation = "단거리 이동에는 드론택시를 추천드립니다.";
            iconClass = "fa-taxi";
        }
    }

    const resultDiv = document.getElementById('recommendationResult');
    resultDiv.innerHTML = `<i class="fas ${iconClass}"></i> <span>${recommendation}</span>`;
}
