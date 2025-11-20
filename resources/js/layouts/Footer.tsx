import jamu from '@/lib/assets/Jamu!.png';
import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <div className="bg-[#422316] text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col gap-12 md:flex-row md:justify-between">
                    <div className="flex flex-col items-start">
                        <img src={jamu} alt="Jamu Logo" className="-m-4 w-sm" />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="mb-2 font-[Open_sans] text-xl font-bold">
                            Tentang Kami
                        </h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href="/#consultation-section"
                                className="font-[Open_sans] text-lg font-semibold transition-colors hover:text-[#f87108]"
                            >
                                Konsultasi
                            </a>
                            <a
                                href="products"
                                className="font-[Open_sans] text-lg font-semibold transition-colors hover:text-[#f87108]"
                            >
                                Produk
                            </a>
                            <a
                                href="contact"
                                className="font-[Open_sans] text-lg font-semibold transition-colors hover:text-[#f87108]"
                            >
                                Kontak
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="mb-2 font-[Open_sans] text-xl font-bold">
                            Hubungi Kami
                        </h3>

                        <div className="flex items-center gap-3">
                            <Instagram className="h-5 w-5 text-[#f87108]" />
                            <a
                                href="https://instagram.com/fourseta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-[Open_sans] text-lg font-semibold transition-colors hover:text-[#f87108]"
                            >
                                @jamuu.id
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <MessageCircle className="h-5 w-5 text-[#f87108]" />
                            <a
                                href="https://wa.me/628386480336"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-[Open_sans] text-lg font-semibold transition-colors hover:text-[#f87108]"
                            >
                                +62 838-6480-336
                            </a>
                        </div>

                        <button className="w-full rounded-xl bg-[#f87108] px-6 py-2 font-[Open_sans] font-bold text-white transition-colors hover:bg-[#e56707] md:w-auto">
                            PESAN SEKARANG
                        </button>
                    </div>
                </div>

                <div className="pt-6 text-center text-sm text-gray-300">
                    <p>&copy; 2025 Jamu!. Semua hak dilindungi.</p>
                </div>
            </div>
        </div>
    );
}
