import path from "path";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../uhyo.txt");

const data = await readFile(dataFile, {encoding: "utf8"});

let count = 0;
let currentIndex = 0;

while (true) {
    const nextIndex = data.indexOf("uhyo", currentIndex);
    if (nextIndex >= 0) {
        count++;
        currentIndex = nextIndex + 1;
    } else {
        break;
    }
};

console.log(count);

export {};
