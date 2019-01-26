export class UserSignupDetail {
    constructor(
        public firstName: string,
        public lastName: string,
        public emailID: string,
        public password: string,
        public role: number,
        public status: boolean
    ){}
}
