/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class ReportViewerComponent {
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
if (false) {
    /** @type {?} */
    ReportViewerComponent.prototype.reporturl;
    /** @type {?} */
    ReportViewerComponent.prototype.reportserver;
    /** @type {?} */
    ReportViewerComponent.prototype.showparameters;
    /** @type {?} */
    ReportViewerComponent.prototype.parameters;
    /** @type {?} */
    ReportViewerComponent.prototype.language;
    /** @type {?} */
    ReportViewerComponent.prototype.width;
    /** @type {?} */
    ReportViewerComponent.prototype.height;
    /** @type {?} */
    ReportViewerComponent.prototype.toolbar;
    /** @type {?} */
    ReportViewerComponent.prototype.onError;
    /** @type {?} */
    ReportViewerComponent.prototype.source;
    /**
     * @type {?}
     * @private
     */
    ReportViewerComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0dmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zc3JzLXJlcG9ydHZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9yZXBvcnR2aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFpQixpQkFBaUIsRUFBRyxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsWUFBWSxFQUFtQixNQUFNLDJCQUEyQixDQUFDO0FBMkIxRSxNQUFNLE9BQU8scUJBQXFCOzs7O0lBb0JoQyxZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBYjNDLG1CQUFjLEdBQVksT0FBTyxDQUFDO1FBSWxDLGFBQVEsR0FBWSxPQUFPLENBQUM7UUFFNUIsVUFBSyxHQUFZLEdBQUcsQ0FBQztRQUVyQixXQUFNLEdBQVksR0FBRyxDQUFDO1FBRXRCLFlBQU8sR0FBWSxNQUFNLENBQUM7UUFFVCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUNKLENBQUM7Ozs7O0lBS2hELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxXQUFXLElBQUksT0FBTyxFQUFFO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVM7aUJBQzNCLDhCQUE4QixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQzs7OztJQUVNLG9CQUFvQjs7WUFFckIsZUFBZSxHQUFHLEVBQUU7UUFFeEIsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pDLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLEtBQUssSUFBSSxFQUFFO29CQUNwRCxLQUFLLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQzdDLElBQUksVUFBVSxFQUFFOzRCQUNkLGVBQWUsSUFBSSxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUMzRTtxQkFDRjtpQkFDRjtnQkFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxLQUFLLEtBQUssRUFBRTtvQkFDdkYsZUFBZSxJQUFJLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQy9EO2dCQUNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQ2xDLGVBQWUsSUFBSSxHQUFHLEdBQUcsS0FBSyxHQUFHLGNBQWMsQ0FBQztpQkFDakQ7YUFDRjtTQUNGO1FBQ0QsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQzs7OztJQUVNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTztTQUNSOztZQUNHLFVBQVUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7UUFDNUMsT0FBTyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUk7Y0FDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0I7Y0FDakMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWM7Y0FDdkMsVUFBVTtjQUNWLHdCQUF3QixHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDL0UsQ0FBQzs7O1lBL0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7R0FJVDtnQkFpQkQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7eUJBaEJqQzs7Ozs7Ozs7Ozs7Ozs7O0dBZVI7YUFFRjs7OztZQTFCUSxZQUFZOzs7d0JBNkJsQixLQUFLOzJCQUVMLEtBQUs7NkJBRUwsS0FBSzt5QkFFTCxLQUFLO3VCQUVMLEtBQUs7b0JBRUwsS0FBSztxQkFFTCxLQUFLO3NCQUVMLEtBQUs7c0JBR0wsTUFBTSxTQUFDLE9BQU87Ozs7SUFqQmYsMENBQ2tCOztJQUNsQiw2Q0FDcUI7O0lBQ3JCLCtDQUNrQzs7SUFDbEMsMkNBQ2lCOztJQUNqQix5Q0FDNEI7O0lBQzVCLHNDQUNxQjs7SUFDckIsdUNBQ3NCOztJQUN0Qix3Q0FDMEI7O0lBRTFCLHdDQUFtRDs7SUFJbkQsdUNBQXdCOzs7OztJQUhaLDBDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25DaGFuZ2VzLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlUmVzb3VyY2VVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3Nycy1yZXBvcnR2aWV3ZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiaWZyYW1lLWNvbnRhaW5lclwiPlxuICAgIDxpZnJhbWUgW3NyY109XCJzb3VyY2VcIiBzY3JvbGxpbmc9XCJub1wiPjwvaWZyYW1lPlxuICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICBcbiAgLmlmcmFtZS1jb250YWluZXIgaWZyYW1lIHtcbiAgICAgYm9yZGVyOiAwO1xuICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgIGxlZnQ6IDA7XG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgdG9wOiAwO1xuICAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLyogNHgzIEFzcGVjdCBSYXRpbyAqL1xuICAuaWZyYW1lLWNvbnRhaW5lci00eDMge1xuICAgIHBhZGRpbmctdG9wOiA3NSU7XG4gIH1cbiAgYF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpXG4gIHJlcG9ydHVybDogc3RyaW5nO1xuICBASW5wdXQoKVxuICByZXBvcnRzZXJ2ZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2hvd3BhcmFtZXRlcnM/OiBzdHJpbmcgPSBcImZhbHNlXCI7XG4gIEBJbnB1dCgpXG4gIHBhcmFtZXRlcnM/OiBhbnk7XG4gIEBJbnB1dCgpXG4gIGxhbmd1YWdlPzogc3RyaW5nID0gXCJlbi11c1wiO1xuICBASW5wdXQoKVxuICB3aWR0aD86IG51bWJlciA9IDEwMDtcbiAgQElucHV0KClcbiAgaGVpZ2h0PzogbnVtYmVyID0gMTAwO1xuICBASW5wdXQoKVxuICB0b29sYmFyPzogc3RyaW5nID0gXCJ0cnVlXCI7XG5cbiAgQE91dHB1dCgnZXJyb3InKSBvbkVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxuXG5cbiAgc291cmNlOiBTYWZlUmVzb3VyY2VVcmw7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmKCF0aGlzLnJlcG9ydHVybCl7XG4gICAgICB0aGlzLm9uRXJyb3IuZW1pdChcIlNyYyBjYW5ub3QgYmUgbnVsbFwiKTtcbiAgICB9XG5cbiAgICBpZiAoJ3JlcG9ydHVybCcgaW4gY2hhbmdlcykge1xuICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLnNhbml0aXplclxuICAgICAgLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh0aGlzLmJ1aWxkUmVwb3J0VXJsKCkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBidWlsZFBhcmFtZXRlclN0cmluZygpOiBzdHJpbmcge1xuXG4gICAgdmFyIHBhcmFtZXRlclN0cmluZyA9IFwiXCI7XG5cbiAgICBmb3IgKHZhciBwYXJhbSBpbiB0aGlzLnBhcmFtZXRlcnMpIHtcbiAgICAgIGlmIChwYXJhbSkge1xuICAgICAgICBpZiAodGhpcy5wYXJhbWV0ZXJzW3BhcmFtXSBpbnN0YW5jZW9mIEFycmF5ID09PSB0cnVlKSB7XG4gICAgICAgICAgZm9yICh2YXIgYXJyYXlQYXJhbSBpbiB0aGlzLnBhcmFtZXRlcnNbcGFyYW1dKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXlQYXJhbSkge1xuICAgICAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgKz0gXCImXCIgKyBwYXJhbSArIFwiPVwiICsgdGhpcy5wYXJhbWV0ZXJzW3BhcmFtXVthcnJheVBhcmFtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFyYW1ldGVyc1twYXJhbV0gIT0gbnVsbCAmJiB0aGlzLnBhcmFtZXRlcnNbcGFyYW1dIGluc3RhbmNlb2YgQXJyYXkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcGFyYW1ldGVyU3RyaW5nICs9IFwiJlwiICsgcGFyYW0gKyBcIj1cIiArIHRoaXMucGFyYW1ldGVyc1twYXJhbV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFyYW1ldGVyc1twYXJhbV0gPT0gbnVsbCkge1xuICAgICAgICAgIHBhcmFtZXRlclN0cmluZyArPSBcIiZcIiArIHBhcmFtICsgXCI6aXNudWxsPXRydWVcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFyYW1ldGVyU3RyaW5nO1xuICB9XG5cbiAgcHVibGljIGJ1aWxkUmVwb3J0VXJsKCkgOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5yZXBvcnR1cmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHBhcmFtZXRlcnMgPSB0aGlzLmJ1aWxkUGFyYW1ldGVyU3RyaW5nKCk7XG4gICAgcmV0dXJuIHRoaXMucmVwb3J0c2VydmVyICsgJz8vJ1xuICAgICAgKyB0aGlzLnJlcG9ydHVybCArICcmcnM6RW1iZWQ9dHJ1ZSdcbiAgICAgICsgJyZyYzpQYXJhbWV0ZXJzPScgKyB0aGlzLnNob3dwYXJhbWV0ZXJzXG4gICAgICArIHBhcmFtZXRlcnNcbiAgICAgICsgJyZyczpQYXJhbWV0ZXJMYW5ndWFnZT0nICsgdGhpcy5sYW5ndWFnZSArIFwiJnJjOlRvb2xiYXI9XCIgKyB0aGlzLnRvb2xiYXI7IFxuICB9XG59XG4iXX0=