#!/usr/bin/env node
import {getArgs} from "./helpers/args.js";
import {printHelp} from "./services/log.service.js";
import { saveKeyValue } from './services/storage.sevice.js'

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }

    if (args.t) {
        saveKeyValue('token', args.t);
    }

    if (args.s) {
        //save city
    }

    //weather output
}
initCLI()