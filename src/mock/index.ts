import {
    IAboutContent,
    IContact,
    IEvents,
    IHeroContent,
    IHomeContent,
    ILatestNews,
    IPartners,
    IPartnersSlider,
    IRhema
} from "@/types";

const HomeContent: IHomeContent = {
    id: 'home',
    "title": 'Empowering Communities. Transforming Systems',
    subtitle: 'MISSION | MINISTRY | MARKET PLACE',
    description: 'JKM is a global apostolic movement empowering believers to thrive in faith, family, and the marketplace. Step into your calling and help shape the future of nations.',
    buttonText: 'Partner With us',
    img: "/assets/Rev_Julian-Kyula.png",
    data : [
        // { id: "1", title: "RHEMA Feast", img: "/assets/rhema1.png", logo: "/assets/rf-logo.png" },
        { id: "1", title: "RHEMA Feast", img: "/assets/rhema_feast_2025_recent.jpeg", logo: "/assets/rf-logo.png" },
        { id: "2", title: "RXP", img: "/assets/rhema2.png", logo: "/assets/rxp.png" },
        { id: "3", title: "Business Forum", img: "/assets/rhema3.png", logo: "/assets/bf.png" },
        { id: "4", title: "Kingdom Commonwealth", img: "/assets/rhema4.png", logo: "/assets/kc.png" },
    ]
}
const PartnersSliderContent: IPartnersSlider = {
    id: 'partnerSliderContent',
    data: [
        {
            'id': '1',
            'name': 'Olivia Rhye',
            'description': "Acquire a brand new tractor with ease through our program offering simple, affordable, and flexible financing options.Acquire a brand new tractor with ease through our program offering simple.",
            'image': '/assets/people2.png',
            'slogan': 'Business lady',
        },
        {
            'id': '2',
            'name': 'Olivia Rhye',
            'description': "Acquire a brand new tractor with ease through our program offering simple, affordable, and flexible financing options.Acquire a brand new tractor with ease through our program offering simple.",
            'image': '/assets/people1.png',
            'slogan': 'Business man',
        },
        {
            'id': '3',
            'name': 'Olivia Rhye',
            'description': "Acquire a brand new tractor with ease through our program offering simple, affordable, and flexible financing options.Acquire a brand new tractor with ease through our program offering simple.",
            'image': '/assets/people3.png',
            'slogan': 'Business man',
        }
        ,
        {
            'id': '4',
            'name': 'Olivia Rhye',
            'description': "Acquire a brand new tractor with ease through our program offering simple, affordable, and flexible financing options.Acquire a brand new tractor with ease through our program offering simple.",
            'image': '/assets/people3.png',
            'slogan': 'Business man',
        }
        ,
        {
            'id': '5',
            'name': 'Olivia Rhye',
            'description': "Acquire a brand new tractor with ease through our program offering simple, affordable, and flexible financing options.Acquire a brand new tractor with ease through our program offering simple.",
            'image': '/assets/people3.png',
            'slogan': 'Business man',
        }
        ,
        {
            'id': '6',
            'name': 'Olivia Rhye',
            'description': "Acquire a brand new tractor with ease through our program offering simple, affordable, and flexible financing options.Acquire a brand new tractor with ease through our program offering simple.",
            'image': '/assets/people3.png',
            'slogan': 'Business man',
        }
    ]
}

const AboutPageContent: IAboutContent = {
    id: "About-jkm",
    heroTitle: "ABOUT JKM GLOBAL",
    heroBackgroundImage: "/assets/RXP.jpg",
    introDescription: `Julian Kyula Global Ministries (JKGM) is a faith-driven movement dedicated to transforming lives and nations through the power of God’s Word, apostolic insight, and marketplace impact. Founded by Reverend Julian Kyula, this global ministry exists to equip individuals, leaders, and communities to thrive in their divine purpose across the mission field, ministry work, and the marketplace. Through inspired teaching, prayer, strategic gatherings, and practical outreach, we are raising a generation of kingdom-minded believers who are bold, innovative, and grounded in truth.

     JKGM is committed to seeing lives restored, systems reformed, and God’s glory revealed across the earth whether through global conferences, media outreach, church planting, or economic empowerment initiatives,`,

    visionTitle: "VISION",
    visionDescription: "To build a world where spiritual leadership, innovation, and enterprise work together to restore dignity, equity,and opportunity to underserved communities globally.",
    visionIcon: "/assets/vision.png",

    missionTitle: "MISSION",
    missionDescription: "To empower individuals, transform communities, and influence systems by strategically integrating faith, leadership, and sustainable development through impactful alliances.",
    missionIcon: "/assets/mission.png",

    coreGoalsTitle: "CORE GOALS",
    coreGoals: [
        "Advance the Gospel through modern, relevant ministry.",
        "Solve systemic community challenges via kingdom-driven enterprise.",
        "Create equitable opportunities in education, finance, health, and innovation.",
        "Mobilize strategic alliances for high-impact social transformation.",
    ],
    coreGoalsIcon: "/assets/core.png",

    impactTitle: "IMPACT",
    impactDescription: `
    •\tMission feeds the soul
    
    •\tMinistry builds the people
    
    •\tMarketplace sustains the solution
    
    
    This model is cyclical: It creates empowered leaders who return to give, grow, and guide others.
    People are empowered spiritually → Equipped economically → Sent to transform their communities → Returning as mentors, givers and leaders.
    `,
    impactImage: "/assets/impact.jpg",

    journey: [
        {
            id: "1",
            description: `
                we want to be able to impact more people and generations , transform lives and become a  movement dedicated to spreading the Gospel, and discipling nations with the truth and power of Jesus Christwe want to be able to impact more people and generations , transform lives and become a  movement dedicated to spreading the Gospel, and

                discipline nations with the truth and power of Jesus Christ we want to be able to impact more people and generations , transform lives and become a  movement dedicated to spreading the Gospel, and discipling nations with the truth and power of Jesus Christwe want to be able to impact more people and generations , transform lives and become a  movement dedicated to spreading the Gospel, and discipling nations with the truth and power of Jesus Christ
            `,
            year: 2020,
            img: []
        }
    ]
}

const HeroSectionContent: IHeroContent ={
    id: "HeroSectionContent",
    title: `
    Restoring hope. Rebuilding systems. 
    Releasing kingdom purpose.
    `,
    image: "/assets/hero-bg.jpg",
}

const LatestNewsContent: ILatestNews = {
    id: "latestNews",
    title: "announcements",
    description: "Interviews, tips, guides, industry best practices, and news.",
    buttonText: "Read more",
    data: [
        {
            id: "1",
            title: "The Lords work",
            date: "15 Jan 2022",
            author: "Candice Wu",
            description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
            image: "/assets/news1.png",
        },
        {
            id: "2",
            title: "The Lords work",
            date: "15 Jan 2022",
            author: "Candice Wu",
            description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
            image: "/assets/news2.png",
        },
        {
            id: "3",
            title: "The Lords work",
            date: "15 Jan 2022",
            author: "Candice Wu",
            description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
            image: "/assets/news3.png",
        },
    ]
}

const PartnerContent: IPartners ={
    id: "partners",
    title: "WHY PARTNER WITH US",
    description: ' "We want to be able to impact more people and generations, transform lives and become a movement dedicated to spreading the Gospel, and disciple nations with the truth and power of Jesus Christ. We want you, too, to be partakers of this great call that will focus mainly on Mission. marketplace and Ministry" ',
    youtubeLink: "https://www.youtube.com/embed/O0zk93DJFqo",
    youtubeLinkText: "Rhema Fest 2024",
    impact: {
        id: "impact",
        title: "Our Impact",
        description: "With the help of our Partners, we seek to further God’s kingdom by making a difference in the lives of His people all over the world. From creating water pipelines to disaster relief, we band together to save the lost, help the hurting, and spread the Gospel in the mighty name of Jesus Christ.",
        data: [
            {
                id: "1",
                title: "650,000 +",
                description: "Provided meals and supplied more than 500 tons of relief items to Kenya",
            },
            {
                id: "2",
                title: "14 Wells",
                description: "Built 14 wells and a 10-mile pipeline, increasing access to clean water in Kenya",
            },
            {
                id: "3",
                title: "35,000",
                description: "Served over 35,000 ex-offenders in 18 years, boasting a recidivism rate of only 16%",
            }
        ]
    },
    partner: {
        id: "partner",
        backgroundImage: "/assets/RXP.jpg",
        title : "HOW DO I PARTNER",
        description: [
            "You can partner financially or in kind",
            `Financially - you can give a one-time gift, Monthly, or annually.
            You can give 100, 1000, as God enables you
            `,
            "In kind - You can partner as a co-worker and share skills",
            
        ],
        payBillImage: "/assets/paybill.png",
    },
    levels:{
        title: "PARTNER LEVELS",
        description: "How to partner with us",
        data: {
            individual: [
                {
                  id: "1",
                  slug: "Faith Builder",
                  image: "",
                  description: "Supporter tier for emerging believers — foundational impact.",
                  buttonText: "Get Started",
                  amount: "KES 1,000  –  100K"
                },
                {
                  id: "2",
                  slug: "Hope Carrier",
                  image: "",
                  description: "Advancing hope with a reach of 7.5M — empowering communities and initiatives at scale.",
                  buttonText: "Get Started",
                  amount: "KES 100K  –  1M"
                },
                {
                  id: "3",
                  slug: "Light Bearer",
                  image: "",
                  description: "Major contributor tier. Help drive change with influence and visibility.",
                  buttonText: "Get Started",
                  amount: "KES 1M  –  5M"
                },
                {
                  id: "4",
                  slug: "Truth Ambassador",
                  image: "",
                  description: "Top-tier impact partner. Championing transformational projects.",
                  buttonText: "Get Started",
                  amount: "KES 5M+"
                }
            ],
            
            corporate: [
              {
                id: "1",
                slug: "Diamond",
                image: "",
                description: ["Co-Branding Opportunity", "Premium Stage Presence", "Business Forum Privileges", "VIP Benefits", "Verbal Mentions/Media Recognition", "Activation Zone", "Logo Placement"],
                buttonText: "Get Started",
                amount: "KES 15M+"
              },
              {
                id: "2",
                slug: "Platinum",
                image: "",
                description: ["LED screen logo visibility duringtransitions", "Panel slot at Business forum", "Premium activation booth sapace", "10 VIP passes", "Brand featuredin all materials", "Verbal mentions and acknowledgement in offcial program", "Logoon RhemaFeast2025 printed and digital event materials"],
                buttonText: "Get Started",
                amount: "KES 10M+"
              },
              {
                id: "3",
                slug: "Gold",
                image: "",
                description: ["Business Forum speaker slot", "Logo visibility during transitions", "Exhibitor zone booth", "5 VIP passes", "Media inclusion in recap video", "Speaking Opportunity at Business Forum (select session)", "Logo on Rhema Feast 2025 printed and digital event materials"],
                buttonText: "Get Started",
                amount: "KES 5M+"
              },
              {
                id: "3",
                slug: "Silver",
                image: "",
                description: ["Business Forum speaking opportunity", "Exhibition booth", "Program announcements mention", "3 VIP passes", "Logo in select digital platforms"],
                buttonText: "Get Started",
                amount: "KES 2.5+"
              },
              {
                id: "3",
                slug: "Bronze",
                image: "",
                description: ["Digital branding on select screens", "Verbal acknowledgment during event", "2 VIP invites", "Logo on event materials"],
                buttonText: "Get Started",
                amount: "KES 1M+"
              }
            ]
          }
    },
    quote: `
    "God doesn’t call the qualified; He qualifies the called." — often attributed to various pastors and Christian leaders.
                    
    Would you like a quote on a specific theme like faith, purpose, or perseverance?
    `,
    image: "/assets/Rev_Julian-Kyula.png",
}

const EventsContent: IEvents ={
    id: "events",
    title: "events",
    subtitle: "Upcoming Events",
    bannerImage: [
        "/assets/event_banner.png",
        "/assets/swipper1.png",
        "/assets/swipper2.png",
        "/assets/swipper3.png",
    ],
    days: ["Upcoming", "Past", "Recurring"],
    events: [
        {
            id: "1",
            title: '7 Days of Worship',
            date: '8th–15th June 2025',
            image: '/assets/event1.png',
        },
        {
            id: "2",
            title: 'Rhema Experience',
            date: '8th–15th June 2025',
            image: '/assets/event2.png',
        },
        {
            id: "3",
            title: 'Rhema Feast',
            date: '8th–15th June 2025',
            image: '/assets/event3.png',
        },
        {
            id: "4",
            title: 'Marriage Enrichment',
            date: '8th–15th June 2025',
            image: '/assets/event4.png',
        },
 
    
    ]
}

const ContactContent: IContact = {
    id: "contact",
    title: "Contact Us",
    subtitle: "Get in touch",
    description: "We’d love to hear from you. Please fill out this form.",
    image: "/assets/contact.png",
    socialMedia: [
        {icons: "/assets/facebook.png", linksText: "https://www.facebook.com/juliankyula"},
        {icons: "/assets/instagram.png", linksText: "https://www.instagram.com/jkyula"},
        // {icons: "/assets/twitter.png", linksText: "https://twitter.com"},
        {icons: "/assets/youtube-icon.png", linksText: "https://www.youtube.com/@ruachassemblies"},
    ]
}

const RhemaFeastContent: IRhema = {
    banner: {
        image: "/assets/rhema_banner.png",
        countdown: {
            title: "COUNTDOWN TO EVENT",
            buttonText: "Buy Tickets",
            countdown: [
                {
                    countDownDate: "",
                    period: "DAYS"
                },
                {
                    countDownDate: "",
                    period: "HOURS"
                },
                {
                    countDownDate: "",
                    period: "MINUTES"
                },
                {
                    countDownDate: "",
                    period: "SECONDS"
                },
            ]
        }
    },
    rhema: {
        title: "RHEMA FEAST 2025",
        description: `
        Rhema Feast is a significant annual spiritual event that began in 2015.We are an apostolic movement led by visionary Rev. Julian Kyula, and its mission is to share the unadulterated and authentic word of God to nations and all generations.
      
        This year's Rhema Feast will take place from 1st -5th September 2025. The event spans four days, where believers from around
        the globe gather to 'Feast' on God's Word, engage in worship, prayer, fellowship and this year business coaching helping them integrate their faith with their work to make a great Kingdom impact.
        
        The pillars of Rhema Feast are Word, Worship, Prayer, and Unified Fellowship. Since its inception, Rhema Feast has expanded regionally and internationally, witnessing powerful spiritual movements and a rising hunger for God and mentorship among people Rhema Feast has been successful in ministering to from all over the world.
        `,
        data: [
            {title: "50,000+", description: "lives impacted"},
            {title: "12", description: "nations"},
            {title: "10,000+", description: "Empowering faith-driven entrepreneurs"},
        ],
    },
    speakers: {
        title: "Speakers",
        description: "50+ Speakers, Ministers, Artists & Thought Leaders",
        data: [
            {
                image: "/assets/speaker1.png",
                title: "Apst Joshua Selman",
                subtitle: "Founder & CEO",
                description: "is a Nigerian gospel preacher, televangelist, and author, known for founding Eternity Network International (ENI) and leading the weekly Koinonia meetings in Abuja."
            },
            {
                image: "/assets/speaker2.png",
                title: "Bishop Funke Felix",
                subtitle: "Founder & CEO",
                description: "is a Nigerian gospel preacher, televangelist, and author, known for founding Eternity Network International (ENI) and leading the weekly Koinonia meetings in Abuja."
            },
            {
                image: "/assets/speaker3.png",
                title: "Pastor Isaac Oyedepo Jnr",
                subtitle: "Founder & CEO",
                description: "is a Nigerian gospel preacher, televangelist, and author, known for founding Eternity Network International (ENI) and leading the weekly Koinonia meetings in Abuja."
            },
            {
                image: "/assets/speaker4.png",
                title: "Min. Nathaniel Bassey",
                subtitle: "Founder & CEO",
                description: "is a Nigerian gospel preacher, televangelist, and author, known for founding Eternity Network International (ENI) and leading the weekly Koinonia meetings in Abuja."
            },
            {
                image: "/assets/speaker5.png",
                title: "Pastor Jerry Eze*",
                subtitle: "Founder & CEO",
                description: "is a Nigerian gospel preacher, televangelist, and author, known for founding Eternity Network International (ENI) and leading the weekly Koinonia meetings in Abuja."
            },
            {
                image: "/assets/speaker6.png",
                title: "Pastor Poju Nigeria",
                subtitle: "Founder & CEO",
                description: "is a Nigerian gospel preacher, televangelist, and author, known for founding Eternity Network International (ENI) and leading the weekly Koinonia meetings in Abuja."
            },
            {
                image: "/assets/speaker7.png",
                title: "Pastor Felix Okoh",
                subtitle: "Founder & CEO",
                description: "is a Nigerian gospel preacher, televangelist, and author, known for founding Eternity Network International (ENI) and leading the weekly Koinonia meetings in Abuja."
            },
            {
                image: "/assets/speaker8.png",
                title: "Bishop Kathy Kiuna",
                subtitle: "Founder & CEO",
                description: "is a Nigerian gospel preacher, televangelist, and author, known for founding Eternity Network International (ENI) and leading the weekly Koinonia meetings in Abuja."
            },
        ]
    },
    days: {
        title: "DAYS",
        days: ["Day 1", "Day 2", "Day 3", "Day 4"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "/assets/many_speakers.png",
        schedule: [
            {
                time: "10:00 AM - 12:00PM",
                description: "Lorem ipsum dolor siLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, t amet",
            },
            {
                time: "12:00 PM - 2:00 PM",
                description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                time: "2:00 PM - 4:00 PM",
                description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
                time: "4:00 PM - 6:00 PM",
                description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                time: "6:00 PM - 8:00 PM",
                description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
                time: "8:00 PM - 10:00 PM",
                description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            },
        ]
    }
}


export {PartnersSliderContent, HomeContent, AboutPageContent, HeroSectionContent, LatestNewsContent, PartnerContent, EventsContent, ContactContent, RhemaFeastContent};