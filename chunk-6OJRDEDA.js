import{a as be}from"./chunk-AVREQUUN.js";import{$a as u,Bb as pe,Cb as de,D as j,Fa as Q,Gb as ce,Ha as Z,I as p,Ia as m,J as f,Ja as b,Kb as a,L as h,La as Y,Lb as ue,M as F,Ma as J,N as s,Na as K,Nb as T,Q as A,R,Sa as v,Ta as w,Ua as N,Ya as W,Za as ee,_a as te,a as P,aa as S,ab as ne,b as k,ba as V,bb as ie,ca as U,db as oe,ea as H,eb as re,fb as se,fc as fe,g as O,ga as B,h as z,hb as x,ib as ae,jc as he,ka as d,kb as y,oa as c,sb as le,ta as L,td as ge,u as E,ua as g,va as $,vd as me,wa as q,xa as X,xd as C,ya as G,zd as ve}from"./chunk-NRZN5ICL.js";var xe=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var Ne=`
    ${xe}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,Te={root:({instance:e})=>["p-inputtext p-component",{"p-filled":e.$filled(),"p-inputtext-sm":e.pSize==="small","p-inputtext-lg":e.pSize==="large","p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-inputtext-fluid":e.hasFluid}]},ye=(()=>{class e extends ge{name="inputtext";style=Ne;classes=Te;static \u0275fac=(()=>{let t;return function(i){return(t||(t=U(e)))(i||e)}})();static \u0275prov=p({token:e,factory:e.\u0275fac})}return e})();var Ce=new h("INPUTTEXT_INSTANCE"),Je=(()=>{class e extends be{componentName="InputText";hostName="";ptInputText=a();pInputTextPT=a();pInputTextUnstyled=a();bindDirectiveInstance=s(C,{self:!0});$pcInputText=s(Ce,{optional:!0,skipSelf:!0})??void 0;ngControl=s(he,{optional:!0,self:!0});pcFluid=s(ve,{optional:!0,host:!0,skipSelf:!0});pSize;variant=a();fluid=a(void 0,{transform:T});invalid=a(void 0,{transform:T});$variant=ce(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=s(ye);constructor(){super(),S(()=>{let t=this.ptInputText()||this.pInputTextPT();t&&this.directivePT.set(t)}),S(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(n){return new(n||e)};static \u0275dir=$({type:e,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(n,i){n&1&&te("input",function(){return i.onInput()}),n&2&&(Q("data-p",i.dataP),y(i.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[le([ye,{provide:Ce,useExisting:e},{provide:me,useExisting:e}]),X([C]),G]})}return e})(),Ke=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=g({type:e});static \u0275inj=f({})}return e})();var _e=["overlay"],De=["*"];function Me(e,o){e&1&&N(0,"div")}function Pe(e,o){if(e&1&&(v(0,"div"),J(1,Me,1,0,"div",null,Y),w()),e&2){let t=u(2);y(t.spinner.class),x("color",t.spinner.color),d(),K(t.spinner.divArray)}}function ke(e,o){if(e&1&&(N(0,"div",4),pe(1,"safeHtml")),e&2){let t=u(2);ee("innerHTML",de(1,1,t.template),B)}}function Oe(e,o){if(e&1){let t=W();v(0,"div",2,0),Z(function(){A(t);let i=u();return R(i.disableAnimation?"":"fade-out")}),m(2,Pe,3,4,"div",3),m(3,ke,2,3,"div",4),v(4,"div",5),ie(5),w()()}if(e&2){let t=u();x("background-color",t.spinner.bdColor)("z-index",t.spinner.zIndex)("position",t.spinner.fullScreen?"fixed":"absolute"),ae("no-animate",t.disableAnimation),d(2),b(t.template?-1:2),d(),b(t.template?3:-1),d(),x("z-index",t.spinner.zIndex)}}var ze={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},_={BD_COLOR:"rgba(51,51,51,0.8)",SPINNER_COLOR:"#fff",Z_INDEX:99999},D="primary",l=class e{constructor(o){Object.assign(this,o)}static create(o){return!o?.template&&!o?.type&&console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),new e(o)}},M=(()=>{class e{constructor(){this.spinnerObservable=new z(null)}getSpinner(t){return this.spinnerObservable.asObservable().pipe(E(n=>n&&n.name===t))}show(t=D,n){return new Promise((i,r)=>{setTimeout(()=>{n&&Object.keys(n).length?(n.name=t,this.spinnerObservable.next(new l(k(P({},n),{show:!0}))),i(!0)):(this.spinnerObservable.next(new l({name:t,show:!0})),i(!0))},10)})}hide(t=D,n=10){return new Promise((i,r)=>{setTimeout(()=>{this.spinnerObservable.next(new l({name:t,show:!1})),i(!0)},n)})}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),Se=new h("NGX_SPINNER_CONFIG"),Ee=(()=>{class e{constructor(){this.sanitizer=s(fe)}transform(t){return t?this.sanitizer.bypassSecurityTrustHtml(t):""}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275pipe=q({name:"safeHtml",type:e,pure:!0})}}return e})(),ht=(()=>{class e{constructor(t,n,i,r){this.spinnerService=t,this.changeDetector=n,this.elementRef=i,this.globalConfig=r,this.disableAnimation=!1,this.spinner=new l,this.ngUnsubscribe=new O,this.setDefaultOptions=()=>{let{type:I}=this.globalConfig??{};this.spinner=l.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??I,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor=_.BD_COLOR,this.zIndex=_.Z_INDEX,this.color=_.SPINNER_COLOR,this.size="large",this.fullScreen=!0,this.name=D,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}initObservable(){this.spinnerService.getSpinner(this.name).pipe(j(this.ngUnsubscribe)).subscribe(t=>{this.setDefaultOptions(),Object.assign(this.spinner,t),t.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(t){return t===this.elementRef.nativeElement.parentElement?!0:t.parentNode&&this.isSpinnerZone(t.parentNode)}ngOnChanges(t){for(let n in t)if(n){let i=t[n];if(i.isFirstChange())return;typeof i.currentValue<"u"&&i.currentValue!==i.previousValue&&i.currentValue!==""&&(this.spinner[n]=i.currentValue,n==="showSpinner"&&(i.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),n==="name"&&this.initObservable())}}getClass(t,n){this.spinner.divCount=ze[t],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((r,I)=>I);let i="";switch(n.toLowerCase()){case"small":i="la-sm";break;case"medium":i="la-2x";break;case"large":i="la-3x";break;default:break}return"la-"+t+" "+i}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}static{this.\u0275fac=function(n){return new(n||e)(c(M),c(ue),c(H),c(Se,8))}}static{this.\u0275cmp=L({type:e,selectors:[["ngx-spinner"]],viewQuery:function(n,i){if(n&1&&oe(_e,5),n&2){let r;re(r=se())&&(i.spinnerDOM=r.first)}},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},features:[V],ngContentSelectors:De,decls:1,vars:1,consts:[["overlay",""],[1,"ngx-spinner-overlay",3,"no-animate","background-color","z-index","position"],[1,"ngx-spinner-overlay"],[3,"class","color"],[3,"innerHTML"],[1,"loading-text"]],template:function(n,i){n&1&&(ne(),m(0,Oe,6,12,"div",1)),n&2&&b(i.spinner.show?0:-1)},dependencies:[Ee],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;opacity:1;transition:opacity .3s ease-in}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}@starting-style{.ngx-spinner-overlay[_ngcontent-%COMP%]{opacity:0}}.fade-out[_ngcontent-%COMP%]{opacity:0;transition:opacity .2s ease-out}.no-animate[_ngcontent-%COMP%]{transition:none!important}@starting-style{.no-animate[_ngcontent-%COMP%]{opacity:1!important;transition:none!important}}"],changeDetection:0})}}return e})(),gt=(()=>{class e{static forRoot(t){return{ngModule:e,providers:[{provide:Se,useValue:t}]}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=f({})}}return e})();var we=class e{constructor(o){this.spinner=o}Hide(){this.spinner.hide()}Show(){this.spinner.show()}static \u0275fac=function(t){return new(t||e)(F(M))};static \u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})};export{Je as a,Ke as b,ht as c,gt as d,we as e};
