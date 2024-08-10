import VisiMisi from "@/components/About/VisiMisi";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Company",
  description: "Engineering Company",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tentang Kami"
        description="Dengan lebih dari 50 tahun pengalaman, sejarah, dan kepemimpinan, kami telah menjadi salah satu perusahaan terdepan dalam industri energi di Indonesia. Dengan kemampuan rekayasa teknik multidisiplin yang unggul, komprehensif, dan fleksibel, yang diperkuat oleh pemanfaatan teknologi terkini, kami berdedikasi untuk mencapai kepuasan maksimal bagi klien kami. Di era transisi energi, kami menghadirkan solusi baru untuk memberikan dampak berkelanjutan dengan model bisnis yang kolaboratif, menjadikan kami mitra strategis yang mampu memaksimalkan nilai tambah sepanjang siklus hidup proyek."
      />
      <VisiMisi />
    </>
  );
};

export default AboutPage;
