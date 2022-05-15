const File = require('./File')
const fs = require('fs')

module.exports = class CSV extends File {
    constructor(options){
        super(options)
        this.type = "csv"
    }

    read(){
        this.rows = []
        let content = fs.readFileSync(this.options.path, {encoding: "utf-8"})
        let rows = content.split("\r\n")
        let header = "";
        let headers = "";
        if(this.options.header){
            header = rows.shift()
            headers = header.split(",")
        }
        for(let row of rows){
            let columns = row.split(",")
            let tmpRow = {}
            for(let i=0; i<columns.length; i++){
                tmpRow[header ? headers[i] : i] = columns[i]
            }
            this.rows.push(tmpRow)
        }
    }
}