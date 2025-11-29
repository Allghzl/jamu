import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useState } from 'react';

interface ConsultationResultProps {
    gejala: string;
}

export default function ConsultationResult({
    gejala,
}: ConsultationResultProps) {
    const [selected, setSelected] = useState<string | null>(null);
    const getSelectedProduct = selected;

    return (
        <div className="min-h-screen justify-center bg-[#f9f5f0] text-3xl text-white">
            <header className="relative flex h-48 w-full items-center justify-center bg-[#963f16] text-start font-[Open_sans] text-5xl font-extrabold text-white">
                <div className="w-3/4 p-10">
                    <h1 className="">UNTUK KAMU</h1>
                    <h1 className="uppercase">
                        <span className="mx-12 align-middle text-2xl font-thin tracking-normal normal-case">
                            Yang mengalami
                        </span>
                        {gejala}
                    </h1>
                </div>
            </header>
            <div className="absolute left-0 w-full overflow-hidden">
                <svg
                    viewBox="0 0 1200 60"
                    preserveAspectRatio="none"
                    className="relative block h-20 w-full"
                >
                    <path
                        d="M0,0V15c50-5,100-5,150,0s100,5,150,0s100-5,150,0s100,5,150,0s100-5,150,0s100,5,150,0s100-5,150,0s100,5,150,0V0Z"
                        fill="#963f16"
                    ></path>
                </svg>
            </div>

            <div className="mx-auto mt-20 flex w-3/4 flex-col items-center justify-center gap-8">
                <div className="flex flex-col items-end">
                    <div className="w-4/6 rounded-t-4xl bg-[#f87108] px-3 py-2 text-center">
                        <h2 className="w-full text-3xl font-black text-white">
                            Masuk Angin Original
                        </h2>
                    </div>
                    <Card
                        className={`flex max-w-2xl cursor-pointer flex-row gap-1 rounded-tr-none bg-white px-2 text-black transition-all ${
                            selected === 'Masuk Angin Original 1'
                                ? 'border-4 border-[#f87108]'
                                : 'border-none'
                        }`}
                        onClick={() => setSelected('Masuk Angin Original 1')}
                    >
                        <CardHeader className="items-center px-4">
                            <img
                                src="https://media.canva.com/v2/files/uri:ifs%3A%2F%2FM%2F056317e8-a559-4646-b34f-fbb91b60d189?csig=AAAAAAAAAAAAAAAAAAAAAHolzyNlHGjtTvknkR79RyNtWjzy4KSy3thyg61CdWMN&exp=1763705308&signer=media-rpc&token=AAIAAU0AJDA1NjMxN2U4LWE1NTktNDY0Ni1iMzRmLWZiYjkxYjYwZDE4OQAAAAABmqUHQ2AJrHDoPxPpdIoCoFJo9XXmhRkIlZycHdbSRkizBnYIjg"
                                alt=""
                                className="h-52 w-md rounded-2xl object-cover"
                            />
                        </CardHeader>
                        <CardContent className="flex flex-col justify-between pl-6">
                            <p className="font-[Open_sans] text-2xl">
                                Jamu Masuk Angin Original – redakan kembung,
                                meriang, dan pegal dengan racikan tradisional
                                alami.
                            </p>
                            <h1 className="font-[Open_sans] text-3xl font-black tracking-wide text-[#f87108]">
                                Rp 25.000,00
                            </h1>
                        </CardContent>
                    </Card>
                </div>
                <h1 className="font-[Open_sans] text-sm font-extrabold text-black uppercase">
                    atau
                </h1>
                <div className="flex flex-col items-end">
                    <div className="w-4/6 rounded-t-4xl bg-[#f87108] px-3 py-2 text-center">
                        <h2 className="w-full text-3xl font-black text-white">
                            Masuk Angin Original
                        </h2>
                    </div>
                    <Card
                        className={`flex max-w-2xl cursor-pointer flex-row gap-1 rounded-tr-none bg-white px-2 text-black transition-all ${
                            selected === 'Masuk Angin Original 2'
                                ? 'border-4 border-[#f87108]'
                                : 'border-none'
                        }`}
                        onClick={() => setSelected('Masuk Angin Original 2')}
                    >
                        <CardHeader className="items-center px-4">
                            <img
                                src="https://media.canva.com/v2/files/uri:ifs%3A%2F%2FM%2F056317e8-a559-4646-b34f-fbb91b60d189?csig=AAAAAAAAAAAAAAAAAAAAAHolzyNlHGjtTvknkR79RyNtWjzy4KSy3thyg61CdWMN&exp=1763705308&signer=media-rpc&token=AAIAAU0AJDA1NjMxN2U4LWE1NTktNDY0Ni1iMzRmLWZiYjkxYjYwZDE4OQAAAAABmqUHQ2AJrHDoPxPpdIoCoFJo9XXmhRkIlZycHdbSRkizBnYIjg"
                                alt=""
                                className="h-52 w-md rounded-2xl object-cover"
                            />
                        </CardHeader>
                        <CardContent className="flex flex-col justify-between pl-6">
                            <p className="font-[Open_sans] text-2xl">
                                Jamu Masuk Angin Original – redakan kembung,
                                meriang, dan pegal dengan racikan tradisional
                                alami.
                            </p>
                            <h1 className="font-[Open_sans] text-3xl font-black tracking-wide text-[#f87108]">
                                Rp 25.000,00
                            </h1>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
