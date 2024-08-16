# Square

Square adalah aplikasi full-stack yang terdiri dari dua bagian utama: **Backend** dan **Frontend**. Backend dibangun dengan Node.js dan Express, menggunakan PostgreSQL dan Sequelize untuk manajemen database. Frontend menggunakan React dan Vite untuk antarmuka pengguna.

## Struktur Proyek

square_project/
│
├── square_be/ # Backend: Node.js dengan Express
│ ├── Dockerfile # Dockerfile untuk membangun image backend
│ ├── entrypoint.sh # Script untuk memulai backend
│ ├── src/ # Kode sumber backend
│ ├── config/ # Konfigurasi Sequelize dan lainnya
│ ├── package.json # Daftar dependensi dan skrip npm
│
├── square_fe/ # Frontend: React dengan Vite
│ ├── Dockerfile # Dockerfile untuk membangun image frontend
│ ├── src/ # Kode sumber frontend
│ ├── package.json # Daftar dependensi dan skrip npm
│
├── docker-compose.yml # Konfigurasi Docker Compose
└── README.md # Dokumentasi proyek ini

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) - Platform untuk menjalankan container
- [Docker Compose](https://docs.docker.com/compose/install/) - Alat untuk mendefinisikan dan menjalankan aplikasi multi-container

## Cara Menggunakan

### 1. Clone Repository

```bash
git clone https://github.com/username/square.git
cd square
```
### 2. Konfigurasi

Backend (square_be)
Buat file .env di direktori square_be/ dengan konfigurasi berikut:
```bash
DB_USER=postgres
DB_PASS=postgres
DB=postgres
```

Frontend (square_fe)
Buat file .env di direktori square_fe/ sesuai kebutuhan.

### 3. Menjalankan Proyek
Gunakan Docker Compose untuk membangun dan menjalankan semua service:
```bash
docker-compose up --build
```
Ini akan:
Membangun image Docker untuk backend dan frontend.
Menjalankan container untuk PostgreSQL, backend, dan frontend.
Menghubungkan semua container dalam satu jaringan Docker Compose.

### 4. Mengakses Aplikasi
  Backend: Akses melalui http://localhost:3001
  Frontend: Akses melalui http://localhost:5000
  PostgreSQL: Akses melalui localhost:5432 dengan kredensial yang didefinisikan di .env
  
### 5. Mengelola Database
Untuk menjalankan migrasi Sequelize atau perintah CLI lainnya, Anda bisa menggunakan Docker exec. Misalnya, untuk menjalankan migrasi:
```bash
docker-compose exec backend npx sequelize-cli db:migrate
```
Struktur Backend
src/: Berisi kode sumber aplikasi backend.
config/: Berisi konfigurasi Sequelize dan pengaturan lainnya.
entrypoint.sh: Script untuk memulai aplikasi backend.
Struktur Frontend
src/: Berisi kode sumber aplikasi frontend.

Kontribusi
Kami menyambut kontribusi dari semua orang! Untuk berkontribusi:
Fork repository ini.
Buat branch baru (git checkout -b feature/your-feature).
Commit perubahan Anda (git commit -am 'Add new feature').
Push ke branch Anda (git push origin feature/your-feature).
Buat pull request.
