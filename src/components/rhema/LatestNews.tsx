import { ArrowUpRight } from 'lucide-react';
import {ILatestNews} from "@/types";

interface LatestNewsProps {
    data: ILatestNews
}

export default function LatestNews({data}: LatestNewsProps) {
    return (
        <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-black text-[#1B3959] pb-5 uppercase">{data.title}</h2>
                <p className="text-xl font-normal mt-2">{data.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {data.data.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.title} className="w-full object-cover rounded-t-xl" />
                        <div className="py-8">
                            <p className="text-sm text-[#B26206] font-semibold">
                                {item.author} • <span>{item.date}</span>
                            </p>
                            <div className="flex items-start justify-between pt-2">
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                            <p className="text-md font-normal pt-2">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <button className="bg-[#1B3959] text-white px-9 py-3.5 rounded-full">
                    {data.buttonText}
                </button>
            </div>
        </section>
    );
}
