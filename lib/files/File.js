module.exports = class File {
    constructor(options){
        this.options = options
        this.rows = []
        this.type = "";
    }

    load(data){
        this.options = data.options;
        this.rows = data.rows;
        this.type = data.type
    }

    read(){
        throw new Error("Not implemented")
    }

    hasRead(){
        return this.rows.length > 0
    }

    setRows(rows){
        this.rows = rows;
    }

    getRows(){
        return this.rows
    }
}