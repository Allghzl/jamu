import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useEffect, useState } from 'react';

interface ConsultationResultProps {
    gejala: string;
}

export default function ConsultationResult({
    gejala,
}: ConsultationResultProps) {
    const [products, setProducts] = useState<any[]>([]);
    const [selected, setSelected] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/jamu?category=${gejala}`);
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error('Gagal fetch jamu:', error);
            }
        };

        fetchData();
    }, [gejala]);

    return (
        <div className="min-h-screen justify-center bg-[#f9f5f0] text-white">
            <header className="relative flex h-48 w-full items-center justify-center bg-[#963f16] text-5xl font-extrabold">
                <div className="w-3/4 p-10">
                    <h1>UNTUK KAMU</h1>
                    <h1 className="uppercase">
                        <span className="mx-12 align-middle text-2xl font-thin normal-case">
                            Yang mengalami
                        </span>
                        {gejala}
                    </h1>
                </div>
            </header>

            {/* PRODUK UTAMA - MAKSIMAL 2 */}
            <div className="mx-auto mt-20 flex w-3/4 flex-col items-center gap-8">
                {products.slice(0, 2).map((jamu, index) => (
                    <div key={index}>
                        {index > 0 && (
                            <div className="my-6 flex items-center justify-center">
                                <div className="flex-1 border-t border-gray-300"></div>
                                <span className="mx-4 text-2xl font-bold text-black">
                                    atau
                                </span>
                                <div className="flex-1 border-t border-gray-300"></div>
                            </div>
                        )}
                        <div className="flex flex-col items-end">
                            <div className="w-4/6 rounded-t-4xl bg-[#f87108] px-3 py-2 text-center">
                                <h2 className="w-full text-3xl font-black">
                                    {jamu.name}
                                </h2>
                            </div>

                            <Card
                                className={`flex max-w-2xl cursor-pointer flex-row gap-1 rounded-tr-none bg-white px-2 text-black transition-all ${
                                    selected === jamu.id
                                        ? 'border-4 border-[#f87108]'
                                        : 'border-none'
                                }`}
                                onClick={() => setSelected(jamu.id)}
                            >
                                <CardHeader className="items-center px-4">
                                    <img
                                        src={`/storage/jamu/${jamu.image}`}
                                        alt={jamu.name}
                                        className="h-52 w-md rounded-2xl object-cover"
                                    />
                                </CardHeader>

                                <CardContent className="flex flex-col justify-between pl-6">
                                    <p className="text-2xl">
                                        {jamu.description}
                                    </p>
                                    <h1 className="text-3xl font-black text-[#f87108]">
                                        Rp {jamu.price.toLocaleString()}
                                    </h1>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>

            {/* PRODUK LAINNYA */}
            <div className="mt-10 px-20">
                <h1 className="mb-5 text-center text-2xl font-bold text-black uppercase">
                    Produk Lainnya
                </h1>

                <div className="grid grid-cols-2 gap-6">
                    {products.slice(2).map((jamu, index) => (
                        <Card
                            key={index}
                            className={`cursor-pointer bg-white p-4 text-black ${selected === jamu.id ? 'border-4 border-[#f87108]' : ''}`}
                            onClick={() => setSelected(jamu.id)}
                        >
                            <img
                                src={`/storage/jamu/${jamu.image}`}
                                alt={jamu.name}
                                className="mb-4 h-40 w-full rounded-xl object-cover"
                            />
                            <h2 className="text-xl font-bold">{jamu.name}</h2>
                            <p className="text-sm text-gray-600">
                                {jamu.description}
                            </p>
                            <p className="mt-2 text-lg font-bold text-[#f87108]">
                                Rp {jamu.price.toLocaleString()}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
