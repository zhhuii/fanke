
	
	// 1、获取元素 	
	// 		图片	img-list>li
	// 		大盒子	ul
	// 		轮播点	.banner-dian>li
	// 2、初始化	js
	// 	除了第一张，其余位置全放在右边	left：1200
	// 	设置双下标
	// 		now 当前的		next 下一个的
	// 		就位	now：0，0		next：1200，0
	// 		动画	left：0 -> -1200px		left：1200px -> 0
	// 		更新 	now=next
	// 3、让图片自动播放
	// 	开启时间函数
	// 	鼠标移入大盒子，消除时间函数
	//4、轮播点控制图片的切换
	//5、左右箭头		右箭头：now++		if(now == box.length) now=0;
	//				左箭头：now--		if(now < 0)  now = box.length-1
let box = document.querySelectorAll('.banner>img');
let bos = document.querySelector('.box1');
var now = 0;
var next =0;
var flag = true;
var t = setInterval(lunbo,1200);
let zuojiantou = document.querySelector('.bannerleft');
let youjiantou = document.querySelector('.bannerright');
let dian = document.querySelectorAll('.lunbodian1');
	for(let i =1;i <box.length;i++){
		box[i].style.left = 1200 +'px';
	}
	function lunbo(type){
		type = type || 'you';
		if(type == 'you'){
			next++;
			if(next == box.length){
				next = 0;
			}
			box[next].style.left = 1200 +'px';
			animate(box[now],{left:-1200},function(){
				flag = true;
			});
			
		}else if(type == 'zuo'){
			next--;
			if(next == -1){
				next = box.length-1;
			}
			box[next].style.left = -1200 +'px';
			animate(box[now],{left:1200},function(){
				flag = true;
			});
		}
		box[now].style.left = 0 +'px';
		animate(box[next],{left:0},function(){
				flag = true;
			});
		now = next;
		for(let k =0;k <box.length;k++){
			dian[k].style.backgroundColor = '#fff';
		};
		dian[now].style.backgroundColor = 'rgba(0,0,0,0.4)';
	};
	bos.onmouseover = function(){
		clearInterval(t);
	};
	bos.onmouseout = function(){
		t = setInterval(lunbo,1200);
	};
	dian.forEach(function(ele,index){
		ele.aa = index;
		ele.addEventListener('mouseover',function(){
			clearInterval(t);
			box[next].style.left = 1200 +'px';
			box[now].style.left = 0 +'px';
			if(this.aa > now){
				next = this.aa -1;
				if(flag){
					lunbo('you');
					flag = false;
				}
			}else if(this.aa < now){
				next = this.aa +1;
				if(flag){
					lunbo('zuo');
					flag = false;
				}
			}
		})
	});
	
	// for(let k = 0;k < dian.length;k++){
	// 	dian[k].zz = k;
	// 	dian[k].onmouseover = function(){
	// 		if(this.zz > now){
	// 			next = this.zz - 1;
	// 			lunbo('you');
	// 		}else{
	// 			next = this.zz + 1;
	// 			lunbo('zuo');
	// 		}
	// 	}	
	// }

	zuojiantou.onclick = function () {
		if(flag){
			lunbo('zuo');
			flag = false;
		}
		
	};
	youjiantou.onclick = function () {
		if(flag){
			lunbo('you');
			flag = false;
		}
	};
	

	/*1、初始化：css里设置
	* 2、获取元素	测导航的标题
	* 				标题之后的盒子
	* 3、移入标题变色并且相对应的盒子出现	*/
let cenav = document.getElementsByClassName('ce-nav-title');
let cenavbox = document.getElementsByClassName('ce-nav-box');
	for(let i = 0;i < cenav.length;i++){
		cenav[i].onmouseover = function(){
			cenav[i].classList.add('ce-nav-title-active');
			for(let j = 0;j < cenavbox.length;j++){
				cenavbox[i].classList.add('ce-nav-box-active');
			}
		};
		cenav[i].onmouseout = function(){
			cenav[i].classList.remove('ce-nav-title-active');
			for(let j = 0;j < cenavbox.length;j++){
				cenavbox[j].classList.remove('ce-nav-box-active');
			}
		}
	}
