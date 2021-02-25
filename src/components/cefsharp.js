export default function sendSomething(msg) {
    CefSharp.PostMessage(msg) // eslint-disable-line
}