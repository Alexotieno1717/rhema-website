import React from 'react';

const ContactInfo = () => {
    return (
        <>
            <div className="py-16 px-16">
                <h1 className="text-lg font-semibold">For General Inquiries About JKM Kenya</h1>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center space-x-8 space-y-4 lg:space-y-0">
                    <div>
                        <p className="whitespace-pre-line">
                            {`
                            Our Mailing Address:
                            GPS Ministries Kenya
                            P.O. Box 12345–00100
                            Nairobi, Kenya
                            `}
                        </p>
                    </div>
                    <div>
                        <p>
                            Email: info@gpskenya.org
                        </p>
                        <p>Phone: +254 700 000 000 (SMS line coming soon)</p>
                    </div>
                    <div>
                        <p>Hours of Operation</p>
                        <p>Monday - Friday</p>
                        <p>8:am - 5:00pm EAT</p>
                    </div>
                    <div>
                        <p>Connect with Us</p>
                        <p>FOLLOW US ON FACEBOOK @TDJGPS</p>
                        <p>FOLLOW US ON INSTAGRAM @TDJGPS</p>
                        <div className="flex pt-4 space-x-8">
                            <img src="/assets/facebook-round.png" alt="icons"/>
                            <img src="/assets/insta-round.png" alt="icons"/>
                            <img src="/assets/twitter-round.png" alt="icons"/>
                            <img src="/assets/youtube-round.png" alt="icons"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;