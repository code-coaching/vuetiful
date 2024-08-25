import { useDarkMode, useTheme } from "@code-coaching/vuetiful";

const { applyThemeSSR, getThemeFromCookie, themes } = useTheme();
const { applyModeSSR, getModeFromCookie } = useDarkMode();

export default eventHandler(async (event) => {

  const originalEnd = event.node.res.end;

  event.node.res.end = (chunk, ...args) => {
    let html = chunk instanceof Buffer ? chunk.toString("utf-8") : chunk;

    if (event.node.res.getHeader("content-type")?.includes("text/html")) {
      const cookie = event.node.req.headers.cookie || "";
      const theme = getThemeFromCookie(cookie) || themes.vuetiful;
      const mode = getModeFromCookie(cookie);
      html = applyThemeSSR(html, theme);
      html = applyModeSSR(html, mode);

      event.node.res.setHeader(
        "Content-Length",
        Buffer.byteLength(html).toString(),
      );
      originalEnd.call(event.node.res, html, ...args);
    } else {
      originalEnd.call(event.node.res, chunk, ...args);
    }
  };
});
