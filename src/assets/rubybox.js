/**
 * RUBYBOX JQUERY PLUGINS
 * @package         RubyBox
 * @author          HaiBach
 * @link            http://
 * @version         1.0
 */


;(function($) {
'use strict';


/**
 * BIEN TOAN CUC TRONG JS
 */
if( !window.rb01MODULE ) window.rb01MODULE = {};
if( !window.rb01VA )

    window.rb01VA = {
        codeName    : 'rubybox',
        codeData    : 'options',
        namespace   : 'rb01'
    };




/**
 * CODE MAIN SETUP
 */
$[rb01VA.codeName] = function($link, o) {

    /* BIEN CHUNG : DE QUAN LY VA SAP XEP
    --------------------------------------------------------------------- */
    var va = {
        $self   : $link,                                // Luu tru doi tuong link
        codekey : Math.ceil( Math.random()*1e9 ),       // Moi link co 1 codekey rieng biet
        ev      : $('<div/>'),                          // Event trigger: beforeOpen, afterOpen, beforeClose, afterClose
        o       : o                                     // Luu tru options cua code
    };






    /**
     * INIT : FUNCTION SETUP
     */
    var INIT = function() {
        M.checkInit();                                  // Kiem tra luc ban dau

        // Kiem tra link hop le
        if( va.href == null || va.content == null ) {
            PROP.init();                                // Setup cac bien ban dau
            RENDER.codeMain();                          // Render codeMain
            PROP.classSupport();                        // Setup thuoc tinh sau khi render main code
            PROP.vaUpdate();                            // Setup cac bien thay doi khi update cac options

            EVENTS.begin();                             // Dang ki event cho link
            EVENTS.keyboard();                          // Dang ki event keyboard
        }
    },










    /**
     * SHORT METHODS
     */
    M = {

        // KIEM TRA LUC BAN DAU
        checkInit : function() {
            var that = this;

            // Kiem tra da render code main chua
            va.isOpacity = that.testCSS('opacity');
            va.isTf3D    = that.testCSS('perspective');     // Da~ test thanh cong!
            va.isTs      = that.testCSS('transition');
            va.prefixTf  = that.prefix('transform');
            va.prefixTs  = that.prefix('transition');


            // Kiem tra href va content cua link
            va.href = (o.href != null) ? o.href
                                       : !!$link.attr('href') ? $link.attr('href') : null;
            va.content = (o.content != null) ? o.content
                                             : !!$link.data('content') ? $link.data('content') : null;
        },


        // TU DONG KIEM TRA TYPE CUA LINK
        autoCheckType : function() {
            var classContent = va.ns +'content';

            // Function kiem tra type cua link
            var fnTest = function(re, type) {
                    if( va.type == null ) {
                        if( re == null ) va.type = type;
                        else {
                            var test = va.href.match(re);
                            if( test != null && !!test[0] ) va.type = type;
                        }
                    }
                };

            // Truong hop co va.href
            if( va.href != null ) {

                // Loai bo khoang trang truoc va sau cua href
                va.href = va.href.replace(/(^\s+|\s+$)/g, '');
                // Truong hop chi dinh san type
                va.type = (o.type == 'auto') ? null : o.type;

                // Kiem tra truong hop type 'image' truoc
                fnTest(/\.(jpg|jpeg|png|gif|ico)$/g, 'image');
                // Kiem tra truong hop type 'inline' ke tiep
                fnTest(/^(\#|\.\w+)/gi, 'inline');
                if( va.type == 'inline' ) va.$content = $(va.href).addClass(classContent);
            }

            // Truong hop co va.content != null --> type la 'html'
            else fnTest(null, 'html');

            // Truong hop con lai la 'media'
            fnTest(null, 'media');
        },





        /**
         * KIEM TRA BROWSER CO HO TRO STYLE CSS
         */
        // Loai bo dau '-' --> vi du 'abc-def' tra lai ket qua 'abcDef'
        camelCase : function(prop) {
            return prop.replace(/-([a-z])/gi, function(m, prop) {
                return prop.toUpperCase();
            });
        },

        // MAIN TEST CSS
        testCSS : function(prop, isPrefix) {
            // Bien khoi tao va shortcut ban dau
            var style  = document.createElement('p').style,
                vender = 'Webkit Moz ms O'.split(' '),
                prefix = '-webkit- -moz- -ms- -o-'.split(' ');

            // Truoc tien kiem tra style khong co' vender
            var styleCase = this.camelCase(prop);
            if( style[styleCase] != undefined ) return (isPrefix ? '' : true);


            // Tiep tuc kiem tra neu co' vender
            // Dau tien chuyen doi style thanh Upper --> vi du 'flex-wrap' thanh 'FlexWrap'
            var preStyle = styleCase.charAt(0).toUpperCase() + styleCase.slice(1);
            // Kiem tra tung vender
            for( var i = 0, len = vender.length; i < len; i++ ) {
                if( style[vender[i] + preStyle] != undefined ) return (isPrefix ? prefix[i] : true);
            }

            // Tra lai ket qua false neu khong ho tro
            return false;
        },

        // PREFIX CUA STYLE CSS
        prefix : function(prop) { return this.testCSS(prop, true) },




        /**
         * SETUP KHAC
         */
        isNum : function(a) { return typeof a == 'number' },

        /**
         * SETUP TRANSFORM TREN BOX
         */
        tf : function(arr) {
            var tf = {}, str = '';

            // Hinh anh, text bi co gian khi Transform trong Chrome 47
            if( arr[0] != null ) str += 'translate3d('+ arr[0] + 'px,'+ arr[1] + 'px,0) ';
            if( arr[2] != null ) str += 'scale('+ arr[2] +','+ arr[3] + ') ';

            tf[va.prefixTf +'transform'] = str;
            return tf;
        }
    },










    /**
     * PROPERTIES
     */
    PROP = {

        // CAC BIEN SETUP LUC KHOI TAO
        init : function() {
            // Kiem tra options tren DOM
            var nameData = rb01VA.codeData,
                optOnDom = $link.data(nameData);

            // Dam bao chuyen doi options tren DOM thanh json
            if( typeof optOnDom == 'string' ) {
                // Thay the dau phay ke'p thanh dau' pha?y don
                optOnDom = optOnDom.replace(/\u0027/g, '\u0022');
                optOnDom = $.parseJSON(optOnDom);
            }
            optOnDom = $.isPlainObject(optOnDom) ? optOnDom : {};

            // Options cua code: su ket hop 'options-default' + 'options-json' + 'options-dom'
            va.o = o = $.extend(true, o, optOnDom);
            // Loai bo attribute data tren DOM
            $link.removeAttr('data-'+ nameData);


            // Bien setup
            va.ns = rb01VA.namespace;
            va.actived = va.ns +'actived';
            // Class Tam thoi cho wrap --> thay doi di open va close wrap
            va.classTemp = ' ';

            // Kiem tra type cua link
            M.autoCheckType();

            // So luong $link da duoc setup
            if( !rb01VA.nLink ) rb01VA.nLink = 1;
            else rb01VA.nLink++;

            // Setup cac ten event
            var suffix = '.'+ va.ns + va.codekey;
            va.evName = {
                'click'     : 'click' + suffix,
                'resize'    : 'resize'+ suffix,
                'key'       : 'keyup' + suffix
            }
        },


        /**
         * CHEN CLASS HO TRO CAC TINH NANG TRONG PLUGIN
         */
        classSupport : function() {

            // Setup class mac dinh cho wrap
            var classOpacity = va.ns + (va.isOpacity ? '' : 'no-') + 'opacity',
                classTs      = va.ns + (va.isTs ? '' : 'no-') + 'transition';
 
            va.$wrap.addClass(classOpacity +' '+ classTs);
        },


        // CAC BIEN SE THAY DOI KHI UPDATE OPTIONS
        vaUpdate : function() {

            // Class thong bao tinh nang tren Wrap, co the thay doi khi update
            var ns        = ' '+ va.ns,
                classFs   = o.isFullscreen ? ns + 'fullscreen' : '',
                classFx   = o.fx != null ? (ns +'fx-'+ o.fx) : '', 
                classType = ns +'type-'+ va.type,
                // Them vao more class de style tuy y
                classMore = o.classMore != null ? (' '+ o.classMore) : '';

            // Class them vao cho wrap
            va.wrapClass = classFs + classFx + classType + classMore;
            va.$wrap.addClass(va.wrapClass);
            

            // Margin : chuyen sang 4 gia tri array[top, right, bottom, left]
            var m = o.margin;
            va.m = [0, 0, 0, 0];
            if( M.isNum(m) ) va.margin = [m, m, m, m];
            if( $.isArray(m) && M.isNum(m[0]) && M.isNum(m[1]) && M.isNum(m[2]) && M.isNum(m[3]) ) va.margin = m;


            // Chen thuoc tinh hieu u'ng cho outer va inner
            if( va.isTs ) {
                if( o.fx == 'zoom' ) {
                    var speed = ' '+ o.speed/1000 +'s', ts = {};

                    // Thuoc tinh transition cho outer
                    ts[va.prefixTs +'transition'] = va.prefixTf +'transform'+ speed +', opacity'+ speed;
                    ts[va.prefixTf +'transform-origin'] = '0 0';
                    va.$outer.css(ts);
                }
            }
        }
    },










    /**
     * RENDER
     */
    RENDER = {

        codeMain : function() {
            var ns   = va.ns,
                html = o.html.main.replace(/\{ns\}/g, ns);


            // Chen html vao trang
            $('body').append(html);

            // Luu tru doi tuong trong codeMain
            va.$wrap = $('.'+ ns +'wrap');
            va.$outer = $('.'+ ns +'outer');
            va.$inner = $('.'+ ns +'inner');
            // va.$control = $('.'+ ns +'control');

            // Setup thanh phan placeholder
            va.$holder = $('<div class="'+ ns + 'holder"></div>');
            // Setup thanh phan button close
            va.$close = $( o.html.close.replace(/\{ns\}/g, ns) );

            // Chen cac thanh phan khac vao Control
            RENDER.appendToInner();

            // Remove wrap sau khi luu tru cac thanh phan
            va.$wrap.detach();
        },


        // Setup cac thanh phan truoc khi open wrap
        beforeOpen : function() {

            // Thanh phan content
            // Truong hop la 'inline'
            if( va.type == 'inline' ) {
                
                // Luu vi tri cua doi tuong inline trong DOM
                va.$content.after(va.$holder).appendTo(va.$inner);
            }

            // Chen wrap vao body
            va.$wrap.appendTo($('body'));
        },


        // Setup lai cac thanh sau khi close wrap
        afterClose : function() {

            // Loai bo wrap khoi body
            va.$wrap.detach();

            // Thanh phan content
            // Truong hop la 'inline'
            if( va.type == 'inline' ) {

                // Phuc hoi vi tri cua content
                va.$holder.after(va.$content).detach();
            }
        },


        // Chen cac button vao inner
        appendToInner : function() {

            if( !!o.isBtnClose ) va.$close.appendTo(va.$outer);
            else                 va.$close.detach();
        }
    },










    /**
     * LAYOUT : KICH THUOC + VI TRI
     */
    LAYOUT = {

        /**
         * SETUP KICH THUOC VA VI TRI TRUOC KHI WRAP OPEN
         */
        beforeOpen : function() {

            /**
             * LOAI BO EVENT SCROLL TREN BODY
             *  + Quan trong: phia tren lay kich thuoc Browser
             */
            var wScreenFirst = $(window).width();
            $('body').addClass(va.ns +'lock');
            var wScreenLast = $(window).width();
            if( wScreenLast > wScreenFirst ) $('body').addClass(va.ns +'lock-scroll');



            /**
             * SETUP KICH THUOC
             */
            // Kich thuoc cua screen browser
            va.screenW = wScreenLast;
            va.screenH = $(window).height();

            // Kich thuoc va` vi tri cua inner
            LAYOUT.innerBeforeOpen();
        },


        /**
         * LAY KICH THUOC CUA INNER
         */
        innerBeforeOpen : function() {
            // Ho tro do vi phan tran (so nho hon 1)
            var width  = (o.width <= 1) ? va.screenW * o.width : o.width,
                height = (o.height <= 1) ? va.screenH * o.height : o.height,
                margin = va.margin;

            // Truong hop fullscreen
            if( !!o.isFullscreen ) {
                width  = va.screenW;
                height = va.screenH;
                margin = [0, 0, 0, 0];
            }

            // Setup kich thuoc va vi tri chung
            // Tim kiem inner Width
            if( va.screenW - width - margin[1] - margin[3] >= 0 )
                 va.innerW = width;
            else va.innerW = va.screenW - margin[1] - margin[3];
            
            // Tim kiem inner Height
            if( va.screenH - height - margin[0] - margin[2] >= 0 )
                 va.innerH = height;
            else va.innerH = va.screenH - margin[0] - margin[2];

            // Vi tri cua outer
            va.outerX = Math.floor((va.screenW - va.innerW)/2);
            va.outerY = Math.floor((va.screenH - va.innerH)/2);
        },


        /**
         * SETUP KICH THUOC VA VI TRI TRUOC KHI WRAP CLOSE
         */
        afterClose : function() {

            // Loai bo class actived cho wrap
            // Loai bo class tam thoi cho wrap
            va.$wrap.removeClass(va.actived + va.classTemp);
            // Loai bo class actived cho link
            $link.removeClass(va.actived);

            // Phuc hop lai scroll event tren body
            $('body').removeClass(va.ns +'lock '+ va.ns +'lock-scroll');
        }
    },










    /**
     * HIEU UNG
     */
    FX = {

        /**
         * SETUP HIEU UNG TRUOC KHI OPEN WRAP
         */
        beforeOpen : function() {

            /**
             * SETUP HIEU UNG ZOOM
             */
            if( va.isTf3D && o.fx == 'zoom' ) {

                /**
                 * XAC DINH VI TRI + KICH THUOC CUA DOI TUONG LINK
                 */
                va.linkW = $link.outerWidth();
                va.linkH = $link.outerHeight();
                va.linkWRatio = (va.linkW/va.innerW).toFixed(3);
                va.linkHRatio = (va.linkH/va.innerH).toFixed(3);
                va.linkX = Math.round( $link.offset().left - $(window).scrollLeft() );
                va.linkY = Math.round( $link.offset().top - $(window).scrollTop() );

                // Setup kich thuoc cho inner truoc
                va.$inner.css({ 'width': va.innerW, 'height': va.innerH });                    

                // Setup vi tri va kich thuoc outer/inner == kich thuoc vi tri cua link
                va.tfLast = M.tf([ va.linkX, va.linkY, va.linkWRatio, va.linkHRatio ]);
                va.tfLast['opacity'] = 0;
                va.$outer.css(va.tfLast);



                /**
                 * SETUP TIMER DE THUC HIEN HIEU UNG
                 */
                setTimeout(function() {
                    var tf = M.tf([va.outerX, va.outerY, 1, 1]);

                    tf['opacity'] = 1;
                    va.$outer.css(tf);
                }, 4);

                // Them event trigger hieu ung sau khi
                clearTimeout(va.tiOpenFxAfter);
                va.tiOpenFxAfter = setTimeout(function() { va.ev.trigger('openFxAfter') }, o.speed);

                // Setup Background fade in
                FX.backgroundFadeIn();
            }



            /**
             * TRUONG HOP KHONG CO HIEU UNG
             */
            else {

                // Kich thuoc cho inner
                va.$inner.css({ 'width': va.innerW, 'height': va.innerH });
                // Vi tri cua outer
                va.$outer.css({ 'left': va.outerX, 'top': va.outerY });
                // Che`n event fxAfter
                va.ev.trigger('openFxAfter');
            }
        },


        /**
         * SETUP HIEU UNG SAU KHI DO'NG WRAP
         *  + Tra ve boolean: co thuc hien duoc hieu u'ng hay khong
         */
        afterClose : function() {

            /**
             * HIEU UNG ZOOM
             */
            if( o.fx == 'zoom' ) {

                // Setup vi tri va kich thuoc outer/inner == kich thuoc vi tri cua link
                if( !!va.tfLast ) {
                    va.$outer.css(va.tfLast);

                    // Setup hieu ung Background fade out
                    FX.backgroundFadeOut();

                    // Nhan biet da thuc hien hieu u'ng
                    return true;
                }
            }

            return false;
        },







        /**
         * HIEU UNG BACKGROUND FADE IN
         */
        backgroundFadeIn : function() {
            setTimeout(function() {
                va.$wrap.addClass(va.ns + 'fade-in');
            }, 4);
        },

        /**
         * HIEU UNG BACKGROUND FADE OUT
         */
        backgroundFadeOut : function() {
            va.$wrap.removeClass(va.ns + 'fade-in');
        }
    },










    /**
     * EVENTS
     */
    EVENTS = {

        /**
         * DANG KI CAC EVENT LUC BAN DAU
         */
        begin : function() {
            // API.open();

            /* EVENT TREN TUNG LINK */
            !!o.isLinkOpen && $link.on(va.evName.click, function(e) {
                API.open();
                return false;
            });


            /* EVENT TREN WRAP */
            !!o.isOverClose && va.$wrap.on(va.evName.click, function(e) {
                var target = e.target;

                /**
                 * SETUP CHI CHO PHEP TAP TREN DOI TUONG WRAP
                 */
                if( $(e.target).is( va.$wrap ) ) {
                    API.close();
                }
            });


            /* EVENT TREN BUTTON CLOSE */
            !!o.isBtnClose && va.$close.on(va.evName.click, function(e) {
                API.close();
                return false;
            });
        },




        /**
         * EVENT RESIZE
         */
        resizeOn : function() {

            $(window).on(va.evName.resize, function(e) {
                clearTimeout(va.tiResize);
                va.tiResize = setTimeout(function() { API.updateLayout() }, o.timerResize);
            });
        },

        resizeOff : function() {
            $(window).off(va.evName.resize);
        },




        /**
         * EVENT OTHERS
         */
        keyboard : function() {

            // Truoc tien loai bo event keyboard truoc do' (neu co')
            // Kiem tra co turn on keyboard hay khong
            $(document).off(va.evName.key);
            if( o.isKeyboard ) {
                $(document).on(va.evName.key, function(e) {

                    // Kiem tra box da mo --> moi thuc hien do'ng box
                    // Neu keyCode la` 27(phi'm escape) --> do'ng box
                    if( !!va.isOpenedBox && e.keyCode == 27 ) API.close();
                });
            }
        }
    },










    /**
     * API
     */
    API = {

        /**
         * MO BOX
         */
        open : function() {

            // Dieu kien thuc hien Open box
            if( va.$wrap.hasClass(va.actived) ) return;


            /**
             * TIEP TUC SETUP
             */
            // Event trigger 'beforeOpen'
            va.ev.trigger('beforeOpen');

            // Lay noi dung cua link
            RENDER.beforeOpen();
            
            // Kich thuoc va vi tri cua cac thanh phan truoc khi open
            LAYOUT.beforeOpen();

            // Setup hieu ung truoc khi Open
            va.ev.trigger('openFxBefore');
            FX.beforeOpen();



            /**
             * ACTIVED CAC DOI TUONG
             */
            // Them class Actived cho Link
            $link.addClass(va.actived);

            // Chen class Actived + Temp cho Wrap
            va.$wrap.addClass(va.actived + va.classTemp);



            /**
             * SETUP KHAC
             */
            // Dang ki event resize tren window
            EVENTS.resizeOn();

            // Bien thong bao da~ open box
            va.isOpenedBox = true;

            // Event trigger 'afterOpen'
            va.ev.trigger('afterOpen');
        },


        /**
         * DONG BOX
         */
        close : function() {

            // Dieu kien de Dong box
            if( !va.$wrap.hasClass(va.actived) ) return;


            /**
             * TIEP TUC SETUP
             */
            var fnSetupEnd = function() {
                va.ev.trigger('closeFxAfter');

                // Setup cac thanh phan sau khi close wrap
                RENDER.afterClose();
                // Setup layout cua cac thanh phan sau khi close wrap
                LAYOUT.afterClose();

                // Loai bo event resize tren window
                EVENTS.resizeOff();

                // Event trigger 'afterClose'
                va.ev.trigger('afterClose');
                // Bien thong bao da~ do'ng box
                va.isOpenedBox = false;
            };


            // Event trigger 'beforeClose'
            va.ev.trigger('beforeClose');

            // Setup hieu u'ng truoc khi close wrap
            va.ev.trigger('closeFxBefore');
            var isFxClose = FX.afterClose();

            // Set timer de thuoc hien cac setup others sau khi hieu ung ket thuc
            if( isFxClose && o.fx != null ) {
                clearTimeout(va.tiFxAfter);
                va.tiFxAfter = setTimeout(fnSetupEnd, o.speed);
            }

            // Khong co hieu ung thi setup truc tiep function others
            else fnSetupEnd();
        },


        // UPDATE LAYOUT CUA INNER
        updateLayout : function() {

            // Setup cac bien update
            PROP.vaUpdate();

            // Tinh toan lai kich thuoc va vi tri cua inner
            // Setup hieu ung truoc khi Open
            LAYOUT.beforeOpen();
            FX.beforeOpen();
        }
    };










    /**
     * BAT DAU SETUP PLUGIN
     */
    // Luu tru bien toan cuc vao trong link
    va = $.extend(va, API);
    $.data($link[0], rb01VA.codeName, va);

    // Khoi tao plugin
    INIT();
};










/**
 * KHOI TAO PLUGIN
 *  + Cu phap : var code = $('..').codeName();
 */
$.fn[rb01VA.codeName] = function() {
    var args     = arguments,               // args[0] : options, args[1]: value
        codeName = rb01VA.codeName,
        codeData = null;

    // Setup moi doi tuong
    $(this).each(function() {
        var $self = $(this),
            code = $self.data(codeName);

        // Tham so thu nhat luon luon la object --> de dang kiem tra
        if( args[0] == undefined ) args[0] = {};

        // Truong hop la object: khoi tao CODE moi hoac update properties
        if( typeof args[0] == 'object' ) {
            // TAO CODE MOI
            if( !code ) new $[codeName]( $self, $.extend(true, {}, $.fn[codeName].defaults, args[0]) );
            
            // UPDATE THUOC TINH
            // Chua co API 'prop'
            // else code.prop(args[0]);

            // Luu data cua code
            codeData = $self.data(codeName);
        }
        
        // Truong hop con lai: goi truc tiep function --> neu khong co thi bao error
        else {
            try      { code[args[0]](args[1]) }
            catch(e) { !!window.console && console.warn('['+ codeName +': function not exist!]'); }
        }
    });

    // Tra ve data cho doi tuong
    return codeData;
};










/**
 * OPTIONS MAC DINH CUA PLUGIN
 */
$.fn[rb01VA.codeName].defaults = {
    "type"          : "auto",           // Type link: image, inline, html, iframe, media.
    "href"          : null,
    "content"       : null,
    "title"         : null,
    "classMore"     : null,
    "minWidth"      : 80,
    "minHeight"     : 80,
    "width"         : 600,
    "height"        : 400,
    "margin"        : 10,
    "fx"            : "zoom",
    "speed"         : 300,              // Phu tro cho hieu u'ng tren css
    "timerResize"   : 600,
    
    "isInitOpen"    : false,
    "isTitle"       : true,            // Title cho link image
    "isFullscreen"  : false,
    "isBtnClose"    : true,
    "isOverClose"   : true,
    "isLinkOpen"    : true,
    "isKeyboard"    : true,

    "html"          : { "main"      : "<div class='{ns}wrap'><div class='{ns}outer'><div class='{ns}inner'></div></div></div>",
                        "close"     : "<div class='{ns}btn-close' title='close'>close</div>" }
};

})(jQuery);