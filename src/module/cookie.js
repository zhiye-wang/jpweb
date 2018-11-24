function getCookie(){
    var username = decodeURIComponent(document.cookie);
    var array = username.split('; ');
    console.log("test",array[2])
    var array_value;
    array_value =  array[2].split('=');
    // for(var i = 0;i<array.length ;i++){
    //     array_value =  array[i].split('=');
    //     /*if(array_value[0] === name){
    //         return array_value[1];
    //     }*/
    // }

    return array_value[1];
}

function setCookie(name,value,path,day){
    //将数组解析成字符串
    var str = encodeURIComponent(name)+'='+encodeURIComponent(value);
    if(path){
        str = str + '; path='+path;
    }
    if(day){
        var newDay = new Date();
        newDay.setDate(newDay.getDate + day);
        str = str + '; expires='+ day;
    }
    document.cookie = str;
}

function removeCookie(name,path){
    setCookie(name,'',path,-1);
}


export {
    getCookie,
    setCookie,
    removeCookie
}

