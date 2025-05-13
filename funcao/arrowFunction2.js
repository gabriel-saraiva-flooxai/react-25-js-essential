function Pessoa() {
    this.idade = 0

    // Com arrow não precisa de bind
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa()