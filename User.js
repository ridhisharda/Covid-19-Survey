class User {
    constructor() {
        this.index = null;
        this.email = null;
        this.age= null;
        this.contact= null;
        this.city= null;
        this.pincode= null;
        this.state= null;
        this.country= null;
        this.input = null;
    }

    updateCount(count) {
        database.ref('/').update({
            peopleCount: count
        });
    }

    update() {
        var playerIndex = "player" + this.index;
        database.ref(playerIndex).set({
            input: this.input,
            email: this.email,
            age: this.age,
            contact: this.contact,
            city: this.city,
            pincode: this.pincode,
            state: this.state,
            country: this.country 
            answer: []
        });
    }
}