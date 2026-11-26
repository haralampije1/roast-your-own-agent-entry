import { writeFileSync, mkdirSync } from "fs";

const roast = "My agent asked a subagent for a second opinion and got the same one wearing a fake mustache.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast);
console.log("Entry written:", roast);
console.log("Length:", roast.length);
