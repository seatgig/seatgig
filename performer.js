document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname;

    // Check if user is on a performer page
    if (path.startsWith("/performers/")) {
        let performerSlug = path.split("/").pop(); // Extract "jack-black"

        setTimeout(() => {
            let performerIdElement = document.querySelector("[data-performer-id]"); 
            if (performerIdElement) {
                let performerId = performerIdElement.getAttribute("data-performer-id"); // SeatGig ID
                
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

                            performerDetailsDiv.innerHTML = `
                                <h2>${data.pname}</h2>
                                <p><strong>ID:</strong> ${data.contid}</p>
                                <p>${data.content}</p>
                            `;
                        } else {
                            console.log("Performer not found.");
                        }
                    })
                    .catch(error => console.error("Error fetching performer details:", error));
            } else {
                console.log("No performer ID found on page.");
            }
        }, 2000); // Wait for SeatGig page to fully load
    }
});
