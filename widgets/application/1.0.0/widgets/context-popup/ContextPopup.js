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
        
        _showPopup: function (referenceElement, relX, relY) {
            if (document.createEvent) {
                var event = document.createEvent('HTMLEvents');
                event.initEvent('mousedown', true, true);
                document.dispatchEvent(event);
            } else {
                document.fireEvent("onmousedown");
            }
            YAHOO.util.Event.addListener(document, "mousedown", this._hidePopupEventHdlr , this, true);

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
        
        _hidePopup : function() {
            this._originalParent.insertBefore(this._contextPopup, this._originalNextSib);
            $(this._contextPopup).offset({
                top: 0,
                left:0
            });
            YAHOO.util.Dom.addClass(this._contextPopup, "display-none");
            YAHOO.util.Event.removeListener(this._contextPopup, "mouseout",this._mouseOutHidePopupEventHdlr);
           
            this._isShown = false;
            
            this.getWidgetContext().getWidgetNode().deactivate();
            
        },
        
        isActive : function () {
            return this._isShown;
        },
        
        isVisible : function () {
            return this._isShown;
        }
    });

})();

