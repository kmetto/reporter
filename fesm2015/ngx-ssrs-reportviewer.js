import { Component, Input, Output, EventEmitter, ViewEncapsulation, NgModule, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReportViewerComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
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
    ngOnChanges(changes) {
        if (!this.reporturl) {
            this.onError.emit("Src cannot be null");
        }
        if ('reporturl' in changes) {
            this.source = this.sanitizer
                .bypassSecurityTrustResourceUrl(this.buildReportUrl());
        }
    }
    /**
     * @return {?}
     */
    buildParameterString() {
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
    }
    /**
     * @return {?}
     */
    buildReportUrl() {
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
    }
}
ReportViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ssrs-reportviewer',
                template: `
  <div class="iframe-container">
    <iframe [src]="source" scrolling="no"></iframe>
  </div>
  `,
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [`
  
  .iframe-container iframe {
     border: 0;
     height: 100%;
     left: 0;
     position: absolute;
     top: 0;
     width: 100%;
  }
  
  /* 4x3 Aspect Ratio */
  .iframe-container-4x3 {
    padding-top: 75%;
  }
  `]
            }] }
];
/** @nocollapse */
ReportViewerComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReportViewerModule {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        /** @type {?} */
        const reportviewerElement = createCustomElement(ReportViewerComponent, { injector });
        customElements.define('ssrs-reportviewer', reportviewerElement);
    }
}
ReportViewerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ReportViewerComponent],
                imports: [CommonModule],
                entryComponents: [ReportViewerComponent]
            },] }
];
/** @nocollapse */
ReportViewerModule.ctorParameters = () => [
    { type: Injector }
];

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