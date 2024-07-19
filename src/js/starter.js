import settingsOriginal from "./settings.js";
import { parseSettings, adjustSeed } from "./utils/parse-settings.js";
import rngFunc from "./utils/random.js";

export default function starter(window, document) {
    const settings = { ...settingsOriginal };
    const changed = parseSettings(window.location.search, settings);
    const rngEngine = Math.random;
    adjustSeed(changed, settings, rngFunc, rngEngine);

}
