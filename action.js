var head=document.getElementsByTagName("h1")[0];
head.innerHTML="0";
var key=0;
for(var i=0;i<16;i++)
{
    document.getElementsByClassName("item")[i].addEventListener("click",print);
}
function print()
{
    if(key==0)
    {
        key=1;
        head.innerHTML="";
    }
    var text=this.innerHTML;
    head.innerHTML=head.innerHTML+text;
    if(this.innerHTML=='=')
    {
        var a="";
        var b="";
        var k=0;
        var operator="";
        var str=head.innerHTML;
        for(var j=0;j<str.length;j++)
        {
            if(str[j]=='+' || str[j]=='-'||str[j]=='*'||str[j]=='/')
            {
                operator=str[j];
                k=1;
            }
            else if(k==0)
            {
                a=a+str[j];
            }
            else{
                b=b+str[j];
            }
        }
        a=parseInt(a);
        b=parseInt(b);
        str=0;
        switch(operator)
        {
            case '+':
                str=a+b;
                break;
            case '-':
                str=a-b;
                break;
            case '*':
                str=a*b;
                break;
            case '/':
                str=Math.floor(a/b);
                break;
        }
        head.innerHTML=str.toString();
    }
}