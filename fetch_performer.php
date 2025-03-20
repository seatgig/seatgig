<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // Allow external requests
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Database connection
$servername = "db5017505046.hosting-data.io";
$username = "dbu5532769";
$password = "SEATGIG$1234$5678";
$dbname = "dbs14035617";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

// Get Performer ID (contid) from URL
if (!isset($_GET['contid'])) {
    die(json_encode(["error" => "No performer ID provided"]));
}

$contid = intval($_GET['contid']); // Ensure it's an integer

// Fetch Performer Data
$sql = "SELECT pname, content, contid FROM cont WHERE contid = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $contid);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode($result->fetch_assoc());
} else {
    echo json_encode(["error" => "Performer not found"]);
}

$conn->close();
?>
