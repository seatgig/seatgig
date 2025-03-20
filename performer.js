document.addEventListener("DOMContentLoaded", function () {
    let performerIdElement = document.getElementById("performerIds");

    if (performerIdElement) {
        let performerId = performerIdElement.value; // Get performer ID from SeatGig

        console.log("Detected Performer ID:", performerId); // Debugging log

        // Fetch performer details from IONOS database
        fetch(`https://bloggyhands.online/fetch_performer.php?contid=${performerId}`)
            .then(response => response.json())
            .then(data => {
                if (!data.error) {
                    let performerDetailsDiv = document.getElementById("performer-details");

                    if (!performerDetailsDiv) {
                        performerDetailsDiv = document.createElement("div");
                        performerDetailsDiv.id = "performer-details";
                        document.body.appendChild(performerDetailsDiv);
                    }

                    // Insert performer details
                    performerDetailsDiv.innerHTML = `
                        <h2>${data.pname}</h2>
                        <p><strong>ID:</strong> ${data.contid}</p>
                        <p>${data.content}</p>
                    `;
                } else {
                    console.log("Performer not found in IONOS database.");
                }
            })
            .catch(error => console.error("Error fetching performer details:", error));
    } else {
        console.log("No performer ID found on page.");
    }
});
