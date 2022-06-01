<?php

$data = file_get_contents('coba.json');
// Kalau tidak ada 'true' jadinya object, kalau ada jadinya array
$mahasiswa = json_decode($data, true);

var_dump($mahasiswa);

echo $mahasiswa[1]["pembimbing"]["pembimbing2"];
