import{a as e,R as a,i as s,b as l,e as r,z as o,w as d,Y as i,g as t,D as n,G as u,o as p,u as c,Z as m,$ as g,a0 as f,p as v,C as x,n as _,y as b,_ as w}from"./index.161bca20.js";import{_ as h}from"./index.vue_vue_type_script_setup_true_lang.347c688c.js";const y={class:"login-container"},V={class:"login-card"},z=(e=>(n("data-v-8686bd8c"),e=e(),u(),e))((()=>o("div",{class:"title"},[o("img",{src:"/v3-admin-vite/static/logo-text-2.f252b556.png"})],-1))),k={class:"content"},C={class:"show-code"},M=["src"],q=x(" 登 录 "),U=w(e({__name:"index",setup(e){const n=_(),u=a(null),x=a(!1),w=a(""),U=s({username:"admin",password:"12345678",code:"abcd"}),j={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},K=()=>{var e;null==(e=u.value)||e.validate((e=>{if(!e)return!1;x.value=!0,b().login({username:U.username,password:U.password}).then((()=>{n.push({path:"/"})})).catch((()=>{R(),U.password=""})).finally((()=>{x.value=!1}))}))},R=()=>{U.code="",w.value="/api/v1/login/code?"+1e3*Math.random()};return(e,a)=>{const s=t("el-input"),n=t("el-form-item"),_=t("el-button"),b=t("el-form");return p(),l("div",y,[r(h,{class:"theme-switch"}),o("div",V,[z,o("div",k,[r(b,{ref_key:"loginFormRef",ref:u,model:U,rules:j,onKeyup:i(K,["enter"])},{default:d((()=>[r(n,{prop:"username"},{default:d((()=>[r(s,{modelValue:U.username,"onUpdate:modelValue":a[0]||(a[0]=e=>U.username=e),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":c(m),size:"large"},null,8,["modelValue","prefix-icon"])])),_:1}),r(n,{prop:"password"},{default:d((()=>[r(s,{modelValue:U.password,"onUpdate:modelValue":a[1]||(a[1]=e=>U.password=e),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":c(g),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])])),_:1}),r(n,{prop:"code"},{default:d((()=>[r(s,{modelValue:U.code,"onUpdate:modelValue":a[2]||(a[2]=e=>U.code=e),modelModifiers:{trim:!0},placeholder:"验证码",type:"text",tabindex:"3","prefix-icon":c(f),maxlength:"4",size:"large"},null,8,["modelValue","prefix-icon"]),o("span",C,[o("img",{src:w.value,onClick:R},null,8,M)])])),_:1}),r(_,{loading:x.value,type:"primary",size:"large",onClick:v(K,["prevent"])},{default:d((()=>[q])),_:1},8,["loading","onClick"])])),_:1},8,["model","onKeyup"])])])])}}}),[["__scopeId","data-v-8686bd8c"]]);export{U as default};