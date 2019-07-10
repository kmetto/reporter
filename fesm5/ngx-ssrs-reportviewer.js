import { Component, Input, Output, EventEmitter, ViewEncapsulation, NgModule, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReportViewerComponent = /** @class */ (function () {
    function ReportViewerComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.showparameters = "false";
        this.language = "en-us";
        this.width = 100;
        this.height = 100;
        this.toolbar = "true";
        this.onError = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ReportViewerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.reporturl) {
            this.onError.emit("Src cannot be null");
        }
        if ('reporturl' in changes) {
            this.source = this.sanitizer
                .bypassSecurityTrustResourceUrl(this.buildReportUrl());
        }
    };
    /**
     * @return {?}
     */
    ReportViewerComponent.prototype.buildParameterString = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parameterString = "";
        for (var param in this.parameters) {
            if (param) {
                if (this.parameters[param] instanceof Array === true) {
                    for (var arrayParam in this.parameters[param]) {
                        if (arrayParam) {
                            parameterString += "&" + param + "=" + this.parameters[param][arrayParam];
                        }
                    }
                }
                if (this.parameters[param] != null && this.parameters[param] instanceof Array === false) {
                    parameterString += "&" + param + "=" + this.parameters[param];
                }
                if (this.parameters[param] == null) {
                    parameterString += "&" + param + ":isnull=true";
                }
            }
        }
        return parameterString;
    };
    /**
     * @return {?}
     */
    ReportViewerComponent.prototype.buildReportUrl = /**
     * @return {?}
     */
    function () {
        if (!this.reporturl) {
            return;
        }
        /** @type {?} */
        var parameters = this.buildParameterString();
        return this.reportserver + '?/'
            + this.reporturl + '&rs:Embed=true'
            + '&rc:Parameters=' + this.showparameters
            + parameters
            + '&rs:ParameterLanguage=' + this.language + "&rc:Toolbar=" + this.toolbar;
    };
    ReportViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ssrs-reportviewer',
                    template: "\n  <div class=\"iframe-container\">\n    <iframe [src]=\"source\" scrolling=\"no\"></iframe>\n  </div>\n  ",
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: ["\n  \n  .iframe-container iframe {\n     border: 0;\n     height: 100%;\n     left: 0;\n     position: absolute;\n     top: 0;\n     width: 100%;\n  }\n  \n  /* 4x3 Aspect Ratio */\n  .iframe-container-4x3 {\n    padding-top: 75%;\n  }\n  "]
                }] }
    ];
    /** @nocollapse */
    ReportViewerComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    ReportViewerComponent.propDecorators = {
        reporturl: [{ type: Input }],
        reportserver: [{ type: Input }],
        showparameters: [{ type: Input }],
        parameters: [{ type: Input }],
        language: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        toolbar: [{ type: Input }],
        onError: [{ type: Output, args: ['error',] }]
    };
    return ReportViewerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReportViewerModule = /** @class */ (function () {
    function ReportViewerModule(injector) {
        this.injector = injector;
        /** @type {?} */
        var reportviewerElement = createCustomElement(ReportViewerComponent, { injector: injector });
        customElements.define('ssrs-reportviewer', reportviewerElement);
    }
    ReportViewerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ReportViewerComponent],
                    imports: [CommonModule],
                    entryComponents: [ReportViewerComponent]
                },] }
    ];
    /** @nocollapse */
    ReportViewerModule.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return ReportViewerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ReportViewerModule, ReportViewerComponent as ɵa };

//# sourceMappingURL=ngx-ssrs-reportviewer.js.map