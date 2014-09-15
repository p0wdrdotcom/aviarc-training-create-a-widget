<xsl:stylesheet
     version="2"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform"

     xmlns:aviarc="urn:aviarc:xslt-extension-elements/com.aviarc.framework.toronto.widget.xslt.XSLTExtensionElementFactory"
     xmlns:cssutils="java:com.aviarc.framework.toronto.util.CssUtils"
     xmlns:xsltutils="com.aviarc.framework.toronto.widget.xslt.XSLTUtils"
     
     extension-element-prefixes="aviarc"
     exclude-result-prefixes="aviarc cssutils xsltutils"
     >

    <xsl:template match="context-popup">
        <xsl:variable name="css-prefix">
            <xsl:value-of select="xsltutils:getWidgetCSSPrefix()"/>
        </xsl:variable>
        <!-- 
        IMPLEMENT THIS
            We need to evaluate the visible attribute to set the default open state
            All widgets get a visible status by default
            
            We also need to add the ability for Aviarc add child widgets as we want to be able to just throw some widgets in there
        -->

        <div id="{@name}:div" class="{cssutils:makeClassString(concat($css-prefix, 'context-popup'), @class)}">
        </div>
    </xsl:template>
</xsl:stylesheet>
