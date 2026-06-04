// Tiny zero-dependency static server for browser testing.
// Run: node .dev-server.js   (port 5174). Not used by Wallpaper Engine.
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = 5174;
const MIME = {
    ".html": "text/html; charset=utf-8",
    ".js":   "application/javascript; charset=utf-8",
    ".css":  "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png":  "image/png",
    ".jpg":  "image/jpeg",
    ".svg":  "image/svg+xml",
    ".ico":  "image/x-icon"
};

http.createServer((req, res) => {
    // POST /save-preview — accept a JPEG dataURL body and write preview.jpg
    if (req.method === "POST" && req.url === "/save-preview") {
        const chunks = [];
        req.on("data", c => chunks.push(c));
        req.on("end", () => {
            try {
                const body = Buffer.concat(chunks).toString("utf8");
                const base64 = body.replace(/^data:image\/[a-z]+;base64,/, "");
                const buf = Buffer.from(base64, "base64");
                fs.writeFileSync(path.join(ROOT, "preview.jpg"), buf);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ ok: true, bytes: buf.length }));
                console.log("preview.jpg written: " + buf.length + " bytes");
            } catch (e) {
                res.writeHead(500); res.end(String(e));
            }
        });
        return;
    }

    let p = req.url.split("?")[0];
    if (p === "/" || p === "") p = "/index.html";
    const file = path.join(ROOT, decodeURIComponent(p));
    if (!file.startsWith(ROOT)) { res.writeHead(403); res.end("forbidden"); return; }
    fs.stat(file, (err, st) => {
        if (err || !st.isFile()) { res.writeHead(404); res.end("not found"); return; }
        const ext = path.extname(file).toLowerCase();
        res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream", "Cache-Control": "no-store" });
        fs.createReadStream(file).pipe(res);
    });
}).listen(PORT, "127.0.0.1", () => {
    console.log("forest-fire dev server: http://127.0.0.1:" + PORT);
});
