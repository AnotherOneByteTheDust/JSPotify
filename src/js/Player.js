import Song from './Song';

class Player {
  constructor(itemsMap) {
    let musicNames = Object.keys(itemsMap);
    let musicPath = Object.values(itemsMap);
    this.songs = [];

    for (let i in musicNames) {
      this.songs.push(new Song(musicNames[i], musicPath[i]));
    }
  }
}

export default Player;
