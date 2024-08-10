import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="container mx-auto p-4 md:p-6 lg:p-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <h1 className="text-3xl pb-7 md:text-4xl lg:text-5xl font-bold">Engineering Company</h1>
            <p className="text-lg pb-7 md:text-xl lg:text-2xl">Envisioning, Engineering, Empowering. Kami siap untuk mengubah aspirasi menjadi prestasi.</p>
            <Link href="/about" passHref>
            <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">Tentang Kami</button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <Image src='/images/hero/construction-hero.png' alt='construciton hero img' width={500} height={500} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;