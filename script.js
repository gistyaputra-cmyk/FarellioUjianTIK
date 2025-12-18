function login(){
  if(user.value==="admin" && pass.value==="12345"){
    loginPage.style.display="none";
    mainPage.style.display="block";
  }else{
    error.innerText="Username atau password salah!";
  }
}

function logout(){
  location.reload();
}

function popupInfo(jenis){
  let isi="";
  if(jenis==="bersih"){
    isi=`<h3>🌱 Lingkungan Bersih</h3>
    <p>Lingkungan bersih menciptakan kesehatan, kenyamanan, dan kualitas hidup yang baik.</p>
    <p>Kesadaran sosial menjaga kebersihan sangat penting.</p>`;
  }
  if(jenis==="sampah"){
    isi=`<h3>♻️ Banyak Sampah</h3>
    <p>Sampah menumpuk dapat menyebabkan pencemaran.</p>
    <p>Pengelolaan sampah bersama adalah solusi utama.</p>`;
  }
  if(jenis==="rusak"){
    isi=`<h3>🚧 Lingkungan Rusak</h3>
    <p>Kerusakan lingkungan memicu bencana.</p>
    <p>Perlu kolaborasi masyarakat dan pemerintah.</p>`;
  }
  isi+=`<button class="close-btn" onclick="tutupPopup()">Tutup</button>`;
  popupText.innerHTML=isi;
  popup.style.display="flex";
}

function tampilkanSolusi(){
  popupInfo(kondisi.value);
}

function tutupPopup(){
  popup.style.display="none";
}
