import { useEffect, useState } from "react";
import data from "../assets/testimoni.json";
//
export default function Mid() {
  return (
    <>
      <div>
        <div className="hero">
          <h1>Supplier Ayam Kub</h1>
          <h3>
            we have stock <strong style={{ color: "red" }}>3000</strong>
          </h3>
          <span>ORDER NOW</span>
        </div>
        <AutoSlider />
      </div>
      <Deskripsi />
      {/* <Testimoni /> */}
    </>
  );
}

// Import semua gambar otomatis dari folder src/assets/image
const images = Object.values(
  import.meta.glob("/src/assets/image/*.{png,jpg,jpeg,gif,webp}", {
    eager: true,
    import: "default",
  })
);

function AutoSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return; // stop kalau gak ada gambar

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (images.length === 0) {
    return (
      <div className="text-center p-6">
        <p className="text-red-500 font-bold">
          ⚠️ Tidak ada gambar ditemukan di /src/assets/image/
        </p>
      </div>
    );
  }

  return (
    <div className="slider">
      <img src={images[index]} alt={`Slide ${index}`} />
    </div>
  );
}

//
function Deskripsi() {
  return (
    <section id="ayam-kub" className="ayamkub-section">
      <div className="container">
        <h1 className="title">Deg's Farm</h1>
        <span>Supplier Ayam KUB di Purwakarta</span>
        <p>
          Ayam Kampung Unggul Balitbangtan, atau yang lebih dikenal dengan
          sebutan <strong>Ayam KUB</strong>, telah menjadi primadona baru di
          dunia peternakan. Dikenal karena pertumbuhannya yang cepat, daging
          yang lebih padat, dan produktivitas telur yang tinggi, Ayam KUB
          menawarkan prospek bisnis yang menjanjikan. Bagi para peternak atau
          pengusaha kuliner di Purwakarta dan sekitarnya, menemukan{" "}
          <strong>supplier Ayam KUB Purwakarta</strong> yang terpercaya adalah
          kunci kesuksesan.
        </p>

        <h2>🔹 Mengapa Memilih Ayam KUB?</h2>
        <p>
          Sebelum membahas lebih jauh tentang supplier, penting untuk memahami
          keunggulan Ayam KUB dibandingkan ayam kampung biasa:
        </p>
        <ul className="list">
          <li>
            <strong>Produktivitas Telur Tinggi:</strong> Ayam KUB mampu
            menghasilkan telur hingga 180 butir per tahun, jauh di atas
            rata-rata ayam kampung biasa.
          </li>
          <li>
            <strong>Pertumbuhan Lebih Cepat:</strong> Siap panen dalam waktu
            yang relatif singkat.
          </li>
          <li>
            <strong>Tahan Penyakit:</strong> Daya tahan tubuh baik terhadap
            berbagai penyakit, mengurangi risiko kerugian bagi peternak.
          </li>
          <li>
            <strong>Kualitas Daging Unggul:</strong> Tekstur padat, rasa lezat,
            rendah lemak — cocok untuk kuliner premium.
          </li>
        </ul>

        <h2>🔹 Memilih Supplier Ayam KUB Purwakarta yang Tepat</h2>
        <p>
          Memilih supplier tidak boleh sembarangan. Berikut hal yang perlu Anda
          pertimbangkan:
        </p>
        <ol className="list">
          <li>
            <strong>Kualitas DOC (Day Old Chicken)</strong>
            <p>
              Pastikan supplier menyediakan DOC sehat, lincah, berbulu bersih,
              dan dengan berat badan ideal.
            </p>
          </li>
          <li>
            <strong>Reputasi & Pengalaman</strong>
            <p>
              Cari tahu reputasi supplier melalui komunitas peternak atau
              testimoni.
            </p>
          </li>
          <li>
            <strong>Layanan Purna Jual</strong>
            <p>
              Supplier yang baik memberikan edukasi, konsultasi, dan dukungan
              teknis bagi peternak.
            </p>
          </li>
          <li>
            <strong>Lokasi & Logistik</strong>
            <p>
              Pilih supplier terdekat agar biaya transportasi rendah dan DOC
              tetap sehat sampai tujuan.
            </p>
          </li>
        </ol>

        <h2>🔹 Potensi Bisnis Ayam KUB di Purwakarta</h2>
        <p>
          Dengan lokasinya yang strategis dan permintaan pasar yang tinggi,
          Purwakarta menawarkan peluang emas untuk bisnis Ayam KUB. Hasil panen
          bisa dipasok ke:
        </p>
        <ul className="list">
          <li>Rumah Makan & Restoran</li>
          <li>Pasar Tradisional & Modern</li>
          <li>Konsumen Akhir (End User)</li>
        </ul>

        <p className="closing">
          Dengan memilih <strong>supplier Ayam KUB Purwakarta</strong> yang
          tepat, Anda bukan hanya mendapatkan bibit unggul, tetapi juga mitra
          bisnis yang mendukung kesuksesan peternakan Anda. 🚀
        </p>
      </div>
    </section>
  );
}
function Testimoni() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000); // ganti tiap 4 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="fade-in">
      <div className="container">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-slider">
          {data.map((item, i) => (
            <div
              key={i}
              className={`testimonial ${i === index ? "active" : "inactive"}`}
            >
              <img src={item.image} alt={item.name} className="avatar" />
              <p>"{item.message}"</p>
              <h4>- {item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
