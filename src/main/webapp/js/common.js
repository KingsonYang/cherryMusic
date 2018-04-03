/**
 * Created by hs on 2018.4.17.
 */
/*添加cookie*/
function setCookie(name,value,outTime){
    var expdate=new Date();
    var outms=outTime*60*60;//过期时间，以天为单位‘1’表示一天
    expdate.setTime(expdate.getTime()+outms);
    var cookieStr=name+"="+escape(value)+";expires="+expdate.toGMTString();
    //escape方法的作用是进行编码，主要防止value中有特殊字符
    document.cookie=cookieStr;
}
/*删除cookie
 cookie的删除并不是物理意义上的直接删除，
 而是将cookie的有效期设置为失效，然后由浏览器删除失效的cookie删除
 */
function deleteCookie(cookiename){
    var date = new Date();
    var outTime=date.getTime()-1000;//将cookie的有效期设置为失效
    date.setTime(outTime);
    document.cookie=cookiename+"='';expires="+date.toGMTString();
}
/*读取cookie*/
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}