export class MessageModel {
    author: string;
    chat: string;
    time: string;

    constructor(author: string, sentence: string, time: string) {
        this.author = author;
        this.chat = sentence;
        this.time = time;
    }
}
