class User {

    fullName = ''
    nickname = ''
    email = ''
    phone = ''
    birthday = ''

    constructor() {}


    get fullName() { return fullName }

    ToString() {
        return `
        ${this.fullName}
        ${this.nickname}
        ${this.email}
        ${this.phone}
        `
    }

}