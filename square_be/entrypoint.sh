#!/bin/bash

# Menjalankan migrasi
npx sequelize-cli db:migrate

# Menjalankan aplikasi
npm start
