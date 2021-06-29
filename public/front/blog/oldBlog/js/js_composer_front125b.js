/************************************************
 * REVOLUTION 5.0 EXTENSION - SLIDE ANIMATIONS
 * @version: 1.0.1 (11.08.2015)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/

!function(){var t=jQuery.fn.revolution;jQuery.extend(!0,t,{animateSlide:function(t,e,o,a,n,r,s,l,d){return i(t,e,o,a,n,r,s,l,d)}});var e=function(e,o,a,i){var n=e,r=n.find(".defaultimg"),s=n.data("zoomstart"),l=n.data("rotationstart");void 0!=r.data("currotate")&&(l=r.data("currotate")),void 0!=r.data("curscale")&&"box"==i?s=100*r.data("curscale"):void 0!=r.data("curscale")&&(s=r.data("curscale")),t.slotSize(r,o);var d=r.attr("src"),h=r.css("backgroundColor"),c=o.width,f=o.height,p=r.data("fxof"),u=0;"on"==o.autoHeight&&(f=o.c.height()),void 0==p&&(p=0);var g=0,v=r.data("bgfit"),w=r.data("bgrepeat"),m=r.data("bgposition");switch(void 0==v&&(v="cover"),void 0==w&&(w="no-repeat"),void 0==m&&(m="center center"),i){case"box":var y=0,x=0,T=0;if(y=o.sloth>o.slotw?o.sloth:o.slotw,!a)var g=0-y;o.slotw=y,o.sloth=y;for(var x=0,T=0,z=0;z<o.slots;z++){T=0;for(var b=0;b<o.slots;b++)n.append('<div class="slot" style="position:absolute;top:'+(u+T)+"px;left:"+(p+x)+"px;width:"+y+"px;height:"+y+'px;overflow:hidden;"><div class="slotslide" data-x="'+x+'" data-y="'+T+'" style="position:absolute;top:0px;left:0px;width:'+y+"px;height:"+y+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-T)+"px;left:"+(0-x)+"px;width:"+c+"px;height:"+f+"px;background-color:"+h+";background-image:url("+d+");background-repeat:"+w+";background-size:"+v+";background-position:"+m+';"></div></div></div>'),T+=y,void 0!=s&&void 0!=l&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:l});x+=y}break;case"vertical":case"horizontal":if("horizontal"==i){if(!a)var g=0-o.slotw;for(var b=0;b<o.slots;b++)n.append('<div class="slot" style="position:absolute;top:'+(0+u)+"px;left:"+(p+b*o.slotw)+"px;overflow:hidden;width:"+(o.slotw+.6)+"px;height:"+f+'px"><div class="slotslide" style="position:absolute;top:0px;left:'+g+"px;width:"+(o.slotw+.6)+"px;height:"+f+'px;overflow:hidden;"><div style="background-color:'+h+";position:absolute;top:0px;left:"+(0-b*o.slotw)+"px;width:"+c+"px;height:"+f+"px;background-image:url("+d+");background-repeat:"+w+";background-size:"+v+";background-position:"+m+';"></div></div></div>'),void 0!=s&&void 0!=l&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:l})}else{if(!a)var g=0-o.sloth;for(var b=0;b<o.slots+2;b++)n.append('<div class="slot" style="position:absolute;top:'+(u+b*o.sloth)+"px;left:"+p+"px;overflow:hidden;width:"+c+"px;height:"+o.sloth+'px"><div class="slotslide" style="position:absolute;top:'+g+"px;left:0px;width:"+c+"px;height:"+o.sloth+'px;overflow:hidden;"><div style="background-color:'+h+";position:absolute;top:"+(0-b*o.sloth)+"px;left:0px;width:"+c+"px;height:"+f+"px;background-image:url("+d+");background-repeat:"+w+";background-size:"+v+";background-position:"+m+';"></div></div></div>'),void 0!=s&&void 0!=l&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:l})}}},o=function(t,e,o,a,i){function n(){jQuery.each(x,function(t,e){(e[0]==o||e[8]==o)&&(v=e[1],w=e[2],m=y),y+=1})}var r=punchgs.Power1.easeIn,s=punchgs.Power1.easeOut,l=punchgs.Power1.easeInOut,d=punchgs.Power2.easeIn,h=punchgs.Power2.easeOut,c=punchgs.Power2.easeInOut,f=(punchgs.Power3.easeIn,punchgs.Power3.easeOut),p=punchgs.Power3.easeInOut,u=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],g=[16,17,18,19,20,21,22,23,24,25,27],v=0,w=1,m=0,y=0,x=(new Array,[["boxslide",0,1,10,0,"box",!1,null,0,s,s,500,6],["boxfade",1,0,10,0,"box",!1,null,1,l,l,700,5],["slotslide-horizontal",2,0,0,200,"horizontal",!0,!1,2,c,c,700,3],["slotslide-vertical",3,0,0,200,"vertical",!0,!1,3,c,c,700,3],["curtain-1",4,3,0,0,"horizontal",!0,!0,4,s,s,300,5],["curtain-2",5,3,0,0,"horizontal",!0,!0,5,s,s,300,5],["curtain-3",6,3,25,0,"horizontal",!0,!0,6,s,s,300,5],["slotzoom-horizontal",7,0,0,400,"horizontal",!0,!0,7,s,s,300,7],["slotzoom-vertical",8,0,0,0,"vertical",!0,!0,8,h,h,500,8],["slotfade-horizontal",9,0,0,500,"horizontal",!0,null,9,h,h,500,25],["slotfade-vertical",10,0,0,500,"vertical",!0,null,10,h,h,500,25],["fade",11,0,1,300,"horizontal",!0,null,11,c,c,1e3,1],["slideleft",12,0,1,0,"horizontal",!0,!0,12,p,p,1e3,1],["slideup",13,0,1,0,"horizontal",!0,!0,13,p,p,1e3,1],["slidedown",14,0,1,0,"horizontal",!0,!0,14,p,p,1e3,1],["slideright",15,0,1,0,"horizontal",!0,!0,15,p,p,1e3,1],["slideoverleft",12,7,1,0,"horizontal",!0,!0,12,p,p,1e3,1],["slideoverup",13,7,1,0,"horizontal",!0,!0,13,p,p,1e3,1],["slideoverdown",14,7,1,0,"horizontal",!0,!0,14,p,p,1e3,1],["slideoverright",15,7,1,0,"horizontal",!0,!0,15,p,p,1e3,1],["slideremoveleft",12,8,1,0,"horizontal",!0,!0,12,p,p,1e3,1],["slideremoveup",13,8,1,0,"horizontal",!0,!0,13,p,p,1e3,1],["slideremovedown",14,8,1,0,"horizontal",!0,!0,14,p,p,1e3,1],["slideremoveright",15,8,1,0,"horizontal",!0,!0,15,p,p,1e3,1],["papercut",16,0,0,600,"",null,null,16,p,p,1e3,2],["3dcurtain-horizontal",17,0,20,100,"vertical",!1,!0,17,l,l,500,7],["3dcurtain-vertical",18,0,10,100,"horizontal",!1,!0,18,l,l,500,5],["cubic",19,0,20,600,"horizontal",!1,!0,19,p,p,500,1],["cube",19,0,20,600,"horizontal",!1,!0,20,p,p,500,1],["flyin",20,0,4,600,"vertical",!1,!0,21,f,p,500,1],["turnoff",21,0,1,500,"horizontal",!1,!0,22,p,p,500,1],["incube",22,0,20,200,"horizontal",!1,!0,23,c,c,500,1],["cubic-horizontal",23,0,20,500,"vertical",!1,!0,24,h,h,500,1],["cube-horizontal",23,0,20,500,"vertical",!1,!0,25,h,h,500,1],["incube-horizontal",24,0,20,500,"vertical",!1,!0,26,c,c,500,1],["turnoff-vertical",25,0,1,200,"horizontal",!1,!0,27,c,c,500,1],["fadefromright",12,1,1,0,"horizontal",!0,!0,28,c,c,1e3,1],["fadefromleft",15,1,1,0,"horizontal",!0,!0,29,c,c,1e3,1],["fadefromtop",14,1,1,0,"horizontal",!0,!0,30,c,c,1e3,1],["fadefrombottom",13,1,1,0,"horizontal",!0,!0,31,c,c,1e3,1],["fadetoleftfadefromright",12,2,1,0,"horizontal",!0,!0,32,c,c,1e3,1],["fadetorightfadefromleft",15,2,1,0,"horizontal",!0,!0,33,c,c,1e3,1],["fadetobottomfadefromtop",14,2,1,0,"horizontal",!0,!0,34,c,c,1e3,1],["fadetotopfadefrombottom",13,2,1,0,"horizontal",!0,!0,35,c,c,1e3,1],["parallaxtoright",12,3,1,0,"horizontal",!0,!0,36,c,d,1500,1],["parallaxtoleft",15,3,1,0,"horizontal",!0,!0,37,c,d,1500,1],["parallaxtotop",14,3,1,0,"horizontal",!0,!0,38,c,r,1500,1],["parallaxtobottom",13,3,1,0,"horizontal",!0,!0,39,c,r,1500,1],["scaledownfromright",12,4,1,0,"horizontal",!0,!0,40,c,d,1e3,1],["scaledownfromleft",15,4,1,0,"horizontal",!0,!0,41,c,d,1e3,1],["scaledownfromtop",14,4,1,0,"horizontal",!0,!0,42,c,d,1e3,1],["scaledownfrombottom",13,4,1,0,"horizontal",!0,!0,43,c,d,1e3,1],["zoomout",13,5,1,0,"horizontal",!0,!0,44,c,d,1e3,1],["zoomin",13,6,1,0,"horizontal",!0,!0,45,c,d,1e3,1],["notransition",26,0,1,0,"horizontal",!0,null,46,c,d,1e3,1]]);"slidehorizontal"==o&&(o="slideleft",1==i&&(o="slideright")),"slidevertical"==o&&(o="slideup",1==i&&(o="slidedown")),"slideoverhorizontal"==o&&(o="slideoverleft",1==i&&(o="slideoverright")),"slideoververtical"==o&&(o="slideoverup",1==i&&(o="slideoverdown")),"slideremovehorizontal"==o&&(o="slideremoveleft",1==i&&(o="slideremoveright")),"slideremovevertical"==o&&(o="slideremoveup",1==i&&(o="slideremovedown")),"parallaxhorizontal"==o&&(o="parallaxtoleft",1==i&&(o="parallaxtoright")),"parallaxvertical"==o&&(o="parallaxtotop",1==i&&(o="parallaxtobottom")),"random"==o&&(o=Math.round(Math.random()*x.length-1),o>x.length-1&&(o=x.length-1)),"random-static"==o&&(o=Math.round(Math.random()*u.length-1),o>u.length-1&&(o=u.length-1),o=u[o]),"random-premium"==o&&(o=Math.round(Math.random()*g.length-1),o>g.length-1&&(o=g.length-1),o=g[o]);var T=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];if(1==e.isJoomla&&void 0!=window.MooTools&&-1!=T.indexOf(o)){var z=Math.round(Math.random()*(g.length-2))+1;z>g.length-1&&(z=g.length-1),0==z&&(z=1),o=g[z]}n(),v>26&&(v=26),0>v&&(v=0);var b=new Object;return b.nexttrans=v,b.STA=x[m],b.specials=w,b},a=function(t,e){return void 0==e||jQuery.isNumeric(t)?t:void 0==t?t:t.split(",")[e]},i=function(t,i,n,r,s,l,d,h,c){var f=l.index(),p=s.index(),u=f>p?1:0;"arrow"==r.sc_indicator&&(0==f&&p==r.slideamount-1&&(u=1),f==r.slideamount-1&&0==p&&(u=0));var g=o(n,r,i,d,u),v=g.STA,w=g.specials,t=g.nexttrans;"on"==d.data("kenburns")&&(t=11);var m=s.data("nexttransid")||0,y=a(s.data("masterspeed"),m);y="default"===y?v[11]:"random"===y?Math.round(1e3*Math.random()+300):void 0!=y?parseInt(y,0):v[11],y=y>r.delay?r.delay:y,y+=v[4],r.slots=a(s.data("slotamount"),m),r.slots=void 0==r.slots||"default"==r.slots?v[12]:"random"==r.slots?Math.round(12*Math.random()+4):v[12],r.slots=r.slots<1?"boxslide"==i?Math.round(6*Math.random()+3):"flyin"==i?Math.round(4*Math.random()+1):r.slots:r.slots,r.slots=(4==t||5==t||6==t)&&r.slots<3?3:r.slots,r.slots=0!=v[3]?Math.min(r.slots,v[3]):r.slots,r.slots=9==t?r.width/20:10==t?r.height/20:r.slots,r.rotate=a(s.data("rotate"),m),r.rotate=void 0==r.rotate||"default"==r.rotate?0:999==r.rotate||"random"==r.rotate?Math.round(360*Math.random()):r.rotate,r.rotate=!jQuery.support.transition||r.ie||r.ie9?0:r.rotate,11!=t&&(null!=v[7]&&e(h,r,v[7],v[5]),null!=v[6]&&e(d,r,v[6],v[5])),c.add(punchgs.TweenLite.set(d,{autoAlpha:1}),0),c.add(punchgs.TweenLite.set(h,{autoAlpha:1}),0);var x=a(s.data("easein"),m),T=a(s.data("easeout"),m);if(x="default"===x?v[9]||punchgs.Power2.easeInOut:x||v[9]||punchgs.Power2.easeInOut,T="default"===T?v[10]||punchgs.Power2.easeInOut:T||v[10]||punchgs.Power2.easeInOut,0==t){var z=Math.ceil(r.height/r.sloth),b=0;d.find(".slotslide").each(function(t){var e=jQuery(this);b+=1,b==z&&(b=0),c.add(punchgs.TweenLite.from(e,y/600,{opacity:0,top:0-r.sloth,left:0-r.slotw,rotation:r.rotate,force3D:"auto",ease:x}),(15*t+30*b)/1500)})}if(1==t){var L,D=0;d.find(".slotslide").each(function(t){var e=jQuery(this),o=Math.random()*y+300,a=500*Math.random()+200;o+a>L&&(L=a+a,D=t),c.add(punchgs.TweenLite.from(e,o/1e3,{autoAlpha:0,force3D:"auto",rotation:r.rotate,ease:x}),a/1e3)})}if(2==t){var M=new punchgs.TimelineLite;h.find(".slotslide").each(function(){var t=jQuery(this);M.add(punchgs.TweenLite.to(t,y/1e3,{left:r.slotw,ease:x,force3D:"auto",rotation:0-r.rotate}),0),c.add(M,0)}),d.find(".slotslide").each(function(){var t=jQuery(this);M.add(punchgs.TweenLite.from(t,y/1e3,{left:0-r.slotw,ease:x,force3D:"auto",rotation:r.rotate}),0),c.add(M,0)})}if(3==t){var M=new punchgs.TimelineLite;h.find(".slotslide").each(function(){var t=jQuery(this);M.add(punchgs.TweenLite.to(t,y/1e3,{top:r.sloth,ease:x,rotation:r.rotate,force3D:"auto",transformPerspective:600}),0),c.add(M,0)}),d.find(".slotslide").each(function(){var t=jQuery(this);M.add(punchgs.TweenLite.from(t,y/1e3,{top:0-r.sloth,rotation:r.rotate,ease:T,force3D:"auto",transformPerspective:600}),0),c.add(M,0)})}if(4==t||5==t){setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var j=y/1e3,M=new punchgs.TimelineLite;h.find(".slotslide").each(function(e){var o=jQuery(this),a=e*j/r.slots;5==t&&(a=(r.slots-e-1)*j/r.slots/1.5),M.add(punchgs.TweenLite.to(o,3*j,{transformPerspective:600,force3D:"auto",top:0+r.height,opacity:.5,rotation:r.rotate,ease:x,delay:a}),0),c.add(M,0)}),d.find(".slotslide").each(function(e){var o=jQuery(this),a=e*j/r.slots;5==t&&(a=(r.slots-e-1)*j/r.slots/1.5),M.add(punchgs.TweenLite.from(o,3*j,{top:0-r.height,opacity:.5,rotation:r.rotate,force3D:"auto",ease:punchgs.eo,delay:a}),0),c.add(M,0)})}if(6==t){r.slots<2&&(r.slots=2),r.slots%2&&(r.slots=r.slots+1);var M=new punchgs.TimelineLite;setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100),h.find(".slotslide").each(function(t){var e=jQuery(this);if(t+1<r.slots/2)var o=90*(t+2);else var o=90*(2+r.slots-t);M.add(punchgs.TweenLite.to(e,(y+o)/1e3,{top:0+r.height,opacity:1,force3D:"auto",rotation:r.rotate,ease:x}),0),c.add(M,0)}),d.find(".slotslide").each(function(t){var e=jQuery(this);if(t+1<r.slots/2)var o=90*(t+2);else var o=90*(2+r.slots-t);M.add(punchgs.TweenLite.from(e,(y+o)/1e3,{top:0-r.height,opacity:1,force3D:"auto",rotation:r.rotate,ease:T}),0),c.add(M,0)})}if(7==t){y=2*y,y>r.delay&&(y=r.delay);var M=new punchgs.TimelineLite;setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100),h.find(".slotslide").each(function(){var t=jQuery(this).find("div");M.add(punchgs.TweenLite.to(t,y/1e3,{left:0-r.slotw/2+"px",top:0-r.height/2+"px",width:2*r.slotw+"px",height:2*r.height+"px",opacity:0,rotation:r.rotate,force3D:"auto",ease:x}),0),c.add(M,0)}),d.find(".slotslide").each(function(t){var e=jQuery(this).find("div");M.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-t*r.slotw+"px",ease:T,force3D:"auto",top:"0px",width:r.width,height:r.height,opacity:1,rotation:0,delay:.1}),0),c.add(M,0)})}if(8==t){y=3*y,y>r.delay&&(y=r.delay);var M=new punchgs.TimelineLite;h.find(".slotslide").each(function(){var t=jQuery(this).find("div");M.add(punchgs.TweenLite.to(t,y/1e3,{left:0-r.width/2+"px",top:0-r.sloth/2+"px",width:2*r.width+"px",height:2*r.sloth+"px",force3D:"auto",ease:x,opacity:0,rotation:r.rotate}),0),c.add(M,0)}),d.find(".slotslide").each(function(t){var e=jQuery(this).find("div");M.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:0,top:0,opacity:0,force3D:"auto"},{left:"0px",top:0-t*r.sloth+"px",width:d.find(".defaultimg").data("neww")+"px",height:d.find(".defaultimg").data("newh")+"px",opacity:1,ease:T,rotation:0}),0),c.add(M,0)})}if(9==t||10==t){var P=0;d.find(".slotslide").each(function(t){var e=jQuery(this);P++,c.add(punchgs.TweenLite.fromTo(e,y/1e3,{autoAlpha:0,force3D:"auto",transformPerspective:600},{autoAlpha:1,ease:x,delay:5*t/1e3}),0)})}if(11==t||26==t){var P=0;26==t&&(y=0),c.add(punchgs.TweenLite.fromTo(d,y/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:x}),0),c.add(punchgs.TweenLite.to(h,y/1e3,{autoAlpha:0,force3D:"auto",ease:x}),0),c.add(punchgs.TweenLite.set(d.find(".defaultimg"),{autoAlpha:1}),0),c.add(punchgs.TweenLite.set(h.find("defaultimg"),{autoAlpha:1}),0)}if(12==t||13==t||14==t||15==t){y=y,y>r.delay&&(y=r.delay),setTimeout(function(){punchgs.TweenLite.set(h.find(".defaultimg"),{autoAlpha:0})},100);var A=r.width,Q=r.height,O=d.find(".slotslide"),k=0,I=0,X=1,Y=1,S=1,C=y/1e3,V=C;("fullwidth"==r.sliderLayout||"fullscreen"==r.sliderLayout)&&(A=O.width(),Q=O.height()),12==t?k=A:15==t?k=0-A:13==t?I=Q:14==t&&(I=0-Q),1==w&&(X=0),2==w&&(X=0),3==w&&(C=y/1300),(4==w||5==w)&&(Y=.6),6==w&&(Y=1.4),(5==w||6==w)&&(S=1.4,X=0,A=0,Q=0,k=0,I=0),6==w&&(S=.6);7==w&&(A=0,Q=0);var Z=d.find(".slotslide"),H=h.find(".slotslide");if(c.add(punchgs.TweenLite.set(l,{zIndex:15}),0),c.add(punchgs.TweenLite.set(s,{zIndex:20}),0),8==w?(c.add(punchgs.TweenLite.set(l,{zIndex:20}),0),c.add(punchgs.TweenLite.set(s,{zIndex:15}),0),c.add(punchgs.TweenLite.set(Z,{left:0,top:0,scale:1,opacity:1,rotation:0,ease:x,force3D:"auto"}),0)):c.add(punchgs.TweenLite.from(Z,C,{left:k,top:I,scale:S,opacity:X,rotation:r.rotate,ease:x,force3D:"auto"}),0),(4==w||5==w)&&(A=0,Q=0),1!=w)switch(t){case 12:c.add(punchgs.TweenLite.to(H,V,{left:0-A+"px",force3D:"auto",scale:Y,opacity:X,rotation:r.rotate,ease:T}),0);break;case 15:c.add(punchgs.TweenLite.to(H,V,{left:A+"px",force3D:"auto",scale:Y,opacity:X,rotation:r.rotate,ease:T}),0);break;case 13:c.add(punchgs.TweenLite.to(H,V,{top:0-Q+"px",force3D:"auto",scale:Y,opacity:X,rotation:r.rotate,ease:T}),0);break;case 14:c.add(punchgs.TweenLite.to(H,V,{top:Q+"px",force3D:"auto",scale:Y,opacity:X,rotation:r.rotate,ease:T}),0)}}if(16==t){var M=new punchgs.TimelineLite;c.add(punchgs.TweenLite.set(l,{position:"absolute","z-index":20}),0),c.add(punchgs.TweenLite.set(s,{position:"absolute","z-index":15}),0),l.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'),l.find(".tp-half-one").clone(!0).appendTo(l).addClass("tp-half-two"),l.find(".tp-half-two").removeClass("tp-half-one");var A=r.width,Q=r.height;"on"==r.autoHeight&&(Q=n.height()),l.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+A+"px;height:"+Q+'px;"></div>'),l.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+A+"px;height:"+Q+'px;"></div>'),l.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"}),l.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'),c.add(punchgs.TweenLite.set(l.find(".tp-half-two"),{width:A,height:Q,overflow:"hidden",zIndex:15,position:"absolute",top:Q/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"}),0),c.add(punchgs.TweenLite.set(l.find(".tp-half-one"),{width:A,height:Q/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"}),0);var J=(l.find(".defaultimg"),Math.round(20*Math.random()-10)),N=Math.round(20*Math.random()-10),_=Math.round(20*Math.random()-10),q=.4*Math.random()-.2,B=.4*Math.random()-.2,E=1*Math.random()+1,F=1*Math.random()+1,G=.3*Math.random()+.3;c.add(punchgs.TweenLite.set(l.find(".tp-half-one"),{overflow:"hidden"}),0),c.add(punchgs.TweenLite.fromTo(l.find(".tp-half-one"),y/800,{width:A,height:Q/2,position:"absolute",top:"0px",left:"0px",force3D:"auto",transformOrigin:"center top"},{scale:E,rotation:J,y:0-Q-Q/4,autoAlpha:0,ease:x}),0),c.add(punchgs.TweenLite.fromTo(l.find(".tp-half-two"),y/800,{width:A,height:Q,overflow:"hidden",position:"absolute",top:Q/2,left:"0px",force3D:"auto",transformOrigin:"center bottom"},{scale:F,rotation:N,y:Q+Q/4,ease:x,autoAlpha:0,onComplete:function(){punchgs.TweenLite.set(l,{position:"absolute","z-index":15}),punchgs.TweenLite.set(s,{position:"absolute","z-index":20}),l.find(".tp-half-one").length>0&&(l.find(".tp-half-one .defaultimg").unwrap(),l.find(".tp-half-one .slotholder").unwrap()),l.find(".tp-half-two").remove()}}),0),M.add(punchgs.TweenLite.set(d.find(".defaultimg"),{autoAlpha:1}),0),null!=l.html()&&c.add(punchgs.TweenLite.fromTo(s,(y-200)/1e3,{scale:G,x:r.width/4*q,y:Q/4*B,rotation:_,force3D:"auto",transformOrigin:"center center",ease:T},{autoAlpha:1,scale:1,x:0,y:0,rotation:0}),0),c.add(M,0)}if(17==t&&d.find(".slotslide").each(function(t){var e=jQuery(this);c.add(punchgs.TweenLite.fromTo(e,y/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:x,delay:.06*t}),0)}),18==t&&d.find(".slotslide").each(function(t){var e=jQuery(this);c.add(punchgs.TweenLite.fromTo(e,y/500,{autoAlpha:0,rotationY:110,scale:.9,rotationX:10,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{autoAlpha:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:x,delay:.06*t}),0)}),19==t||22==t){var M=new punchgs.TimelineLite;c.add(punchgs.TweenLite.set(l,{zIndex:20}),0),c.add(punchgs.TweenLite.set(s,{zIndex:20}),0),setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var K=90,X=1,R="center center ";1==u&&(K=-90),19==t?(R=R+"-"+r.height/2,X=0):R+=r.height/2,punchgs.TweenLite.set(n,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600}),d.find(".slotslide").each(function(t){var e=jQuery(this);M.add(punchgs.TweenLite.fromTo(e,y/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",left:0,rotationY:r.rotate,z:10,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:R,rotationX:K},{left:0,rotationY:0,top:0,z:0,scale:1,force3D:"auto",rotationX:0,delay:50*t/1e3,ease:x}),0),M.add(punchgs.TweenLite.to(e,.1,{autoAlpha:1,delay:50*t/1e3}),0),c.add(M)}),h.find(".slotslide").each(function(t){var e=jQuery(this),o=-90;1==u&&(o=90),M.add(punchgs.TweenLite.fromTo(e,y/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",autoAlpha:1,rotationY:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:R,rotationX:0},{autoAlpha:1,rotationY:r.rotate,top:0,z:10,scale:1,rotationX:o,delay:50*t/1e3,force3D:"auto",ease:T}),0),c.add(M)}),c.add(punchgs.TweenLite.set(l,{zIndex:18}),0)}if(20==t){if(setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100),1==u)var U=-r.width,K=80,R="20% 70% -"+r.height/2;else var U=r.width,K=-80,R="80% 70% -"+r.height/2;d.find(".slotslide").each(function(t){var e=jQuery(this),o=50*t/1e3;c.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:U,rotationX:40,z:-600,opacity:X,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:R,transformStyle:"flat",rotationY:K},{left:0,rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:o,ease:x}),0)}),h.find(".slotslide").each(function(t){var e=jQuery(this),o=50*t/1e3;if(o=t>0?o+y/9e3:0,1!=u)var a=-r.width/2,i=30,n="20% 70% -"+r.height/2;else var a=r.width/2,i=-30,n="80% 70% -"+r.height/2;T=punchgs.Power2.easeInOut,c.add(punchgs.TweenLite.fromTo(e,y/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:n,transformStyle:"flat",rotationY:0},{opacity:1,rotationX:20,top:0,z:-600,left:a,force3D:"auto",rotationY:i,delay:o,ease:T}),0)})}if(21==t||25==t){setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var K=90,U=-r.width,W=-K;if(1==u)if(25==t){var R="center top 0";K=r.rotate}else{var R="left center 0";W=r.rotate}else if(U=r.width,K=-90,25==t){var R="center bottom 0";W=-K,K=r.rotate}else{var R="right center 0";W=r.rotate}d.find(".slotslide").each(function(){var t=jQuery(this),e=y/1.5/3;c.add(punchgs.TweenLite.fromTo(t,2*e/1e3,{left:0,transformStyle:"flat",rotationX:W,z:0,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:R,rotationY:K},{left:0,rotationX:0,top:0,z:0,autoAlpha:1,scale:1,rotationY:0,force3D:"auto",delay:e/1e3,ease:x}),0)}),1!=u?(U=-r.width,K=90,25==t?(R="center top 0",W=-K,K=r.rotate):(R="left center 0",W=r.rotate)):(U=r.width,K=-90,25==t?(R="center bottom 0",W=-K,K=r.rotate):(R="right center 0",W=r.rotate)),h.find(".slotslide").each(function(){var t=jQuery(this);c.add(punchgs.TweenLite.fromTo(t,y/1e3,{left:0,transformStyle:"flat",rotationX:0,z:0,autoAlpha:1,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:R,rotationY:0},{left:0,rotationX:W,top:0,z:0,autoAlpha:1,force3D:"auto",scale:1,rotationY:K,ease:T}),0)})}if(23==t||24==t){setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var K=-90,X=1,$=0;if(1==u&&(K=90),23==t){var R="center center -"+r.width/2;X=0}else var R="center center "+r.width/2;punchgs.TweenLite.set(n,{transformStyle:"preserve-3d",backfaceVisibility:"hidden",perspective:2500}),d.find(".slotslide").each(function(t){var e=jQuery(this);c.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:$,rotationX:r.rotate,force3D:"auto",opacity:X,top:0,scale:1,transformPerspective:1200,transformOrigin:R,rotationY:K},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:50*t/500,ease:x}),0)}),K=90,1==u&&(K=-90),h.find(".slotslide").each(function(e){var o=jQuery(this);c.add(punchgs.TweenLite.fromTo(o,y/1e3,{left:0,rotationX:0,top:0,z:0,scale:1,force3D:"auto",transformStyle:"flat",transformPerspective:1200,transformOrigin:R,rotationY:0},{left:$,rotationX:r.rotate,top:0,scale:1,rotationY:K,delay:50*e/500,ease:T}),0),23==t&&c.add(punchgs.TweenLite.fromTo(o,y/2e3,{autoAlpha:1},{autoAlpha:0,delay:50*e/500+y/3e3,ease:T}),0)})}return c}}(jQuery);

/********************************************
 * REVOLUTION 5.0 EXTENSION - LAYER ANIMATION
 * @version: 1.1.1 (07.09.2015)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(){function a(a,e,t,i,n,o,r){var d=a.find(e);d.css("borderWidth",o+"px"),d.css(t,0-o+"px"),d.css(i,"0px solid transparent"),d.css(n,r)}var e=jQuery.fn.revolution;jQuery.extend(!0,e,{animcompleted:function(a,t){var i=a.data("videotype"),n=a.data("autoplay"),o=a.data("autoplayonlyfirsttime");void 0!=i&&"none"!=i&&(1==n||"true"==n||"on"==n||"1sttime"==n||o?(e.playVideo(a,t),(o||"1sttime"==n)&&(a.data("autoplayonlyfirsttime",!1),a.data("autoplay","off"))):"no1sttime"==n&&a.data("autoplay","on"))},handleStaticLayers:function(a,e){var t=parseInt(a.data("startslide"),0),i=parseInt(a.data("endslide"),0);0>t&&(t=0),0>i&&(i=e.slideamount),0===t&&i===e.slideamount-1&&(i=e.slideamount+1),a.data("startslide",t),a.data("endslide",i)},animateTheCaptions:function(a,t,i,n){var o="carousel"===t.sliderType?0:t.width/2-t.gridwidth[t.curWinRange]*t.bw/2,r=0,d=a.data("index");t.layers=t.layers||new Object,t.layers[d]=t.layers[d]||a.find(".tp-caption"),t.layers["static"]=t.layers["static"]||t.c.find(".tp-static-layers").find(".tp-caption");var s=new Array;if(t.conh=t.c.height(),t.conw=t.c.width(),t.ulw=t.ul.width(),t.ulh=t.ul.height(),t.debugMode){a.addClass("indebugmode"),a.find(".helpgrid").remove(),t.c.find(".hglayerinfo").remove(),a.append('<div class="helpgrid" style="width:'+t.gridwidth[t.curWinRange]*t.bw+"px;height:"+t.gridheight[t.curWinRange]*t.bw+'px;"></div>');var l=a.find(".helpgrid");l.append('<div class="hginfo">Zoom:'+Math.round(100*t.bw)+"% &nbsp;&nbsp;&nbsp; Device Level:"+t.curWinRange+"&nbsp;&nbsp;&nbsp; Grid Preset:"+t.gridwidth[t.curWinRange]+"x"+t.gridheight[t.curWinRange]+"</div>"),t.c.append('<div class="hglayerinfo"></div>'),l.append('<div class="tlhg"></div>')}s&&jQuery.each(s,function(){var a=jQuery(this);punchgs.TweenLite.set(a.find(".tp-videoposter"),{autoAlpha:1}),punchgs.TweenLite.set(a.find("iframe"),{autoAlpha:0})}),t.layers[d]&&jQuery.each(t.layers[d],function(a,e){s.push(e)}),t.layers["static"]&&jQuery.each(t.layers["static"],function(a,e){s.push(e)}),s&&jQuery.each(s,function(a){e.animateSingleCaption(jQuery(this),t,o,r,a,i)});var p=jQuery("body").find("#"+t.c.attr("id")).find(".tp-bannertimer");p.data("opt",t),void 0!=n&&setTimeout(function(){n.resume()},30)},animateSingleCaption:function(i,o,m,f,w,y,b){var x=y,T=p(i,o,"in",!0),L=i.data("_pw")||i.closest(".tp-parallax-wrap"),W=i.data("_lw")||i.closest(".tp-loop-wrap"),C=i.data("_mw")||i.closest(".tp-mask-wrap"),j=i.data("responsive")||"on",R=i.data("responsive_offset")||"on",I=i.data("basealign")||"grid",k="grid"===I?o.width:o.ulw,_="grid"===I?o.height:o.ulh,z=jQuery("body").hasClass("rtl");if(i.data("_pw")||(i.data("_pw",L),i.data("_lw",W),i.data("_mw",C)),"fullscreen"==o.sliderLayout&&(f=_/2-o.gridheight[o.curWinRange]*o.bh/2),("on"==o.autoHeight||void 0!=o.minHeight&&o.minHeight>0)&&(f=o.conh/2-o.gridheight[o.curWinRange]*o.bh/2),0>f&&(f=0),o.debugMode){i.closest("li").find(".helpgrid").css({top:f+"px",left:m+"px"});var S=o.c.find(".hglayerinfo");i.on("hover, mouseenter",function(){var a="";i.data()&&jQuery.each(i.data(),function(e,t){"object"!=typeof t&&(a=a+'<span style="white-space:nowrap"><span style="color:#27ae60">'+e+":</span>"+t+"</span>&nbsp; &nbsp; ")}),S.html(a)})}var Q=l(i.data("visibility"),o)[o.curWinRange]||l(i.data("visibility"),o)||"on";if("off"==Q||k<o.hideCaptionAtLimit&&"on"==i.data("captionhidden")||k<o.hideAllCaptionAtLimit?i.addClass("tp-hidden-caption"):i.removeClass("tp-hidden-caption"),i.data("layertype","html"),0>m&&(m=0),void 0!=i.data("thumbimage")&&void 0==i.data("videoposter")&&i.data("videoposter",i.data("thumbimage")),i.hasClass("tp-videolayer")&&void 0!=i.data("videoposter")&&"on"==i.data("posterOnMobile")&&_ISM){var M=l(i.data("videowidth"),o)[o.curWinRange]||l(i.data("videowidth"),o)||"auto",O=l(i.data("videoheight"),o)[o.curWinRange]||l(i.data("videoheight"),o)||"auto";M=parseFloat(B),O=parseFloat(F),i.append('<div class="tp-videoposter" style="position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url('+i.data("videoposter")+'); background-size:cover;background-position:center center;"></div>'),i.css("100%"!=M?{minWidth:M+"px",minHeight:O+"px"}:{width:"100%",height:"100%"}),i.removeClass("tp-videolayer")}if(i.find("img").length>0){var H=i.find("img");i.data("layertype","image"),0==H.width()&&H.css({width:"auto"}),0==H.height()&&H.css({height:"auto"}),void 0==H.data("ww")&&H.width()>0&&H.data("ww",H.width()),void 0==H.data("hh")&&H.height()>0&&H.data("hh",H.height());var B=H.data("ww"),F=H.data("hh"),A="slide"==I?o.ulw:o.gridwidth[o.curWinRange],D="slide"==I?o.ulh:o.gridheight[o.curWinRange],B=l(H.data("ww"),o)[o.curWinRange]||l(H.data("ww"),o)||"auto",F=l(H.data("hh"),o)[o.curWinRange]||l(H.data("hh"),o)||"auto",P="full"===B||"full-proportional"===B,X="full"===F||"full-proportional"===F;if("full-proportional"===B){var Y=H.data("owidth"),V=H.data("oheight");V/D>Y/A?(B=A,F=V*(A/Y)):(F=D,B=Y*(D/V))}else B=P?A:parseFloat(B),F=X?D:parseFloat(F);void 0==B&&(B=0),void 0==F&&(F=0),"off"!==j?(H.width("grid"!=I&&P?B:B*o.bw),H.height("grid"!=I&&X?F:F*o.bh)):(H.width(B),H.height(F))}if("slide"===I&&(m=0,f=0),i.hasClass("tp-videolayer")||i.find("iframe").length>0||i.find("video").length>0){if(i.data("layertype","video"),e.manageVideoLayer(i,o,y,x),!y&&!x){{i.data("videotype")}e.resetVideo(i,o)}var N=i.data("aspectratio");void 0!=N&&N.split(":").length>1&&e.prepareCoveredVideo(N,o,i);var H=i.find("iframe")?i.find("iframe"):H=i.find("video"),Z=i.find("iframe")?!1:!0,$=i.hasClass("coverscreenvideo");H.css({display:"block"}),void 0==i.data("videowidth")&&(i.data("videowidth",H.width()),i.data("videoheight",H.height()));var G,B=l(i.data("videowidth"),o)[o.curWinRange]||l(i.data("videowidth"),o)||"auto",F=l(i.data("videoheight"),o)[o.curWinRange]||l(i.data("videoheight"),o)||"auto";B=parseFloat(B),F=parseFloat(F),void 0===i.data("cssobj")&&(G=c(i,0),i.data("cssobj",G));var U=g(i.data("cssobj"),o);if("auto"==U.lineHeight&&(U.lineHeight=U.fontSize+4),i.hasClass("fullscreenvideo")||$){m=0,f=0,i.data("x",0),i.data("y",0);var q=_;"on"==o.autoHeight&&(q=o.conh),i.css({width:k,height:q})}else punchgs.TweenLite.set(i,{paddingTop:Math.round(U.paddingTop*o.bh)+"px",paddingBottom:Math.round(U.paddingBottom*o.bh)+"px",paddingLeft:Math.round(U.paddingLeft*o.bw)+"px",paddingRight:Math.round(U.paddingRight*o.bw)+"px",marginTop:U.marginTop*o.bh+"px",marginBottom:U.marginBottom*o.bh+"px",marginLeft:U.marginLeft*o.bw+"px",marginRight:U.marginRight*o.bw+"px",borderTopWidth:Math.round(U.borderTopWidth*o.bh)+"px",borderBottomWidth:Math.round(U.borderBottomWidth*o.bh)+"px",borderLeftWidth:Math.round(U.borderLeftWidth*o.bw)+"px",borderRightWidth:Math.round(U.borderRightWidth*o.bw)+"px",width:B*o.bw+"px",height:F*o.bh+"px"});(0==Z&&!$||1!=i.data("forcecover")&&!i.hasClass("fullscreenvideo")&&!$)&&(H.width(B*o.bw),H.height(F*o.bh))}i.find(".tp-resizeme, .tp-resizeme *").each(function(){u(jQuery(this),o,"rekursive",j)}),i.hasClass("tp-resizeme")&&i.find("*").each(function(){u(jQuery(this),o,"rekursive",j)}),u(i,o,0,j);var E=i.outerHeight(),J=i.css("backgroundColor");a(i,".frontcorner","left","borderRight","borderTopColor",E,J),a(i,".frontcornertop","left","borderRight","borderBottomColor",E,J),a(i,".backcorner","right","borderLeft","borderBottomColor",E,J),a(i,".backcornertop","right","borderLeft","borderTopColor",E,J),"on"==o.fullScreenAlignForce&&(m=0,f=0);var K=i.data("arrobj");if(void 0===K){var K=new Object;K.voa=l(i.data("voffset"),o)[o.curWinRange]||l(i.data("voffset"),o)[0],K.hoa=l(i.data("hoffset"),o)[o.curWinRange]||l(i.data("hoffset"),o)[0],K.elx=l(i.data("x"),o)[o.curWinRange]||l(i.data("x"),o)[0],K.ely=l(i.data("y"),o)[o.curWinRange]||l(i.data("y"),o)[0]}var ae=0==K.voa.length?0:K.voa,ee=0==K.hoa.length?0:K.hoa,te=0==K.elx.length?0:K.elx,ie=0==K.ely.length?0:K.ely,ne=i.outerWidth(!0),oe=i.outerHeight(!0);0==ne&&0==oe&&(ne=o.ulw,oe=o.ulh);var re="off"!==R?parseInt(ae,0)*o.bw:parseInt(ae,0),de="off"!==R?parseInt(ee,0)*o.bw:parseInt(ee,0),se="grid"===I?o.gridwidth[o.curWinRange]*o.bw:k,le="grid"===I?o.gridheight[o.curWinRange]*o.bw:_;"on"==o.fullScreenAlignForce&&(se=o.ulw,le=o.ulh),te="center"===te||"middle"===te?se/2-ne/2+de:"left"===te?de:"right"===te?se-ne-de:"off"!==R?te*o.bw:te,ie="center"==ie||"middle"==ie?le/2-oe/2+re:"top"==ie?re:"bottom"==ie?le-oe-re:"off"!==R?ie*o.bw:ie,z&&(te+=ne);var pe=i.data("lasttriggerstate"),he=i.data("triggerstate"),ce=i.data("start")||100,ge=i.data("end"),me=b?0:"bytrigger"===ce||"sliderenter"===ce?0:parseFloat(ce)/1e3,ue=te+m,ve=ie+f,fe=i.css("z-Index");b||("reset"==pe&&"bytrigger"!=ce?(i.data("triggerstate","on"),i.data("animdirection","in"),he="on"):"reset"==pe&&"bytrigger"==ce&&(i.data("triggerstate","off"),i.data("animdirection","out"),he="off")),punchgs.TweenLite.set(L,{zIndex:fe,top:ve,left:ue,overwrite:"auto"}),0==T&&(x=!0),void 0==i.data("timeline")||x||(2!=T&&i.data("timeline").gotoAndPlay(0),x=!0),!y&&i.data("timeline_out")&&2!=T&&0!=T&&(i.data("timeline_out").kill(),i.data("outstarted",0)),b&&void 0!=i.data("timeline")&&(i.removeData("$anims"),i.data("timeline").pause(0),i.data("timeline").kill(),void 0!=i.data("newhoveranim")&&(i.data("newhoveranim").progress(0),i.data("newhoveranim").kill()),i.removeData("timeline"),punchgs.TweenLite.killTweensOf(i),i.unbind("hover"),i.removeClass("rs-hover-ready"),i.removeData("newhoveranim"));var we=i.data("timeline")?i.data("timeline").time():0,ye=void 0!==i.data("timeline")?i.data("timeline").progress():0,be=i.data("timeline")||new punchgs.TimelineLite({smoothChildTiming:!0});if(ye=jQuery.isNumeric(ye)?ye:0,be.pause(),1>ye&&1!=i.data("outstarted")||2==T||b){var xe=i;if(void 0!=i.data("mySplitText")&&i.data("mySplitText").revert(),void 0!=i.data("splitin")&&i.data("splitin").match(/chars|words|lines/g)||void 0!=i.data("splitout")&&i.data("splitout").match(/chars|words|lines/g)){var Te=i.find("a").length>0?i.find("a"):i;i.data("mySplitText",new punchgs.SplitText(Te,{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"})),i.addClass("splitted")}void 0!==i.data("mySplitText")&&i.data("splitin")&&i.data("splitin").match(/chars|words|lines/g)&&(xe=i.data("mySplitText")[i.data("splitin")]);var Le=new Object,We=void 0!=i.data("transform_in")?i.data("transform_in").match(/\(R\)/gi):!1;if(!i.data("$anims")||b||We){var Ce=t(),je=t(),Re=n(),Ie=void 0!==i.data("transform_hover")||void 0!==i.data("style_hover");je=d(je,i.data("transform_idle")),Ce=d(je,i.data("transform_in"),1==o.sdir),Ie&&(Re=d(Re,i.data("transform_hover")),Re=h(Re,i.data("style_hover")),i.data("hover",Re)),Ce.elemdelay=void 0==i.data("elementdelay")?0:i.data("elementdelay"),je.anim.ease=Ce.anim.ease=Ce.anim.ease||punchgs.Power1.easeInOut,Ie&&!i.hasClass("rs-hover-ready")&&(i.addClass("rs-hover-ready"),i.hover(function(a){var e=jQuery(a.currentTarget),t=e.data("hover"),i=e.data("timeline");i&&1==i.progress()&&(void 0===e.data("newhoveranim")||"none"===e.data("newhoveranim")?e.data("newhoveranim",punchgs.TweenLite.to(e,t.speed,t.anim)):(e.data("newhoveranim").progress(0),e.data("newhoveranim").play()))},function(a){var e=jQuery(a.currentTarget),t=e.data("timeline");t&&1==t.progress()&&void 0!=e.data("newhoveranim")&&e.data("newhoveranim").reverse()})),Le=new Object,Le.f=Ce,Le.r=je,i.data("$anims")}else Le=i.data("$anims");var ke=s(i.data("mask_in")),_e=new punchgs.TimelineLite;if(Le.f.anim.x=Le.f.anim.x*o.bw||r(Le.f.anim.x,o,ne,oe,ve,ue,"horizontal"),Le.f.anim.y=Le.f.anim.y*o.bw||r(Le.f.anim.y,o,ne,oe,ve,ue,"vertical"),2!=T||b){if(xe!=i){var ze=Le.r.anim.ease;be.add(punchgs.TweenLite.set(i,Le.r.anim)),Le.r=t(),Le.r.anim.ease=ze}if(Le.f.anim.visibility="hidden",_e.eventCallback("onStart",function(){punchgs.TweenLite.set(i,{visibility:"visible"}),i.data("iframes")&&i.find("iframe").each(function(){punchgs.TweenLite.set(jQuery(this),{autoAlpha:1})}),punchgs.TweenLite.set(L,{visibility:"visible"});var a={};a.layer=i,a.eventtype="enterstage",a.layertype=i.data("layertype"),a.layersettings=i.data(),o.c.trigger("revolution.layeraction",a)}),_e.eventCallback("onComplete",function(){var a={};a.layer=i,a.eventtype="enteredstage",a.layertype=i.data("layertype"),a.layersettings=i.data(),o.c.trigger("revolution.layeraction",a),e.animcompleted(i,o)}),"sliderenter"==ce&&o.overcontainer&&(me=.6),be.add(_e.staggerFromTo(xe,Le.f.speed,Le.f.anim,Le.r.anim,Le.f.elemdelay),me),ke){var Se=new Object;Se.ease=Le.r.anim.ease,Se.overflow=ke.anim.overflow="hidden",Se.x=Se.y=0,ke.anim.x=ke.anim.x*o.bw||r(ke.anim.x,o,ne,oe,ve,ue,"horizontal"),ke.anim.y=ke.anim.y*o.bw||r(ke.anim.y,o,ne,oe,ve,ue,"vertical"),be.add(punchgs.TweenLite.fromTo(C,Le.f.speed,ke.anim,Se,Ce.elemdelay),me)}else be.add(punchgs.TweenLite.set(C,{overflow:"visible"},Ce.elemdelay),0)}i.data("timeline",be),T=p(i,o,"in"),0!==ye&&2!=T||"bytrigger"===ge||b||"sliderleave"==ge||(void 0==ge||-1!=T&&2!=T||"bytriger"===ge?punchgs.TweenLite.delayedCall(999999,e.endMoveCaption,[i,C,L,o]):punchgs.TweenLite.delayedCall(parseInt(i.data("end"),0)/1e3,e.endMoveCaption,[i,C,L,o])),be=i.data("timeline"),"on"==i.data("loopanimation")&&v(W,o.bw),("sliderenter"!=ce||"sliderenter"==ce&&o.overcontainer)&&(-1==T||1==T||b||0==T&&1>ye&&i.hasClass("rev-static-visbile"))&&(1>ye&&ye>0||0==ye&&"bytrigger"!=ce&&"keep"!=pe||0==ye&&"bytrigger"!=ce&&"keep"==pe&&"on"==he||"bytrigger"==ce&&"keep"==pe&&"on"==he)&&be.resume(we)}"on"==i.data("loopanimation")&&punchgs.TweenLite.set(W,{minWidth:ne,minHeight:oe}),0==i.data("slidelink")||1!=i.data("slidelink")&&!i.hasClass("slidelink")?(punchgs.TweenLite.set(C,{width:"auto",height:"auto"}),i.data("slidelink",0)):(punchgs.TweenLite.set(C,{width:"100%",height:"100%"}),i.data("slidelink",1))},endMoveCaption:function(a,e,n,o){if(e=e||a.data("_mw"),n=n||a.data("_pw"),a.data("outstarted",1),a.data("timeline"))a.data("timeline").pause();else if(void 0===a.data("_pw"))return;var l=new punchgs.TimelineLite,p=new punchgs.TimelineLite,h=new punchgs.TimelineLite,c=d(t(),a.data("transform_in"),1==o.sdir),g=a.data("transform_out")?d(i(),a.data("transform_out"),1==o.sdir):d(i(),a.data("transform_in"),1==o.sdir),m=a.data("splitout")&&a.data("splitout").match(/words|chars|lines/g)?a.data("mySplitText")[a.data("splitout")]:a,u=void 0==a.data("endelementdelay")?0:a.data("endelementdelay"),v=a.innerWidth(),f=a.innerHeight(),w=n.position();a.data("transform_out")&&a.data("transform_out").match(/auto:auto/g)&&(c.speed=g.speed,c.anim.ease=g.anim.ease,g=c);var y=s(a.data("mask_out"));g.anim.x=g.anim.x*o.bw||r(g.anim.x,o,v,f,w.top,w.left,"horizontal"),g.anim.y=g.anim.y*o.bw||r(g.anim.y,o,v,f,w.top,w.left,"vertical"),p.eventCallback("onStart",function(){var e={};e.layer=a,e.eventtype="leavestage",e.layertype=a.data("layertype"),e.layersettings=a.data(),o.c.trigger("revolution.layeraction",e)}),p.eventCallback("onComplete",function(){punchgs.TweenLite.set(a,{visibility:"hidden"}),punchgs.TweenLite.set(n,{visibility:"hidden"});var e={};e.layer=a,e.eventtype="leftstage",e.layertype=a.data("layertype"),e.layersettings=a.data(),o.c.trigger("revolution.layeraction",e)}),l.add(p.staggerTo(m,g.speed,g.anim,u),0),y?(y.anim.ease=g.anim.ease,y.anim.overflow="hidden",y.anim.x=y.anim.x*o.bw||r(y.anim.x,o,v,f,w.top,w.left,"horizontal"),y.anim.y=y.anim.y*o.bw||r(y.anim.y,o,v,f,w.top,w.left,"vertical"),l.add(h.to(e,g.speed,y.anim,u),0)):l.add(h.set(e,{overflow:"visible",overwrite:"auto"},u),0),a.data("timeline_out",l)},removeTheCaptions:function(a,t){var i=a.data("index"),n=new Array;t.layers[i]&&jQuery.each(t.layers[i],function(a,e){n.push(e)}),t.layers["static"]&&jQuery.each(t.layers["static"],function(a,e){n.push(e)}),punchgs.TweenLite.killDelayedCallsTo(e.endMoveCaption),n&&jQuery.each(n,function(){var a=jQuery(this),i=p(a,t,"out");0!=i&&(f(a),clearTimeout(a.data("videoplaywait")),e.stopVideo&&e.stopVideo(a,t),e.endMoveCaption(a,null,null,t),t.playingvideos=[],t.lastplayedvideos=[])})}});var t=function(){var a=new Object;return a.anim=new Object,a.anim.x=0,a.anim.y=0,a.anim.z=0,a.anim.rotationX=0,a.anim.rotationY=0,a.anim.rotationZ=0,a.anim.scaleX=1,a.anim.scaleY=1,a.anim.skewX=0,a.anim.skewY=0,a.anim.opacity=1,a.anim.transformOrigin="50% 50%",a.anim.transformPerspective=600,a.anim.rotation=0,a.anim.ease=punchgs.Power3.easeOut,a.anim.force3D="auto",a.speed=.3,a.anim.autoAlpha=1,a.anim.visibility="visible",a.anim.overwrite="all",a},i=function(){var a=new Object;return a.anim=new Object,a.anim.x=0,a.anim.y=0,a.anim.z=0,a},n=function(){var a=new Object;return a.anim=new Object,a.speed=.2,a},o=function(a,e){if(jQuery.isNumeric(parseFloat(a)))return parseFloat(a);if(void 0===a||"inherit"===a)return e;if(a.split("{").length>1){var t=a.split(","),i=parseFloat(t[1].split("}")[0]);t=parseFloat(t[0].split("{")[1]),a=Math.random()*(i-t)+t}return a},r=function(a,e,t,i,n,o,r){return!jQuery.isNumeric(a)&&a.match(/%]/g)?(a=a.split("[")[1].split("]")[0],"horizontal"==r?a=(t+2)*parseInt(a,0)/100:"vertical"==r&&(a=(i+2)*parseInt(a,0)/100)):(a="layer_left"===a?0-t:"layer_right"===a?t:a,a="layer_top"===a?0-i:"layer_bottom"===a?i:a,a="left"===a||"stage_left"===a?0-t-o:"right"===a||"stage_right"===a?e.conw-o:"center"===a||"stage_center"===a?e.conw/2-t/2-o:a,a="top"===a||"stage_top"===a?0-i-n:"bottom"===a||"stage_bottom"===a?e.conh-n:"middle"===a||"stage_middle"===a?e.conh/2-i/2-n:a),a},d=function(a,e,t){var i=new Object;if(i=jQuery.extend(!0,{},i,a),void 0===e)return i;var n=e.split(";");return n&&jQuery.each(n,function(a,e){var n=e.split(":"),r=n[0],d=n[1];t&&void 0!=d&&d.length>0&&d.match(/\(R\)/)&&(d=d.replace("(R)",""),d="right"===d?"left":"left"===d?"right":"top"===d?"bottom":"bottom"===d?"top":d,"["===d[0]&&"-"===d[1]?d=d.replace("[-","["):"["===d[0]&&"-"!==d[1]?d=d.replace("[","[-"):"-"===d[0]?d=d.replace("-",""):d[0].match(/[1-9]/)&&(d="-"+d)),void 0!=d&&(d=d.replace(/\(R\)/,""),("rotationX"==r||"rX"==r)&&(i.anim.rotationX=o(d,i.anim.rotationX)+"deg"),("rotationY"==r||"rY"==r)&&(i.anim.rotationY=o(d,i.anim.rotationY)+"deg"),("rotationZ"==r||"rZ"==r)&&(i.anim.rotation=o(d,i.anim.rotationZ)+"deg"),("scaleX"==r||"sX"==r)&&(i.anim.scaleX=o(d,i.anim.scaleX)),("scaleY"==r||"sY"==r)&&(i.anim.scaleY=o(d,i.anim.scaleY)),("opacity"==r||"o"==r)&&(i.anim.opacity=o(d,i.anim.opacity)),("skewX"==r||"skX"==r)&&(i.anim.skewX=o(d,i.anim.skewX)),("skewY"==r||"skY"==r)&&(i.anim.skewY=o(d,i.anim.skewY)),"x"==r&&(i.anim.x=o(d,i.anim.x)),"y"==r&&(i.anim.y=o(d,i.anim.y)),"z"==r&&(i.anim.z=o(d,i.anim.z)),("transformOrigin"==r||"tO"==r)&&(i.anim.transformOrigin=d.toString()),("transformPerspective"==r||"tP"==r)&&(i.anim.transformPerspective=parseInt(d,0)),("speed"==r||"s"==r)&&(i.speed=parseFloat(d)/1e3),("ease"==r||"e"==r)&&(i.anim.ease=d))}),i},s=function(a){if(void 0===a)return!1;var e=new Object;e.anim=new Object;var t=a.split(";");return t&&jQuery.each(t,function(a,t){t=t.split(":");var i=t[0],n=t[1];"x"==i&&(e.anim.x=n),"y"==i&&(e.anim.y=n),"s"==i&&(e.speed=parseFloat(n)/1e3),("e"==i||"ease"==i)&&(e.anim.ease=n)}),e},l=function(a,e){if(void 0==a&&(a=0),!jQuery.isArray(a)&&"string"===jQuery.type(a)&&(a.split(",").length>1||a.split("[").length>1)){a=a.replace("[",""),a=a.replace("]","");var t=a.split(a.match(/'/g)?"',":",");a=new Array,t&&jQuery.each(t,function(e,t){t=t.replace("'",""),t=t.replace("'",""),a.push(t)})}else{var i=a;jQuery.isArray(a)||(a=new Array,a.push(i))}var i=a[a.length-1];if(a.length<e.rle)for(var n=1;n<=e.curWinRange;n++)a.push(i);return a},p=function(a,e,t,i){var n=-1;if(a.hasClass("tp-static-layer")){var o=parseInt(a.data("startslide"),0),r=parseInt(a.data("endslide"),0),d=e.c.find(".processing-revslide").index(),s=-1!=d?d:e.c.find(".active-revslide").index();s=-1==s?0:s,"in"===t?a.hasClass("rev-static-visbile")?n=r==s||o>s||s>r?2:0:s>=o&&r>=s||o==s||r==s?(i||(a.addClass("rev-static-visbile"),a.removeClass("rev-static-hidden")),n=1):n=0:a.hasClass("rev-static-visbile")?o>s||s>r?(n=2,i||(a.removeClass("rev-static-visbile"),a.addClass("rev-static-hidden"))):n=0:n=2}return n},h=function(a,e){if(void 0===e)return a;e=e.replace("c:","color:"),e=e.replace("bg:","background-color:"),e=e.replace("bw:","border-width:"),e=e.replace("bc:","border-color:"),e=e.replace("br:","borderRadius:"),e=e.replace("bs:","border-style:"),e=e.replace("td:","text-decoration:");var t=e.split(";");return t&&jQuery.each(t,function(e,t){var i=t.split(":");i[0].length>0&&(a.anim[i[0]]=i[1])}),a},c=function(a,e){var t,i=new Object,n=!1;if("rekursive"==e&&(t=a.closest(".tp-caption"),t&&a.css("fontSize")===t.css("fontSize")&&(n=!0)),i.basealign=a.data("basealign")||"grid",i.fontSize=n?void 0===t.data("fontsize")?parseInt(t.css("fontSize"),0)||0:t.data("fontsize"):void 0===a.data("fontsize")?parseInt(a.css("fontSize"),0)||0:a.data("fontsize"),i.fontWeight=n?void 0===t.data("fontweight")?parseInt(t.css("fontWeight"),0)||0:t.data("fontweight"):void 0===a.data("fontweight")?parseInt(a.css("fontWeight"),0)||0:a.data("fontweight"),i.whiteSpace=n?void 0===t.data("whitespace")?t.css("whitespace")||"normal":t.data("whitespace"):void 0===a.data("whitespace")?a.css("whitespace")||"normal":a.data("whitespace"),i.lineHeight=n?void 0===t.data("lineheight")?parseInt(t.css("lineHeight"),0)||0:t.data("lineheight"):void 0===a.data("lineheight")?parseInt(a.css("lineHeight"),0)||0:a.data("lineheight"),i.letterSpacing=n?void 0===t.data("letterspacing")?parseFloat(t.css("letterSpacing"),0)||0:t.data("letterspacing"):void 0===a.data("letterspacing")?parseFloat(a.css("letterSpacing"))||0:a.data("letterspacing"),i.paddingTop=void 0===a.data("paddingtop")?parseInt(a.css("paddingTop"),0)||0:a.data("paddingtop"),i.paddingBottom=void 0===a.data("paddingbottom")?parseInt(a.css("paddingBottom"),0)||0:a.data("paddingbottom"),i.paddingLeft=void 0===a.data("paddingleft")?parseInt(a.css("paddingLeft"),0)||0:a.data("paddingleft"),i.paddingRight=void 0===a.data("paddingright")?parseInt(a.css("paddingRight"),0)||0:a.data("paddingright"),i.marginTop=void 0===a.data("margintop")?parseInt(a.css("marginTop"),0)||0:a.data("margintop"),i.marginBottom=void 0===a.data("marginbottom")?parseInt(a.css("marginBottom"),0)||0:a.data("marginbottom"),i.marginLeft=void 0===a.data("marginleft")?parseInt(a.css("marginLeft"),0)||0:a.data("marginleft"),i.marginRight=void 0===a.data("marginright")?parseInt(a.css("marginRight"),0)||0:a.data("marginright"),i.borderTopWidth=void 0===a.data("bordertopwidth")?parseInt(a.css("borderTopWidth"),0)||0:a.data("bordertopwidth"),i.borderBottomWidth=void 0===a.data("borderbottomwidth")?parseInt(a.css("borderBottomWidth"),0)||0:a.data("borderbottomwidth"),i.borderLeftWidth=void 0===a.data("borderleftwidth")?parseInt(a.css("borderLeftWidth"),0)||0:a.data("borderleftwidth"),i.borderRightWidth=void 0===a.data("borderrightwidth")?parseInt(a.css("borderRightWidth"),0)||0:a.data("borderrightwidth"),"rekursive"!=e){if(i.color=void 0===a.data("color")?"nopredefinedcolor":a.data("color"),i.whiteSpace=n?void 0===t.data("whitespace")?t.css("whiteSpace")||"nowrap":t.data("whitespace"):void 0===a.data("whitespace")?a.css("whiteSpace")||"nowrap":a.data("whitespace"),i.minWidth=void 0===a.data("width")?parseInt(a.css("minWidth"),0)||0:a.data("width"),i.minHeight=void 0===a.data("height")?parseInt(a.css("minHeight"),0)||0:a.data("height"),void 0!=a.data("videowidth")&&void 0!=a.data("videoheight")){var o=a.data("videowidth"),r=a.data("videoheight");o="100%"===o?"none":o,r="100%"===r?"none":r,a.data("width",o),a.data("height",r)}i.maxWidth=void 0===a.data("width")?parseInt(a.css("maxWidth"),0)||"none":a.data("width"),i.maxHeight=void 0===a.data("height")?parseInt(a.css("maxHeight"),0)||"none":a.data("height"),i.wan=void 0===a.data("wan")?parseInt(a.css("-webkit-transition"),0)||"none":a.data("wan"),i.moan=void 0===a.data("moan")?parseInt(a.css("-moz-animation-transition"),0)||"none":a.data("moan"),i.man=void 0===a.data("man")?parseInt(a.css("-ms-animation-transition"),0)||"none":a.data("man"),i.ani=void 0===a.data("ani")?parseInt(a.css("transition"),0)||"none":a.data("ani")}return i.styleProps=a.css(["background-color","border-top-color","border-bottom-color","border-right-color","border-left-color","border-top-style","border-bottom-style","border-left-style","border-right-style","border-left-width","border-right-width","border-bottom-width","border-top-width","color","text-decoration","font-style","border-radius"]),i},g=function(a,e){var t=new Object;return a&&jQuery.each(a,function(i,n){t[i]=l(n,e)[e.curWinRange]||a[i]}),t},m=function(a,e,t,i){return a=jQuery.isNumeric(a)?a*e+"px":a,a="full"===a?i:"auto"===a||"none"===a?t:a},u=function(a,e,t,i){var n;void 0===a.data("cssobj")?(n=c(a,t),a.data("cssobj",n)):n=a.data("cssobj");var o=g(n,e),r=e.bw,d=e.bh;if("off"===i&&(r=1,d=1),"auto"==o.lineHeight&&(o.lineHeight=o.fontSize+4),!a.hasClass("tp-splitted")){a.css("-webkit-transition","none"),a.css("-moz-transition","none"),a.css("-ms-transition","none"),a.css("transition","none");var s=void 0!==a.data("transform_hover")||void 0!==a.data("style_hover");if(s&&punchgs.TweenLite.set(a,o.styleProps),punchgs.TweenLite.set(a,{fontSize:Math.round(o.fontSize*r)+"px",fontWeight:o.fontWeight,letterSpacing:Math.floor(o.letterSpacing*r)+"px",paddingTop:Math.round(o.paddingTop*d)+"px",paddingBottom:Math.round(o.paddingBottom*d)+"px",paddingLeft:Math.round(o.paddingLeft*r)+"px",paddingRight:Math.round(o.paddingRight*r)+"px",marginTop:o.marginTop*d+"px",marginBottom:o.marginBottom*d+"px",marginLeft:o.marginLeft*r+"px",marginRight:o.marginRight*r+"px",borderTopWidth:Math.round(o.borderTopWidth*d)+"px",borderBottomWidth:Math.round(o.borderBottomWidth*d)+"px",borderLeftWidth:Math.round(o.borderLeftWidth*r)+"px",borderRightWidth:Math.round(o.borderRightWidth*r)+"px",lineHeight:Math.round(o.lineHeight*d)+"px",overwrite:"auto"}),"rekursive"!=t){var l="slide"==o.basealign?e.ulw:e.gridwidth[e.curWinRange],p="slide"==o.basealign?e.ulh:e.gridheight[e.curWinRange],h=m(o.maxWidth,r,"none",l),u=m(o.maxHeight,d,"none",p),v=m(o.minWidth,r,"0px",l),f=m(o.minHeight,d,"0px",p);punchgs.TweenLite.set(a,{maxWidth:h,maxHeight:u,minWidth:v,minHeight:f,whiteSpace:o.whiteSpace,overwrite:"auto"}),"nopredefinedcolor"!=o.color&&punchgs.TweenLite.set(a,{color:o.color,overwrite:"auto"})}setTimeout(function(){a.css("-webkit-transition",a.data("wan")),a.css("-moz-transition",a.data("moan")),a.css("-ms-transition",a.data("man")),a.css("transition",a.data("ani"))},30)}},v=function(a,e){if(a.hasClass("rs-pendulum")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var t=void 0==a.data("startdeg")?-20:a.data("startdeg"),i=void 0==a.data("enddeg")?20:a.data("enddeg"),n=void 0==a.data("speed")?2:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("ease");t*=e,i*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:t,transformOrigin:o},{rotation:i,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:i,transformOrigin:o},{rotation:t,ease:r,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-rotate")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var t=void 0==a.data("startdeg")?0:a.data("startdeg"),i=void 0==a.data("enddeg")?360:a.data("enddeg");n=void 0==a.data("speed")?2:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing"),t*=e,i*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:t,transformOrigin:o},{rotation:i,ease:r,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-slideloop")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var d=void 0==a.data("xs")?0:a.data("xs"),s=void 0==a.data("ys")?0:a.data("ys"),l=void 0==a.data("xe")?0:a.data("xe"),p=void 0==a.data("ye")?0:a.data("ye"),n=void 0==a.data("speed")?2:a.data("speed"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing");d*=e,s*=e,l*=e,p*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",x:d,y:s},{x:l,y:p,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",x:l,y:p},{x:d,y:s,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-pulse")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var h=void 0==a.data("zoomstart")?0:a.data("zoomstart"),c=void 0==a.data("zoomend")?0:a.data("zoomend"),n=void 0==a.data("speed")?2:a.data("speed"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing");a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",scale:h},{scale:c,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",scale:c},{scale:h,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-wave")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var g=void 0==a.data("angle")?10:parseInt(a.data("angle"),0),m=void 0==a.data("radius")?10:parseInt(a.data("radius"),0),n=void 0==a.data("speed")?-20:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),u=o.split(" "),v=new Object;u.length>=1?(v.x=u[0],v.y=u[1]):(v.x="50%",v.y="50%"),g*=e,m*=e;var f=0-a.height()/2+m*(-1+parseInt(v.y,0)/100),w=a.width()*(-.5+parseInt(v.x,0)/100),y={a:0,ang:g,element:a,unit:m,xoffset:w,yoffset:f};a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(y,n,{a:360},{a:0,force3D:"auto",ease:punchgs.Linear.easeNone,onUpdate:function(){var a=y.a*(Math.PI/180);punchgs.TweenLite.to(y.element,.1,{force3D:"auto",x:y.xoffset+Math.cos(a)*y.unit,y:y.yoffset+y.unit*(1-Math.sin(a))})},onComplete:function(){a.data("loop-timeline").restart()}}))}},f=function(a){a.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function(){var a=jQuery(this);void 0!=a.data("loop-timeline")&&(a.data("loop-timeline").pause(),a.data("loop-timeline",null))})}}(jQuery);



/********************************************
 * REVOLUTION 5.0 EXTENSION - NAVIGATION
 * @version: 1.0.2 (18.08.2015)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(){var t=jQuery.fn.revolution,e=t.is_mobile();jQuery.extend(!0,t,{hideUnHideNav:function(t){var e=t.c.width(),i=t.navigation.arrows,a=t.navigation.bullets,n=t.navigation.thumbnails,s=t.navigation.tabs;h(i)&&y(t.c.find(".tparrows"),i.hide_under,e,i.hide_over),h(a)&&y(t.c.find(".tp-bullets"),a.hide_under,e,a.hide_over),h(n)&&y(t.c.parent().find(".tp-thumbs"),n.hide_under,e,n.hide_over),h(s)&&y(t.c.parent().find(".tp-tabs"),s.hide_under,e,s.hide_over),x(t)},resizeThumbsTabs:function(t){if(t.navigation&&t.navigation.tabs.enable||t.navigation&&t.navigation.thumbnails.enable){var e=(jQuery(window).width()-480)/500,i=new punchgs.TimelineLite,n=t.navigation.tabs,s=t.navigation.thumbnails;i.pause(),e=e>1?1:0>e?0:e,h(n)&&n.width>n.min_width&&a(e,i,t.c,n,t.slideamount,"tab"),h(s)&&s.width>s.min_width&&a(e,i,t.c,s,t.slideamount,"thumb"),i.play(),x(t)}return!0},manageNavigation:function(e){var a=t.getHorizontalOffset(e.c.parent(),"left"),n=t.getHorizontalOffset(e.c.parent(),"right");h(e.navigation.bullets)&&("fullscreen"!=e.sliderLayout&&"fullwidth"!=e.sliderLayout&&(e.navigation.bullets.h_offset_old=void 0===e.navigation.bullets.h_offset_old?e.navigation.bullets.h_offset:e.navigation.bullets.h_offset_old,e.navigation.bullets.h_offset="center"===e.navigation.bullets.h_align?e.navigation.bullets.h_offset_old+a/2-n/2:e.navigation.bullets.h_offset_old+a-n),m(e.c.find(".tp-bullets"),e.navigation.bullets)),h(e.navigation.thumbnails)&&m(e.c.parent().find(".tp-thumbs"),e.navigation.thumbnails),h(e.navigation.tabs)&&m(e.c.parent().find(".tp-tabs"),e.navigation.tabs),h(e.navigation.arrows)&&("fullscreen"!=e.sliderLayout&&"fullwidth"!=e.sliderLayout&&(e.navigation.arrows.left.h_offset_old=void 0===e.navigation.arrows.left.h_offset_old?e.navigation.arrows.left.h_offset:e.navigation.arrows.left.h_offset_old,e.navigation.arrows.left.h_offset="right"===e.navigation.arrows.left.h_align?e.navigation.arrows.left.h_offset_old+n:e.navigation.arrows.left.h_offset_old+a,e.navigation.arrows.right.h_offset_old=void 0===e.navigation.arrows.right.h_offset_old?e.navigation.arrows.right.h_offset:e.navigation.arrows.right.h_offset_old,e.navigation.arrows.right.h_offset="right"===e.navigation.arrows.right.h_align?e.navigation.arrows.right.h_offset_old+n:e.navigation.arrows.right.h_offset_old+a),m(e.c.find(".tp-leftarrow.tparrows"),e.navigation.arrows.left),m(e.c.find(".tp-rightarrow.tparrows"),e.navigation.arrows.right)),h(e.navigation.thumbnails)&&i(e.c.parent().find(".tp-thumbs"),e.navigation.thumbnails),h(e.navigation.tabs)&&i(e.c.parent().find(".tp-tabs"),e.navigation.tabs)},createNavigation:function(t,a){var n=t.parent(),o=a.navigation.arrows,p=a.navigation.bullets,g=a.navigation.thumbnails,v=a.navigation.tabs,m=h(o),w=h(p),x=h(g),y=h(v);s(t,a),r(t,a),m&&f(t,o,a),a.li.each(function(){var e=jQuery(this);w&&b(t,p,e,a),x&&_(t,g,e,"tp-thumb",a),y&&_(t,v,e,"tp-tab",a)}),t.bind("revolution.slide.onafterswap revolution.nextslide.waiting",function(){var e=0==t.find(".next-revslide").length?t.find(".active-revslide").data("index"):t.find(".next-revslide").data("index");t.find(".tp-bullet").each(function(){var t=jQuery(this);t.data("liref")===e?t.addClass("selected"):t.removeClass("selected")}),n.find(".tp-thumb, .tp-tab").each(function(){var t=jQuery(this);t.data("liref")===e?(t.addClass("selected"),t.hasClass("tp-tab")?i(n.find(".tp-tabs"),v):i(n.find(".tp-thumbs"),g)):t.removeClass("selected")});var s=0,r=!1;a.thumbs&&jQuery.each(a.thumbs,function(t,i){s=r===!1?t:s,r=i.id===e||t===e?!0:r});var d=s>0?s-1:a.slideamount-1,l=s+1==a.slideamount?0:s+1;if(o.enable===!0){var h=o.tmp;jQuery.each(a.thumbs[d].params,function(t,e){h=h.replace(e.from,e.to)}),o.left.j.html(h),h=o.tmp,jQuery.each(a.thumbs[l].params,function(t,e){h=h.replace(e.from,e.to)}),o.right.j.html(h),punchgs.TweenLite.set(o.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+a.thumbs[d].src+")"}),punchgs.TweenLite.set(o.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+a.thumbs[l].src+")"})}}),l(o),l(p),l(g),l(v),n.on("mouseenter mousemove",function(){n.hasClass("tp-mouseover")||(n.addClass("tp-mouseover"),punchgs.TweenLite.killDelayedCallsTo(c),m&&o.hide_onleave&&c(n.find(".tparrows"),o,"show"),w&&p.hide_onleave&&c(n.find(".tp-bullets"),p,"show"),x&&g.hide_onleave&&c(n.find(".tp-thumbs"),g,"show"),y&&v.hide_onleave&&c(n.find(".tp-tabs"),v,"show"),e&&(n.removeClass("tp-mouseover"),u(t,a)))}),n.on("mouseleave",function(){n.removeClass("tp-mouseover"),u(t,a)}),m&&o.hide_onleave&&c(n.find(".tparrows"),o,"hide",0),w&&p.hide_onleave&&c(n.find(".tp-bullets"),p,"hide",0),x&&g.hide_onleave&&c(n.find(".tp-thumbs"),g,"hide",0),y&&v.hide_onleave&&c(n.find(".tp-tabs"),v,"hide",0),x&&d(n.find(".tp-thumbs"),a),y&&d(n.find(".tp-tabs"),a),"carousel"===a.sliderType&&d(t,a,!0),"on"==a.navigation.touch.touchenabled&&d(t,a,"swipebased")}});var i=function(t,e){var i=(t.hasClass("tp-thumbs")?".tp-thumbs":".tp-tabs",t.hasClass("tp-thumbs")?".tp-thumb-mask":".tp-tab-mask"),a=t.hasClass("tp-thumbs")?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",n=t.hasClass("tp-thumbs")?".tp-thumb":".tp-tab",s=t.find(i),r=s.find(a),o=e.direction,d="vertical"===o?s.find(n).first().outerHeight(!0)+e.space:s.find(n).first().outerWidth(!0)+e.space,l="vertical"===o?s.height():s.width(),h=parseInt(s.find(n+".selected").data("liindex"),0),p=l/d,u="vertical"===o?s.height():s.width(),c=0-h*d,f="vertical"===o?r.height():r.width(),g=0-(f-u)>c?0-(f-u):g>0?0:c,v=r.data("offset");p>2&&(g=0>=c-(v+d)?0-d>c-(v+d)?v:g+d:g,g=d>c-d+v+l&&c+(Math.round(p)-2)*d<v?c+(Math.round(p)-2)*d:g),g=0-(f-u)>g?0-(f-u):g>0?0:g,"vertical"!==o&&s.width()>=r.width()&&(g=0),"vertical"===o&&s.height()>=r.height()&&(g=0),t.hasClass("dragged")||("vertical"===o?r.data("tmmove",punchgs.TweenLite.to(r,.5,{top:g+"px",ease:punchgs.Power3.easeInOut})):r.data("tmmove",punchgs.TweenLite.to(r,.5,{left:g+"px",ease:punchgs.Power3.easeInOut})),r.data("offset",g))},a=function(t,e,i,a,n,s){var r=i.parent().find(".tp-"+s+"s"),o=r.find(".tp-"+s+"s-inner-wrapper"),d=r.find(".tp-"+s+"-mask"),l=a.width*t<a.min_width?a.min_width:Math.round(a.width*t),h=Math.round(l/a.width*a.height),p="vertical"===a.direction?l:l*n+a.space*(n-1),u="vertical"===a.direction?h*n+a.space*(n-1):h,c="vertical"===a.direction?{width:l+"px"}:{height:h+"px"};e.add(punchgs.TweenLite.set(r,c)),e.add(punchgs.TweenLite.set(o,{width:p+"px",height:u+"px"})),e.add(punchgs.TweenLite.set(d,{width:p+"px",height:u+"px"}));var f=o.find(".tp-"+s);return f&&jQuery.each(f,function(t,i){"vertical"===a.direction?e.add(punchgs.TweenLite.set(i,{top:t*(h+parseInt(void 0===a.space?0:a.space,0)),width:l+"px",height:h+"px"})):"horizontal"===a.direction&&e.add(punchgs.TweenLite.set(i,{left:t*(l+parseInt(void 0===a.space?0:a.space,0)),width:l+"px",height:h+"px"}))}),e},n=function(t){var e=0,i=0,a=0,n=0,s=1,r=1,o=1;return"detail"in t&&(i=t.detail),"wheelDelta"in t&&(i=-t.wheelDelta/120),"wheelDeltaY"in t&&(i=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(e=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=i,i=0),a=e*s,n=i*s,"deltaY"in t&&(n=t.deltaY),"deltaX"in t&&(a=t.deltaX),(a||n)&&t.deltaMode&&(1==t.deltaMode?(a*=r,n*=r):(a*=o,n*=o)),a&&!e&&(e=1>a?-1:1),n&&!i&&(i=1>n?-1:1),n=navigator.userAgent.match(/mozilla/i)?10*n:n,(n>300||-300>n)&&(n/=10),{spinX:e,spinY:i,pixelX:a,pixelY:n}},s=function(e,i){"on"===i.navigation.keyboardNavigation&&jQuery(document).keydown(function(a){("horizontal"==i.navigation.keyboard_direction&&39==a.keyCode||"vertical"==i.navigation.keyboard_direction&&40==a.keyCode)&&(i.sc_indicator="arrow",t.callingNewSlide(i,e,1)),("horizontal"==i.navigation.keyboard_direction&&37==a.keyCode||"vertical"==i.navigation.keyboard_direction&&38==a.keyCode)&&(i.sc_indicator="arrow",t.callingNewSlide(i,e,-1))})},r=function(e,i){if("on"===i.navigation.mouseScrollNavigation){var a=navigator.userAgent.match(/mozilla/i)?-29:-49,s=navigator.userAgent.match(/mozilla/i)?29:49;e.on("mousewheel DOMMouseScroll",function(r){var o=n(r.originalEvent),d=e.find(".tp-revslider-slidesli.active-revslide").index(),l=e.find(".tp-revslider-slidesli.processing-revslide").index(),h=-1!=d&&0==d||-1!=l&&0==l?!0:!1,p=-1!=d&&d==i.slideamount-1||1!=l&&l==i.slideamount-1?!0:!1;if(-1==l){if(o.pixelY<a){if(!h)return i.sc_indicator="arrow",t.callingNewSlide(i,e,-1),!1}else if(o.pixelY>s&&!p)return i.sc_indicator="arrow",t.callingNewSlide(i,e,1),!1}else if(!p)return!1;r.preventDefault()})}},o=function(t,i,a){return t=e?jQuery(a.target).closest("."+t).length||jQuery(a.srcElement).closest("."+t).length:jQuery(a.toElement).closest("."+t).length||jQuery(a.originalTarget).closest("."+t).length,t===!0||1===t?1:0},d=function(i,a,n){i.data("opt",a);var s=a.carousel;jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"),s.Limit="endless";var r=(e||"Firefox"===t.get_browser(),i),d="vertical"===a.navigation.thumbnails.direction||"vertical"===a.navigation.tabs.direction?"none":"vertical",l=a.navigation.touch.swipe_direction||"horizontal";d="swipebased"==n&&"vertical"==l?"none":n?"vertical":d,jQuery.fn.swipetp||(jQuery.fn.swipetp=jQuery.fn.swipe),jQuery.fn.swipetp.defaults&&jQuery.fn.swipetp.defaults.excludedElements||(jQuery.fn.swipetp.defaults||(jQuery.fn.swipetp.defaults=new Object),jQuery.fn.swipetp.defaults.excludedElements="label, button, input, select, textarea, a, .noSwipe"),r.swipetp({allowPageScroll:d,triggerOnTouchLeave:!0,excludeElements:jQuery.fn.swipetp.defaults.excludedElements,swipeStatus:function(e,n,r,d){var h=o("rev_slider_wrapper",i,e),p=o("tp-thumbs",i,e),u=o("tp-tabs",i,e),c=jQuery(this).attr("class"),f=c.match(/tp-tabs|tp-thumb/gi)?!0:!1;if("carousel"===a.sliderType&&(("move"===n||"end"===n||"cancel"==n)&&a.dragStartedOverSlider&&!a.dragStartedOverThumbs&&!a.dragStartedOverTabs||"start"===n&&h>0&&0===p&&0===u))switch(a.dragStartedOverSlider=!0,d=r&&r.match(/left|up/g)?Math.round(-1*d):d=Math.round(1*d),n){case"start":void 0!==s.positionanim&&(s.positionanim.kill(),s.slide_globaloffset="off"===s.infinity?s.slide_offset:t.simp(s.slide_offset,s.maxwidth)),s.overpull="none",s.wrap.addClass("dragged");break;case"move":if(s.slide_offset="off"===s.infinity?s.slide_globaloffset+d:t.simp(s.slide_globaloffset+d,s.maxwidth),"off"===s.infinity){var g="center"===s.horizontal_align?(s.wrapwidth/2-s.slide_width/2-s.slide_offset)/s.slide_width:(0-s.slide_offset)/s.slide_width;"none"!==s.overpull&&0!==s.overpull||!(0>g||g>a.slideamount-1)?g>=0&&g<=a.slideamount-1&&(g>=0&&d>s.overpull||g<=a.slideamount-1&&d<s.overpull)&&(s.overpull=0):s.overpull=d,s.slide_offset=0>g?s.slide_offset+(s.overpull-d)/1.1+Math.sqrt(Math.abs((s.overpull-d)/1.1)):g>a.slideamount-1?s.slide_offset+(s.overpull-d)/1.1-Math.sqrt(Math.abs((s.overpull-d)/1.1)):s.slide_offset}t.organiseCarousel(a,r,!0,!0);break;case"end":case"cancel":s.slide_globaloffset=s.slide_offset,s.wrap.removeClass("dragged"),t.carouselToEvalPosition(a,r),a.dragStartedOverSlider=!1,a.dragStartedOverThumbs=!1,a.dragStartedOverTabs=!1}else{if(("move"!==n&&"end"!==n&&"cancel"!=n||a.dragStartedOverSlider||!a.dragStartedOverThumbs&&!a.dragStartedOverTabs)&&!("start"===n&&h>0&&(p>0||u>0))){if("end"==n&&!f){if(a.sc_indicator="arrow","horizontal"==l&&"left"==r||"vertical"==l&&"up"==r)return t.callingNewSlide(a,a.c,1),!1;if("horizontal"==l&&"right"==r||"vertical"==l&&"down"==r)return t.callingNewSlide(a,a.c,-1),!1}return a.dragStartedOverSlider=!1,a.dragStartedOverThumbs=!1,a.dragStartedOverTabs=!1,!0}p>0&&(a.dragStartedOverThumbs=!0),u>0&&(a.dragStartedOverTabs=!0);var v=a.dragStartedOverThumbs?".tp-thumbs":".tp-tabs",m=a.dragStartedOverThumbs?".tp-thumb-mask":".tp-tab-mask",b=a.dragStartedOverThumbs?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",w=a.dragStartedOverThumbs?".tp-thumb":".tp-tab",_=a.dragStartedOverThumbs?a.navigation.thumbnails:a.navigation.tabs;d=r&&r.match(/left|up/g)?Math.round(-1*d):d=Math.round(1*d);var x=i.parent().find(m),y=x.find(b),T=_.direction,L="vertical"===T?y.height():y.width(),j="vertical"===T?x.height():x.width(),C="vertical"===T?x.find(w).first().outerHeight(!0)+_.space:x.find(w).first().outerWidth(!0)+_.space,S=void 0===y.data("offset")?0:parseInt(y.data("offset"),0),k=0;switch(n){case"start":i.parent().find(v).addClass("dragged"),S="vertical"===T?y.position().top:y.position().left,y.data("offset",S),y.data("tmmove")&&y.data("tmmove").pause();break;case"move":if(j>=L)return!1;k=S+d,k=k>0?"horizontal"===T?k-y.width()*(k/y.width()*k/y.width()):k-y.height()*(k/y.height()*k/y.height()):k;var O="vertical"===T?0-(y.height()-x.height()):0-(y.width()-x.width());k=O>k?"horizontal"===T?k+y.width()*(k-O)/y.width()*(k-O)/y.width():k+y.height()*(k-O)/y.height()*(k-O)/y.height():k,"vertical"===T?punchgs.TweenLite.set(y,{top:k+"px"}):punchgs.TweenLite.set(y,{left:k+"px"});break;case"end":case"cancel":if(f)return k=S+d,k="vertical"===T?k<0-(y.height()-x.height())?0-(y.height()-x.height()):k:k<0-(y.width()-x.width())?0-(y.width()-x.width()):k,k=k>0?0:k,k=Math.abs(d)>C/10?0>=d?Math.floor(k/C)*C:Math.ceil(k/C)*C:0>d?Math.ceil(k/C)*C:Math.floor(k/C)*C,k="vertical"===T?k<0-(y.height()-x.height())?0-(y.height()-x.height()):k:k<0-(y.width()-x.width())?0-(y.width()-x.width()):k,k=k>0?0:k,"vertical"===T?punchgs.TweenLite.to(y,.5,{top:k+"px",ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(y,.5,{left:k+"px",ease:punchgs.Power3.easeOut}),k=k?k:"vertical"===T?y.position().top:y.position().left,y.data("offset",k),y.data("distance",d),setTimeout(function(){a.dragStartedOverSlider=!1,a.dragStartedOverThumbs=!1,a.dragStartedOverTabs=!1},100),i.parent().find(v).removeClass("dragged"),!1}}}})},l=function(t){t.hide_delay=jQuery.isNumeric(parseInt(t.hide_delay,0))?t.hide_delay/1e3:.2,t.hide_delay_mobile=jQuery.isNumeric(parseInt(t.hide_delay_mobile,0))?t.hide_delay_mobile/1e3:.2},h=function(t){return t&&t.enable},p=function(t){return t&&t.enable&&t.hide_onleave===!0&&(void 0===t.position?!0:!t.position.match(/outer/g))},u=function(t,i){var a=t.parent();p(i.navigation.arrows)&&punchgs.TweenLite.delayedCall(e?i.navigation.arrows.hide_delay_mobile:i.navigation.arrows.hide_delay,c,[a.find(".tparrows"),i.navigation.arrows,"hide"]),p(i.navigation.bullets)&&punchgs.TweenLite.delayedCall(e?i.navigation.bullets.hide_delay_mobile:i.navigation.bullets.hide_delay,c,[a.find(".tp-bullets"),i.navigation.bullets,"hide"]),p(i.navigation.thumbnails)&&punchgs.TweenLite.delayedCall(e?i.navigation.thumbnails.hide_delay_mobile:i.navigation.thumbnails.hide_delay,c,[a.find(".tp-thumbs"),i.navigation.thumbnails,"hide"]),p(i.navigation.tabs)&&punchgs.TweenLite.delayedCall(e?i.navigation.tabs.hide_delay_mobile:i.navigation.tabs.hide_delay,c,[a.find(".tp-tabs"),i.navigation.tabs,"hide"])},c=function(t,e,i,a){switch(a=void 0===a?.5:a,i){case"show":punchgs.TweenLite.to(t,a,{autoAlpha:1,ease:punchgs.Power3.easeInOut,overwrite:"auto"});break;case"hide":punchgs.TweenLite.to(t,a,{autoAlpha:0,ease:punchgs.Power3.easeInOu,overwrite:"auto"})}},f=function(t,e,i){e.style=void 0===e.style?"":e.style,e.left.style=void 0===e.left.style?"":e.left.style,e.right.style=void 0===e.right.style?"":e.right.style,0===t.find(".tp-leftarrow.tparrows").length&&t.append('<div class="tp-leftarrow tparrows '+e.style+" "+e.left.style+'">'+e.tmp+"</div>"),0===t.find(".tp-rightarrow.tparrows").length&&t.append('<div class="tp-rightarrow tparrows '+e.style+" "+e.right.style+'">'+e.tmp+"</div>");var a=t.find(".tp-leftarrow.tparrows"),n=t.find(".tp-rightarrow.tparrows");n.click(function(){i.sc_indicator="arrow",t.revnext()}),a.click(function(){i.sc_indicator="arrow",t.revprev()}),e.right.j=t.find(".tp-rightarrow.tparrows"),e.left.j=t.find(".tp-leftarrow.tparrows"),e.padding_top=parseInt(i.carousel.padding_top||0,0),e.padding_bottom=parseInt(i.carousel.padding_bottom||0,0),m(a,e.left),m(n,e.right),("outer-left"==e.position||"outer-right"==e.position)&&(i.outernav=!0)},g=function(t,e){var i=t.outerHeight(!0),a=(t.outerWidth(!0),"top"===e.v_align?{top:"0px",y:Math.round(e.v_offset)+"px"}:"center"===e.v_align?{top:"50%",y:Math.round(0-i/2+e.v_offset)+"px"}:{top:"100%",y:Math.round(0-(i+e.v_offset))+"px"});t.hasClass("outer-bottom")||punchgs.TweenLite.set(t,a)},v=function(t,e){var i=(t.outerHeight(!0),t.outerWidth(!0)),a="left"===e.h_align?{left:"0px",x:Math.round(e.h_offset)+"px"}:"center"===e.h_align?{left:"50%",x:Math.round(0-i/2+e.h_offset)+"px"}:{left:"100%",x:Math.round(0-(i+e.h_offset))+"px"};punchgs.TweenLite.set(t,a)},m=function(t,e){var i=t.closest(".tp-simpleresponsive").length>0?t.closest(".tp-simpleresponsive"):t.closest(".tp-revslider-mainul").length>0?t.closest(".tp-revslider-mainul"):t.closest(".rev_slider_wrapper").length>0?t.closest(".rev_slider_wrapper"):t.parent().find(".tp-revslider-mainul"),a=i.width(),n=i.height();if(g(t,e),v(t,e),"outer-left"!==e.position||"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout?"outer-right"!==e.position||"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout||punchgs.TweenLite.set(t,{right:0-t.outerWidth()+"px",x:e.h_offset+"px"}):punchgs.TweenLite.set(t,{left:0-t.outerWidth()+"px",x:e.h_offset+"px"}),t.hasClass("tp-thumbs")||t.hasClass("tp-tabs")){var s=t.data("wr_padding"),r=t.data("maxw"),o=t.data("maxh"),d=t.find(t.hasClass("tp-thumbs")?".tp-thumb-mask":".tp-tab-mask"),l=parseInt(e.padding_top||0,0),h=parseInt(e.padding_bottom||0,0);r>a&&"outer-left"!==e.position&&"outer-right"!==e.position?(punchgs.TweenLite.set(t,{left:"0px",x:0,maxWidth:a-2*s+"px"}),punchgs.TweenLite.set(d,{maxWidth:a-2*s+"px"})):(punchgs.TweenLite.set(t,{maxWidth:r+"px"}),punchgs.TweenLite.set(d,{maxWidth:r+"px"})),o+2*s>n&&"outer-bottom"!==e.position&&"outer-top"!==e.position?(punchgs.TweenLite.set(t,{top:"0px",y:0,maxHeight:l+h+(n-2*s)+"px"}),punchgs.TweenLite.set(d,{maxHeight:l+h+(n-2*s)+"px"})):(punchgs.TweenLite.set(t,{maxHeight:o+"px"}),punchgs.TweenLite.set(d,{maxHeight:o+"px"})),"outer-left"!==e.position&&"outer-right"!==e.position&&(l=0,h=0),e.span===!0&&"vertical"===e.direction?(punchgs.TweenLite.set(t,{maxHeight:l+h+(n-2*s)+"px",height:l+h+(n-2*s)+"px",top:0-l,y:0}),g(d,e)):e.span===!0&&"horizontal"===e.direction&&(punchgs.TweenLite.set(t,{maxWidth:"100%",width:a-2*s+"px",left:0,x:0}),v(d,e))}},b=function(t,e,i,a){0===t.find(".tp-bullets").length&&(e.style=void 0===e.style?"":e.style,t.append('<div class="tp-bullets '+e.style+" "+e.direction+'"></div>'));var n=t.find(".tp-bullets"),s=i.data("index"),r=e.tmp;jQuery.each(a.thumbs[i.index()].params,function(t,e){r=r.replace(e.from,e.to)}),n.append('<div class="justaddedbullet tp-bullet">'+r+"</div>");var o=t.find(".justaddedbullet"),d=t.find(".tp-bullet").length,l=o.outerWidth()+parseInt(void 0===e.space?0:e.space,0),h=o.outerHeight()+parseInt(void 0===e.space?0:e.space,0);"vertical"===e.direction?(o.css({top:(d-1)*h+"px",left:"0px"}),n.css({height:(d-1)*h+o.outerHeight(),width:o.outerWidth()})):(o.css({left:(d-1)*l+"px",top:"0px"}),n.css({width:(d-1)*l+o.outerWidth(),height:o.outerHeight()})),o.find(".tp-bullet-image").css({backgroundImage:"url("+a.thumbs[i.index()].src+")"}),o.data("liref",s),o.click(function(){a.sc_indicator="bullet",t.revcallslidewithid(s),t.find(".tp-bullet").removeClass("selected"),jQuery(this).addClass("selected")}),o.removeClass("justaddedbullet"),e.padding_top=parseInt(a.carousel.padding_top||0,0),e.padding_bottom=parseInt(a.carousel.padding_bottom||0,0),("outer-left"==e.position||"outer-right"==e.position)&&(a.outernav=!0),m(n,e)},w=function(t,e){e=parseFloat(e),t=t.replace("#","");var i=parseInt(t.substring(0,2),16),a=parseInt(t.substring(2,4),16),n=parseInt(t.substring(4,6),16),s="rgba("+i+","+a+","+n+","+e+")";return s},_=function(t,e,i,a,n){var s="tp-thumb"===a?".tp-thumbs":".tp-tabs",r="tp-thumb"===a?".tp-thumb-mask":".tp-tab-mask",o="tp-thumb"===a?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",d="tp-thumb"===a?".tp-thumb":".tp-tab",l="tp-thumb"===a?".tp-thumb-image":".tp-tab-image";if(e.visibleAmount=e.visibleAmount>n.slideamount?n.slideamount:e.visibleAmount,e.sliderLayout=n.sliderLayout,0===t.parent().find(s).length){e.style=void 0===e.style?"":e.style;var h=e.span===!0?"tp-span-wrapper":"",p='<div class="'+a+"s "+h+" "+e.position+" "+e.style+'"><div class="'+a+'-mask"><div class="'+a+'s-inner-wrapper" style="position:relative;"></div></div></div>';"outer-top"===e.position?t.parent().prepend(p):"outer-bottom"===e.position?t.after(p):t.append(p),e.padding_top=parseInt(n.carousel.padding_top||0,0),e.padding_bottom=parseInt(n.carousel.padding_bottom||0,0),("outer-left"==e.position||"outer-right"==e.position)&&(n.outernav=!0)}var u=i.data("index"),c=t.parent().find(s),f=c.find(r),g=f.find(o),v="horizontal"===e.direction?e.width*e.visibleAmount+e.space*(e.visibleAmount-1):e.width,b="horizontal"===e.direction?e.height:e.height*e.visibleAmount+e.space*(e.visibleAmount-1),_=e.tmp;jQuery.each(n.thumbs[i.index()].params,function(t,e){_=_.replace(e.from,e.to)}),g.append('<div data-liindex="'+i.index()+'" data-liref="'+u+'" class="justaddedthumb '+a+'" style="width:'+e.width+"px;height:"+e.height+'px;">'+_+"</div>");var x=c.find(".justaddedthumb"),y=c.find(d).length,T=x.outerWidth()+parseInt(void 0===e.space?0:e.space,0),L=x.outerHeight()+parseInt(void 0===e.space?0:e.space,0);x.find(l).css({backgroundImage:"url("+n.thumbs[i.index()].src+")"}),"vertical"===e.direction?(x.css({top:(y-1)*L+"px",left:"0px"}),g.css({height:(y-1)*L+x.outerHeight(),width:x.outerWidth()})):(x.css({left:(y-1)*T+"px",top:"0px"}),g.css({width:(y-1)*T+x.outerWidth(),height:x.outerHeight()})),c.data("maxw",v),c.data("maxh",b),c.data("wr_padding",e.wrapper_padding);var j="outer-top"===e.position||"outer-bottom"===e.position?"relative":"absolute",C="outer-top"!==e.position&&"outer-bottom"!==e.position||"center"!==e.h_align?"0":"auto";f.css({maxWidth:v+"px",maxHeight:b+"px",overflow:"hidden",position:"relative"}),c.css({maxWidth:v+"px",margin:C,maxHeight:b+"px",overflow:"visible",position:j,background:w(e.wrapper_color,e.wrapper_opacity),padding:e.wrapper_padding+"px",boxSizing:"contet-box"}),x.click(function(){n.sc_indicator="bullet";var e=t.parent().find(o).data("distance");e=void 0===e?0:e,Math.abs(e)<10&&(t.revcallslidewithid(u),t.parent().find(s).removeClass("selected"),jQuery(this).addClass("selected"))}),x.removeClass("justaddedthumb"),m(c,e)},x=function(t){var e=t.c.parent().find(".outer-top"),i=t.c.parent().find(".outer-bottom");t.top_outer=e.hasClass("tp-forcenotvisible")?0:e.outerHeight()||0,t.bottom_outer=i.hasClass("tp-forcenotvisible")?0:i.outerHeight()||0},y=function(t,e,i,a){e>i||i>a?t.addClass("tp-forcenotvisible"):t.removeClass("tp-forcenotvisible")}}(jQuery);



document.documentElement.className += ' js_active ';
document.documentElement.className += 'ontouchstart' in document.documentElement ? ' vc_mobile ' : ' vc_desktop ';
(function () {
	var prefix = [
		'-webkit-',
		'-moz-',
		'-ms-',
		'-o-',
		''
	];
	for ( var i = 0;
		  i < prefix.length;
		  i ++ ) {
		if ( prefix[ i ] + 'transform' in document.documentElement.style ) {
			document.documentElement.className += " vc_transform ";
		}
	}
})();
/*
 On document ready jQuery will fire set of functions.
 If you want to override function behavior then copy it to your theme js file
 with the same name.
 */

jQuery( window ).load( function () {

} );
function vc_js() {
	vc_twitterBehaviour();
	vc_toggleBehaviour();
	vc_tabsBehaviour();
	vc_accordionBehaviour();
	vc_teaserGrid();
	vc_carouselBehaviour();
	vc_slidersBehaviour();
	vc_prettyPhoto();
	vc_googleplus();
	vc_pinterest();
	vc_progress_bar();
	vc_plugin_flexslider();
	vc_google_fonts();
	vc_gridBehaviour();
	vc_rowBehaviour();
	vc_ttaActivation(); // @since 4.5
	jQuery( document ).trigger( 'vc_js' );
	window.setTimeout( vc_waypoints, 500 );
}
jQuery( document ).ready( function ( $ ) {
	window.vc_js();
} );

if ( 'function' !== typeof(window[ 'vc_plugin_flexslider' ]) ) {
	window.vc_plugin_flexslider = function ( $parent ) {
		var $slider = $parent ? $parent.find( '.wpb_flexslider' ) : jQuery( '.wpb_flexslider' );
		$slider.each( function () {
			var this_element = jQuery( this );
			var sliderSpeed = 800,
				sliderTimeout = parseInt( this_element.attr( 'data-interval' ) ) * 1000,
				sliderFx = this_element.attr( 'data-flex_fx' ),
				slideshow = true;
			if ( 0 === sliderTimeout ) {
				slideshow = false;
			}

			this_element.is( ':visible' ) && this_element.flexslider( {
				animation: sliderFx,
				slideshow: slideshow,
				slideshowSpeed: sliderTimeout,
				sliderSpeed: sliderSpeed,
				smoothHeight: true
			} );
		} );
	};
}

/* Twitter
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_twitterBehaviour' ]) ) {
	window.vc_twitterBehaviour = function () {
		jQuery( '.wpb_twitter_widget .tweets' ).each( function ( index ) {
			var this_element = jQuery( this ),
				tw_name = this_element.attr( 'data-tw_name' ),
				tw_count = this_element.attr( 'data-tw_count' );

			this_element.tweet( {
				username: tw_name,
				join_text: "auto",
				avatar_size: 0,
				count: tw_count,
				template: "{avatar}{join}{text}{time}",
				auto_join_text_default: "",
				auto_join_text_ed: "",
				auto_join_text_ing: "",
				auto_join_text_reply: "",
				auto_join_text_url: "",
				loading_text: '<span class="loading_tweets">loading tweets...</span>'
			} );
		} );
	};
}

/* Google plus
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_googleplus' ]) ) {
	window.vc_googleplus = function () {
		if ( 0 < jQuery( '.wpb_googleplus' ).length ) {
			(function () {
				var po = document.createElement( 'script' );
				po.type = 'text/javascript';
				po.async = true;
				po.src = 'https://apis.google.com/js/plusone.js';
				var s = document.getElementsByTagName( 'script' )[ 0 ];
				s.parentNode.insertBefore( po, s );
			})();
		}
	}
}

/* Pinterest
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_pinterest' ]) ) {
	window.vc_pinterest = function () {
		if ( 0 < jQuery( '.wpb_pinterest' ).length ) {
			(function () {
				var po = document.createElement( 'script' );
				po.type = 'text/javascript';
				po.async = true;
				po.src = 'http://assets.pinterest.com/js/pinit.js';
				var s = document.getElementsByTagName( 'script' )[ 0 ];
				s.parentNode.insertBefore( po, s );
			})();
		}
	}
}

/* Progress bar
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_progress_bar' ] ) ) {
	window.vc_progress_bar = function () {
		if ( 'undefined' !== typeof(jQuery.fn.waypoint) ) {

			jQuery( '.vc_progress_bar' ).waypoint( function () {
				jQuery( this ).find( '.vc_single_bar' ).each( function ( index ) {
					var $this = jQuery( this ),
						bar = $this.find( '.vc_bar' ),
						val = bar.data( 'percentage-value' );

					setTimeout( function () {
						bar.css( { "width": val + '%' } );
					}, index * 200 );
				} );
			}, { offset: '85%' } );
		}
	}
}

/* Waypoints magic
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_waypoints' ] ) ) {
	window.vc_waypoints = function () {
		if ( 'undefined' !== typeof(jQuery.fn.waypoint ) ) {
			jQuery( '.wpb_animate_when_almost_visible:not(.wpb_start_animation)' ).waypoint( function () {
				jQuery( this ).addClass( 'wpb_start_animation' );
			}, { offset: '85%' } );
		}
	}
}

/* Toggle/FAQ
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_toggleBehaviour' ] ) ) {
	window.vc_toggleBehaviour = function ( $el ) {
		function event( e ) {
			e && e.preventDefault && e.preventDefault();
			var title = jQuery( this );
			var element = title.closest( '.vc_toggle' );
			var content = element.find( '.vc_toggle_content' );
			if ( element.hasClass( 'vc_toggle_active' ) ) {
				content.slideUp( {
					duration: 300,
					complete: function () {
						element.removeClass( 'vc_toggle_active' );
					}
				} );
			} else {
				content.slideDown( {
					duration: 300,
					complete: function () {
						element.addClass( 'vc_toggle_active' );
					}
				} );
			}
		}

		if ( $el ) {
			if ( $el.hasClass( 'vc_toggle_title' ) ) {
				$el.unbind( 'click' ).click( event );
			} else {
				$el.find( ".vc_toggle_title" ).unbind( 'click' ).click( event );
			}
		} else {
			jQuery( ".vc_toggle_title" ).unbind( 'click' ).on( 'click', event );
		}
	}
}

/* Tabs + Tours
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_tabsBehaviour' ] ) ) {
	window.vc_tabsBehaviour = function ( $tab ) {
		if ( jQuery.ui ) {
			var $call = $tab || jQuery( '.wpb_tabs, .wpb_tour' ),
				ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split( '.' ) : '1.10',
				old_version = 1 === parseInt( ver[ 0 ] ) && 9 > parseInt( ver[ 1 ] );
			$call.each( function ( index ) {
				var $tabs,
					interval = jQuery( this ).attr( "data-interval" ),
					tabs_array = [];
				//
				$tabs = jQuery( this ).find( '.wpb_tour_tabs_wrapper' ).tabs( {
					show: function ( event, ui ) {
						wpb_prepare_tab_content( event, ui );
					},
					beforeActivate: function ( event, ui ) {
						1 !== ui.newPanel.index() && ui.newPanel.find( '.vc_pie_chart:not(.vc_ready)' );
					},
					activate: function ( event, ui ) {
						wpb_prepare_tab_content( event, ui );
					}
				} );
				if ( interval && 0 < interval ) {
					try {
						$tabs.tabs( 'rotate', interval * 1000 );
					} catch ( e ) {
						// nothing.
						window.console && window.console.log && console.log( e );
					}
				}

				jQuery( this ).find( '.wpb_tab' ).each( function () {
					tabs_array.push( this.id );
				} );

				jQuery( this ).find( '.wpb_tabs_nav li' ).click( function ( e ) {
					e.preventDefault();
					if ( old_version ) {
						$tabs.tabs( "select", jQuery( 'a', this ).attr( 'href' ) );
					} else {
						$tabs.tabs( "option", "active", jQuery( this ).index() );
					}
					return false;
				} );

				jQuery( this ).find( '.wpb_prev_slide a, .wpb_next_slide a' ).click( function ( e ) {
					e.preventDefault();
					if ( old_version ) {
						var index = $tabs.tabs( 'option', 'selected' );
						if ( jQuery( this ).parent().hasClass( 'wpb_next_slide' ) ) {
							index ++;
						}
						else {
							index --;
						}
						if ( 0 > index ) {
							index = $tabs.tabs( "length" ) - 1;
						}
						else if ( index >= $tabs.tabs( "length" ) ) {
							index = 0;
						}
						$tabs.tabs( "select", index );
					} else {
						var index = $tabs.tabs( "option", "active" ),
							length = $tabs.find( '.wpb_tab' ).length;

						if ( jQuery( this ).parent().hasClass( 'wpb_next_slide' ) ) {
							index = (index + 1) >= length ? 0 : index + 1;
						} else {
							index = 0 > index - 1 ? length - 1 : index - 1;
						}

						$tabs.tabs( "option", "active", index );
					}

				} );

			} );
		}
	}
}

/* Tabs + Tours
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_accordionBehaviour' ]) ) {
	window.vc_accordionBehaviour = function () {
		jQuery( '.wpb_accordion' ).each( function ( index ) {
			var $this = jQuery( this );
			var $tabs,
				interval = $this.attr( "data-interval" ),
				active_tab = ! isNaN( jQuery( this ).data( 'active-tab' ) ) && 0 < parseInt( $this.data( 'active-tab' ) ) ? parseInt( $this.data( 'active-tab' ) ) - 1 : false,
				collapsible = false === active_tab || 'yes' === $this.data( 'collapsible' );
			$tabs = $this.find( '.wpb_accordion_wrapper' ).accordion( {
				header: "> div > h3",
				autoHeight: false,
				heightStyle: "content",
				active: active_tab,
				collapsible: collapsible,
				navigation: true,

				activate: vc_accordionActivate,
				change: function ( event, ui ) {
					if ( 'undefined' !== typeof(jQuery.fn.isotope) ) {
						ui.newContent.find( '.isotope' ).isotope( "layout" );
					}
					vc_carouselBehaviour( ui.newPanel );
				}
			} );
			if ( true === $this.data( 'vcDisableKeydown' ) ) {
				$tabs.data( 'uiAccordion' )._keydown = function () {
				};
			}
		} );
	}
}

/* Teaser grid: isotope
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'vc_teaserGrid' ]) ) {
	window.vc_teaserGrid = function () {
		var layout_modes = {
			fitrows: 'fitRows',
			masonry: 'masonry'
		};
		jQuery( '.wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)' ).each( function () {
			var $container = jQuery( this );
			var $thumbs = $container.find( '.wpb_thumbnails' );
			var layout_mode = $thumbs.attr( 'data-layout-mode' );
			$thumbs.isotope( {
				// options
				itemSelector: '.isotope-item',
				layoutMode: ('undefined' === typeof(layout_modes[ layout_mode ]) ? 'fitRows' : layout_modes[ layout_mode ])
			} );
			$container.find( '.categories_filter a' ).data( 'isotope', $thumbs ).click( function ( e ) {
				e.preventDefault();
				var $thumbs = jQuery( this ).data( 'isotope' );
				jQuery( this ).parent().parent().find( '.active' ).removeClass( 'active' );
				jQuery( this ).parent().addClass( 'active' );
				$thumbs.isotope( { filter: jQuery( this ).attr( 'data-filter' ) } );
			} );
			jQuery( window ).bind( 'load resize', function () {
				$thumbs.isotope( "layout" );
			} );
		} );
	}
}

if ( 'function' !== typeof(window[ 'vc_carouselBehaviour' ]) ) {
	window.vc_carouselBehaviour = function ( $parent ) {
		var $carousel = $parent ? $parent.find( ".wpb_carousel" ) : jQuery( ".wpb_carousel" );
		$carousel.each( function () {
			var $this = jQuery( this );
			if ( true !== $this.data( 'carousel_enabled' ) && $this.is( ':visible' ) ) {
				$this.data( 'carousel_enabled', true );
				var visible_count = getColumnsCount( jQuery( this ) ),
					carousel_speed = 500;
				if ( jQuery( this ).hasClass( 'columns_count_1' ) ) {
					carousel_speed = 900;
				}
				/* Get margin-left value from the css grid and apply it to the carousele li items (margin-right), before carousele initialization */
				var carousele_li = jQuery( this ).find( '.wpb_thumbnails-fluid li' );
				carousele_li.css( { "margin-right": carousele_li.css( "margin-left" ), "margin-left": 0 } );

				jQuery( this ).find( '.wpb_wrapper:eq(0)' ).jCarouselLite( {
					btnNext: jQuery( this ).find( '.next' ),
					btnPrev: jQuery( this ).find( '.prev' ),
					visible: visible_count,
					speed: carousel_speed
				} )
					.width( '100%' );

				var fluid_ul = jQuery( this ).find( 'ul.wpb_thumbnails-fluid' );
				fluid_ul.width( fluid_ul.width() + 300 );

				jQuery( window ).resize( function () {
					var before_resize = screen_size;
					screen_size = getSizeName();
					if ( before_resize != screen_size ) {
						window.setTimeout( 'location.reload()', 20 );
					}
				} );
			}

		} );
	}
}

if ( 'function' !== typeof(window[ 'vc_slidersBehaviour' ]) ) {
	window.vc_slidersBehaviour = function () {
		jQuery( '.wpb_gallery_slides' ).each( function ( index ) {
			var this_element = jQuery( this );
			var $imagesGrid;

			if ( this_element.hasClass( 'wpb_slider_nivo' ) ) {
				var sliderSpeed = 800,
					sliderTimeout = this_element.attr( 'data-interval' ) * 1000;

				if ( 0 === sliderTimeout ) {
					sliderTimeout = 9999999999;
				}

				this_element.find( '.nivoSlider' ).nivoSlider( {
					effect: 'boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse', // Specify sets like: 'fold,fade,sliceDown'
					slices: 15, // For slice animations
					boxCols: 8, // For box animations
					boxRows: 4, // For box animations
					animSpeed: sliderSpeed, // Slide transition speed
					pauseTime: sliderTimeout, // How long each slide will show
					startSlide: 0, // Set starting Slide (0 index)
					directionNav: true, // Next & Prev navigation
					directionNavHide: true, // Only show on hover
					controlNav: true, // 1,2,3... navigation
					keyboardNav: false, // Use left & right arrows
					pauseOnHover: true, // Stop animation while hovering
					manualAdvance: false, // Force manual transitions
					prevText: 'Prev', // Prev directionNav text
					nextText: 'Next' // Next directionNav text
				} );
			}
			else if ( this_element.hasClass( 'wpb_image_grid' ) ) {
				if ( jQuery.fn.imagesLoaded ) {
					$imagesGrid = this_element.find( '.wpb_image_grid_ul' ).imagesLoaded( function () {
						$imagesGrid.isotope( {
							// options
							itemSelector: '.isotope-item',
							layoutMode: 'fitRows'
						} );
					} );
				} else {
					this_element.find( '.wpb_image_grid_ul' ).isotope( {
						// options
						itemSelector: '.isotope-item',
						layoutMode: 'fitRows'
					} );
				}
			}
		} );
	}
}

if ( 'function' !== typeof(window[ 'vc_prettyPhoto' ]) ) {
	window.vc_prettyPhoto = function () {
		try {
			// just in case. maybe prettyphoto isn't loaded on this site
			if ( jQuery && jQuery.fn && jQuery.fn.prettyPhoto ) {
				jQuery( 'a.prettyphoto, .gallery-icon a[href*=".jpg"]' ).prettyPhoto( {
					animationSpeed: 'normal', /* fast/slow/normal */
					padding: 15, /* padding for each side of the picture */
					opacity: 0.7, /* Value betwee 0 and 1 */
					showTitle: true, /* true/false */
					allowresize: true, /* true/false */
					counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
					//theme: 'light_square', /* light_rounded / dark_rounded / light_square / dark_square */
					hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
					deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
					modal: false, /* If set to true, only the close button will close the window */
					callback: function () {
						var url = location.href;
						var hashtag = (url.indexOf( '#!prettyPhoto' )) ? true : false;
						if ( hashtag ) {
							location.hash = "!";
						}
					} /* Called when prettyPhoto is closed */,
					social_tools: ''
				} );
			}
		} catch ( err ) {
			window.console && window.console.log && console.log( err );
		}
	}
}

if ( 'function' !== typeof(window[ 'vc_google_fonts' ]) ) {
	window.vc_google_fonts = function () {
		return false; // TODO: check this for what this is needed
	}
}
window.vcParallaxSkroll = false;
if ( 'function' !== typeof(window[ 'vc_rowBehaviour' ]) ) {
	window.vc_rowBehaviour = function () {
		var $ = window.jQuery;

		function localFunction() {
			var $elements = $( '[data-vc-full-width="true"]' );
			$.each( $elements, function ( key, item ) {
				var $el = $( this );
				$el.addClass( 'vc_hidden' );

				var $el_full = $el.next( '.vc_row-full-width' );
				var el_margin_left = parseInt( $el.css( 'margin-left' ), 10 );
				var el_margin_right = parseInt( $el.css( 'margin-right' ), 10 );
				var offset = 0 - $el_full.offset().left - el_margin_left;
				var width = $( window ).width();
				$el.css( {
					'position': 'relative',
					'left': offset,
					'box-sizing': 'border-box',
					'width': $( window ).width()
				} );
				if ( ! $el.data( 'vcStretchContent' ) ) {
					var padding = (- 1 * offset);
					if ( 0 > padding ) {
						padding = 0;
					}
					var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
					if ( 0 > paddingRight ) {
						paddingRight = 0;
					}
					$el.css( { 'padding-left': padding + 'px', 'padding-right': paddingRight + 'px' } );
				}
				$el.attr( "data-vc-full-width-init", "true" );
				$el.removeClass( 'vc_hidden' );
			} );
		}

		/**
		 * @todo refactor as plugin.
		 * @returns {*}
		 */
		function parallaxRow() {
			var vcSkrollrOptions, vcParallaxSkroll,
				callSkrollInit = false;
			if ( vcParallaxSkroll ) {
				vcParallaxSkroll.destroy();
			}
			$( '.vc_parallax-inner' ).remove();
			$( '[data-5p-top-bottom]' ).removeAttr( 'data-5p-top-bottom data-30p-top-bottom' );
			$( '[data-vc-parallax]' ).each( function () {
				var skrollrSpeed,
					skrollrSize,
					skrollrStart,
					skrollrEnd,
					$parallaxElement,
					parallaxImage,
					youtubeId;
				callSkrollInit = true; // Enable skrollinit;
				if ( 'on' === $( this ).data( 'vcParallaxOFade' ) ) {
					$( this ).children().attr( 'data-5p-top-bottom', 'opacity:0;' ).attr( 'data-30p-top-bottom',
						'opacity:1;' );
				}

				skrollrSize = $( this ).data( 'vcParallax' ) * 100;
				$parallaxElement = $( '<div />' ).addClass( 'vc_parallax-inner' ).appendTo( $( this ) );
				$parallaxElement.height( skrollrSize + '%' );

				parallaxImage = $( this ).data( 'vcParallaxImage' );

				youtubeId = vcExtractYoutubeId( parallaxImage );

				if ( youtubeId ) {
					insertYoutubeVideoAsBackground( $parallaxElement, youtubeId );
				} else if ( 'undefined' !== typeof(parallaxImage) ) {
					$parallaxElement.css( 'background-image', 'url(' + parallaxImage + ')' );
				}

				skrollrSpeed = skrollrSize - 100;
				skrollrStart = - skrollrSpeed;
				skrollrEnd = 0;

				$parallaxElement.attr( 'data-bottom-top', 'top: ' + skrollrStart + '%;' ).attr( 'data-top-bottom',
					'top: ' + skrollrEnd + '%;' );
			} );

			if ( callSkrollInit && window.skrollr ) {
				vcSkrollrOptions = {
					forceHeight: false,
					smoothScrolling: false,
					mobileCheck: function () {
						return false;
					}
				};
				vcParallaxSkroll = skrollr.init( vcSkrollrOptions );
				return vcParallaxSkroll;
			}
			return false;
		}

		/**
		 * @todo refactor as plugin.
		 * @returns {*}
		 */
		function fullHeightRow() {
			$( '.vc_row-o-full-height:first' ).each( function () {
				var $window,
					windowHeight,
					offsetTop,
					fullHeight;
				$window = $( window );
				windowHeight = $window.height();
				offsetTop = $( this ).offset().top;
				if ( offsetTop < windowHeight ) {
					fullHeight = 100 - offsetTop / (windowHeight / 100);
					$( this ).css( 'min-height', fullHeight + 'vh' );
				}
			} );

			$( '.vc_row-o-full-height.vc_row-o-content-middle' ).each( function () {
				var elHeight = $( this ).height();
				$( '<div><!-- IE flexbox min height vertical align fixer --></div>' )
					.addClass( 'vc_row-full-height-fixer' )
					.height( elHeight )
					.prependTo( $( this ) );
			} );
		}

		$( window ).unbind( 'resize.vcRowBehaviour' ).bind( 'resize.vcRowBehaviour', localFunction );
		$( window ).bind( 'resize.vcRowBehaviour', fullHeightRow );
		localFunction();
		fullHeightRow();
		initVideoBackgrounds(); // must be called before parallax
		parallaxRow();
	}
}

if ( 'function' !== typeof(window[ 'vc_gridBehaviour' ]) ) {
	window.vc_gridBehaviour = function () {
		jQuery.fn.vcGrid && jQuery( '[data-vc-grid]' ).vcGrid();
	}
}
/* Helper
 ---------------------------------------------------------- */
if ( 'function' !== typeof(window[ 'getColumnsCount' ]) ) {
	window.getColumnsCount = function ( el ) {
		var find = false,
			i = 1;

		while ( false === find ) {
			if ( el.hasClass( 'columns_count_' + i ) ) {
				find = true;
				return i;
			}
			i ++;
		}
	}
}

var screen_size = getSizeName();
function getSizeName() {
	var screen_w = jQuery( window ).width();

	if ( 1170 < screen_w ) {
		return 'desktop_wide';
	}

	if ( 960 < screen_w && 1169 > screen_w ) {
		return 'desktop';
	}

	if ( 768 < screen_w && 959 > screen_w ) {
		return 'tablet';
	}

	if ( 300 < screen_w && 767 > screen_w ) {
		return 'mobile';
	}

	if ( 300 > screen_w ) {
		return 'mobile_portrait';
	}

	return '';
}

function loadScript( url, $obj, callback ) {

	var script = document.createElement( "script" );
	script.type = "text/javascript";

	if ( script.readyState ) {  //IE
		script.onreadystatechange = function () {
			if ( "loaded" === script.readyState ||
				"complete" === script.readyState ) {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {
		//Others
	}

	script.src = url;
	$obj.get( 0 ).appendChild( script );
}

if ( 'function' !== typeof(window[ 'wpb_prepare_tab_content' ]) ) {
	/**
	 * Prepare html to correctly display inside tab container
	 *
	 * @param event - ui tab event 'show'
	 * @param ui - jquery ui tabs object
	 */
	window.wpb_prepare_tab_content = function ( event, ui ) {
		var panel = ui.panel || ui.newPanel,
			$pie_charts = panel.find( '.vc_pie_chart:not(.vc_ready)' ),
			$round_charts = panel.find( '.vc_round-chart' ),
			$line_charts = panel.find( '.vc_line-chart' ),
			$carousel = panel.find( '[data-ride="vc_carousel"]' ),
			$ui_panel, $google_maps;
		vc_carouselBehaviour();
		vc_plugin_flexslider( panel );
		if ( ui.newPanel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).length ) {
			ui.newPanel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).each( function () {
				var grid = jQuery( this ).data( 'vcGrid' );
				grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
			} );
		}
		if ( panel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).length ) {
			panel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).each( function () {
				var grid = jQuery( this ).data( 'vcGrid' );
				grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
			} );
		}
		$pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat();
		$round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart( { reload: false } );
		$line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart( { reload: false } );
		$carousel.length && jQuery.fn.carousel && $carousel.carousel( 'resizeAction' );
		$ui_panel = panel.find( '.isotope, .wpb_image_grid_ul' ); // why var name '$ui_panel'?
		$google_maps = panel.find( '.wpb_gmaps_widget' );
		if ( 0 < $ui_panel.length ) {
			$ui_panel.isotope( "layout" );
		}
		if ( $google_maps.length && ! $google_maps.is( '.map_ready' ) ) {
			var $frame = $google_maps.find( 'iframe' );
			$frame.attr( 'src', $frame.attr( 'src' ) );
			$google_maps.addClass( 'map_ready' );
		}
		if ( panel.parents( '.isotope' ).length ) {
			panel.parents( '.isotope' ).each( function () {
				jQuery( this ).isotope( "layout" );
			} );
		}
	}
}
function vc_ttaActivation() {
	jQuery( '[data-vc-accordion]' ).on( 'show.vc.accordion', function ( e ) {
		var $ = window.jQuery, ui = {};
		ui.newPanel = $( this ).data( 'vc.accordion' ).getTarget();
		window.wpb_prepare_tab_content( e, ui );
	} );
}

function vc_accordionActivate( event, ui ) {
	if ( ui.newPanel.length && ui.newHeader.length ) {
		var $pie_charts = ui.newPanel.find( '.vc_pie_chart:not(.vc_ready)' ),
			$round_charts = ui.newPanel.find( '.vc_round-chart' ),
			$line_charts = ui.newPanel.find( '.vc_line-chart' ),
			$carousel = ui.newPanel.find( '[data-ride="vc_carousel"]' );
		if ( 'undefined' !== typeof(jQuery.fn.isotope) ) {
			ui.newPanel.find( '.isotope, .wpb_image_grid_ul' ).isotope( "layout" );
		}
		if ( ui.newPanel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).length ) {
			ui.newPanel.find( '.vc_masonry_media_grid, .vc_masonry_grid' ).each( function () {
				var grid = jQuery( this ).data( 'vcGrid' );
				grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
			} );
		}
		vc_carouselBehaviour( ui.newPanel );
		vc_plugin_flexslider( ui.newPanel );
		$pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat();
		$round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart( { reload: false } );
		$line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart( { reload: false } );
		$carousel.length && jQuery.fn.carousel && $carousel.carousel( 'resizeAction' );
		if ( ui.newPanel.parents( '.isotope' ).length ) {
			ui.newPanel.parents( '.isotope' ).each( function () {
				jQuery( this ).isotope( "layout" );
			} );
		}
	}
}

/**
 * Reinitialize all video backgrounds
 */
function initVideoBackgrounds() {
	jQuery( '.vc_row' ).each( function () {
		var $row = jQuery( this ),
			youtubeUrl,
			youtubeId;

		if ( $row.data( 'vcVideoBg' ) ) {
			youtubeUrl = $row.data( 'vcVideoBg' );
			youtubeId = vcExtractYoutubeId( youtubeUrl );

			if ( youtubeId ) {
				$row.find( '.vc_video-bg' ).remove();
				insertYoutubeVideoAsBackground( $row, youtubeId );
			}

			jQuery( window ).on( 'grid:items:added', function ( event, $grid ) {
				if ( ! $row.has( $grid ).length ) {
					return;
				}

				vcResizeVideoBackground( $row );
			} );
		} else {
			$row.find( '.vc_video-bg' ).remove();
		}
	} );
}

/**
 * Insert youtube video into element.
 *
 * Video will be w/o controls, muted, autoplaying and looping.
 */
function insertYoutubeVideoAsBackground( $element, youtubeId, counter ) {
	if ( 'undefined' === typeof( YT.Player ) ) {
		// wait for youtube iframe api to load. try for 10sec, then abort
		counter = 'undefined' === typeof( counter ) ? 0 : counter;
		if ( 100 < counter ) {
			console.warn( 'Too many attempts to load YouTube api' );
			return;
		}

		setTimeout( function () {
			insertYoutubeVideoAsBackground( $element, youtubeId, counter ++ );
		}, 100 );

		return;
	}

	var $container = $element.prepend( '<div class="vc_video-bg"><div class="inner"></div></div>' ).find( '.inner' );

	new YT.Player( $container[ 0 ], {
		width: '100%',
		height: '100%',
		videoId: youtubeId,
		playerVars: {
			playlist: youtubeId,
			iv_load_policy: 3, // hide annotations
			enablejsapi: 1,
			disablekb: 1,
			autoplay: 1,
			controls: 0,
			showinfo: 0,
			rel: 0,
			loop: 1
		},
		events: {
			onReady: function ( event ) {
				event.target.mute().setLoop( true );
			}
		}
	} );

	vcResizeVideoBackground( $element );

	jQuery( window ).bind( 'resize', function () {
		vcResizeVideoBackground( $element );
	} );
}

/**
 * Resize background video iframe so that video content covers whole area
 */
function vcResizeVideoBackground( $element ) {
	var iframeW,
		iframeH,
		marginLeft,
		marginTop,
		containerW = $element.innerWidth(),
		containerH = $element.innerHeight(),
		ratio1 = 16,
		ratio2 = 9;

	if ( ( containerW / containerH ) < ( ratio1 / ratio2 ) ) {
		iframeW = containerH * (ratio1 / ratio2);
		iframeH = containerH;

		marginLeft = - Math.round( ( iframeW - containerW ) / 2 ) + 'px';
		marginTop = - Math.round( ( iframeH - containerH ) / 2 ) + 'px';

		iframeW += 'px';
		iframeH += 'px';
	} else {
		iframeW = containerW;
		iframeH = containerW * (ratio2 / ratio1);

		marginTop = - Math.round( ( iframeH - containerH ) / 2 ) + 'px';
		marginLeft = - Math.round( ( iframeW - containerW ) / 2 ) + 'px';

		iframeW += 'px';
		iframeH += 'px';
	}

	$element.find( '.vc_video-bg iframe' ).css( {
		maxWidth: '1000%',
		marginLeft: marginLeft,
		marginTop: marginTop,
		width: iframeW,
		height: iframeH
	} );
}

/**
 * Extract video ID from youtube url
 */
function vcExtractYoutubeId( url ) {
	if ( 'undefined' === typeof(url) ) {
		return false;
	}

	var id = url.match( /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/ );

	if ( null !== id ) {
		return id[ 1 ];
	}

	return false;
}