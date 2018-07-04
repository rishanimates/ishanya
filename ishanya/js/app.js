$(function (){
      hljs.initHighlightingOnLoad();
      var viewIntro = function(cls) {
          var myNode = document.getElementById("panel");
          myNode.style.display = cls;
          if(cls === "none"){            
            while(myNode.hasChildNodes())
            {
               myNode.removeChild(myNode.lastChild);
            }
          }else if(document.getElementById("intro_vid") === null){
            var node = document.createElement("a"); 
            //var textnode = document.createTextNode("X");
            //node.appendChild(textnode);
            node.setAttribute("onclick", "viewIntro('none')");
            node.setAttribute("href", "#");
            myNode.append(node);
            node = document.createElement("iframe"); 
            node.setAttribute("id", "intro_vid");
            node.setAttribute("class", "yt-iframe");
            node.setAttribute("allowfullscreen", "");
            node.setAttribute("gesture", "media");
            node.setAttribute("frameborder", "0");
            node.setAttribute("src", "https://www.youtube.com/embed/8VcTL2bXCfc?autoplay=1&controls=0&showinfo=0&rel=0");
            myNode.append(node);
          }
      };
      window.hideIntro = function(elem){
        $(elem).textillate('stop');
        $(elem).fadeOut();
      };

      
        window.addEffect = function(params){
          params = params ? params : {};
          $('.tlt').textillate({
            // the default selector to use when detecting multiple texts to animate
            selector: '.texts',

            // enable looping
            loop: false,

            // sets the minimum display time for each text before it is replaced
            minDisplayTime: params.minDisplayTime ? params.minDisplayTime : 1000,

            // sets the initial delay before starting the animation
            // (note that depending on the in effect you may need to manually apply
            // visibility: hidden to the element before running this plugin)
            initialDelay: 0,

            // set whether or not to automatically start animating
            autoStart: true,

            // custom set of 'in' effects. This effects whether or not the
            // character is shown/hidden before or after an animation
            inEffects: [],

            // custom set of 'out' effects
            outEffects: [ 'hinge' ],

            // in animation settings
            in: {

              // set the effect name
              effect: 'fadeInDown',

              // set the delay factor applied to each consecutive character
              delayScale: 0.5,

              // set the delay between each character
              delay: 10,

              // set to true to animate all the characters at the same time
              sync: true,

              // randomize the character sequence
              // (note that shuffle doesn't make sense with sync = true)
              shuffle: false,

              // reverse the character sequence
              // (note that reverse doesn't make sense with sync = true)
              reverse: false,

              // callback that executes once the animation has finished
              callback: params && params.callback ? params.callback() : function () {}
            },

            // out animation settings.
            out: {
              effect: params.effect ? params.effect : 'flipOutX',
              delayScale: params.outDelayScale ? params.outDelayScale : 0.2,
              delay: params.outDelay ? params.outDelay : 150,
              sync: params.sync ? params.sync : false,
              shuffle: params.shuffle ? params.shuffle : false,
              reverse: params.reverse ? params.reverse : false,
              callback: function () {}
            },

            // callback that executes once textillate has finished
            callback: function () {},

            // set the type of token to animate (available types: 'char' and 'word')
            type: params.animateType ? params.animateType : 'char'
          });
        };
        var tripData = [{
            id:"ishanya",
            minDisplayTime:1000,
            title:"Ishanya - The Road Trip",
            desc:"It has been six years since I bought my first car – Xylo (Popularly known as Air Xylo). Since then, flight has never been an option for me. I have driven from Kashmir to Kanyakumari. I have even travelled to some isolated places in India where no driver would dare to go. Driving and Travelling is not just a passion for me, it is more than that. Wandering to North East was always on my mind. Can’t wait to step on the peddle as Ishanya, is not just any other road trip, but it is going to be a life changing experience!",
            image:"http://foodandadventure.com/ishanya/images/ishanya_full.png",
            name:"ISHANYA",
            link:"https://twitter.com/foodandadventure"
          }, {
            id:"rhushi",
            minDisplayTime:500,
            title:"Rhushi - A hardcore traveller with a beast (Xylo)!",
            desc:"It has been six years since I bought my first car – Xylo (Popularly known as Air Xylo). Since then, flight has never been an option for me. I have driven from Kashmir to Kanyakumari. I have even travelled to some isolated places in India where no driver would dare to go. Driving and Travelling is not just a passion for me, it is more than that. Wandering to North East was always on my mind. Can’t wait to step on the peddle as Ishanya, is not just any other road trip, but it is going to be a life changing experience!",
            image:"http://foodandadventure.com/ishanya/images/ishanya_full.png",
            name:"Rhushiraj Patil",
            link:"https://twitter.com/rishanimates"
          }, {
            id:"vaibhav",
            minDisplayTime:500,
            title:"Vaibhav - A hardcore traveller with a beast (Xylo)!",
            desc:"It has been six years since I bought my first car – Xylo (Popularly known as Air Xylo). Since then, flight has never been an option for me. I have driven from Kashmir to Kanyakumari. I have even travelled to some isolated places in India where no driver would dare to go. Driving and Travelling is not just a passion for me, it is more than that. Wandering to North East was always on my mind. Can’t wait to step on the peddle as Ishanya, is not just any other road trip, but it is going to be a life changing experience!",
            image:"http://foodandadventure.com/ishanya/images/ishanya_full.png",
            name:"Rhushiraj Patil",
            link:"https://twitter.com/rishanimates"
          }, {
            id:"amol",
            minDisplayTime:500,
            title:"Amol - A hardcore traveller with a beast (Xylo)!",
            desc:"It has been six years since I bought my first car – Xylo (Popularly known as Air Xylo). Since then, flight has never been an option for me. I have driven from Kashmir to Kanyakumari. I have even travelled to some isolated places in India where no driver would dare to go. Driving and Travelling is not just a passion for me, it is more than that. Wandering to North East was always on my mind. Can’t wait to step on the peddle as Ishanya, is not just any other road trip, but it is going to be a life changing experience!",
            image:"http://foodandadventure.com/ishanya/images/ishanya_full.png",
            name:"Rhushiraj Patil",
            link:"https://twitter.com/rishanimates"
          }, {
            id:"nikhil",
            minDisplayTime:500,
            title:"Nikhil - A hardcore traveller with a beast (Xylo)!",
            desc:"It has been six years since I bought my first car – Xylo (Popularly known as Air Xylo). Since then, flight has never been an option for me. I have driven from Kashmir to Kanyakumari. I have even travelled to some isolated places in India where no driver would dare to go. Driving and Travelling is not just a passion for me, it is more than that. Wandering to North East was always on my mind. Can’t wait to step on the peddle as Ishanya, is not just any other road trip, but it is going to be a life changing experience!",
            image:"http://foodandadventure.com/ishanya/images/ishanya_full.png",
            name:"Rhushiraj Patil",
            link:"https://twitter.com/rishanimates"
          }];

          var introNumber=0;
          window.startIntro = function(){
            var el= $(".intro");
            $('.tlt').textillate('stop');
              if(el && el[0]){
                el.fadeIn(1000);
              }
              var textEl= $("#intro-container");
              textEl.empty();
              var introObj = tripData[introNumber];
              if(introObj){
                textEl.append('<li class="intro-title">'+introObj.title+'</li><li>'+introObj.desc+'</li>');
                setTimeout(function(){
                  window.addEffect({
                    minDisplayTime:introObj.minDisplayTime,
                    callback:function(){
                      console.log(introNumber +"<"+ tripData.length);
                      if(introNumber < tripData.length){
                        introNumber++;
                        startIntro();
                      }
                    }
                  });
                }, 5000);
              }
          };
          window.startIntro();
          window.viewSiteIntro = function(timeout){
            var timeout = timeout ? timeout : 1000;
            setTimeout(function(){
              var el= $(".intro");
              if(el && el[0]){

                window.addEffect();
                el.fadeIn(timeout);
              }
            }, timeout);
          };


          //window.viewSiteIntro();
          window.openSiteIntro = function(timeout, elem){
            var el= $(".intro");
            if(el && el[0]){ 
              $(".tlt").textillate('start');
              el.fadeIn(timeout);
            }
          };
      });