
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const VisiMisi = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
            title="Visi dan Misi Engineering Company"
            paragraph=""
            center/>
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Visi Engineering Company
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <p>Membangun solusi berkelanjutan untuk transformasi energi dan percepatan hilirisasi</p>
                  <br />
                  <li>
                      <b>Solusi Berkelanjutan</b>
                      <br />
                      Solusi rekayasa terintegrasi untuk sesuatu masalah serta memberikan dampak berkelanjutan bagi lingkungan, manusia, Indonesia dan Tripatra.
                  </li>
                  <br />
                  <li>
                      <b>Transformasi Energi</b>
                      <br />
                      Aplikasi praktis efisiensi energi dan transisi dari energi bahan bakar fosil ke energi terbarukan, sebagai upaya meminimalisasi emisi karbon.
                  </li>
                  <br />
                  <li>
                      <b>Percepatan Hilirisasi</b>
                      <br />
                      Pengembangan hilirisasi di industri berbasis sumber daya energi fosil, pertanian, dan mineral dengan tujuan untuk memaksimalkan nilai tambah sumber daya Indonesia.
                  </li>
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Misi Engineering Company
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  
                  <li>Mengembangkan dan memberdayakan Insan Tripatra untuk mencapai visi bersama.</li>
                  <li>Menerapkan pendekatan manajemen risiko yang seimbang di keseluruhan value chain.</li>
                  <li>Mengembangkan bisnis dan proposal secara selektif untuk mencapai tingkat keberhasilan yang tinggi.</li>
                  <li>Menumbuhkan bisnis sektor hilir dan hijau.</li>
                </p>
              </div>
                
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default VisiMisi;
