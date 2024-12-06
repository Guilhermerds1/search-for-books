export interface Book {
    items: Array<Items>
}

export interface Items {
    volumeInfo: VolumeInfo
}

export interface VolumeInfo {
    title: string;
    authors: Array<string>;
    categories: Array<string>;
    description: string;
    imageLinks: ImageLinks;
    pageCount: string;
    publishedDate: string;
    publisher: string;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}