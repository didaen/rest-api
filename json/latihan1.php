<?php
$mahasiswa = [
    [
        "nama" => "Firda Nur",
        "nim" => "4201415006",
        "email" => "firdanur@gmail.com"
    ],
    [
        "nama" => "Sintya Rina",
        "nim" => "4301415006",
        "email" => "sintyar@gmail.com"
    ]
];

// var_dump($mahasiswa);

$data = json_encode($mahasiswa);

echo $data;
