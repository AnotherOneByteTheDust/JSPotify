class Song {
  constructor(className, path) {
    this.className = className;
    this.domEl = document.querySelector(`.${className}`);
    this.play = false;
    this.disk = this.domEl.querySelector('.vinyl');
    this.hole = this.disk.querySelector('.hole');
    this.audio = document.querySelector(`#${className}-audio`);

    // Append Audio
    let el = document.createElement('source');
    el.setAttribute('src', `${path}`);
    el.setAttribute('type', 'audio/mp3');
    this.audio.appendChild(el);

    // Añadir y pausar animacion
    this.hole.style.animationPlayState = 'paused';
    this.hole.style.animation = 'rotate360 2s infinite linear';

    if (this.domEl !== null) {
      this.domEl.addEventListener('click', this);
    }

    document.addEventListener('keydown', this);
    this.audio.loop = true;
  }

  playSong(event) {
    if (event.ctrlKey) {
      this.audio.muted = !this.audio.muted;
    } else {
      if (this.play) {
        this.disk.classList.remove('open');
        this.hole.style.animationPlayState = 'paused';
        this.audio.pause();
      } else {
        this.disk.classList.add('open');
        this.hole.style.animationPlayState = 'running';
        this.audio.play();
      }
      this.play = !this.play;
    }
  }

  keydownHandler(key) {
    switch (key) {
      case 'ArrowUp':
        if (this.audio.volume < 1) {
          this.audio.volume += 0.02;
        }
        break;
      case 'ArrowDown':
        console.log('down');
        if (this.audio.volume > 0.02) {
          this.audio.volume -= 0.02;
        }
        break;
      case 'ArrowRight':
        if (this.audio.playbackRate < 1.8) {
          this.audio.playbackRate += 0.01;
        }
        console.log(this.audio.playbackRate);
        break;
      case 'ArrowLeft':
        if (this.audio.playbackRate > 0.5) {
          this.audio.playbackRate -= 0.01;
        }
        console.log(this.audio.playbackRate);
        break;
    }
  }

  handleEvent(e) {
    switch (e.type) {
      case 'click':
        this.playSong(e);
        break;
      case 'keydown':
        this.keydownHandler(e.key);
        break;
    }
  }
}

export default Song;
