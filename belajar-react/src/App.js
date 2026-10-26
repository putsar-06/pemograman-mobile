import KartuMahasiswa from './components/KartuMahasiswa';

function App() {
  return (
    <div>
      <KartuMahasiswa
        nama="Budi Santoso"
        nim="231002"
        program_studi="Informatika"
      />

      <KartuMahasiswa
        nama="Siti Aminah"
        nim="231003"
        program_studi="Sistem Informasi"
      />

      <KartuMahasiswa
        nama="Rina Putri"
        nim="231004"
        program_studi="Informatika"
      />
    </div>
  );
}

export default App;