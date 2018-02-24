import MySQLTable from "./../MySQLTable";

class Permission extends MySQLTable {
    constructor() {
        super();
        this.column("name")
            .varChar(50)
            .setNotNull();
        this.column("description")
            .varChar(200)
            .setNotNull();
        this.column("slug")
            .varChar(50)
            .setNotNull();
        this.column("rules").text();
    }
}

Permission.setName("Security_Permissions");

export default Permission;