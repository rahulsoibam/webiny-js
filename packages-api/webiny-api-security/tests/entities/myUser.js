import { Identity } from "../../src";

class MyUser extends Identity {
    constructor() {
        super();
        this.attr("username")
            .char()
            .setValidators("required");
        this.attr("password").password();
    }
}

MyUser.classId = "MyUser";
export default MyUser;