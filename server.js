import http from "node:http";

const port = Number(process.env.PORT ?? 3000);
const host = "0.0.0.0";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><title>Sohwe test app</title></head>
<body style="font-family: system-ui; margin: 2rem;">
  <h1>Sohwe test app</h1>
  <p>OK — container is running.</p>
  <p><code>${req.method} ${req.url}</code></p>
  <p><small>${new Date().toISOString()}</small></p>
</body>
</html>`);
});

server.listen(port, host, () => {
  console.log(`listening on http://${host}:${port}`);
});
