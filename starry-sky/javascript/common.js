/**
 * Created by hspcadmin on 2016/5/13.
 */
var tg,tab;
function getTarget(event){//兼容IE获取事件目标
    return event.target||event.srcElement;
}
function $(variable){//设置返回DOM
    switch (variable.substr(0,1)){
        case '#':
            return document.getElementById(variable.substring(1));
        case '.':
            return document.getElementsByClassName(variable.substring(1));
    }

}
function toggleClass(t,b){//调用不同的星座
    tg=t;
    tab=b;
    if(tab.className.toString().indexOf("active")!=-1)
    {//已有星座展示时
        tab.className=' SVGList';
        setTimeout("tab.className=tg+' active SVGList';",1000);
    }
    else
    {//无星座展示时
        tab.className=tg+' active SVGList';
    }
}
document.getElementById("link").onclick=function(e){
    console.log(getTarget(e).getAttribute("tg"));
    switch (getTarget(e).getAttribute("tg")){
        case 'clear':
            $("#SVGList").className="SVGList";
            break;
        case 'Aries'://白羊
            toggleClass('Aries', $("#SVGList"));

            break;
        case 'Taurus'://金牛
            toggleClass('Taurus', $("#SVGList"));
            break;
        case 'Gemini'://双子
            toggleClass('Gemini', $("#SVGList"));
            break;
        case 'Cancer'://巨蟹
            toggleClass('Cancer', $("#SVGList"));
            break;
        case 'Leo'://狮子
            toggleClass('Leo', $("#SVGList"));
            break;
        case 'Virgo'://处女
            toggleClass('Virgo', $("#SVGList"));
            break;
        case 'Libra'://天秤
            toggleClass('Libra', $("#SVGList"));
            break;
        case 'Scorpius'://天蝎
            toggleClass('Scorpius', $("#SVGList"));
            break;
        case 'Sagittarius'://射手
            toggleClass('Sagittarius', $("#SVGList"));
            break;
        case 'Capricornus'://摩羯
            toggleClass('Capricornus', $("#SVGList"));
            break;
        case 'Aquarius'://水瓶座
            toggleClass('Aquarius', $("#SVGList"));
            break;
        case 'Pis才i ces'://双鱼
            toggleClass('Pisces', $("#SVGList"));
            break;
    }Aquarius
}