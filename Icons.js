sap.ui.define(["sap/ui/core/Control"], function(Control) {
    return Control.extend("aiExpense.m.Icons", {
        metadata: {
            properties: {
                src: {
                    type: "string",
                    defaultValue: "",
                },
                style: {
                    type: "string",
                    defaultValue: "fas",
                },
                size: {
                    type: "string",
                    defaultValue: "fas",
                },
                color: {
                    type: "string",
                    defaultValue: "#32363a",
                },
                hint: {
                    type: "string",
                    defaultValue: "",
                },
                type: {
                    type: "string",
                    defaultValue: "icon",
                },
                typeStyle: {
                    type: "string",
                    defaultValue: "square",
                }
            },
            aggregations: {
                content: {
                    type: "sap.ui.core.Control",
                },
            },
            defaultAggregation: "content",
        },
        init: function() {},

        renderer: function(oRm, oControl) {
            oRm.write("<div ");
            oRm.writeControlData(oControl);
            oRm.addClass("sapUiTinyMarginBegin");
            oRm.writeClasses();
            oRm.writeAttribute("title", oControl.getHint());
            oRm.write(">");
            if (oControl.getType() === "icon") {
                oRm.openStart("li style='color: " + oControl.getColor() + "'");
                oRm.addClass(oControl.getStyle());
                oRm.addClass("fa-" + oControl.getSrc());
                oRm.addClass(oControl.getSize());
                oRm.addClass("");
                oRm.writeClasses();
                oRm.openEnd();
            } else {
                oRm.openStart("span style='vertical-align: top;'", oControl.getId() + "-text");
                oRm.addClass("fa-stack");
                oRm.addClass(oControl.getSize());
                oRm.writeClasses();
                oRm.openEnd();

                oRm.openStart("li style='color: " + oControl.getColor() + "'");
                oRm.addClass("fas");
                oRm.addClass("fa-" + oControl.getTypeStyle());
                oRm.addClass("fa-stack-2x");
                oRm.writeClasses();
                oRm.openEnd();

                oRm.openStart("li style='color: #fff'");
                oRm.addClass(oControl.getStyle());
                oRm.addClass("fa-" + oControl.getSrc());
                oRm.addClass("fa-stack-1x");
                oRm.writeClasses();
                oRm.openEnd();

                oRm.close("span");
            }

            oRm.write("</div>");
        },

        onAfterRendering: function() {
            if (sap.ui.core.Control.prototype.onAfterRendering) {
                sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments);
            }
        },
    });
});