import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <div className="bg-black/60 text-white flex px-5 py-2 justify-between items-center">
        <Link href="/" className="uppercase text-xs">
          © 2022 ANGELSHARE
        </Link>
        <div className="flex gap-10 text-xs">
          <Link href="/PrivacyPolicy">Privacy Policy</Link>
          <Link href="/ContactUs">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
