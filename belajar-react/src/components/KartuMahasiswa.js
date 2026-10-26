import { useState } from 'react';

function KartuMahasiswa({
  nama = "Tidak Diketahui",
  nim = "Tidak Diketahui",
  program_studi = "Tidak Diketahui"
}) {
  const [absensi, setAbsensi] = useState(0);

  return (
    <div>
      <p>Nama: {nama}</p>
      <p>NIM: {nim}</p>
      <p>Program Studi: {program_studi}</p>
      <p>Absensi: {absensi}</p>

      <button onClick={() => setAbsensi(absensi + 1)}>
        Tambah Absensi
      </button>{' '}

      <button
        onClick={() =>
          setAbsensi(absensi > 0 ? absensi - 1 : 0)
        }
      >
        Kurangi Absensi
      </button>
    </div>
  );
}

export default KartuMahasiswa;