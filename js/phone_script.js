const musics = [
    {
      cover: 'https://i.ibb.co/fYrCzmF/Masego.jpg',
      title: 'Late Night',
      artist: 'Masego',
      duration: '2:48', 
      id: 'fav1'
    },
    
    {
      cover: 'https://i.ibb.co/tcWVbVP/Jorja-Smith.jpg',
      title: 'Lost and Found',
      artist: 'Jorja Smith',
      duration: '3:15', 
      id: 'fav2'
    },
    
    {
      cover: 'https://i.ibb.co/xDS6Vvr/Maverick-Sabre.jpg',
      title: 'Slow Down',
      artist: 'Maverick Sabre ft. Jorja Smith',
      duration: '3:56', 
      id: 'fav3'
    },
    
    {
      cover: 'https://i.ibb.co/9pjLJ6x/6lack.jpg',
      title: 'Nonchalant',
      artist: '6lack',
      duration: '3:08', 
      id: 'fav4'
    },
    
    {
      cover: 'https://linkstorage.linkfire.com/medialinks/images/4f141e18-2209-468d-99bd-888fd0dfb1a6/artwork-440x440.jpg',
      title: 'Out of the Grave',
      artist: 'ENROSA, Abandoned',
      duration: '3:23', 
      id: 'fav5'
    },
    
    {
      cover: 'https://linkstorage.linkfire.com/medialinks/images/fb123568-a882-4767-96a6-cca70885be52/artwork-440x440.jpg',
      title: 'Give Up On You',
      artist: 'imallryt, ROY KNOX, Hayve',
      duration: '2:35', 
      id: 'fav6'
    },
    
    {
      cover: 'https://linkstorage.linkfire.com/medialinks/images/74a4558f-58a6-4396-8bd0-d5c6d9505a18/artwork-440x440.jpg',
      title: 'Interstellar',
      artist: 'Danyka Nadeau, Au5',
      duration: '6:13', 
      id: 'fav7'
    },
    
    {
      cover: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/754/100x100/sun-goes-down-1597319229-4z2sOdWwaa.jpg',
      title: 'Sun Goes Down',
      artist: 'ROY KNOX, Jim Yosef',
      duration: '2:48', 
      id: 'fav8'
    },
    
    {
      cover: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/749/100x100/power-up-1597319196-NL15wxheVa.jpg',
      title: 'Power Up',
      artist: 'Razihel',
      duration: '3:15', 
      id: 'fav9'
    },
    
    {
      cover: 'https://linkstorage.linkfire.com/medialinks/images/91295981-67cd-41b4-9106-0fc12f186042/artwork-440x440.jpg',
      title: 'Find You',
      artist: 'Nytrix, Mynerva',
      duration: '3:18', 
      id: 'fav10'
    }];
    
    
    
    const vm = new Vue({
      el: '#frame',
      data: {
        authorized: false,
        statusBarExpanded: false,
        taps: 0,
        activeApp: '',
        currentTime: '',
        isPhoneRotated: false,
        phoneColor: 'white',
    
        //#region Music App Variables
        musics: musics,
        nowPlaying: {},
        isMusicOpen: false,
        isMusicPlaying: false,
        isShuffled: false,
        isRepeated: true,
        isStopped: false,
        musicListOpen: false,
        musicNowPlayingOpen: false,
    
        musicStay: false,
        musicLeave: true,
    
        musicBtnShow: false,
    
        favBtnClick: false,
        favBtnClickF: true,
    
        listCtrlList: false,
        listCtrlFav: false,
        listCtrlPlayer: false
        //#endregion Music App Variables
      },
      methods: {
        getCurrentTime() {
          let dt = new Date();
          let hour = dt.getHours();
          let mins = dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes();
          return `${hour}:${mins}`;
        },
        rotatePhone() {
          this.isPhoneRotated = !this.isPhoneRotated;
        },
        doubleTap() {
          this.taps++;
          console.log(this.taps);
          setTimeout(() => {
            if (this.taps == 1) {
              this.authorized = !this.authorized;
            }
            this.taps = 0;
          }, 400);
        },
        changePhoneColor(color) {
          this.phoneColor = color;
        },
    
        //#region Music App Methods
        openMusic() {
          this.isMusicOpen = true;
          this.activeApp = 'music';
          // this.openMusicList();
          this.musicListOpen = true;
          this.musicNowPlayingOpen = false;
          this.musicStay = false;
          this.musicLeave = true;
          this.musicBtnShow = false;
    
          this.listCtrlList = true;
          this.listCtrlFav = false;
          this.listCtrlPlayer = false;
        },
        openMusicList() {
          this.musicListOpen = true;
          this.musicNowPlayingOpen = false;
          this.musicStay = false;
          this.musicLeave = true;
          this.favBtnClick = false;
          this.favBtnClickF = true;
    
          this.listCtrlList = true;
          this.listCtrlFav = false;
          this.listCtrlPlayer = false;
        },
        openFavList() {
          this.musicListOpen = false;
          this.musicNowPlayingOpen = false;
          this.musicStay = false;
          this.musicLeave = true;
          this.favBtnClick = true;
          this.favBtnClickF = false;
    
          this.listCtrlList = false;
          this.listCtrlFav = true;
          this.listCtrlPlayer = false;
        },
        openNowPlaying() {
          this.musicListOpen = false;
          this.musicNowPlayingOpen = true;
          this.musicStay = true;
          this.musicLeave = false;
          this.musicBtnShow = false;
    
          this.listCtrlList = false;
          this.listCtrlFav = false;
          this.listCtrlPlayer = true;
        },
        closeNowPlaying() {
          this.musicListOpen = true;
          this.musicNowPlayingOpen = false;
          this.musicStay = false;
          this.musicLeave = true;
          this.musicBtnShow = true;
          this.favBtnClick = false;
          this.favBtnClickF = true;
    
          this.listCtrlList = true;
          this.listCtrlFav = false;
          this.listCtrlPlayer = false;
        },
        
        playMusic(music) {
          setTimeout(() => {
            this.isStopped = false;
          }, 200);
          this.nowPlaying = music;
          this.openNowPlaying();
        },
        togglePlayState() {
          this.isMusicPlaying = !this.isMusicPlaying;
        },
        toggleShuffle() {
          this.isShuffled = !this.isShuffled;
        },
        toggleRepeat() {
          this.isRepeated = !this.isRepeated;
        },
        nextMusic() {
          let id = this.musics.indexOf(this.nowPlaying);
          if (id == this.musics.length - 1) this.nowPlaying = this.musics[0];else
          this.nowPlaying = this.musics[id + 1];
          this.stopMusic();
          this.playMusic(this.nowPlaying);
        },
        prevMusic() {
          let id = this.musics.indexOf(this.nowPlaying);
          if (id == 0) this.nowPlaying = this.musics[this.musics.length - 1];else
          this.nowPlaying = this.musics[id - 1];
          this.stopMusic();
          this.playMusic(this.nowPlaying);
        },
        stopMusic() {
          this.isStopped = true;
        },
        //#endregion Music App Methods
    
        toHome() {
          this.activeApp = '';
          this.isWAOpen = false;
          this.isMusicOpen = false;
          this.musicListOpen = true;
          this.musicNowPlayingOpen = false;
        } },
    
      computed: {
        filteredContacts() {
          return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.contactSearchText.toLowerCase()));
        } },
    
      beforeMount() {
        this.currentTime = this.getCurrentTime();
      },
      mounted() {
        this.$nextTick(function () {
          console.log('Ready!', this.currentTime);
          setInterval(() => {
            this.currentTime = this.getCurrentTime();
          }, 1000);
        });
      } });