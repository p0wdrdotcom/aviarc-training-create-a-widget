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
            
        
        startup: function (widgetContext) {            
            application.ContextPopup.superclass.startup.apply(this, arguments);
            
            this._contextPopup    = this.getContainerElement();
            this._originalParent  = this._contextPopup.parentNode;
            this._originalNextSib = this._contextPopup.nextSibling;
            
            this._isShown = parseBoolean(this.getAttribute("visible"));
        },
        /**
         * IMPLEMENT THIS
         * 
         * get the thing we want to open next to and its DOM element - this is the widget and its root HTML element
         * 
         **/
        open : function(widgetId, relX, relY) {
            var widget = this.getWidgetContext().findWidgetByID(widgetId);
            var referenceElement = widget.getContainerElement();       
            this._showPopup(referenceElement,
                            parseInt(relX,10),
                            parseInt(relY,10));

        },
        
        close : function() {
           this._hidePopup();
        },
        
        /**
         * IMPLEMENT THIS
         * 
         * we want to register a handler first so that we can close the popup when the user clicks outside it
         * 
         * 
         * 
         **/
        _showPopup: function (referenceElement, relX, relY) {
            debugger;

            document.body.appendChild(this._contextPopup);
            
            var offset = $(referenceElement).offset();
            offset.left +=  relX || 0;
            offset.top += relY || 0;
            $(this._contextPopup).offset(offset);
            
            YAHOO.util.Dom.removeClass(this._contextPopup, "display-none");            
            this._isShown = true;
            
            this.getWidgetContext().getWidgetNode().activate();
            
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

