// file types are:

// jpg
// png
// zip
// pdf
// webp

import fs from 'fs/promises'

import fsn from 'fs'

import path from 'path'


let directoryPath = 'C:\\Users\\Bodhisattva Duduka\\OneDrive\\Desktop\\Web development\\Backend\\Exercise 15\\files'

let files = await fs.readdir(directoryPath)

let extensionArray = []
let arr = []
let extension
let folderName

files.forEach(file => {
    extension = path.extname(file)
    if (!arr.includes(extension)) {
        arr.push(extension)
        folderName = extension.slice(1, extension.length)
        extensionArray.push(folderName)
    }
});

console.log(extensionArray)

let currentFolderName
let fullPath

extensionArray.forEach(element => {
    currentFolderName = element
    fullPath = path.join(directoryPath, currentFolderName)
    if (!(fsn.existsSync(fullPath))) {
        fs.mkdir(fullPath)
        console.log(`${currentFolderName} created successfully`)
    }
    else {
        console.log('folder already exists')
    }
});


let fileExtension
files.forEach(async element => {
    fileExtension = path.extname(element).slice(1, element.length)
    console.log(fileExtension)
    
    try {
        if (!(fsn.existsSync(`C:\\Users\\Bodhisattva Duduka\\OneDrive\\Desktop\\Web development\\Backend\\Exercise 15\\files\\${fileExtension}\\${element}`))) {
            await fs.rename(`C:\\Users\\Bodhisattva Duduka\\OneDrive\\Desktop\\Web development\\Backend\\Exercise 15\\files\\${element}`, `C:\\Users\\Bodhisattva Duduka\\OneDrive\\Desktop\\Web development\\Backend\\Exercise 15\\files\\${fileExtension}\\${element}`)
            console.log('moved')
        }
        else{
            console.log('already exists')
        }
    } catch (error) {
        console.log(error)
    }
});
