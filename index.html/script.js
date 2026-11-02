document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("memberForm");

    // Pastikan form ditemukan sebelum menambahkan event listener
    if (form) {
        form.addEventListener("submit", function (event) {
            // Jika ada input wajib (required) yang belum diisi, 
            // biarkan browser menampilkan peringatan bawaan HTML.
            if (!form.checkValidity()) {
                return;
            }

            // Mencegah halaman melakukan reload secara otomatis
            event.preventDefault();

            // Mengambil nama pendaftar untuk ditampilkan di pop-up
            const namaInput = document.getElementById("nama").value;

            // --- POP-UP KETIKA SUKSES ---
            alert(`Terima kasih, ${namaInput}! Pendaftaran Anda di MP Gym berhasil dikirim.`);

            // Mengosongkan form setelah berhasil dikirim
            form.reset();
        });
    }
});