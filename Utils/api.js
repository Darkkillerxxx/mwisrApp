import Convert from "./System/System.Convert";
import RSA from "./System/System.Security.Cryptography.RSA";
import Text from "./System/System.Text";

const base_url_wealthyFox="https://wfanalytics.mwisr.com//api//"
const base_url_Mwisr="https://wfanalytics.mwisr.com//api//"

const endpoint_url={
    login: base_url_wealthyFox+"Authentication/Login/"
}

const headers = {
    Accept: "*/*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: "",
    "Allow-Encoding": "gzip",
    SendOutputAs: "CSV",
    "SessionCookie":"",
    "set-cookie":""
  };

  function setHeaders(requestObj, headers) {
    Object.keys(headers).forEach(function(header) {
      requestObj.setRequestHeader(header, headers[header]);
    });
  
    return requestObj;
  }

  function parseHttpHeaders(httpHeaders) {
    return httpHeaders.split("\n")
     .map(x=>x.split(/: */,2))
     .filter(x=>x[0])
     .reduce((ac, x)=>{ac[x[0]] = x[1];return ac;}, {});
  }

  function createGETParams(params) {
    if (Object.keys(params).length === 0) return "";
    let getP = "?";
    if (Object.keys(params).length !== 0)
      Object.keys(params).forEach((key, idx, array) => {
        if (idx === array.length - 1) {
          return (getP = `${getP}${key}=${params[key]}`);
        }
        getP = `${getP}${key}=${params[key]}&`;
      });
    else getP = "";
    console.log();
    return getP;
  }

  function encrypt(plainText) {
    console.log("PlainHeader",plainText)
    const publicKey =
      "<RSAKeyValue><Modulus>zlcerOOBqrOe7A+MfzejQWFey6isLo46KMMOzrVUgeIVhqL048SjZiXxBC2k7/KR21smJTrmOKqwTh2wYQdon1ilkeHU75OBu8uiAWtJ2FPkOvx8yyWKTjDiHe0p/Ghr09NUpFZMnBZz0V62ND4YOhIZRz54QMAFkKDiVcKysHVZQ8r2gS4GUSSOHFMdw/OqpHspHcRdIV8a/+kvbP89nScfvhy7Z+/KPLi1JRpNL9V1qsz8oByKmhovSW06liVMIW044q+cJlHyWJS4+UEmMAJ34AVhj0/VobRP6ZOkZk74YOlOgCxo1PFAMiMXoB6yFqnUtZT1iixPlf63jE4MCQ==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>";
  
    let rsa = new RSA.RSACryptoServiceProvider(2048);
    rsa.FromXmlString(publicKey);
    console.log("RSA KEY",rsa)
  
    let ByteConverter = new Text.UnicodeEncoder();
    let ptbyt = ByteConverter.GetBytes(plainText);
  
    let encrypt = rsa.Encrypt(ptbyt, false);
  
    let encryptedBase64 = Convert.ToBase64String(encrypt);
    return Convert.ToBase64String(
      Text.Encoding.Unicode.GetBytes(encryptedBase64)
    );
  }

 
  export function CheckWhereToGo(location){
    switch(location)
    {
        case "VO":
            return "OTP"

        case "DB":
            return "Home"

        case "IU":
            return "Onboarding"

        case "CD":
            return "Onboarding"

        case "RD":
            return "Onboarding"

        case "CO":
            return "Onboarding"
        
        case "CC": 
            return "Onboarding"

        case "Q1":
              return "Onboarding"

        case "Q2":
              return "Onboarding"

        case "Q3":
          return "Onboarding"
  
        default:
            return null;
    }
}


  export function GetAuthHeader(
    emailId = "",
    password = "",
    mobileNo = "",
    accessToken="",
    headers = [],
    verbose = false
  ) {
    //Extract Header values -> {0}:web:{2}:{3}:{4}:{5}:{6}:{7}:{8}:{9}", EmailId,Role,PinNo,Password,TrackingNo,MobileNo,Version Code,Version Name,Audiance
  //   Header Format -> {0}:{1}:{2}:{3}:{4}:{5}:{6}:{7}:{8}"
  
  // 0 1 2 3 4 5 6 7 8
  // EmailId,Device,PinNo,Password,AccessToken,MobileNo,VersionCode,VersionName,Audiance
    
    let _auth =
      emailId +
      ":Web" +
      ':12345' +
      ':'+password +
      ":" + accessToken +
      ":" +mobileNo +
      ":0:Test Version:Mwisr";
    console.log("277 auth",_auth)
      // let _auth =
      // emailId 
      // + ":WEB" 
      // + ':"":' +  password
      // + ":123456789"
      // + ":" +  mobileNo 
      // + ":0:Test Version"
      // + ":" + sessionId
      // + ":Mwisr";
  
    if (verbose) console.log("plain Text ", _auth);
  
    const encrypted = encrypt(_auth);
  
    if (verbose) console.log(encrypted);
    let _cred = "Basic " + encrypted;
    return _cred;
  }

  export function apiCall(url, method, params, authHeader, isForm = false) {
    let SessionCookie;
    function work(resolve, reject) {
      // setTimeout(()=>{
      const isGet = method === "GET" || method === "get";
  
      url = isGet ? url + createGETParams(params) : url;
      var httpx = new XMLHttpRequest();
      httpx.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          resolve(this.response);
          if(url.includes("/Login"))
          { 
            console.log("282","In Login")
            SessionCookie=parseHttpHeaders(httpx.getAllResponseHeaders())
          // SessionCookie=SessionCookie['sessioncookie']
            
            headers["set-cookie"]=`name=SessionCookie;value=${SessionCookie['set-cookie']}` 
            // headers["SessionCookie"]=`name=SessionCookie;value=0211f238-4ffc-4d19-9927-a255a39b6796`    
            // Key:SessionCookie,Value:0211f238-4ffc-4d19-9927-a255a39b6796
            // 0211f238-4ffc-4d19-9927-a255a39b6796 
            console.log("Api",SessionCookie)
          }
        }
        else if(this.readyState === 4 && this.status === 401)
        {
        //   console.log("Session Invalid")
        //   // let failresponse={
        //   //           IsSuccess:false,
        //   //           Msg:"Session Invalid",
        //   //           Code:401
        //   // }  
        //   // resolve(JSON.stringify(failresponse)) 
        //   store.dispatch(changeErrorCode(401))
        }
        else if(this.readyState === 4 && this.status === 500)
        {
        //   console.log("Session Invalid")
        //   // let failresponse={
        //   //           IsSuccess:false,
        //   //           Msg:"Session Invalid",
        //   //           Code:401
        //   // }  
        //   // resolve(JSON.stringify(failresponse)) 
        //   store.dispatch(changeErrorCode(500))
        }
      };
      httpx.onerror = reject;
      httpx.open(method, url, true);
      headers["Authorization"] = authHeader;
      
  
      if (isForm) headers["Content-type"] = "application/x-www-form-urlencoded";
      
      httpx = setHeaders(httpx, headers);
      httpx.timeout = 600000;
      httpx.send(JSON.stringify(params));
      
      httpx.timer = 0;
      httpx.limit = 5;
      httpx.onerror = function(e) {
        console.log("Network error", this.timer, this.limit);
        // while (this.timer <= this.limit) {
        //   setTimeout(() => {
        //     apiCall(url, method, params, authHeader);
        //     this.timer++;
        //   }, 1000);
        // }
        //apiCall(url, method, params, authHeader);
      };
  
      httpx.ontimeout = function(e) {
        console.log("Timeout");
        // while (this.timer <= this.limit) {
        //   setTimeout(() => {
        //     apiCall(url, method, params, authHeader);
        //     this.timer++;
        //   }, 3000);
        // }
      };
      // }, 5000);
    }
    return new Promise(work);
  }


  export function login_call(data) {
    let authHeader = GetAuthHeader(data["EMailId"], data["Password"],data["Phone"]);
    console.log(data)
    console.log(authHeader);
    return apiCall(endpoint_url["login"], "POST", data, authHeader)
      .then(response => JSON.parse(response))
      .catch(err => {
        console.log(err);
      });
  }