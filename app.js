document.addEventListener("DOMContentLoaded", function() {
    console.log("Zoniq Finance Interface initialized.");

    // Mengambil Elemen DOM untuk Operasional Modal ToS
    const modal = document.getElementById("tos-modal");
    const openBtn = document.getElementById("open-tos");
    const closeBtn = document.getElementById("close-tos");
    const acceptBtn = document.getElementById("accept-tos-btn");

    // Fungsi membuka Jendela Modal Ketentuan Hukum
    openBtn.addEventListener("click", function(e) {
        e.preventDefault(); // Mencegah reload halaman
        modal.classList.add("active");
    });

    // Fungsi menutup Jendela Modal lewat tanda silang
    closeBtn.addEventListener("click", function() {
        modal.classList.remove("active");
    });

    // Fungsi menutup Jendela Modal lewat tombol persetujuan
    acceptBtn.addEventListener("click", function() {
        modal.classList.remove("active");
        console.log("User telah menyetujui Ketentuan Regulasi Zoniq Finance.");
    });

    // Menutup modal otomatis jika user mengklik area luar kotak hitam modal
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    });
});

// --- KODE LOGIKA JAVASCRIPT NAVIGASI MENU ZONIQFI ---

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navLinksMenu = document.getElementById("nav-links-menu");
const menuTosLink = document.getElementById("menu-tos-link");
const tosModal = document.getElementById("tos-modal"); // Menghubungkan ke modal lama

// 1. Fungsi Buka-Tutup Menu Lipat di Layar HP
if (mobileMenuBtn && navLinksMenu) {
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenuBtn.classList.toggle("open");
        navLinksMenu.classList.toggle("active");
    });
}

// 2. Otomatis Menutup Menu jika Salah Satu Link Diklik (Khusus Mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("open");
        navLinksMenu.classList.remove("active");
    });
});

// 3. Menghubungkan Menu "Terms of Service" Langsung ke Pop-up Modal Hukum Lama Anda
if (menuTosLink && tosModal) {
    menuTosLink.addEventListener("click", (e) => {
        e.preventDefault();
        tosModal.classList.add("active");
    });
}
