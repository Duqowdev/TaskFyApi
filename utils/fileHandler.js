const fs = require ('fs')
const path = require ('path')

const filePath = '/.data/';

exports.writeTasksToFile = (Tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks))

}

exports.readTasksFromFile = () => {
    if (!fs.existSync(filePath)){
        writeTasksToFile([])
    }

    const data = fs.readFileSync(filePath);
    return JSON.parse()
}