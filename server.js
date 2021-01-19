import express from "express"
import path from "path"
import favicon from "serve-favicon"

const app = express()

// Statics, Gzip, Favicon and Forms
app.use("/dist", express.static(path.join(path.resolve(), "./dist")))
app.use(favicon(path.join(path.resolve(), "./dist/favicon.ico")))

// Redirect all non-matching paths to index
app.get("*", (req, res) => {
  res.setHeader("Content-type", "text/html")
  res.sendFile(path.resolve(path.resolve(), "./static", "index.html"))
})

const server = app.listen(process.env.PORT || 3001)

async function cleanup(error) {
  console.info(error)
  server.close()
}

process.on("SIGINT", cleanup)
process.on("SIGTERM", cleanup)
