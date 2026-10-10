import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml'};
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost'); const name=url.pathname==='/'?'index.html':decodeURIComponent(url.pathname).slice(1); const root=process.cwd(); const file=path.resolve(root,name); if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;} const data=await readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(data);}catch{res.writeHead(404);res.end('Not found');}}).listen(3000,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:3000'));
