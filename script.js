var select = document.getElementById('sel');
var selecthead = document.getElementById('selecthead');
var options = document.getElementsByClassName('opt');

var list = document.getElementById('list')
var icon = document.getElementById('arrow')

select.onclick = function(){
    list.classList.toggle('hide');
    icon.classList.toggle('rotate')
}

for(option of options){
    option.onclick=function(){
        selecthead.innerHTML = this.textContent;
    }
}

