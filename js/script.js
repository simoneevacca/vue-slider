const { createApp } = Vue


createApp({

    data() {
        return {
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


    },



}).mount('#app')

