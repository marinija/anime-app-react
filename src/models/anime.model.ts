export interface IBoardCast {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
}

export interface ICategory {
    mal_id: number;
    name: string;
    type: string;
    url: string;
}

export interface IImageFormat {
    image_url: string;
    large_image_url: string;
    small_image_url: string;
}

export interface IImage {
    jpg: IImageFormat;
    webp: IImageFormat;
}

export interface IImageSize {
    image_url: string | null;
    large_image_url: string | null;
    maximum_image_url: string | null;
    medium_image_url: string | null;
    small_image_url: string | null;
}

export interface ITitle {
    title: string;
    type: string;
}

export interface ITrailer {
    embed_url: string;
    images: IImageSize;
    url: string | null;
    youtube_id: string | null;
}

export interface IAnime {
    aired: Record<string, string | Record<string, number>>;
    airing: boolean;
    approved: boolean;
    background: string | null;
    broadcast: IBoardCast;
    demographics: Array<ICategory>;
    duration: string;
    episodes: number;
    explicit_genres: Array<unknown>;
    favorites: number;
    genres: Array<ICategory>;
    images: IImage;
    licensors: Array<ICategory>;
    mal_id: number;
    members: number;
    popularity: number;
    producers: Array<ICategory>;
    rank: number;
    rating: string;
    score: number;
    scored_by: number;
    season: string;
    source: string;
    status: string;
    studios: Array<ICategory>;
    synopsis: string;
    themes: Array<unknown>;
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: Array<string>;
    titles: Array<ITitle>;
    trailer: ITrailer;
    type: string;
    url: string;
    year: number;
}
