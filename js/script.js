const { createApp } = Vue


createApp({

    data() {
        return {
            timer: null,
            imageCounter: 0,
            images: [
                {
                    img: "img/01.webp",
                    title: "Spiderman"
                },
                {
                    img: "img/02.webp",
                    title: "Ratchet & Clank"
                },
                {
                    img: "img/03.webp",
                    title: "Fortnite"
                },
                {
                    img: "img/04.webp",
                    title: "Stray"
                },
                {
                    img: "img/05.webp",
                    title: "Avengers"
                },

            ],

        }
    },

    methods: {


        prevImage() {
            if (this.imageCounter == 0) {
                this.imageCounter = this.images.length
            }
            this.imageCounter--;
        },

        nextImage() {
            this.imageCounter++;
            if (this.imageCounter == this.images.length) {
                this.imageCounter = 0
            }
        },

        startTimer(){
            this.timer = setInterval(() => {
                this.nextImage();
            }, 3000)
        },

        stopTimer(){
            clearInterval(this.timer)
        }

    },

    mounted() {

        this.startTimer() 
    }



}).mount('#app')