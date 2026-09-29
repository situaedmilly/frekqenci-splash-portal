#!/usr/bin/env node
const readline=require("node:readline");
const name=process.env.OURSELF_MCP_NAME||"ourself-mcp";
const toolMap={
 "ourself-context":[
  {name:"get_project_context",description:"Return bounded repository/runtime context.",inputSchema:{type:"object",properties:{},additionalProperties:false}},
  {name:"search_architecture",description:"Search declared architecture terms.",inputSchema:{type:"object",properties:{query:{type:"string"}},required:["query"],additionalProperties:false}},
  {name:"get_invariants",description:"Return constitutional invariants.",inputSchema:{type:"object",properties:{},additionalProperties:false}}
 ],
 "ourself-graphs":[
  {name:"inspect_graph",description:"Inspect the declared SELFGRAPH registry.",inputSchema:{type:"object",properties:{graph_id:{type:"string"}},additionalProperties:false}},
  {name:"query_lineage",description:"Return SELFGRAPH lineage metadata.",inputSchema:{type:"object",properties:{graph_id:{type:"string"}},additionalProperties:false}},
  {name:"validate_graph",description:"Validate graph admission prerequisites.",inputSchema:{type:"object",properties:{graph_id:{type:"string"}},required:["graph_id"],additionalProperties:false}}
 ],
 "ourself-evidence":[
  {name:"search_evidence",description:"Search runtime evidence records.",inputSchema:{type:"object",properties:{query:{type:"string"}},additionalProperties:false}},
  {name:"verify_receipt",description:"Verify a receipt record.",inputSchema:{type:"object",properties:{receipt_id:{type:"string"}},required:["receipt_id"],additionalProperties:false}},
  {name:"compare_state",description:"Compare declared pre/post state.",inputSchema:{type:"object",properties:{before:{type:"string"},after:{type:"string"}},required:["before","after"],additionalProperties:false}}
 ],
 "ourself-github":[
  {name:"inspect_repository",description:"Return repository identity and ref context.",inputSchema:{type:"object",properties:{},additionalProperties:false}},
  {name:"inspect_pull_request",description:"Inspect a pull request by number.",inputSchema:{type:"object",properties:{number:{type:"integer"}},required:["number"],additionalProperties:false}},
  {name:"inspect_workflow",description:"Inspect workflow runtime context.",inputSchema:{type:"object",properties:{},additionalProperties:false}}
 ]};
const tools=toolMap[name]||[{name:"health",description:"MCP health probe.",inputSchema:{type:"object",properties:{},additionalProperties:false}}];
const send=(id,result)=>process.stdout.write(JSON.stringify({jsonrpc:"2.0",id,result})+"\n");
const rl=readline.createInterface({input:process.stdin,crlfDelay:Infinity});
rl.on("line",line=>{
 if(!line.trim()) return;
 let m; try{m=JSON.parse(line)}catch{return}
 if(m.method==="initialize") send(m.id,{protocolVersion:"2024-11-05",capabilities:{tools:{}},serverInfo:{name,version:"0.1.0"}});
 else if(m.method==="tools/list") send(m.id,{tools});
 else if(m.method==="tools/call"){const t=tools.find(x=>x.name===m.params?.name); send(m.id,t?{content:[{type:"text",text:JSON.stringify({server:name,tool:t.name,status:"ok",authority:"none"})}]}:{isError:true,content:[{type:"text",text:"unknown tool"}]})}
 else if(m.id!==undefined) send(m.id,{});
});
