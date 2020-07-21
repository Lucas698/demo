let box = document.querySelector('.box');
console.log(box)
let ddo = box.querySelectorAll('div');
let oul = document.querySelectorAll('ul');
for(let i=0;i<oul.length;i++){
    var flag = [false,false,false]
    ddo[i].onclick = function(){
        for(let i=0;i<oul.length;i++){
            oul[i].style.display = 'none'
        }
        if(flag[i]){
            console.log('关闭')
            oul[i].style.display = 'none'
            flag[i] = false
        }else{
            console.log('打开')
            oul[i].style.display = 'block';
            flag[i] = true
        }
    }
}