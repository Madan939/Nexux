import Image from "next/image";
import Link from "next/link";
export default function WhatsAppWidget() {
  return (
    <>
      <Link
        href="/"
        className="fixed z-50 bottom-4 right-4 w-16 h-16 bg-green-700  rounded-full flex items-center justify-center hover:cursor-pointer shadow-lg "
      >
        <Image
          src="/images/whatsapp-icon.svg"
          alt="whatsapp-icon Nexux"
          height={42}
          width={42}
          className="hover:cursor-pointer"
        />
      </Link>
    </>
  );
}
