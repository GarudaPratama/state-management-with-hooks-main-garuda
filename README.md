# SantriApp — React Router Assessment

Aplikasi manajemen santri sederhana yang dibangun untuk mempelajari konsep **React Router**, **shared layout**, **nested routes**, dan **dynamic routes**.

> **Panduan Instalasi:**
>
> 1. Clone repository ini terlebih dahulu menggunakan perintah berikut (jangan lupa tambahkan spasi dan titik di akhir command agar ter-clone langsung ke direktori saat ini):
>    ```bash
>    git clone <url-repository-anda> .
>    ```
> 2. Jalankan perintah berikut di terminal untuk menginstal dependencies:
>    ```bash
>    npm install
>    ```

## 🛠️ Tech Stack

- **React** + **Vite**
- **React Router**
- **Tailwind CSS v4**
- **shadcn/ui** (Sidebar, Tabs, Card, Button, dll.)
- **Lucide React** (ikon)

## 📌 Fitur Utama

- **🏠 Home:**
  Halaman utama yang menyambut pengguna.

- **👥 Santri (`/santri`):**
  Halaman grup santri dengan navigasi berbasis **shadcn Tabs** untuk berpindah antar sub-halaman:
  - **Daftar:** Menampilkan daftar santri dalam bentuk _SantriCard_ (3 data). Klik kartu untuk navigasi ke halaman `SantriDetail`.
  - **Nilai:** Halaman yang menampilkan daftar nilai santri.
  - **Absensi:** Halaman yang menampilkan absensi santri.

- **👤 Santri Detail (`/santri/:id`):**
  Halaman detail santri berdasarkan ID yang dipilih menggunakan `useParams`. Terdapat tombol **← Kembali ke Daftar Santri** untuk navigasi balik.

- **ℹ️ About:**
  Halaman informasi tentang website beserta kontak sederhana.

- **🚫 Not Found:**
  Penanganan untuk route yang tidak terdaftar (404 Page).

## 🗂️ Layout

Seluruh halaman menggunakan **shared sidebar layout** via `<Layout />` yang di-render oleh route induk `/`. Sidebar boleh menggunakan komponen **shadcn `Sidebar`** dengan `SidebarProvider` + `SidebarInset`, dilengkapi tombol collapse (`SidebarTrigger`). atau boleh buat sidebar sendiri
