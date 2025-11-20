import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import ConsultationLayout from '@/layouts/consultation';
import bgJamu from '@/lib/assets/Desain_tanpa_judul_upscayl_4x_ultramix-balanced-4x.png';
import logoJamu from '@/lib/assets/Jamu!.png';
import { Head, usePage } from '@inertiajs/react';
import { HandCoins, ShoppingBag, Vegan } from 'lucide-react';
import { useEffect } from 'react';

export default function Welcome() {
    const { url } = usePage();

    useEffect(() => {
        if (url.includes('#consultation-section')) {
            setTimeout(() => {
                document
                    .getElementById('consultation-section')
                    ?.scrollIntoView({
                        behavior: 'smooth',
                    });
            }, 100);
        }
    }, [url]);
    return (
        <div className="bg-[#f9f5f0]">
            <div
                className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgJamu})` }}
            >
                <Head title="Jamu!" />
                <div className="flex h-16 w-full items-center justify-between gap-4 bg-black/25 px-16 text-sm font-semibold text-white shadow-2xl shadow-black/40 backdrop-blur-lg">
                    <a href="testimony">TESTIMONI</a>
                    <a href="">PRODUK</a>
                    <a href="/">
                        <img
                            src={logoJamu}
                            alt="Logo Jamu!"
                            className="h-28 w-auto"
                        />
                    </a>
                    <a href="">TENTANG KAMI</a>
                    <a href="">KONTAK</a>
                </div>
                <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center text-center text-white">
                    <h1 className="mb-2 max-w-3xl font-Yusei text-2xl md:text-6xl">
                        Jamu sehat dari dapur kami untuk keluarga anda
                    </h1>
                    <button
                        onClick={() =>
                            document
                                .getElementById('consultation-section')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }
                        className="mt-6 cursor-pointer rounded bg-[#f87108] px-6 py-3 font-bold text-white shadow-lg shadow-[#f87108]/50 transition hover:bg-orange-600/90 hover:shadow-orange-600/40"
                    >
                        CEK KESEHATAN ANDA
                    </button>
                </div>
            </div>
            <div className="mx-12 flex flex-row justify-between gap-8 py-24 text-center">
                <Card className="w-xl border-none bg-white py-12 font-[Open_sans] text-[#f87108]">
                    <HandCoins className="h-16 w-auto items-center justify-center text-[#f87108]" />
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold uppercase">
                            harga bersahabat
                        </CardTitle>
                        <CardDescription className="mt-2 text-center text-[#575050]">
                            Nikmati jamu sehat dengan harga ramah di kantong,
                            cocok buat sehari-hari.
                        </CardDescription>
                    </CardHeader>
                </Card>

                <Card className="w-xl border-none bg-white py-12 font-[Open_sans] text-[#f87108]">
                    <Vegan className="h-16 w-auto items-center justify-center text-[#f87108]" />
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold uppercase">
                            segar dan alami
                        </CardTitle>
                        <CardDescription className="mt-2 text-center text-[#575050]">
                            Diracik langsung dari rempah pilihan, bikin tubuh
                            makin fit dan berenergi.
                        </CardDescription>
                    </CardHeader>
                </Card>

                <Card className="w-xl border-none bg-white py-12 font-[Open_sans] text-[#f87108]">
                    <ShoppingBag className="h-16 w-auto items-center justify-center text-[#f87108]" />
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold uppercase">
                            varian lengkap
                        </CardTitle>
                        <CardDescription className="mt-2 text-center text-[#575050]">
                            Dari kunyit asam sampai beras kencur, banyak pilihan
                            rasa yang bisa nemenin gaya hidupmu.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>

            <div className="flex flex-col items-center justify-center gap-12 py-12">
                <h1 className="text-center font-[Open_sans] text-5xl font-bold text-[#f87108] uppercase">
                    sekilas <br />
                    tentang kami
                </h1>
                <Card className="max-w-5xl min-w-xl border-none bg-[#963f16] p-8 font-[Open_sans] font-semibold">
                    <CardDescription className="text-[18px] text-white">
                        Kami adalah UMKM lokal yang menghadirkan jamu sebagai
                        minuman sehari-hari anak muda, bukan sekadar warisan
                        tradisi tapi juga gaya hidup sehat yang kekinian. Dengan
                        bahan-bahan alami seperti kunyit, jahe, dan rempah
                        pilihan, kami percaya bahwa sehat itu harus bisa
                        dinikmati dengan cara yang simple, enak, dan cocok buat
                        rutinitas modern.
                    </CardDescription>
                </Card>
            </div>

            <div id="consultation-section">
                <ConsultationLayout />
            </div>
            <div className="mt-28 text-center">
                <h1 className="font-[Open_sans] text-5xl font-black text-[#963f16]">
                    NO SHORTCUTS
                </h1>
                <p className="text-4xl font-light text-[#963f16]">
                    Just authentic, natural jamu.
                </p>
                {/*ZIIIZZZZZ LANJUTIN BAGIAN GALERI PRODUK DI SINI */}
            </div>
        </div>
    );
}
