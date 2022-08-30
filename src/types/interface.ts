export interface DataInterface {
    // kind: string;
    // nextPageToken: string;
    // regionCode: string;
    // pageInfo: PageInfo;
    // items: { 
        kind: ItemKind,
        id: {
            kind: IDKind;
            videoId: string;
            channelId: string;
        },
        snippet: {
            publishedAt: Date;
            channelId: string;
            title: string;
            description: string;
            thumbnails: Thumbnails;
            channelTitle: string;
            liveBroadcastContent: LiveBroadcastContent;
            publishTime: Date;
        }
    // };
}

// export interface Item {
//     kind:    ItemKind;
//     id:      {
//         kind:    IDKind;
//         videoId: string;
//     };
//     snippet: {
//         publishedAt:          Date;
//         channelId:            string;
//         title:                string;
//         description:          string;
//         thumbnails:           Thumbnails;
//         channelTitle:         string;
//         liveBroadcastContent: LiveBroadcastContent;
//         publishTime:          Date;
//     };
// }

export interface ID {
    kind: IDKind;
    videoId: string;
}

export enum IDKind {
    YoutubeVideo = "youtube#video",
}

export enum ItemKind {
    YoutubeSearchResult = "youtube#searchResult",
}

export interface Snippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: LiveBroadcastContent;
    publishTime: Date;
}

export enum LiveBroadcastContent {
    None = "none",
}

export interface Thumbnails {
    default: Default;
    medium: Default;
    high: Default;
}

export interface Default {
    url: string;
    width: number;
    height: number;
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}