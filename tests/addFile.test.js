const MT = require("../index")

test('addFiles', () => {
    let mt = new MT()
    mt.add(MT.files.csv({path:"files/csv/file.csv", header: true}))
    mt.add(MT.files.csv({path:"files/csv/file.csv", header: true}))
    expect(mt.getFiles().length).toBe(2)
});