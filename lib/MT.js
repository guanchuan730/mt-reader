const File = require('./files/File')
const CSV = require('./files/CSV')
const compressJson = require('compress-json')
const fs = require('fs')

module.exports = class MT {

    constructor(){
        this.files = []
    }

    add(file){
        if(typeof file == File){
            throw new Error("Object must be File/CSV")
        }
        this.files.push(file)
    }

    read(force = false){
        this.files.map((file) => {
            if(!file.hasRead() || force){
                file.read()
            }
        })
    }

    merge(){
        
    }

    getFiles(){
        return this.files
    }

    load(path){
        let data = fs.readFileSync(path, {encoding: "utf-8"})
        let json = JSON.parse(data)
        let decompressedJSON = compressJson.decompress(json)
        this.files = []
        for(let file of decompressedJSON.files){
            if(file.type == 'csv'){
                let csv = new CSV();
                csv.load(file)
                this.files.push(csv)
            }
        }
    }

    save(path){
        let compressedJSON = compressJson.compress(this)
        console.log(compressedJSON)
        fs.writeFileSync(path, JSON.stringify(compressedJSON))
    }

    encode(c){var x='charCodeAt',b,e={},f=c.split(""),d=[],a=f[0],g=256;for(b=1;b<f.length;b++)c=f[b],null!=e[a+c]?a+=c:(d.push(1<a.length?e[a]:a[x](0)),e[a+c]=g,g++,a=c);d.push(1<a.length?e[a]:a[x](0));for(b=0;b<d.length;b++)d[b]=String.fromCharCode(d[b]);return d.join("")}

    decode(b){var a,e={},d=b.split(""),c=f=d[0],g=[c],h=o=256;for(b=1;b<d.length;b++)a=d[b].charCodeAt(0),a=h>a?d[b]:e[a]?e[a]:f+c,g.push(a),c=a.charAt(0),e[o]=f+c,o++,f=a;return g.join("")}
}