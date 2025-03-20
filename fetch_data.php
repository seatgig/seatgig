<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // Allows requests from any domain

// Database connection  SEATGIG$1234$5678
$servername = "db5017505046.hosting-data.io";  // Example: "db123456789.ionos.com"
$username = "dbu5532769";
$password = "SEATGIG$1234$5678";
$dbname = "dbs14035617";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

// Fetch events
$sql = "SELECT EventN, Performer, Venue, Date, Time FROM events ORDER BY Date ASC LIMIT 10";
$result = $conn->query($sql);

$events = [];
while ($row = $result->fetch_assoc()) {
    $events[] = $row;
}

echo json_encode($events);
$conn->close();
?>
