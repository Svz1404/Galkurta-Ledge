import figlet from "figlet";
import { colors } from "./colors.js";

export function getBanner() {
  const banner = figlet.textSync("LayerEdge BOT", {
    font: "ANSI Shadow",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 150,
  });

  let output = [];
  output.push(`${colors.bannerText}${banner}${colors.reset}`);
  output.push(
    `${colors.bannerBorder}===============================================${colors.reset}`
  );
  output.push(
    `${colors.bannerLinks}GitHub  : https://github.com/Galkurta${colors.reset}`
  );
  output.push(
    `${colors.bannerLinks}Telegram: https://t.me/galkurtarchive${colors.reset}`
  );
  output.push(
    `${colors.bannerBorder}===============================================\n${colors.reset}`
  );

  return output.join("\n");
}
