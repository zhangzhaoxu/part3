function MaskQRCode(opt) {
    this.option = opt;
    this.__init();
}
var p = MaskQRCode.prototype;

p.__init = function () {
    var _this = this;
    _this.__initData();
    _this.__initMask();
    _this.__initQRCode();
    _this.option.callback();
};

p.__initData = function () {
    this.loading_screen = null;
    this.qrcode = null;
};

p.__initMask = function () {
    var _this= this;
    _this.loading_screen =pleaseWait({
        backgroundColor: 'rgba(0,0,0,0.5)',
        loadingHtml: "<div style='margin-bottom: 10%'>" +
        "<div style='margin-left: 45%;margin-bottom: 20px' id='qrcode'></div>" +
        "<input type='button' id='closeBtn' value='close'>" +
        "</div>"
    });

    document.getElementById("closeBtn").addEventListener("click", function () {
        _this.loading_screen.finish();
    })
};

p.__initQRCode = function () {
    this.qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "http://jindo.dev.naver.com/collie",
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
};
