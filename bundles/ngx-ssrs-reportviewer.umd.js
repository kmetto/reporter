(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/elements'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-ssrs-reportviewer', ['exports', '@angular/core', '@angular/platform-browser', '@angular/elements', '@angular/common'], factory) :
    (factory((global['ngx-ssrs-reportviewer'] = {}),global.ng.core,global.ng.platformBrowser,global.ng.elements,global.ng.common));
}(this, (function (exports,core,platformBrowser,elements,common) { 'use strict';

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
            this.onError = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ssrs-reportviewer',
                        template: "\n  <div class=\"iframe-container\">\n    <iframe [src]=\"source\" scrolling=\"no\"></iframe>\n  </div>\n  ",
                        encapsulation: core.ViewEncapsulation.ShadowDom,
                        styles: ["\n  \n  .iframe-container iframe {\n     border: 0;\n     height: 100%;\n     left: 0;\n     position: absolute;\n     top: 0;\n     width: 100%;\n  }\n  \n  /* 4x3 Aspect Ratio */\n  .iframe-container-4x3 {\n    padding-top: 75%;\n  }\n  "]
                    }] }
        ];
        /** @nocollapse */
        ReportViewerComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        ReportViewerComponent.propDecorators = {
            reporturl: [{ type: core.Input }],
            reportserver: [{ type: core.Input }],
            showparameters: [{ type: core.Input }],
            parameters: [{ type: core.Input }],
            language: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            toolbar: [{ type: core.Input }],
            onError: [{ type: core.Output, args: ['error',] }]
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
            var reportviewerElement = elements.createCustomElement(ReportViewerComponent, { injector: injector });
            customElements.define('ssrs-reportviewer', reportviewerElement);
        }
        ReportViewerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ReportViewerComponent],
                        imports: [common.CommonModule],
                        entryComponents: [ReportViewerComponent]
                    },] }
        ];
        /** @nocollapse */
        ReportViewerModule.ctorParameters = function () {
            return [
                { type: core.Injector }
            ];
        };
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

    exports.ReportViewerModule = ReportViewerModule;
    exports.ɵa = ReportViewerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-ssrs-reportviewer.umd.js.map