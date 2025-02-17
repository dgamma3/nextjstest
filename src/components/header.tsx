import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <Image src="/logo.png" alt="MyDeal Logo" width={150} height={50} />
      </div>
    </header>
  );
};
