import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image src='/images/features/minyak.png' alt='construciton hero img' width="40" height="41" className="w-full h-full object-cover" />
    ),
    title: "Minyak dan Gas",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image src='/images/features/petrokimia.png' alt='construciton hero img' width="40" height="41" className="w-full h-full object-cover" />
    ),
    title: "Petrokimia",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image src='/images/features/infrastruktur.png' alt='construciton hero img' width="40" height="41" className="w-full h-full object-cover" />
    ),
    title: "Infrastruktur",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image src='/images/features/pembangkit-listrik.png' alt='construciton hero img' width="40" height="41" className="w-full h-full object-cover" />
    ),
    title: "Pembangkit Listrik",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image src='/images/features/energi-terbarukan.png' alt='construciton hero img' width="40" height="41" className="w-full h-full object-cover" />
    ),
    title: "Energi Terbarukan",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image src='/images/features/industri-lainnya.png' alt='construciton hero img' width="40" height="41" className="w-full h-full object-cover" />
    ),
    title: "Industri Lainnya",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
];
export default featuresData;
