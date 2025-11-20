import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Footer from '@/layouts/Footer';
import img from '@/lib/assets/width_600.webp';
import { useState } from 'react';

export default function Testimony() {
    interface Consultation {
        id: number;
        title: string;
        description: string;
        author: string;
    }

    const consultDummy: Consultation[] = [
        {
            id: 1,
            title: 'Sehat',
            description:
                'Sejak mengenal jamu ini, daya tahan tubuh meningkat. Flu yang biasanya sering datang jadi jarang sekali muncul.',
            author: 'Siti Marpuah',
        },
        {
            id: 2,
            title: 'Senang',
            description:
                'Bukan hanya sehat, tapi juga menyenangkan. Aromanya menenangkan dan rasanya pas, cocok untuk semua usia.',
            author: 'Perca',
        },
        {
            id: 3,
            title: 'Percaya',
            description:
                'Produk jamu ini membantu saya menjaga kesehatan tanpa ribet. Lebih percaya diri karena minum herbal alami setiap hari',
            author: 'Azi',
        },
        {
            id: 4,
            title: 'Bugar',
            description:
                'Rasanya enak, segar, dan tidak pahit. Setelah rutin minum, badan terasa lebih ringan dan jarang masuk angin lagi.',
            author: 'Alami',
        },
        {
            id: 5,
            title: 'Alami',
            description:
                'Jamu ini benar-benar berbeda, kemasan modern tapi tetap alami. Saya suka karena praktis dan bisa diminum kapan saja',
            author: 'Herlangga',
        },
        {
            id: 6,
            title: 'Terjangkau',
            description:
                'Dengan harga yang terjangkau, saya bisa menikmati manfaat kesehatan tanpa menguras kantong.',
            author: 'Budi',
        },
        {
            id: 7,
            title: 'Mudah',
            description:
                'Sangat mudah untuk disiapkan dan diminum, cocok untuk gaya hidup yang sibuk.',
            author: 'Dewi',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const getVisibleCards = () => {
        const cards = [];
        for (let i = -2; i <= 2; i++) {
            const index =
                (currentIndex + i + consultDummy.length) % consultDummy.length;
            cards.push({
                ...consultDummy[index],
                position: i,
            });
        }
        return cards;
    };

    const visibleCards = getVisibleCards();

    const getCardPosition = (position: number) => {
        switch (position) {
            case 0:
                return '-top-5';
            case -1:
            case 1:
                return 'top-20';
            case -2:
            case 2:
                return 'top-5';
            default:
                return 'top-12';
        }
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % consultDummy.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + consultDummy.length) % consultDummy.length,
        );
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#ff9540]">
            <div className="relative z-10 flex h-screen w-full bg-[#4a2b1a]">
                <div className="flex w-3/4 items-center justify-center p-12 text-center">
                    <h1 className="max-w-2xl font-Yusei text-3xl leading-relaxed text-white md:text-4xl">
                        "Kami percaya jamu bisa jadi lebih dari sekadar warisan.
                        Jamu adalah minuman sehari-hari. menyehatkan, modern,
                        dan tetap alami."
                    </h1>
                </div>

                <div className="z-25 h-full w-1/4">
                    <img
                        src={img}
                        alt="jamu"
                        className="h-full w-full object-cover object-left"
                    />
                </div>
                <div className="absolute -bottom-1 -left-4 z-20 flex w-full translate-y-1">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="-mx-3.5 -my-11 h-50 w-50 rounded-full bg-[#4a2b1a]"
                        />
                    ))}
                </div>
            </div>

            <div className="min-h-screen py-16 text-white">
                <div className="mb-12">
                    <h1 className="text-center font-[Open_sans] text-5xl font-bold">
                        <span className="text-left">SUARA SEHAT </span> <br />{' '}
                        <span className="text-right"> DARI PELANGGAN </span>
                    </h1>
                </div>
                <div className="relative flex h-[500px] items-center justify-center">
                    <div className="relative mt-2 flex h-full items-end justify-center">
                        {visibleCards.map((card) => (
                            <div
                                key={`${card.id}-${card.position}`}
                                className={`absolute z-30 transition-all duration-500 ease-in-out ${getCardPosition(card.position)} opacity-100`}
                                style={{
                                    transform: `translateX(${card.position * 295}px)`,
                                }}
                            >
                                <div
                                    className="absolute top-1/2 left-1/2 mt-1 -translate-x-1/2 -translate-y-1/2 transform rounded-[50%] bg-[#fff6dc]"
                                    style={{
                                        height: '26rem',
                                        width: '21rem',
                                    }}
                                ></div>

                                <Card className="relative h-85 w-62 rounded-3xl border-none bg-[#963f16] p-6">
                                    <CardHeader className="items-center p-0">
                                        <CardTitle className="text-center text-4xl text-[#fc6e2b]">
                                            ★★★★★
                                        </CardTitle>
                                        <CardTitle className="text-center font-[Open_sans] text-3xl font-bold text-white">
                                            {card.title}
                                        </CardTitle>
                                        <CardDescription className="min-h-20 text-center text-sm leading-relaxed text-white">
                                            {card.description}
                                        </CardDescription>
                                        <p className="mt-4 text-center text-sm font-semibold text-white">
                                            {card.author}
                                        </p>
                                        <img
                                            src={`https://avatar.iran.liara.run/public/${card.id}`}
                                            alt=""
                                            className="w-16"
                                        />
                                    </CardHeader>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center space-x-8 rounded-full bg-white/30 p-2">
                        <button
                            onClick={handlePrev}
                            className="rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-100"
                        >
                            <svg
                                className="h-6 w-6 text-[#963f16]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        <div className="flex space-x-3">
                            {consultDummy.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                                        index === currentIndex
                                            ? 'bg-[#f87108]'
                                            : 'bg-white/75'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-100"
                        >
                            <svg
                                className="h-6 w-6 text-[#963f16]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
