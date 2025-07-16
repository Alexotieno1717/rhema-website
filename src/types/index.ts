
export type PartnersBrief = {
    id: string;
    name: string;
    description: string;
    image: string;
    slogan: string;
};

export interface IPartnersSlider {
    id: string;
    data: Array<PartnersBrief>;
}

export type homeCardsContent = {
    id: string;
    title: string;
    img: string;
    logo: string;
}

export interface IHomeContent {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    img: string;
    data: Array<homeCardsContent>;
}

export type JourneyCard = {
    id: string;
    description: string;
    year: number;
    img: string[];

}

export interface IAboutContent {
    id: string;
    heroTitle: string;
    heroBackgroundImage: string;
    introDescription: string;
    visionTitle: string;
    visionDescription: string;
    visionIcon?: string;
    missionTitle: string;
    missionDescription: string;
    missionIcon?: string;
    coreGoalsTitle: string;
    coreGoals: string[];
    coreGoalsIcon?: string;
    impactTitle: string;
    impactDescription: string;
    impactImage: string;
    journey: Array<JourneyCard>;
}

export interface IHeroContent {
    id: string;
    title: string;
    image: string;
}

export type latestNewsCards ={
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    author: string;
}

export interface ILatestNews {
    id: string;
    title: string;
    description: string;
    data: Array<latestNewsCards>;
    buttonText: string;
}

export type impactCard ={
    id: string;
    title: string;
    description: string;
}
export type PartnerLevel = 'silver' | 'gold' | 'platinum' | 'Individual 1' | 'Individual 2' | 'Individual 3';

export type levels ={
    id: string;
    image: string;
    description: string;
    buttonText: string;
    slug: PartnerLevel;
}

export interface IPartners {
    id: string;
    title: string;
    description: string;
    youtubeLink: string;
    youtubeLinkText: string;
    impact: {
        id: string;
        title: string;
        description: string;
        data: Array<impactCard>;
    },
    partner: {
        id: string;
        backgroundImage: string;
        title: string;
        description: string[];
        payBillImage: string;
    }
    levels: {
        title: string;
        description: string;
        data: {
            individual: Array<levels>;
            corporate: Array<levels>;
        };
    };
    quote: string;
    image: string;
}

export type eventCards ={
    id: string;
    title: string;
    image: string;
    date: string;
}

export interface IEvents {
    id: string;
    title: string;
    subtitle: string;
    bannerImage: string[];
    days: string[];
    events: Array<eventCards>;
}

export type links = {
    icons: string;
    linksText: string;
}

export interface IContact {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    socialMedia: Array<links>;
}

export type rhemaImpact = {
    title: string;
    description: string;
}

export type speakers ={
    image: string;
    title: string
    subtitle: string
    description: string
}

export type scheduleCards = {
    time: string;
    description: string;
}
export  type countdownCard ={
    countDownDate: string;
    period: string;
}

export interface IRhema {
    banner: {
        image: string;
        countdown: {
            title: string;
            buttonText: string;
            countdown: Array<countdownCard>
        };
    },
    rhema: {
        title: string;
        description: string;
        data: Array<rhemaImpact>;
    },
    speakers: {
        title: string;
        description: string;
        data: Array<speakers>
    },
    days: {
        title: string;
        days: string[];
        description: string;
        image: string;
        schedule: Array<scheduleCards>;
    }

}