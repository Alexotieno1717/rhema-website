
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