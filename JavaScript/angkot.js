/*Pengulangan While n for
var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
while(noAngkot <= angkotBeroperasi) {
    console.log('angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}
for( noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++ ) {
    console.log('angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}
*/
var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

    for( noAngkot = 1; + noAngkot <= jumlahAngkot; noAngkot++ ) {
        if( noAngkot <= 6) {
            console.log('Ankot No. ' + noAngkot + ' beroperasi dengan baik')
        }
        
        else {
            console.log('Angkot No. ' + noAngkot + ' tidak beroperasi dengan baik')
        }
    }
    