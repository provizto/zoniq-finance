// Fungsi untuk menyalin tautan referral ke clipboard
function copyLink() {
    const copyText = document.getElementById("referral-link");
    
    // Pilih teks di dalam input
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Untuk perangkat mobile

    // Salin teks
    navigator.clipboard.writeText(copyText.value)
        .then(() => {
            const btnCopy = document.getElementById("btn-copy");
            btnCopy.innerText = "Tersalin!";
            btnCopy.style.background = "#ffffff";
            
            // Kembalikan teks tombol setelah 2 detik
            setTimeout(() => {
                btnCopy.innerText = "Salin";
                btnCopy.style.background = "#00ffcc";
            }, 2000);
        })
        .catch(err => {
            console.error("Gagal menyalin: ", err);
        });
}

// Logika Simulasi Hubungkan Wallet (Bisa dikembangkan ke Web3/Metamask asli)
const btnConnect = document.getElementById("btn-connect");
const connectionText = document.getElementById("connection-text");
const walletStatusCard = document.querySelector(".status-card");

btnConnect.addEventListener("click", () => {
    // Cek apakah browser memiliki wallet terinstall (misal Metamask)
    if (typeof window.ethereum !== 'undefined') {
        connectionText.innerText = "Menghubungkan...";
        
        // Meminta akses akun ke Metamask
        window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(accounts => {
                const walletAddress = accounts[0];
                // Singkat alamat wallet agar rapi (misal: 0x1234...abcd)
                const shortAddress = walletAddress.substring(0, 6) + "..." + walletAddress.substring(walletAddress.length - 4);
                
                connectionText.innerText = `Terhubung: ${shortAddress}`;
                walletStatusCard.style.borderLeft = "4px solid #00ffcc";
                btnConnect.innerText = "Wallet Terhubung";
                btnConnect.disabled = true;
                btnConnect.style.opacity = "0.6";
                
                // Di sini Anda bisa memicu fungsi untuk memuat data referral asli dari database/smart contract
                loadReferralData(walletAddress);
            })
            .catch(err => {
                console.error(err);
                connectionText.innerText = "Koneksi Dibatalkan";
            });
    } else {
        // Jika tidak ada ekstensi wallet crypto
        alert("Wallet crypto tidak terdeteksi. Silakan install MetaMask atau gunakan crypto browser.");
        connectionText.innerText = "Gagal Terhubung";
    }
});

// Fungsi dummy untuk memuat data (Bisa diganti dengan fetch API Anda)
function loadReferralData(address) {
    document.getElementById("total-ref").innerText = "12";
    document.getElementById("total-rewards").innerText = "45.25 USDT";
    document.getElementById("referral-link").value = `https://zoniqfinance.com/referral?ref=${address.substring(0, 8)}`;
}
