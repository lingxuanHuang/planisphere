/**
 * Created by hspcadmin on 2016/5/13.
 */
var tg,tab;
function getTarget(event){//����IE��ȡ�¼�Ŀ��
    return event.target||event.srcElement;
}
function $(variable){//���÷���DOM
    switch (variable.substr(0,1)){
        case '#':
            return document.getElementById(variable.substring(1));
        case '.':
            return document.getElementsByClassName(variable.substring(1));
    }

}
function toggleClass(t,b){//���ò�ͬ������
    tg=t;
    tab=b;
    if(tab.className.toString().indexOf("active")!=-1)
    {//��������չʾʱ
        tab.className=' SVGList';
        setTimeout("tab.className=tg+' active SVGList';",1000);
    }
    else
    {//������չʾʱ
        tab.className=tg+' active SVGList';
    }
}
document.getElementById("link").onclick=function(e){
    console.log(getTarget(e).getAttribute("tg"));
    switch (getTarget(e).getAttribute("tg")){
        case 'clear':
            $("#SVGList").className="SVGList";
            break;
        case 'Aries'://����
            toggleClass('Aries', $("#SVGList"));

            break;
        case 'Taurus'://��ţ
            toggleClass('Taurus', $("#SVGList"));
            break;
        case 'Gemini'://˫��
            toggleClass('Gemini', $("#SVGList"));
            break;
        case 'Cancer'://��з
            toggleClass('Cancer', $("#SVGList"));
            break;
        case 'Leo'://ʨ��
            toggleClass('Leo', $("#SVGList"));
            break;
        case 'Virgo'://��Ů
            toggleClass('Virgo', $("#SVGList"));
            break;
        case 'Libra'://���
            toggleClass('Libra', $("#SVGList"));
            break;
        case 'Scorpius'://��Ы
            toggleClass('Scorpius', $("#SVGList"));
            break;
        case 'Sagittarius'://����
            toggleClass('Sagittarius', $("#SVGList"));
            break;
        case 'Capricornus'://Ħ��
            toggleClass('Capricornus', $("#SVGList"));
            break;
        case 'Aquarius'://ˮƿ��
            toggleClass('Aquarius', $("#SVGList"));
            break;
        case 'Pis��i ces'://˫��
            toggleClass('Pisces', $("#SVGList"));
            break;
    }Aquarius
}