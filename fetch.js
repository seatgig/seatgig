document.addEventListener("DOMContentLoaded", function () {
  fetch("https://bloggyhands.online/fetch_data.php")
    .then((response) => response.json())
    .then((data) => {
      let eventsContainer = document.createElement("div");
      eventsContainer.id = "events";
      document.body.appendChild(eventsContainer);

      let output = "<h2>Upcoming Events</h2>";
      data.forEach((event) => {
        output += `<div class="event-card"><h3>${event.EventN}</h3><p><strong>Performer:</strong> ${event.Performer}</p><p><strong>Venue:</strong> ${event.Venue}</p><p><strong>Date:</strong> ${event.Date}</p><p><strong>Time:</strong> ${event.Time}</p></div>`;
      });
      eventsContainer.innerHTML = output;
    })
    .catch((error) => console.error("Fetch Error:", error));
});
