import React from 'react';
import { Mail, Clock, MapPin } from 'lucide-react';
// import { Mail, Phone, Clock, MapPin } from 'lucide-react';

const ContactInfo = () => {
    return (
        <section className="py-8 px-4 md:px-8 lg:px-16 bg-white rounded-2xl shadow-md max-w-5xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1B3959] mb-8 text-center tracking-wide">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Left: Address & Hours */}
                <div className="space-y-4 flex flex-col justify-center">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-yellow-700 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-lg font-semibold text-[#1B3959] mb-1">Mailing Address</h2>
                            <address className="not-italic text-gray-700 leading-relaxed text-sm">
                                GPS Ministries Kenya<br />
                                P.O. Box 12345–00100<br />
                                Nairobi, Kenya
                            </address>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-yellow-700 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-lg font-semibold text-[#1B3959] mb-1">Hours of Operation</h2>
                            <p className="text-gray-700 text-sm">Monday - Friday<br />8:00am - 5:00pm EAT</p>
                        </div>
                    </div>
                    
                </div>
                {/* Right: Contact & Social (stacked) */}
                <div className="space-y-8 flex flex-col justify-center">
                    <div className="flex flex-col gap-3 items-start">
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-yellow-700 flex-shrink-0" />
                            <span className="text-lg font-semibold text-[#1B3959]">Email:</span>
                            <a href="mailto:info@gpskenya.org" className="text-grey-700 text-sm no-underline hover:no-underline focus:no-underline active:no-underline ml-2">info@gpskenya.org</a>
                        </div>
                        <div className="flex flex-col items-center mt-1">
                            <div className="flex justify-center items-center gap-8">
                                <a href="https://www.facebook.com/juliankyula" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-transform hover:scale-110">
                                    <img src="/assets/facebook-round.png" alt="Facebook" className="w-10 h-10"/>
                                </a>
                                <a href="https://www.instagram.com/jkyula" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform hover:scale-110">
                                    <img src="/assets/insta-round.png" alt="Instagram" className="w-10 h-10"/>
                                </a>
                                <a href="https://www.youtube.com/@ruachassemblies" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transition-transform hover:scale-110">
                                    <img src="/assets/youtube-round.png" alt="YouTube" className="w-10 h-10"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;