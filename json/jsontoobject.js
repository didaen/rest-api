let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let mahasiswa = JSON.parse(this.responseText);
        console.log(mahasiswa);
    }
}

// Untuk menjalankan AJAX
// parameter method open(param1, param2, param3)
// param1 : methodnya mau apa, GET atau POST
// param2 : ngambil datanya darimana (coba.json)
// param3 : mau dijalankan secara synchronous atau asynchronus, kalau asynchronous pakai true. Karena AJAX, aynchronous ya

xhr.open('GET', 'coba.json', true);
xhr.send();