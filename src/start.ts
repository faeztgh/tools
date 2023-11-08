import clc from "cli-color";
import Commands from "./constants/commands";
import { Clc } from "./utils/common";

const start = () => {
    console.log(Clc.white.bold("** Welcome **"));
    console.log(Clc.white.bold("Commands: \n"));

    for (let command in Commands) {
        if (Commands.hasOwnProperty(command)) {
            console.log(clc.blue(`- ${command} (${Commands[command]})`));
        }
    }
};

start();

export default start;
