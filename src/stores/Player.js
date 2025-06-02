import {defineStore} from 'pinia';
import axios from "axios";

export const useMusicPlayer = defineStore('audioPlayer', {
    state: () => ({
        audio: new Audio(),
        id: "",
        name: "",
        artist: "",
        album: "",
        genre: "",
        img: "",
        progressTime: 0,
        shuffle: false,
        autoplay: false,
        replay: false,
        mute: false,
        collection: []
    }),
    actions: {
        init() {
            this.toggleAutoPlay()
        },
        play() {
            this.audio.removeEventListener('canplaythrough', this.handleCanPlayThrough);
            this.audio.addEventListener('canplaythrough', this.handleCanPlayThrough);
            this.audio.load()

            this.audio.removeEventListener('timeupdate', this.handleProgressTime)
            this.audio.addEventListener('timeupdate', this.handleProgressTime)

            if (this.audio.volume > 0.25) this.audio.volume = 0.25
        },
        pause() {
            this.audio.pause()
        },
        prev() {
            let currentMusicIndex = this.collection.findIndex((music) => music.id === this.id);

            if(currentMusicIndex - 1 < 0) {
                currentMusicIndex = this.collection.length - 1;
            } else {
                currentMusicIndex -= 1;
            }

            const music = this.collection[currentMusicIndex]
            this.audio.src = music.src
            this.id = music.id;
            this.name = music.name
            this.artist = music.artist
            this.img = music.img
            this.play()
        },
        next() {
            this.changeAndPlay()
        },
        togglePlay() {
            if (this.audio.paused) {
                this.audio.play()
            } else {
                this.audio.pause()
            }
        },
        change(src) {
            this.audio.src = src
            this.audio.paused ? this.pause() : this.play()
        },
        handleCanPlayThrough() {
            this.audio.play()
        },
        handleProgressTime() {
            this.progressTime = this.audio.currentTime;
        },
        toggleVolume() {
            this.audio.volume === 0 ? this.audio.volume = 0.25 : this.audio.volume = 0
            this.audio.volume === 0 ? this.mute = true : this.mute = false
        },
        toggleShuffle() {
            this.shuffle = !this.shuffle
            if (this.shuffle && this.replay) this.replay = false
            this.audio.removeEventListener('ended', this.play)

            if(this.shuffle) {
                this.audio.addEventListener('ended', this.playRandomMusic)
            } else {
                this.audio.removeEventListener('ended', this.playRandomMusic)
            }
        },
        toggleAutoPlay() {
            this.autoplay = !this.autoplay

            if (this.autoplay && this.replay) this.replay = false
            this.audio.removeEventListener('ended', this.play)

            if (this.autoplay) {
                this.audio.addEventListener('ended', this.changeAndPlay)
            } else {
                this.audio.removeEventListener('ended', this.changeAndPlay)
            }
        },
        toggleReplay() {
            this.replay = !this.replay
            if (this.replay && this.autoplay) this.autoplay = false
            if (this.replay && this.shuffle) this.shuffle = false

            this.audio.removeEventListener('ended', this.changeAndPlay)
            this.audio.removeEventListener('ended', this.playRandomMusic)

            if (this.replay) {
                this.audio.addEventListener('ended', this.play)
            } else {
                this.audio.removeEventListener('ended', this.play)
            }
        },
        async updateCollection(condition = false) {
            if (this.collection.length <= 0 || condition) {
                const req = await axios.get('https://diasgalymbek47.github.io/music/data.json');
                this.collection = req.data;
                console.log("Collection updated")
            }
        },
        getNextIndexMusic() {
            const musicIndex = this.collection.findIndex((music) => music.id === this.id);
            if (musicIndex >= 0) {
                if (musicIndex + 1 < this.collection.length) {
                    return musicIndex + 1;
                }
                return 0;
            }
            return 0;
        },
        changeAndPlay() {
            const nextMusicIndex = this.getNextIndexMusic()
            const music = this.collection[nextMusicIndex]
            this.audio.src = music.src
            this.id = music.id;
            this.name = music.name
            this.artist = music.artist
            this.img = music.img
            this.play()
        },
        playRandomMusic() {
            const music = this.collection[this.getRandomInt(0, this.collection.length - 1)]
            this.audio.src = music.src
            this.id = music.id;
            this.name = music.name
            this.artist = music.artist
            this.img = music.img
            this.play()
        },
        getRandomInt(min, max) {
            min = Math.ceil(min); // округляет в большую сторону
            max = Math.floor(max); // округляет в меньшую сторону
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
});