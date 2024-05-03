<?php
$conn = null;
$conn = checkDbConnection();
$staff = new Staff($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($staff);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();