import{_ as g,o,c as i,a,t as d,n,F as h,r as m,b as _,p as b,d as f}from"./index-a14151be.js";const k="/assets/background1-201386a0.jpg",v="/assets/background2-f0581710.jpg",S="/assets/background3-e208acee.jpg",x="/assets/background4-819f5ee3.jpg",y="/assets/background5-a1ba22a8.jpg",I={data(){return{background1:k,background2:v,background3:S,background4:x,background5:y,dataLen:5,scrollSpeed:.5,data:[{animationIn:"",animationOut:"",url:"",id:""},{animationIn:"",animationOut:"",url:"",id:""},{animationIn:"",animationOut:"",url:"",id:""},{animationIn:"",animationOut:"",url:"",id:""},{animationIn:"",animationOut:"",url:"",id:""}],isScrolled:!1,scrollTop:0,scrollLimit:40,title:"归心",titleDesc:"山幽玉珂，盈盈一水。花开清靖，舒心自在。"}},computed:{titleHeight(){return 140-this.scrollTop+"px"},titleTop(){let t=90-this.scrollTop*3/2;return t>30?t+"px":"30px"},titleLeft(){let t=16+this.scrollTop*2.5;return t<120?t>16?t+"px":"16px":"120px"}},methods:{initData(){for(let t=0;t<this.dataLen;t++)if(this.isKey("background"+(t+1),this)){let s=this["background"+(t+1)];this.data[t].url=s,this.data[t].id="content_"+(t+1)}},isKey(t,s){return t in s},parallaxScroll(){let t=window.scrollY;this.scrollTop=t,this.isScrolled=t>this.scrollLimit;let s=window.innerHeight;this.data.forEach((l,p)=>{let c="center "+Math.ceil(-t/s)*this.scrollSpeed+"px",e=document.getElementById(l.id);e!=null&&(e.style.backgroundPosition=c,e.children[0].getBoundingClientRect().top)})}},async created(){this.initData()},mounted(){document.addEventListener("scroll",()=>{this.parallaxScroll()})}};const L=t=>(b("data-v-2bfb8f08"),t=t(),f(),t),T={class:"title-name"},w={class:"content-box"},j=["id"],B=L(()=>a("div",{class:"content-item-box"},[a("div",{class:"content-left"}),a("div",{class:"content-right"})],-1)),D=[B];function O(t,s,l,p,c,e){return o(),i("div",{class:_([{start:!t.isScrolled},"app-page"])},[a("div",{style:n({height:e.titleHeight}),class:"title"},[a("p",T,d(t.title),1),a("p",{style:n({top:e.titleTop,left:e.titleLeft}),class:"title-desc"},d(t.titleDesc),5)],4),a("div",w,[(o(!0),i(h,null,m(t.data,(r,u)=>(o(),i("div",{id:r.id,ref_for:!0,ref:"content_"+u+1,style:n({backgroundImage:"url("+r.url+")",backgroundSize:"cover",backgroundPosition:"center center"}),class:"content"},D,12,j))),256))])],2)}const H=g(I,[["render",O],["__scopeId","data-v-2bfb8f08"]]);export{H as default};
