export interface ChannelInterface {
    kind:             string;
    id:               string;
    snippet:          Snippet;
    statistics:       Statistics;
    brandingSettings: BrandingSettings;
}

export interface BrandingSettings {
    channel: Channel;
    image:   Image;
}

export interface Channel {
    title:               string;
    description:         string;
    keywords:            string;
    unsubscribedTrailer: string;
    country:             string;
}

export interface Image {
    bannerExternalUrl: string;
}

export interface Snippet {
    title:       string;
    description: string;
    customUrl:   string;
    publishedAt: Date;
    thumbnails:  Thumbnails;
    localized:   Localized;
    country:     string;
}

export interface Localized {
    title:       string;
    description: string;
}

export interface Thumbnails {
    default: Default;
    medium:  Default;
    high:    Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface Statistics {
    viewCount:             string;
    subscriberCount:       string;
    hiddenSubscriberCount: boolean;
    videoCount:            string;
}