document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname;
    
    // Check if the user is on a Performer Page
    if (path.startsWith("/performers/")) {
        let performerName = path.split("/").pop().replace(/-/g, " "); // Extract performer name

        // Wait for SeatGig's page to load completely
        setTimeout(() => {
            let performerIdElement = document.querySelector("[data-performer-id]"); // Assume SeatGig stores performer ID
            if (performerIdElement) {
                let performerId = performerIdElement.getAttribute("data-performer-id"); // Get the performer ID

                // Fetch performer details from IONOS
                fetch(`https://bloggyhands.online/fetch_performer.php?contid=${performerId}`)
                    .then(response => response.json())
                    .then(data => {
                        if (!data.error) {
                            let performerDetailsDiv = document.createElement("div");
                            performerDetailsDiv.innerHTML = `
                                <h2>${data.pname}</h2>
                                <p><strong>ID:</strong> ${data.contid}</p>
                                <p>${data.content}</p>
                            `;
                            document.body.appendChild(performerDetailsDiv);
                        }
                    })
                    .catch(error => console.error("Error fetching performer details:", error));
            }
        }, 2000); // Wait 2 seconds for SeatGig to fully load
    }
});
