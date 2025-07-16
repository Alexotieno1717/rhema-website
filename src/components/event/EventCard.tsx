// components/EventCard.tsx
// import { Calendar } from 'lucide-react';

type EventCardProps = {
    title: string;
    // date: string;
    image: string;
};

export default function EventCard({ title, image }: EventCardProps) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md border">
            <img src={image} alt={title} className="w-full object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                {/* <div className="flex items-center text-sm text-gray-600 mt-2 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {date}
                </div>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                    View
                </button> */}
            </div>
        </div>
    );
}
