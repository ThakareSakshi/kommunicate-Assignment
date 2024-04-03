function getUrlParameterValue(url, parameter) {
     var newUrl=new URL(url);
     paramValue= newUrl.searchParams.get(parameter);
     console.log(paramValue);
     return paramValue;
    } 

    getUrlParameterValue(`https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/
    &u tm_medium=webplugin&utm_campaign=poweredby`, "utm_campaign"); 