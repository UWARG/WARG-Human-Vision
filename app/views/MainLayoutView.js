//This is an example Marionette view
//NOTE: you should not require jquery in your views, as you should only reference the elements inside the view which you can do with the ui property of the view
var Template=require('../util/Template');
/*
call your other dependencies here (for example if you need to listen to network events, call this)
var Network=require('../Netowrk'); 
then use the Network object inside your view
*/

module.exports=function(Marionette){

  return Marionette.ItemView.extend({
    template:Template('MainLayoutView'), //name of the file in the views folder at the project root
    className:'mainLayoutView', //this is the class name the injected div will have (refer to this class in your style sheets)

    ui:{ //any ui elements in the view that you would like to reference within your view logic
      something:".WARG" //you can now refer to the jquery wrapped element within the view with this.ui.an_element
    },

    //your custom jquery events
    //selector then the name of the callback function
    events:{
      "click .WARG": "clickCallback"
    },

    initialize: function(){
      //called when the view is first initialized (ie new ExampleView())
      this.timer = 0;
    },
    onRender:function(){
      //called right after a render is called on the view (view.render())

      setInterval(function(){
        this.timer++ ;
        this.ui.something.text('WARG' + this.timer);
      }.bind(this), 1000);
    },
    onBeforeDestroy:function(){
      //called just before destroy is called on the view
    },
    onDestroy:function(){
      //called right after a destroy is called on the view
    },

    clickCallback:function(event){ //will be fired when a user clicks on #an-example-element
      this.ui.something.text('You clicked on me!');
    }
  });
};