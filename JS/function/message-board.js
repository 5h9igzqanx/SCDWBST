//击钮添li签
$('#btn').click(
    function(){
        //取文值
        let Name=$('#user').val()
        let Content=$('#Content').val()
        //断为本值？
        if(Name!='' && Content!=''){
            //得文值
            var msg=`<li>
                <div class="ctnt">
                    <span>${Name}</span>
                    <p>${Content}</p>
                </div>
            </li>`
            //添文值
            $('ul').append(msg);
            //删文值
            $('#user').val('')
            $('#Content').val('')
        }
    }
)