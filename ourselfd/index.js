#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
const root=process.cwd();
const dir=path.join(root,".ourself","runtime");
fs.mkdirSync(dir,{recursive:true});
const statePath=path.join(dir,"ourselfd-state.json");
const state={instance_id:"OURSELF-GITHUB-RUNTIME",role:"CONSTITUTIONAL_MEMBRANE",authority:"none",status:"ACTIVE",pid:process.pid,started_at:new Date().toISOString(),boundary:"ACTION_INTENT -> SUPERBIN_IR -> ourselfd -> ACTUATOR -> OBSERVER -> EFFECT -> RECEIPT"};
fs.writeFileSync(statePath,JSON.stringify(state,null,2)+"\n");
process.on("SIGTERM",()=>{state.status="STOPPED";state.stopped_at=new Date().toISOString();fs.writeFileSync(statePath,JSON.stringify(state,null,2)+"\n");process.exit(0);});
setInterval(()=>{},1000);
