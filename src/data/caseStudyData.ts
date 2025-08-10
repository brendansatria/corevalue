export type CoreValue = "Integrity" | "Collaborative" | "Accountability" | "Growth Mindset" | "Customer Focus";

export interface Scenario {
  narrative: string;
}

export interface CaseStudyRound {
  scenarios: {
    basic: Scenario; // < 15 points
    moderate: Scenario; // 15-30 points
    detailed: Scenario; // > 30 points
  };
  options: CoreValue[];
  correctAnswers: [CoreValue, CoreValue];
  scoring: {
    bothCorrect: { rp: number; cp: number };
    oneCorrect: { rp: number; cp: number };
    bothWrong: { rp: number; cp: number };
  };
}

export const caseStudies: Record<number, CaseStudyRound> = {
  1: {
    scenarios: {
      basic: {
        narrative: "Saat menjual wajan di desa, Ibu Sari mendesak meminta wajan untuk “arisan” malam ini. Tim “Kang Kredit” sibuk dengan pesanan lain dan stok terbatas. Tim bekerja bersama untuk memprioritaskan pesanan Ibu Sari, satu anggota memeriksa stok, yang lain mengatur pengiriman cepat, dan lainnya menenangkan Ibu Sari, menawarkan rencana kredit yang adil untuk membangun kepercayaan.",
      },
      moderate: {
        narrative: "Di pasar desa, Ibu Sari mendesak meminta wajan untuk “arisan” malam ini dengan 20 tetangga. Tim hanya punya satu wajan dan dua pesanan lain. Tim bekerja bersama untuk memprioritaskan pesanan Ibu Sari, satu anggota memeriksa stok, yang lain mengatur pengiriman cepat, dan lainnya menenangkan Ibu Sari, menawarkan rencana kredit yang adil untuk membangun kepercayaan.",
      },
      detailed: {
        narrative: "Di pasar desa yang ramai, Ibu Sari mendekati gerobak “Kang Kredit”, mendesak meminta wajan untuk “arisan” malam ini dengan 20 tetangga. Pesaing menawarkan wajan dengan harga tunai lebih cepat. Tim hanya punya satu wajan dan dua pesanan lain. Tim bekerja bersama untuk memprioritaskan pesanan Ibu Sari, satu anggota memeriksa stok, yang lain mengatur pengiriman cepat, dan lainnya menenangkan Ibu Sari, menawarkan rencana kredit yang adil untuk membangun kepercayaan.",
      },
    },
    options: ["Integrity", "Collaborative", "Accountability", "Growth Mindset", "Customer Focus"],
    correctAnswers: ["Collaborative", "Customer Focus"],
    scoring: {
      bothCorrect: { rp: 5, cp: 20 },
      oneCorrect: { rp: 0, cp: 10 },
      bothWrong: { rp: -5, cp: 0 },
    },
  },
  2: {
    scenarios: {
      basic: {
        narrative: "Saat mengelola akun kredit, tim “Kang Kredit” menyadari Pak Budi ditagih untuk wajan yang sudah dibayar. Ia kesal dan mengancam berhenti membeli. Tim segera mengakui kesalahan, memperbaiki akun, dan memeriksa catatan untuk memastikan tidak ada kesalahan lain, memulihkan kepercayaan Pak Budi.",
      },
      moderate: {
        narrative: "Di pasar desa, Pak Budi, pelanggan setia, marah karena pemberitahuan tagihan wajan yang sudah dibayar beberapa bulan lalu. Tim menemukan kesalahan pencatatan, meminta maaf, memperbaiki akun di tempat, dan memeriksa semua catatan untuk mencegah kesalahan lain, mengembalikan kepercayaan Pak Budi.",
      },
      detailed: {
        narrative: "Di hari sibuk di pasar desa, Pak Budi, pelanggan tetap yang membeli wajan secara kredit, mendekati gerobak “Kang Kredit” dengan frustrasi karena pemberitahuan tagihan wajan yang sudah dilunasi tiga bulan lalu. Tim menyelidiki, menemukan kesalahan pencatatan, mengakui kesalahan kepada Pak Budi, memperbaiki akun segera, dan menugaskan anggota untuk memeriksa ulang semua catatan pelanggan untuk mencegah kesalahan di masa depan, memastikan Pak Budi merasa dihargai dan percaya lagi.",
      },
    },
    options: ["Integrity", "Collaborative", "Accountability", "Growth Mindset", "Customer Focus"],
    correctAnswers: ["Integrity", "Accountability"],
    scoring: {
      bothCorrect: { rp: 5, cp: 20 },
      oneCorrect: { rp: 0, cp: 10 },
      bothWrong: { rp: -5, cp: 0 },
    },
  },
  3: {
    scenarios: {
      basic: {
        narrative: "Ibu Rina, pelanggan tetap, meminta panci presto yang tidak tersedia di “Kang Kredit”. Ia ragu membeli barang lain. Tim mencari pemasok baru untuk menyediakan panci presto, mempelajari produk untuk memenuhi kebutuhan Ibu Rina, dan menawarkan rencana kredit percobaan, meyakinkan ia untuk tetap membeli.",
      },
      moderate: {
        narrative: "Di pasar desa, Ibu Rina, pelanggan setia, meminta panci presto untuk usaha kateringnya, tetapi “Kang Kredit” hanya menjual wajan dan ketel. Ia mempertimbangkan pindah ke vendor lain. Tim meneliti pemasok baru untuk menambah stok panci presto, mempelajari cara kerjanya untuk menjelaskan manfaat kepada Ibu Rina, dan membuat rencana kredit fleksibel untuk memenuhi kebutuhannya, mempertahankan Ibu Rina sebagai pelanggan.",
      },
      detailed: {
        narrative: "Di hari sibuk di pasar desa, Ibu Rina, pelanggan tetap dengan usaha katering, mendekati gerobak “Kang Kredit”, meminta panci presto untuk pesanan besar. Tim tidak memiliki stok dan berisiko kehilangan Ibu Rina ke vendor saingan. Tim proaktif menghubungi pemasok baru untuk menyediakan panci presto, mempelajari produk untuk menjelaskan manfaatnya dengan percaya diri kepada Ibu Rina, dan merancang rencana kredit khusus dengan pembayaran awal rendah sesuai anggarannya, memastikan Ibu Rina tetap setia.",
      },
    },
    options: ["Integrity", "Collaborative", "Accountability", "Growth Mindset", "Customer Focus"],
    correctAnswers: ["Growth Mindset", "Customer Focus"],
    scoring: {
      bothCorrect: { rp: 5, cp: 20 },
      oneCorrect: { rp: 0, cp: 10 },
      bothWrong: { rp: -5, cp: 0 },
    },
  },
  4: {
    scenarios: {
      basic: {
        narrative: "Jalanan yang tiba-tiba terhalang mengganggu rute pengiriman tim “Kang Kredit” ke pelanggan. Tim berkumpul, berdiskusi menggunakan peta desa untuk menemukan jalur baru, dan menguji rute alternatif untuk memastikan pengiriman tepat waktu, menjaga kepercayaan pelanggan.",
      },
      moderate: {
        narrative: "Di hari sibuk di pasar, banjir menghalangi rute pengiriman biasa tim “Kang Kredit” ke beberapa pelanggan. Tim berkumpul untuk berdiskusi, berbagi ide menggunakan peta desa untuk menemukan jalur baru, dan menguji rute yang lebih panjang tetapi dapat diakses untuk mengirim barang tepat waktu, menjaga kepuasan pelanggan.",
      },
      detailed: {
        narrative: "Di hari sibuk di pasar, banjir tiba-tiba menghalangi jalan utama yang digunakan tim “Kang Kredit” untuk mengirim barang ke pelanggan seperti Ibu Ani. Menghadapi keterlambatan, tim berkumpul di sekitar peta desa, mengumpulkan ide untuk menemukan rute baru. Mereka menguji jalur yang lebih panjang melalui desa tetangga, menyesuaikan jadwal untuk memastikan semua pengiriman selesai tepat waktu, memperkuat hubungan dengan pelanggan.",
      },
    },
    options: ["Integrity", "Collaborative", "Accountability", "Growth Mindset", "Customer Focus"],
    correctAnswers: ["Collaborative", "Growth Mindset"],
    scoring: {
      bothCorrect: { rp: 5, cp: 20 },
      oneCorrect: { rp: 0, cp: 10 },
      bothWrong: { rp: -5, cp: 0 },
    },
  },
};