import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="bg-white border-b border-gray-200 py-6 px-8 min-h-[70px] flex items-center justify-between">
      <Link href="/" className="text-xl font-extrabold text-orange-600">
        Agentic Pacific
      </Link>
      <div className="flex gap-8">
        <Link
          href="/"
          className={`text-base text-gray-700 hover:text-orange-600 ${
            router.pathname === '/' ? 'font-semibold text-orange-600' : ''
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`text-base text-gray-700 hover:text-orange-600 ${
            router.pathname === '/about' ? 'font-semibold text-orange-600' : ''
          }`}
        >
          About
        </Link>
        <Link
          href="/use-cases"
          className={`text-base text-gray-700 hover:text-orange-600 ${
            router.pathname === '/use-cases' ? 'font-semibold text-orange-600' : ''
          }`}
        >
          AI Use Cases
        </Link>
        <Link
          href="/services"
          className={`text-base text-gray-700 hover:text-orange-600 ${
            router.pathname === '/services' ? 'font-semibold text-orange-600' : ''
          }`}
        >
          Services
        </Link>
        <Link
          href="/contact"
          className={`text-base text-gray-700 hover:text-orange-600 ${
            router.pathname === '/contact' ? 'font-semibold text-orange-600' : ''
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
