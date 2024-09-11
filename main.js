// LOGIKA UNTUK MENAMPILKAN OPSI TAHUN 
document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('year-dropdown');
    const currentYear = new Date().getFullYear();
    const startYear = 2000;

    for (let year = currentYear; year >= startYear; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        select.appendChild(option);
    }
});