
var modalButton=document.getElementById("modalButton");

var launchModal=(function(){
    var modalWindow=document.createElement('div');
    modalWindow.id="dialog-box";
    document.body.appendChild(modalWindow);
  return function(confObj){
        var acceptFunction=function(){
            confObj.acceptCallback();
            alert("You click on confirm button")
        };
       var cancelFunction=function(){
           confObj.cancelCallback();
            alert("You click on cancel button");
            modalWindow.style.display='none';
         };

        var template = "<h1>{{title}}</h1><p>{{message}}</p> <button id='acceptCallback'>Accept</button> <button id='cancelCallback'>Cancel</button>";
        var html = Mustache.to_html(template, confObj);
        modalWindow.innerHTML=html;
        acceptCallback.addEventListener("click",acceptFunction);
        cancelCallback.addEventListener("click",cancelFunction);
        return modalWindow;
    }
})();

var dialogBox=launchModal({title:"Dialog Box Text",message:"new Message",acceptCallback:function(){console.log("accept")},cancelCallback:function(){console.log("cancel")}});
modalButton.addEventListener("click",function(){
    dialogBox.style.display='block';
});