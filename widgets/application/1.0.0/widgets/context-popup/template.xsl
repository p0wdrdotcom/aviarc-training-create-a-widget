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
       <xsl:variable name="invisible-style">
            <xsl:choose>
                <xsl:when test="xsltutils:isFalse(@visible)">display-none</xsl:when>
                <xsl:otherwise></xsl:otherwise>
            </xsl:choose>
        </xsl:variable>

        <div id="{@name}:div" class="{cssutils:makeClassString(concat($css-prefix, 'context-popup'), @class)} {$invisible-style}">
            <aviarc:add-children />
        </div>
    </xsl:template>
</xsl:stylesheet>
