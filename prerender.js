import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Routes defined in App.tsx (excluding catch-all *)
const routesToPrerender = [
  '/',
  '/fractional',
  '/book',
  '/automation',
  '/contact'
]

;(async () => {
  for (const route of routesToPrerender) {
    const appHtml = render(route);
    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist${route === '/' ? '/index' : route}.html`
    const absolutePath = toAbsolute(filePath)
    
    // Ensure directory exists before writing
    const dir = path.dirname(absolutePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(absolutePath, html)
    console.log('pre-rendered:', filePath)
  }
})()
