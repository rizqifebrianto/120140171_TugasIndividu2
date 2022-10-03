const siswaLulus = siswa.map(item => ({
    nama: item.nama,
    nilaiAkhir: (item.nilaiTugas * 0.2) + (item.nilaiUts * 0.3) + (item.nilaiUas * 0.5)
  })).filter(item => item.nilaiAkhir >= 60)
  
  const rataNilaiLulus = siswaLulus.reduce((acc, cur) => acc + cur.nilaiAkhir, 0) / siswaLulus.length
  
  document.writeln('Siswa yang lulus: ', JSON.stringify(siswaLulus, null, 2))
  document.write('Rata-rata nilai siswa yang lulus: ', Number(rataNilaiLulus).toFixed(2))