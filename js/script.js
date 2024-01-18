
function calculateArea() {
    var sideLengthForArea = parseFloat(document.getElementById("sideLengthArea").value);

    if (isNaN(sideLengthForArea) || sideLengthForArea <= 0) {
        alert("Masukkan nilai panjang sisi yang valid.");
        return;
    }

    var areaForArea = sideLengthForArea * sideLengthForArea;

    document.getElementById("areaResultForArea").textContent = areaForArea.toFixed(2);

    document.getElementById("areaResultContainer").style.display = "block";
}
