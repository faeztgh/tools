import clc from "cli-color";
import copy from "copy-to-clipboard";
/**
 * Console
 */

const warn = clc.yellowBright;
const error = clc.redBright;
const success = clc.greenBright;
const info = clc.blueBright;
const cyan = clc.cyan;
const white = clc.whiteBright;
import ncp from "copy-paste";

export const Clc = {
    warn,
    error,
    success,
    info,
    cyan,
    white,
} as const;

/**
 * Clipboard
 */

export const copyToClipboard = (input: string, message?: string) => {
    if (input) {
        ncp.copy(input);
        console.log(clc.green(message ?? "[Result copied to clipboard]"));
    }
};
