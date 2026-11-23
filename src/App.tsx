import { useState, type ReactNode } from "react";

type Package = {
  category: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const packages: Package[] = [
  {
    category: "Prewedding",
    name: "Astia",
    price: "Rp 850K",
    description: "Sesi intim untuk cerita yang sederhana dan personal.",
    features: [
      "1 fotografer",
      "50 foto edit",
      "1 lokasi & 1 konsep",
      "2 jam sesi foto",
      "File Google Drive",
    ],
  },
  {
    category: "Prewedding",
    name: "Provia",
    price: "Rp 1.700K",
    description: "Lebih banyak ruang untuk mengeksplorasi cerita kalian.",
    features: [
      "2 fotografer",
      "100++ foto edit",
      "2 lokasi & 2 konsep",
      "4 jam sesi foto",
      "Flashdisk & box",
    ],
    featured: true,
  },
  {
    category: "Prewedding",
    name: "Eterna",
    price: "Rp 3.300K",
    description: "Dokumentasi lengkap dalam foto dan gambar bergerak.",
    features: [
      "2 fotografer & 1 videografer",
      "100++ foto edit",
      "2 lokasi & 2 konsep",
      "5 jam sesi foto",
      "2 frame 16RS & teaser 1 menit",
    ],
  },
  {
    category: "Engagement",
    name: "Lily",
    price: "Rp 800K",
    description: "Dokumentasi hangat untuk hari pertunangan.",
    features: [
      "1 fotografer",
      "3 jam sesi foto",
      "Unlimited photo",
      "70++ foto edit",
      "File Google Drive",
    ],
  },
  {
    category: "Engagement",
    name: "Rose",
    price: "Rp 1.200K",
    description: "Cakupan lebih luas untuk setiap momen keluarga.",
    features: [
      "2 fotografer",
      "4 jam sesi foto",
      "Unlimited photo",
      "100++ foto edit",
      "Flashdisk & box",
    ],
  },
  {
    category: "Engagement",
    name: "Edelweiss",
    price: "Rp 1.800K",
    description: "Cerita pertunangan dalam foto dan video sinematik.",
    features: [
      "1 fotografer & 1 videografer",
      "4 jam sesi foto",
      "120++ foto edit",
      "Unlimited photo",
      "Video cinematic teaser",
    ],
    featured: true,
  },
  {
    category: "Engagement",
    name: "Sunflower",
    price: "Rp 2.800K",
    description: "Paket menyeluruh dengan konten siap dibagikan.",
    features: [
      "2 fotografer & 1 videografer",
      "1 content creator",
      "5 jam sesi foto",
      "150++ foto edit",
      "Frame, teaser & flashdisk",
    ],
  },
  {
    category: "Wedding",
    name: "File Only + WCC",
    price: "Rp 2.000K",
    description: "Dokumentasi esensial dengan konten cepat untuk hari yang sama.",
    features: [
      "2 fotografer",
      "5 jam sesi foto",
      "80++ foto edit",
      "5 video by WCC",
      "Flashdisk & Google Drive",
    ],
  },
  {
    category: "Wedding",
    name: "Silver",
    price: "Rp 2.500K",
    description: "Paket foto pernikahan dengan album magnetic premium.",
    features: [
      "2 fotografer",
      "6 jam sesi foto",
      "100++ foto edit",
      "Album & frame 16RS",
      "Flashdisk & Google Drive",
    ],
  },
  {
    category: "Wedding",
    name: "Platinum",
    price: "Rp 3.500K",
    description: "Kenangan cetak lengkap dengan presentasi premium.",
    features: [
      "2 fotografer",
      "7 jam sesi foto",
      "150++ foto edit",
      "2 album premium",
      "Kanvas 16RS & flashdisk",
    ],
  },
  {
    category: "Wedding",
    name: "Gold",
    price: "Rp 4.300K",
    description: "Foto dan film pendek untuk menangkap suasana hari bahagia.",
    features: [
      "2 fotografer & 1 videografer",
      "7 jam sesi foto",
      "200++ foto edit",
      "Album & kanvas 16RS",
      "Cinematic teaser",
    ],
    featured: true,
  },
  {
    category: "Wedding",
    name: "Premium",
    price: "Rp 5.500K",
    description: "Dokumentasi premium dalam album, foto, dan dua film.",
    features: [
      "2 fotografer & 1 videografer",
      "7 jam sesi foto",
      "250++ foto edit",
      "2 album & kanvas 16RS",
      "Teaser & cinematic clip",
    ],
  },
  {
    category: "Wedding",
    name: "Exclusive",
    price: "Rp 6.500K",
    description: "Tim lengkap untuk dokumentasi tanpa momen yang terlewat.",
    features: [
      "3 fotografer & 1 videografer",
      "1 content creator",
      "300++ foto edit",
      "2 album & 2 kanvas",
      "2 cinematic video & 7 WCC",
    ],
  },
  {
    category: "Video",
    name: "Provia",
    price: "Rp 2.000K",
    description: "Film singkat yang merangkum emosi hari istimewa.",
    features: ["1 videografer", "6 jam dokumentasi", "Teaser 1 menit", "Flashdisk & box"],
  },
  {
    category: "Video",
    name: "Eterna",
    price: "Rp 2.500K",
    description: "Cerita sinematik lengkap untuk dikenang kembali.",
    features: [
      "1 videografer",
      "7 jam dokumentasi",
      "Clip video 3 menit",
      "Teaser 1 menit",
      "Flashdisk & box",
    ],
    featured: true,
  },
  {
    category: "Siraman",
    name: "Velvia",
    price: "Rp 1.500K",
    description: "Merekam kehangatan prosesi bersama keluarga.",
    features: ["2 fotografer", "4 jam sesi foto", "80++ foto edit", "File Google Drive"],
  },
  {
    category: "Siraman",
    name: "Acros",
    price: "Rp 2.500K",
    description: "Dokumentasi prosesi lengkap dalam foto dan video.",
    features: [
      "2 fotografer & 1 videografer",
      "5 jam sesi foto",
      "100++ foto edit",
      "Cinematic teaser",
      "Flashdisk & box",
    ],
  },
];

const categories = ["Semua", "Prewedding", "Engagement", "Wedding", "Video", "Siraman"];

const terms = [
  "Down Payment (DP) minimal Rp 500.000. Tanggal booking dinyatakan fix setelah pembayaran DP.",
  "Pembatalan dengan alasan apa pun menyebabkan DP hangus. Paket dapat di-upgrade, tetapi tidak dapat di-downgrade.",
  "Lokasi di luar wilayah jangkauan Sejalur Photo dikenakan biaya transportasi sesuai tujuan.",
  "Overtime dikenakan biaya Rp 200.000 per jam.",
  "Estimasi editing foto 1–2 minggu dan video 3–4 minggu, menyesuaikan antrean.",
  "File dikirim melalui Google Drive setelah pelunasan maksimal H+7. Tautan aktif maksimal 1 bulan.",
];

function Icon({
  name,
  size = 20,
}: {
  name: "arrow" | "menu" | "close" | "instagram" | "whatsapp" | "check";
  size?: number;
}) {
  const paths: Record<typeof name, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
        <path d="M9 8.5c.5 2 2 3.5 4 4l1-1 .8.2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function Photo({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className={`image-fallback ${className}`}
        role="img"
        aria-label={`${alt} tidak dapat dimuat`}
      >
        <svg aria-hidden="true" viewBox="0 0 100 100">
          <path d="M18 76 39 50l15 18 12-14 17 22H18Z" />
          <circle cx="67" cy="30" r="8" />
        </svg>
        <span>Sejalur Photo</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading={eager ? "eager" : "lazy"}
    />
  );
}

function PackageCard({ item }: { item: Package }) {
  const message = encodeURIComponent(
    `Halo Sejalur Photo, saya tertarik dengan paket ${item.category} ${item.name} (${item.price}). Boleh minta informasi lebih lanjut?`,
  );
  return (
    <article className={`package-card ${item.featured ? "featured" : ""}`}>
      <div className="package-topline">
        <span>{item.category}</span>
        {item.featured && <span className="popular">Pilihan favorit</span>}
      </div>
      <h3>{item.name}</h3>
      <p className="price">{item.price}</p>
      <p className="package-description">{item.description}</p>
      <ul>
        {item.features.map((feature) => (
          <li key={feature}>
            <Icon name="check" size={17} />
            {feature}
          </li>
        ))}
      </ul>
      <a
        className="card-link"
        href={`https://wa.me/6285111337776?text=${message}`}
        target="_blank"
        rel="noreferrer"
      >
        Pilih paket <Icon name="arrow" />
      </a>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const filteredPackages =
    activeCategory === "Semua"
      ? packages
      : packages.filter((item) => item.category === activeCategory);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
          aria-label="Sejalur Photo, kembali ke beranda"
        >
          <span>SEJALUR</span>
          <small>PHOTO</small>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navigasi utama">
          <a href="#tentang" onClick={closeMenu}>
            Tentang
          </a>
          <a href="#paket" onClick={closeMenu}>
            Paket
          </a>
          <a href="#galeri" onClick={closeMenu}>
            Galeri
          </a>
          <a href="#ketentuan" onClick={closeMenu}>
            Ketentuan
          </a>
          <a href="#kontak" onClick={closeMenu}>
            Kontak
          </a>
        </nav>
        <a
          className="header-cta"
          href="https://wa.me/6285111337776"
          target="_blank"
          rel="noreferrer"
        >
          Booking sesi
        </a>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={24} />
        </button>
      </header>

      <section id="home" className="hero">
        <Photo
          src="/assets/sejalur/image-036.jpg"
          alt="Pasangan pengantin mengenakan busana adat di eskalator"
          className="hero-photo"
          eager
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Pricelist 2026 · Wedding photography</p>
          <h1>
            Momen berlalu.
            <br />
            <em>Cerita menetap.</em>
          </h1>
          <p className="hero-copy">
            Kami mengabadikan perayaan, tatapan, dan detail kecil yang menjadikan cerita kalian tak
            tergantikan.
          </p>
          <div className="hero-actions">
            <a className="button light-button" href="#paket">
              Lihat paket <Icon name="arrow" />
            </a>
            <a className="text-link" href="#galeri">
              Lihat karya kami
            </a>
          </div>
        </div>
        <div className="hero-index">
          <span>SEJALUR PHOTO</span>
          <span>2026</span>
        </div>
      </section>

      <section id="tentang" className="intro section">
        <div>
          <p className="eyebrow">Cerita kalian, sepenuh hati</p>
          <h2>
            Foto yang terasa
            <br />
            seperti <em>kenangan.</em>
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            Sejalur Photo hadir untuk mengabadikan momen berharga dengan pendekatan yang jujur,
            hangat, dan penuh perhatian.
          </p>
          <p>
            Kami percaya foto terbaik bukan hanya terlihat indah—ia dapat membawa kalian kembali
            pada suara, rasa, dan orang-orang di hari itu.
          </p>
          <a className="underlined-link" href="#galeri">
            Temukan cara kami bercerita <Icon name="arrow" />
          </a>
        </div>
      </section>

      <section className="image-break" aria-label="Sorotan karya Sejalur Photo">
        <Photo
          src="/assets/sejalur/image-022.jpg"
          alt="Potret dekat pasangan pengantin dalam busana adat Jawa"
        />
        <div className="image-break-quote">
          <span>“</span>
          <blockquote>Photography is a way of feeling, of touching, of loving.</blockquote>
        </div>
        <Photo
          src="/assets/sejalur/image-017.jpg"
          alt="Pasangan berjalan bersama dalam sesi engagement"
        />
      </section>

      <section id="paket" className="packages-section section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Investasi kenangan</p>
            <h2>
              Pilih cerita
              <br />
              yang ingin <em>disimpan.</em>
            </h2>
          </div>
          <p>
            Setiap paket dirancang untuk mengikuti ritme hari kalian. Harga berlaku untuk pricelist
            2026.
          </p>
        </div>
        <div className="category-tabs" role="tablist" aria-label="Filter kategori paket">
          {categories.map((category) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={activeCategory === category ? "active" : ""}
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="package-grid" aria-live="polite">
          {filteredPackages.map((item) => (
            <PackageCard key={`${item.category}-${item.name}`} item={item} />
          ))}
        </div>
      </section>

      <section id="galeri" className="gallery-section">
        <div className="gallery-title">
          <p className="eyebrow light">Selected stories</p>
          <h2>
            Dalam setiap bingkai,
            <br />
            <em>ada yang dirayakan.</em>
          </h2>
        </div>
        <div className="gallery-grid">
          <Photo
            src="/assets/sejalur/image-000.jpg"
            alt="Pasangan pengantin duduk di pelaminan bernuansa gelap"
          />
          <Photo src="/assets/sejalur/image-027.jpg" alt="Pasangan pengantin berjalan di taman" />
          <Photo
            src="/assets/sejalur/image-036.jpg"
            alt="Pasangan pengantin dalam potret hitam putih"
          />
        </div>
      </section>

      <section id="ketentuan" className="terms-section section">
        <div className="terms-heading">
          <p className="eyebrow">Sebelum hari istimewa</p>
          <h2>
            Booking terms
            <br />
            <em>& conditions.</em>
          </h2>
          <p>Harap membaca ketentuan berikut sebelum melakukan reservasi.</p>
        </div>
        <ol className="terms-list">
          {terms.map((term, index) => (
            <li key={term}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{term}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="kontak" className="contact-section">
        <Photo src="/assets/sejalur/image-022.jpg" alt="" className="contact-photo" />
        <div className="contact-overlay" />
        <div className="contact-content">
          <p className="eyebrow light">Mari mulai cerita kalian</p>
          <h2>
            Siap mengabadikan
            <br />
            <em>hari terbaikmu?</em>
          </h2>
          <p>
            Ceritakan tanggal, lokasi, dan paket yang kalian inginkan. Kami akan membantu menyiapkan
            dokumentasi yang paling sesuai.
          </p>
          <a
            className="button light-button"
            href="https://wa.me/6285111337776?text=Halo%20Sejalur%20Photo%2C%20saya%20ingin%20bertanya%20tentang%20booking%202026."
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="whatsapp" /> Hubungi via WhatsApp
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span>SEJALUR</span>
          <small>PHOTO</small>
        </div>
        <div>
          <p className="footer-label">Kontak</p>
          <a href="https://wa.me/6285111337776" target="_blank" rel="noreferrer">
            +62 851-1133-7776
          </a>
          <a href="https://instagram.com/sejalurphoto_" target="_blank" rel="noreferrer">
            @sejalurphoto_
          </a>
        </div>
        <div>
          <p className="footer-label">Pembayaran</p>
          <p>BNI · 5070013421</p>
          <p>BCA · 594801011187509</p>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sejalur Photo</span>
          <a href="#home">Kembali ke atas ↑</a>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <aside aria-label="Kontak Cepat WhatsApp">
        <a
          href="https://wa.me/6285111337776?text=Halo%20Sejalur%20Photo%2C%20saya%20ingin%20konsultasi%20mengenai%20paket%20dan%20ketersediaan%20jadwal%202026."
          target="_blank"
          rel="noreferrer"
          className="floating-wa"
          aria-label="Konsultasi langsung via WhatsApp Sejalur Photo"
        >
          <span className="floating-wa-icon-box">
            <Icon name="whatsapp" size={24} />
            <span className="floating-wa-dot" aria-hidden="true" />
          </span>
          <span className="floating-wa-text">
            <span className="floating-wa-title">Chat WhatsApp</span>
            <span className="floating-wa-desc">Tanya jadwal &amp; paket</span>
          </span>
        </a>
      </aside>
    </main>
  );
}
