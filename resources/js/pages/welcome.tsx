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
        <div className="min-h-screen bg-[#f9f5f0]">
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

            <div className="mx-auto w-full bg-white px-6 py-20 md:px-12">
                {/* Features Section */}
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-12">
                    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                        <Card className="flex-1 border-none bg-linear-to-br from-white to-orange-50 py-12 text-center font-[Open_sans] text-[#f87108]">
                            <div className="flex justify-center">
                                <HandCoins className="h-16 w-16 text-[#f87108]" />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold uppercase">
                                    harga bersahabat
                                </CardTitle>
                                <CardDescription className="mt-3 text-[#575050]">
                                    Nikmati jamu sehat dengan harga ramah di
                                    kantong, cocok buat sehari-hari.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="flex-1 border-none bg-linear-to-br from-white to-orange-50 py-12 text-center font-[Open_sans] text-[#f87108]">
                            <div className="flex justify-center">
                                <Vegan className="h-16 w-16 text-[#f87108]" />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold uppercase">
                                    segar dan alami
                                </CardTitle>
                                <CardDescription className="mt-3 text-[#575050]">
                                    Diracik langsung dari rempah pilihan, bikin
                                    tubuh makin fit dan berenergi.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="flex-1 border-none bg-linear-to-br from-white to-orange-50 py-12 text-center font-[Open_sans] text-[#f87108]">
                            <div className="flex justify-center">
                                <ShoppingBag className="h-16 w-16 text-[#f87108]" />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold uppercase">
                                    varian lengkap
                                </CardTitle>
                                <CardDescription className="mt-3 text-[#575050]">
                                    Dari kunyit asam sampai beras kencur, banyak
                                    pilihan rasa yang bisa nemenin gaya hidupmu.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>

                {/* About Section */}
                <div className="mx-auto mt-24 flex max-w-4xl flex-col items-center justify-center gap-12">
                    <h1 className="text-center font-[Open_sans] text-4xl font-bold text-[#f87108] uppercase md:text-5xl">
                        sekilas tentang kami
                    </h1>
                    <Card className="w-full border-none bg-[#963f16] p-8 font-[Open_sans] md:p-12">
                        <CardDescription className="text-base text-white md:text-lg">
                            Kami adalah{' '}
                            <b>
                                UMKM lokal yang menghadirkan jamu sebagai
                                minuman sehari-hari untuk anak muda, orang tua,
                                dan semua kalangan.
                            </b>{' '}
                            bukan sekadar warisan tradisi tapi juga gaya hidup
                            sehat yang kekinian. Dengan bahan-bahan alami
                            seperti kunyit, jahe, dan rempah pilihan, kami
                            percaya bahwa sehat itu harus bisa dinikmati dengan
                            cara yang simple, enak, dan cocok buat rutinitas
                            modern.
                        </CardDescription>
                    </Card>
                </div>
            </div>

            <div id="consultation-section" className="mt-0">
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
