const MT = require("../index")

test('addFiles', () => {
    let mt = new MT()
    mt.add(MT.files.csv({path:"files/csv/file.csv", header: true}))
    mt.add(MT.files.csv({path:"files/csv/file.csv", header: true}))

    mt.read()
    
    mt.save("files/data.json")
    mt.load("files/data.json")
    expect(mt.getFiles().length).toBe(2)
});