// functions in this file will be excluded from eslint checks
// to avoid compiling errors since javascript does not recognize
// cefsharp commands but they will be correctly interpreted by .NET

/* eslint-disable */
/* export function sendSomething(msg) {
  CefSharp.PostMessage(msg);
} */

export function sendToRevit(msg) {
  try {
    dotNetInterface.sendTextToRevit(msg);
  } catch (error) {
    console.log(error);
  }
}

//export function getSomething(msg) {
//    CefSharp.BindObjectAsync('boundAsync').then((result) => {
//        boundAsync.space('CefSharp').then((res) => {
//            return res;
//        })
//    })
//}

export async function getSomething() {
  try {
    await CefSharp.BindObjectAsync("boundAsync", "bound");

    boundAsync.space("CefSharp").then((result) => {
      return result;
    });
  } catch (error) {
    return error;
  }
}

// export function receiveFromRevit(message) {
//   document.getElementById("tbReceivedFromRevit").value = message;
// }
