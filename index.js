#! /usr/bin/env
// Topic
// Chalk
import chalk from "chalk";
console.log(chalk.magenta.underline("Hello world"));
console.log(chalk.cyanBright.visible("Hello world"));
console.log(chalk.yellow.bold("Hello world"));
console.log(chalk.grey.inverse("Hello world"));
// STYLES
// Modifiers
// 1) reset - Reset the current style.
// 2) bold - Make the text bold.
// 3) dim - Make the text have lower opacity.
// 4) italic - Make the text italic. (Not widely supported)
// 5) underline - Put a horizontal line below the text. (Not widely supported)
// 6) overline - Put a horizontal line above the text. (Not widely supported)
// 7) inverse- Invert background and foreground colors.
// 8) hidden - Print the text but make it invisible.
// 9) strikethrough - Puts a horizontal line through the center of the text. (Not widely supported)
// 10) visible- Print the text only when Chalk has a color level above zero. Can be useful for things that are purely cosmetic.
// Colors
// 1) black
// 2) red
// 3) green
// 4) yellow
// 5) blue
// 6) magenta
// 8) cyan
// 9) white
// 10) blackBright (alias: gray, grey)
// 11) redBright
// 12) greenBright
// 13) yellowBright
// 14) blueBright
// 15) magentaBright
// 16) cyanBright
// 17) whiteBright
