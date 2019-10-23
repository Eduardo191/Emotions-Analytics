export interface OccurrenceInterface {
    Id?: number;
    Time: string;
    Emoji?: string;
    PeopleAppearence: {
        Age: number;
        Gender: string;
        Glasses: boolean;
    };
    Page: {
        Url: string;
        Title: string;
        Print: JSON;
    };
    Emotions: {
        Anger: number;
        Contempt: number;
        Disgusted: number;
        Fear: number;
        Joy: number;
        Sadness: number;
        Valence: number;
        Engagement: number;
    };
    Expressions: {
        Attention: number;
        BrowFurrow: number;
        BrowRaise: number;
        CheekRaise: number;
        ChinRaise: number;
        Dimpler: number;
        EyeClosure: number;
        EyeWiden: number;
        InnerBrowRaise: number;
        JawDrop: number;
        LidTighten: number;
        LipCornerDepressor: number;
        LipPress: number;
        LipPucker: number;
        LipStretch: number;
        LipSuck: number;
        MouthOpen: number;
        NoseWrinkle: number;
        Smile: number;
        Smirk: number;
        UpperLipRaise: number;
    };
}