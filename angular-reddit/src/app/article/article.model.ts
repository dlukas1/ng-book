export class Article {
    title: string;
    link: string;
    votes: number;

    /**
     *
     */
    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes++;
    }

    voteDown(): void {
        this.votes--;
    }

    domain(): string {
        if (this.link.indexOf('//') > -1) {
            try {
                const domainAndPath: string = this.link.split('//')[1];
                return domainAndPath.split('/')[0];
            } catch (err) {
                return null;
            }

        }
        else {
            return this.link;
        }

    }
}