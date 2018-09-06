(function(){
  var items = [1,2,3,4]
  var writeHtml = function(){
    var len = items.length; 
    var lis = '';
    for(var i=0;i<len;i++){
      lis += `
            <li>
               <input class='check' type='checkbox'>
               <span>${items[i]}</span>
               <i class='icon' style='display: none;'>x</i>
             </li> 
           `
    }
    document.getElementById("list").innerHTML = lis;
  }
  writeHtml();
    //删除
  function m_over(){
      this.children[2].style.display = "";
  }
  function m_out() {
      this.children[2].style.display = "none";
  }
  function s_del() {
      this.parentNode.remove()
      items.splice(this.parentNode.index, 1)
  }

  function del (){
    var li = document.getElementsByTagName("li");
      for (var j = 0, len = li.length;j < len; j++){ 
        li[j].index = j; 
        li[j].addEventListener('mouseover', m_over)
        li[j].addEventListener('mouseout', m_out)
        li[j].children[2].addEventListener('click', s_del)
    };
  }
  del()
  //增加
    document.getElementById("set").onkeyup = function(e){
        console.log(e)
        if(e.which == 13){
            var res = this.value;
            items.push(res);
            var li = document.createElement('li');
            li.innerHTML = `
                    <input class='check' type='checkbox'>
                    <span>${res}</span>
                    <i class='icon' style='display: none;'>x</i>
                `
            document.getElementById("list").appendChild(li);
            let len = document.getElementById("list").children.length;
            document.getElementById("list").children[len - 1].addEventListener('mouseover', m_over);
            document.getElementById("list").children[len - 1].addEventListener('mouseout', m_out);
            document.getElementById("list").children[len - 1].children[2].addEventListener('click', s_del);
        }
    }
    //复选框
    var check = document.getElementsByClassName("check");
    for(var m = 0;m < check.length; m++){ 
        check[m].index = m;
        check[m].onclick = function(){
            this.checked ? this.parentNode.setAttribute("class", "active") : this.parentNode.setAttribute("class", "");
            // if(this.checked){
            //    this.parentNode.setAttribute("class","active")
            // }else{
            //     this.parentNode.setAttribute("class","")
            // }
        }
    }

})()
