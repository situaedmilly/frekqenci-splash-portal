#!/usr/bin/env node
const fs=require("node:fs"),path=require("node:path");
const dir=path.join(process.cwd(),".ourself","runtime");
fs.mkdirSync(dir,{recursive:true});
const p=path.join(dir,"ourselfd-state.json");
const s={instance_id:"OURSELF-GITHUB-RUNTIME",role:"CONSTITUTIONAL_MEMBRANE",authority:"none",status:"ACTIVE",pid:process.pid,started_at:new Date().toISOString(),boundary:"ACTION_INTENT -> SUPERBIN_IR -> ourselfd -> ACTUATOR -> OBSERVER -> EFFECT -> RECEIPT"};
fs.writeFileSync(p,JSON.stringify(s,null,2)+"\n");
process.on("SIGTERM",()=>{s.status="STOPPED";s.stopped_at=new Date().toISOString();fs.writeFileSync(p,JSON.stringify(s,null,2)+"\n");process.exit(0)});
setInterval(()=>{},1000);
