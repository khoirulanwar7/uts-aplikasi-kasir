function hasil() {
  var harga = parseInt(document.getElementById("harga").value);
  var jumlah = parseInt(document.getElementById("jumlah").value);
  var bayar = parseInt(document.getElementById("bayar").value);
  var total = harga * jumlah;

  if (bayar > total || total >= 645000) {
    var diskon = 0.35;
    var totalPembayaran = total - total * diskon;
    var kembalian = bayar - totalPembayaran;
    document.getElementById("kembalian").innerHTML = kembalian;
    document.getElementById("diskon").innerHTML = "35 %";
    document.getElementById("totalPembayaran").innerHTML = totalPembayaran;
    document.getElementById("total").innerHTML = total;
  } else if (bayar > total || total >= 430000) {
    var diskon = 0.25;
    var totalPembayaran = total - total * diskon;
    var kembalian = bayar - totalPembayaran;
    document.getElementById("kembalian").innerHTML = kembalian;
    document.getElementById("diskon").innerHTML = "25 %";
    document.getElementById("totalPembayaran").innerHTML = totalPembayaran;
    document.getElementById("total").innerHTML = total;
  } else if (bayar > total || total >= 257000) {
    var diskon = 0.15;
    var totalPembayaran = total - total * diskon;
    var kembalian = bayar - totalPembayaran;
    document.getElementById("kembalian").innerHTML = kembalian;
    document.getElementById("diskon").innerHTML = "15 %";
    document.getElementById("totalPembayaran").innerHTML = totalPembayaran;
    document.getElementById("total").innerHTML = total;
  } else if (total === bayar) {
    var kembalian = bayar - totalPembayaran;
    document.getElementById("kembalian").innerHTML = "Uang Anda Pass";
    document.getElementById("diskon").innerHTML = "0 %";
    document.getElementById("totalPembayaran").innerHTML = total;
    document.getElementById("total").innerHTML = total;
  } else {
    alert("Error uang kamu kurang");
  }
}

function hapus(){
  var barang = document.getElementById('barang').value= ""
  var harga = document.getElementById('harga').value= ""
  var jumlah = document.getElementById('jumlah').value= ""
  var bayar = document.getElementById('bayar').value= ""
  var total = document.getElementById('total').value= ""
  var diskon = document.getElementById('diskon').value= ""
  var totalPembayaran = document.getElementById('totalPembayaran').value= ""
  var kembalian = document.getElementById('kembalian').value= ""
}
