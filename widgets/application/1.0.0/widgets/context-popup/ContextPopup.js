/*global
YAHOO
*/

(function () {

    YAHOO.namespace("application");
    var application = YAHOO.application;
    var Toronto = YAHOO.com.aviarc.framework.toronto;

    application.ContextPopup = function () {

    };

    YAHOO.lang.extend(application.ContextPopup, Toronto.framework.DefaultWidgetImpl, {
            
        /**
         * IMPLEMENT THIS
         * 
         * this is startup for a widget - all widgets have them - this is called when Toronto traverses the widget tree when the page loads
         * 
         * Key things to do here are
         *  - get hold of some DOM elements we need to remember
         *  - parse our passed attributes
         *  - set some internal widget state
         *  - DO NOT LOOK AT DATA AS ITS NOT READY YET
         * 
         * 
         *  Here we need to get access to our DOM nodes so we know where we are in the document
         *  Here we should set some internal state This widget needs to report if its shown or not
         * 
         **/
        startup: function (widgetContext) {            
            application.ContextPopup.superclass.startup.apply(this, arguments);

            
        },
        /**
         * IMPLEMENT THIS
         * 
         * get the thing we want to open next to and its DOM element - this is the widget and its root HTML element
         * 
         **/
        open : function(widgetId, relX, relY) {
            
          

        },
        
        close : function() {
           this._hidePopup();
        },
        
        /**
         * IMPLEMENT THIS
         * 
         * we want to register a handler first so that we can close the popup when the user clicks outside it
         * 
         * we need to put the context popups root HTML element ontop of everything else.  
         * 
         * make the popup visible and remember that we have
         * 
         * activate the widget tree below the context popup so the widgets work!
         * 
         **/
        _showPopup: function (referenceElement, relX, relY) {
            
        },
        
        _hidePopupEventHdlr : function(e) {
            var target = YAHOO.util.Event.getTarget(e);
            // If pressing anywhere inside the popup, just ignore
            if (this._contextPopup === target || YAHOO.util.Dom.isAncestor(this._contextPopup, target)) {
                return true;
            }
            this._hidePopup();
        },
        
        /**
         * IMPLEMENT THIS
         * 
         *  Put context menu popup back where it was before we put it at the end of the HTML doc;
         * 
         *  Hide the context popup
         * 
         *  clean up the document mouse down "hide me" event handler registered
         * 
         *  deactivate the widget tree below the context popup
         * 
         **/
        _hidePopup : function() {
            
            
        },
        
        isActive : function () {
            return this._isShown;
        },
        
        isVisible : function () {
            return this._isShown;
        }
    });

})();

