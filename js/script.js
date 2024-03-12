const { createApp } = Vue


createApp(
    {
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
                        title: "Spiderman"
                    },
                    {
                        img: "img/03.webp",
                        title: "Spiderman"
                    },
                    {
                        img: "img/04.webp",
                        title: "Spiderman"
                    },
                    {
                        img: "img/05.webp",
                        title: "Spiderman"
                    },
                    
                ],

            }
        },


        
        mounted() {
            console.log(this.images);
        }
    }

).mount('#app')

