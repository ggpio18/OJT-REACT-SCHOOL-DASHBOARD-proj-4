<?php
$conn = null;
$conn = checkDbConnection();
$student = new Student($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($student);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();