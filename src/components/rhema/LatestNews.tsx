import { ArrowUpRight } from 'lucide-react';

const newsItems = [
    {
        id: 1,
        title: "The Lords work",
        date: "15 Jan 2022",
        author: "Candice Wu",
        description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        image: "/assets/news1.png", // Replace with actual image path
    },
    {
        id: 2,
        title: "The Lords work",
        date: "15 Jan 2022",
        author: "Candice Wu",
        description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        image: "/assets/news2.png",
    },
    {
        id: 3,
        title: "The Lords work",
        date: "15 Jan 2022",
        author: "Candice Wu",
        description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        image: "/assets/news3.png",
    },
];

export default function LatestNews() {
    return (
        <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-black text-[#1B3959] pb-5">LATEST NEWS</h2>
                <p className="text-xl font-normal mt-2">Interviews, tips, guides, industry best practices, and news.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {newsItems.map((item) => (
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
                    Read more
                </button>
            </div>
        </section>
    );
}
