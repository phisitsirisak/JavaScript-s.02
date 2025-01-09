//Parent Class
class Meida {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}


class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}