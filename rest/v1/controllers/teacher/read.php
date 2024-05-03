<?php
$conn = null;
$conn = checkDbConnection();
$teacher = new Teacher($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($teacher);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();