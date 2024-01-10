let pilihan = [
  {
    id: 0,
    name: "Paket 1",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 10000,
  },
  {
    id: 1,
    name: "Paket 2",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 20000,
  },
  {
    id: 2,
    name: "Paket 3",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 30000,
  },
];

const menuSection = document.querySelector(".menu-section");

pilihan.map((anak) => {
  menuSection.innerHTML += kartu(anak.name, anak.desc, anak.price, anak.id);
});

function kartu(name, description, price, id) {
  return `<!-- card -->
	<div class="card">
		<button class="kategori" aria-readonly="true">Paket</button>
		<hr class="line" />
		<div class="container-content">
			<div>
				<img
					src="./images/example-product/indomie.jpg"
					alt=""
					class="produk-img"
				/>
			</div>
			<div class="content">
				<p>${name}</p>
				<p>${description}</p>
				<p>${price}</p>
				<div class="content2">
					<button class="tambah" id="pesan-${id}">pesan</button>
				</div>
			</div>
		</div>
	</div>`;
}


pilihan.map((anakff) => {
  // anakff dari ibu pilihan
  const pesan = document.getElementById(`pesan-${anakff.id}`);

  pesan.addEventListener("click", (e) => {
    e.preventDefault();
    const jumlah = prompt("Pesan berapa?");

    if (jumlah !== null) {
      if (jumlah !== "") {
        const total = anakff.price * jumlah;
        localStorage.setItem("jumlah", jumlah);
        localStorage.setItem("total", total);
        localStorage.setItem("name", anakff.name);
        localStorage.setItem("pesanan", anakff.desc);
        window.location.href = "order.html";
      } else {
        alert("Anda harus memasukkan jumlah pesanan.");
      }
    }
  });
});
