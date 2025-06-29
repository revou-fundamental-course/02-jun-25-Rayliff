function showAlert(message) {
  alert(message);
}

const images = [
  "./assets/gambar1.jpg",
  "./assets/gambar2.png",
];

let currentImage = 0;
const sliderImage = document.getElementById("slider-image");

setInterval(() => {
  currentImage = (currentImage + 1) % images.length;
  sliderImage.src = images[currentImage];
}, 3000); // setiap 3 detik

// Validasi form & tampilkan hasil input
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Semua bidang harus diisi!");
    return;
  }

  const output = `
    <h3>Data yang dikirim:</h3>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telepon:</strong> ${phone}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  document.getElementById("output").innerHTML = output;
  this.reset();
});


  const logo = document.getElementById('logo');
  const nav = document.querySelector('.navbar');

  logo.addEventListener('click', () => {
    // Hanya aktif jika layar kecil
    if (window.innerWidth <= 1024) {
      nav.classList.toggle('nav-open');
    }
  });

  

