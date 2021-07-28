(function () {
  let locationButton = document.querySelector(".locationButton");
  locationButton.addEventListener("click", function () {
    showModal();
    updateLocation();
  });

  function updateLocation() {
    let latitudeDiv = document.querySelector("#latitude");
    let longitudeDiv = document.querySelector("#longitude");
    let accuracyDiv = document.querySelector("#accuracy");

    navigator.geolocation.getCurrentPosition(
      function (location) {
        hideModal();
        latitudeDiv.innerHTML = `Latitud:<span>${location.coords.latitude}</span>`;
        longitudeDiv.innerHTML = `Latitud:<span>${location.coords.longitude}</span>`;
        accuracyDiv.innerHTML = `Latitud:<span>${location.coords.accuracy}</span>`;
      },
      function (err) {
        hideModal();
        alert(err);
      }
    );
  }

  function showModal() {
    document.querySelector(".modal").style.display = "flex";
  }

  function hideModal() {
    document.querySelector(".modal").style.display = "none";
  }
})();
