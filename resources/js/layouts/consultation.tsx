import { router } from '@inertiajs/react';

export default function Consultation() {
    const handleConsultation = (gejala: string): void => {
        router.post(
            '/consultation',
            {
                gejala: gejala,
            },
            {
                onError: (errors) => {
                    console.error('Error:', errors);
                    alert('Terjadi error, silakan coba lagi');
                },
                onSuccess: () => {
                    console.log('Success redirect to result');
                },
            },
        );
    };

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#8B3A1C]">
            <div className="absolute -top-[10vw] -left-[10vw] h-[20vw] w-[20vw] rounded-full bg-[#5C230F]"></div>
            <div className="absolute -right-[10vw] -bottom-[10vw] h-[20vw] w-[20vw] rounded-full bg-[#5C230F]"></div>
            <div className="flex h-full flex-col items-center justify-center p-12 text-center text-white">
                <h1 className="mb-6 max-w-2xl text-center font-[Open_sans] text-6xl font-black uppercase">
                    apa keluhan kesehatan anda?
                </h1>
                <div className="mx-auto grid max-w-4xl grid-cols-3 items-center justify-center gap-x-6 gap-y-2 text-lg font-semibold">
                    {[
                        'Masuk Angin',
                        'Batuk',
                        'Flu',
                        'Nyeri Sendi',
                        'Sakit Kepala',
                        'Badan Lemas',
                    ].map((label) => (
                        <button
                            key={label}
                            onClick={() => handleConsultation(label)}
                            className="cursor-pointer rounded-md bg-[#5C230F] px-8 py-2 transition hover:bg-[#422316]"
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
