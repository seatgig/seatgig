document.addEventListener("DOMContentLoaded", function () {
    // Find the existing #events div
    let eventsContainer = document.getElementById("events");

    if (!eventsContainer) {
        console.error("Error: #events container not found in the HTML.");
        return; // Stop script if #events is missing
    }

    fetch("https://bloggyhands.online/fetch_data.php")
    .then(response => response.json())
    .then(data => {
        console.log("Fetched Data:", data); // Debugging log

        let output = "<h2>Upcoming Events</h2>";
        data.forEach(event => {
            output += `<div class="event-card">
                <h3>${event.EventN}</h3>
                <p><strong>Performer:</strong> ${event.Performer}</p>
                <p><strong>Venue:</strong> ${event.Venue}</p>
                <p><strong>Date:</strong> ${event.Date}</p>
                <p><strong>Time:</strong> ${event.Time}</p>
            </div>`;
        });

        eventsContainer.innerHTML = output;
    })
    .catch(error => {
        console.error("Fetch Error:", error);
        eventsContainer.innerHTML = "<p>Error loading events.</p>";
    });
});
