import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publishers";


export default interface Game {
    id: number;
    name: string;
    slug: string;
    genres: Genre[];
    publishers: Publisher[];
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}
