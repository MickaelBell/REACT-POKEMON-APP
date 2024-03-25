export default class PokemonApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: any[];

    constructor(count: number, next: string | null, previous: string | null, results: any[]) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }
}

export class PokemonResult {
    name: string;
    url: string;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}