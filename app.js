
var x = document.getElementById('ul')
function sav(){
    var a = document.getElementById('inp')
    // var b = a.value       => won't work

    var li = document.createElement('li')        //createElement('li') sai list create hogi
    var li_value = document.createTextNode(a.value)    // input mai di gayi value list m banygi or phr
    li.appendChild(li_value)                     // isy ul mai dalengy tou as a list show hogi.            
    x.appendChild(li)                            // document.write ya innerHTML kam Nh krrh
    
    // b = ""   => won't work
    a.value = ""
    var butt = document.createElement("button")
    var butt_value = document.createTextNode("Remove")
    butt.appendChild(butt_value)             // won't work, untill you link it with li
    
    li.appendChild(butt)

    butt.setAttribute("onclick"," del(this) ")   // har task k sath srf ushi task ko remove krny klye.

    var edit = document.createElement("button")
    var edit_value = document.createTextNode("Edit")
    edit.appendChild(edit_value)
    li.appendChild(edit)

    edit.setAttribute("onclick", "edit(this)")   // edit button pr click hoty hi hi class banygi or 
                                                 // function chalyga edit() k naam sai.


    butt.setAttribute("class", "btn btn-primary  marg")
    edit.setAttribute("class", "btn btn-info")
}                                         

function del(e){
    e.parentNode.remove()

}

function delkrdo(){
    x.innerHTML = ""
}

function edit(e){
    // console.log(e.parentNode.firstChild.nodeValue )    => check krny klye console...   [jo chahye tha wohi ayi]
    // console.log(e)                                     => edit button aaya
    // console.log(e.parentNode)                          => poora li aagya ..... <li> edit </li>
    // console.log(e.parentNode.firstChild)               => 1st child is value, 2nd child is dlt butt & 3rd edit butt.
    // console.log(e.parentNode.firstChild.value)         => WRONG    > "" string m aarh tha
    // console.log(e.parentNode.firstChild.nodeValue)     => Right 

    var y = prompt("Edit your work", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = y

}

