const app = new Vue({
    el: '#app',
    data: {
        test: 'hello',
        catFact: '',
        catImage: '',
    },
    methods: {
        async getCatImage() {
            var response = await fetch('https://cataas.com/cat?json=true')
            var data = await response.json()
            console.log(data)
            this.catImage = "https://cataas.com/" + data.url
        },
        async getfact() {
            while (true) {
                var response = await fetch("https://cat-fact.herokuapp.com/facts/random")
                data = await response.json()
                console.log(data.status.verified)
                factVerificationStatus = data.status.verified
                console.log(data.text)
                this.catFact = data.text
                if (factVerificationStatus === true) {
                    this.getCatImage()
                    break;
                }
            }
        },
    }


})