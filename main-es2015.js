(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SS\BreakBoard\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
    //api_url:'http://mhavwpwebsmnc01:90/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F+gY":
/*!********************************************************!*\
  !*** ./src/app/break-status/break-status.component.ts ***!
  \********************************************************/
/*! exports provided: BreakStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakStatusComponent", function() { return BreakStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _show_status_show_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-status/show-status.component */ "R2+V");



class BreakStatusComponent {
    constructor() { }
    ngOnInit() {
    }
}
BreakStatusComponent.ɵfac = function BreakStatusComponent_Factory(t) { return new (t || BreakStatusComponent)(); };
BreakStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreakStatusComponent, selectors: [["app-break-status"]], decls: 1, vars: 0, template: function BreakStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-show-status");
    } }, directives: [_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_1__["ShowStatusComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhay1zdGF0dXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-break-status',
                templateUrl: './break-status.component.html',
                styleUrls: ['./break-status.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "R2+V":
/*!*******************************************************************!*\
  !*** ./src/app/break-status/show-status/show-status.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShowStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowStatusComponent", function() { return ShowStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "Ujqv");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _add_edit_status_add_edit_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-edit-status/add-edit-status.component */ "cCpR");
/* harmony import */ var src_app_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared.service */ "r2F1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = function () { return { "background-color": "rgb(255,230,230)" }; };
const _c1 = function () { return { "background-color": "rgb(255,255,204)" }; };
const _c2 = function () { return { "background-color": "rgb(214,245,214)" }; };
const _c3 = function () { return { "background-color": "transparent" }; };
function ShowStatusComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowStatusComponent_tr_26_Template_select_ngModelChange_4_listener($event) { const dataItem_r1 = ctx.$implicit; return dataItem_r1.AM_Break_Status = $event; })("change", function ShowStatusComponent_tr_26_Template_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const dataItem_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.editClick(dataItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Missed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowStatusComponent_tr_26_Template_select_ngModelChange_12_listener($event) { const dataItem_r1 = ctx.$implicit; return dataItem_r1.Lunch_Break_Status = $event; })("change", function ShowStatusComponent_tr_26_Template_select_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const dataItem_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.editClick(dataItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Missed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowStatusComponent_tr_26_Template_select_ngModelChange_20_listener($event) { const dataItem_r1 = ctx.$implicit; return dataItem_r1.PM_Break_Status = $event; })("change", function ShowStatusComponent_tr_26_Template_select_change_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const dataItem_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.editClick(dataItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Missed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowStatusComponent_tr_26_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const dataItem_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteClick(dataItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataItem_r1.Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", dataItem_r1.AM_Break_Status)("ngStyle", dataItem_r1.AM_Break_Status == "Missed" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0) : dataItem_r1.AM_Break_Status == "Ready" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1) : dataItem_r1.AM_Break_Status == "Taken" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", dataItem_r1.Lunch_Break_Status)("ngStyle", dataItem_r1.Lunch_Break_Status == "Missed" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0) : dataItem_r1.Lunch_Break_Status == "Ready" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1) : dataItem_r1.Lunch_Break_Status == "Taken" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", dataItem_r1.PM_Break_Status)("ngStyle", dataItem_r1.PM_Break_Status == "Missed" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0) : dataItem_r1.PM_Break_Status == "Ready" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1) : dataItem_r1.PM_Break_Status == "Taken" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataItem_r1.Status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataItem_r1.OutRoom);
} }
class ShowStatusComponent {
    constructor(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.dropdownSettings = {};
        this.amstatus = [];
        this.selectedAMStatus = [];
        this.selectedLunchStatus = [];
        this.selectedPMStatus = [];
        this.BreakStatusList = [];
        this.ModalTitle = "";
        this.ActivateAddEditStatusComp = false;
        this.id = '';
        this.AMBreakStatusFilter = "";
        this.LunchBreakStatusFilter = "";
        this.PMBreakStatusFilter = "";
        this.LocationFilter = "";
        this.BreakStatusListWithoutFilter = [];
    }
    ngOnInit() {
        this.amstatus = [
            { item_id: 1, item_text: 'Taken' },
            { item_id: 2, item_text: 'Ready' },
            { item_id: 3, item_text: 'Missed' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableCheckAll: true,
            allowSearchFilter: true,
            itemsShowLimit: 3
        };
        this.refreshBreakStatusList();
        this.id = setInterval(() => {
            this.refreshBreakStatusList();
        }, 60000);
    }
    ngOnDestroy() {
        if (this.id) {
            clearInterval(this.id);
        }
    }
    addClick() {
        debugger;
        this.loc = {
            BreakStatusId: 0,
            Location: "",
            Staff: "",
            AM_Break_Status: "",
            Lunch_Break_Status: "",
            PM_Break_Status: ""
        };
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.direction = "ltr";
        dialogConfig.autoFocus = true;
        dialogConfig.width = "50%";
        dialogConfig.height = "65%";
        dialogConfig.panelClass = "my-full-screen-dialog";
        //  dialogConfig.data = {       
        //    statusid: item.BreakStatusId 
        //  }
        const dialogRef = this.dialog.open(_add_edit_status_add_edit_status_component__WEBPACK_IMPORTED_MODULE_3__["AddEditStatusComponent"], dialogConfig);
        return dialogRef.afterClosed().subscribe(result => this.refreshBreakStatusList());
    }
    editClick(item) {
        this.service.updateBreakStatus(item).subscribe(res => {
        });
    }
    deleteClick(item) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.direction = "ltr";
        dialogConfig.autoFocus = true;
        dialogConfig.width = "22%";
        dialogConfig.height = "25%";
        dialogConfig.panelClass = "my-full-screen-dialog";
        dialogConfig.data = {
            statusid: item.BreakStatusId
        };
        const dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], dialogConfig);
        return dialogRef.afterClosed().subscribe(result => this.refreshBreakStatusList());
    }
    closeClick() {
        this.refreshBreakStatusList();
    }
    refreshBreakStatusList() {
        this.service.getBreakStatusList().subscribe(data => {
            this.BreakStatusList = data;
            this.BreakStatusListWithoutFilter = data;
        });
        // this.onsubmit();
    }
    FilterFn() {
        var AMBreakStatusFilter = this.AMBreakStatusFilter;
        var LunchBreakStatusFilter = this.LunchBreakStatusFilter;
        var PMBreakStatusFilter = this.PMBreakStatusFilter;
        var LocationFilter = this.LocationFilter;
        this.BreakStatusList = this.BreakStatusListWithoutFilter.filter(function (el) {
            return el.AM_Break_Status.toString().toLowerCase().includes(AMBreakStatusFilter.toString().trim().toLowerCase()) &&
                el.Lunch_Break_Status.toString().toLowerCase().includes(LunchBreakStatusFilter.toString().trim().toLowerCase()) &&
                el.PM_Break_Status.toString().toLowerCase().includes(PMBreakStatusFilter.toString().trim().toLowerCase()) &&
                el.Location.toString().toLowerCase().includes(LocationFilter.toString().trim().toLowerCase());
        });
    }
    onSelectAll(items) {
        console.log(items);
    }
    onsubmit() {
        let AMArray = [];
        let LunchArray = [];
        let PMArray = [];
        let amstatus = '';
        if (this.selectedAMStatus.toString() == '')
            amstatus = '-';
        else {
            for (let i = 0; i < this.selectedAMStatus.length; i++) {
                AMArray.push(this.selectedAMStatus[i].item_text);
                if (i == 0)
                    amstatus = this.selectedAMStatus[i].item_text;
                else
                    amstatus = amstatus + ';' + this.selectedAMStatus[i].item_text;
            }
        }
        let lunchstatus = '';
        if (this.selectedLunchStatus.toString() == '')
            lunchstatus = '-';
        else {
            for (let i = 0; i < this.selectedLunchStatus.length; i++) {
                LunchArray.push(this.selectedLunchStatus[i].item_text);
                if (i == 0)
                    lunchstatus = this.selectedLunchStatus[i].item_text;
                else
                    lunchstatus = lunchstatus + ';' + this.selectedLunchStatus[i].item_text;
            }
        }
        let pmstatus = '';
        if (this.selectedPMStatus.toString() == '')
            pmstatus = '-';
        else {
            for (let i = 0; i < this.selectedPMStatus.length; i++) {
                PMArray.push(this.selectedPMStatus[i].item_text);
                if (i == 0)
                    pmstatus = this.selectedPMStatus[i].item_text;
                else
                    pmstatus = pmstatus + ';' + this.selectedPMStatus[i].item_text;
            }
        }
        this.service.LoadBreakStatusWithFilters(amstatus, lunchstatus, pmstatus).subscribe(data => {
            this.BreakStatusList = data;
        });
    }
}
ShowStatusComponent.ɵfac = function ShowStatusComponent_Factory(t) { return new (t || ShowStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
ShowStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowStatusComponent, selectors: [["app-show-status"]], decls: 27, vars: 14, consts: [[2, "margin-top", "5em"], ["type", "button", "data-backdrop", "static", "data-keyboard", "false", 1, "btn", "btn-primary", "float-left", "m-2", 3, "click"], [1, "table", "table-striped"], [2, "width", "140px !important"], [1, "d-flex", "flex-row"], ["placeholder", "Location", 1, "form-control", 2, "width", "80px", 3, "ngModel", "ngModelChange", "keyup"], [2, "width", "200px !important"], [2, "white-space", "nowrap", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll"], [2, "width", "180px !important"], [2, "white-space", "nowrap", "width", "80px", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect", "onSelectAll"], [4, "ngFor", "ngForOf"], [1, "columntext"], ["matNativeControl", "", "required", "", 2, "border", "0!important", "background-color", "transparent", "padding", "0!important", "margin", "0!important", "width", "35%", "border-radius", "5px", "font-size", "large", 3, "ngModel", "ngStyle", "ngModelChange", "change"], ["value", "Taken"], ["value", "Missed"], ["value", "Ready"], ["type", "button", 1, "btn", "btn-light", "mr-1", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-trash-fill"], ["fill-rule", "evenodd", "d", "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"]], template: function ShowStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowStatusComponent_Template_button_click_1_listener() { return ctx.addClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowStatusComponent_Template_input_ngModelChange_8_listener($event) { return ctx.LocationFilter = $event; })("keyup", function ShowStatusComponent_Template_input_keyup_8_listener() { return ctx.FilterFn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ng-multiselect-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowStatusComponent_Template_ng_multiselect_dropdown_ngModelChange_11_listener($event) { return ctx.selectedAMStatus = $event; })("onSelect", function ShowStatusComponent_Template_ng_multiselect_dropdown_onSelect_11_listener() { return ctx.onsubmit(); })("onDeSelect", function ShowStatusComponent_Template_ng_multiselect_dropdown_onDeSelect_11_listener() { return ctx.onsubmit(); })("onSelectAll", function ShowStatusComponent_Template_ng_multiselect_dropdown_onSelectAll_11_listener($event) { return ctx.onSelectAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " AM Break Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ng-multiselect-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowStatusComponent_Template_ng_multiselect_dropdown_ngModelChange_14_listener($event) { return ctx.selectedLunchStatus = $event; })("onSelect", function ShowStatusComponent_Template_ng_multiselect_dropdown_onSelect_14_listener() { return ctx.onsubmit(); })("onDeSelect", function ShowStatusComponent_Template_ng_multiselect_dropdown_onDeSelect_14_listener() { return ctx.onsubmit(); })("onSelectAll", function ShowStatusComponent_Template_ng_multiselect_dropdown_onSelectAll_14_listener($event) { return ctx.onSelectAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Lunch Break Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ng-multiselect-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowStatusComponent_Template_ng_multiselect_dropdown_ngModelChange_17_listener($event) { return ctx.selectedPMStatus = $event; })("onSelect", function ShowStatusComponent_Template_ng_multiselect_dropdown_onSelect_17_listener() { return ctx.onsubmit(); })("onDeSelect", function ShowStatusComponent_Template_ng_multiselect_dropdown_onDeSelect_17_listener() { return ctx.onsubmit(); })("onSelectAll", function ShowStatusComponent_Template_ng_multiselect_dropdown_onSelectAll_17_listener($event) { return ctx.onSelectAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " PM Break Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "OutRoom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ShowStatusComponent_tr_26_Template, 35, 21, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.LocationFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "AM Breaks")("settings", ctx.dropdownSettings)("data", ctx.amstatus)("ngModel", ctx.selectedAMStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Lunch Breaks")("settings", ctx.dropdownSettings)("data", ctx.amstatus)("ngModel", ctx.selectedLunchStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "PM Breaks")("settings", ctx.dropdownSettings)("data", ctx.amstatus)("ngModel", ctx.selectedPMStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.BreakStatusList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["MultiSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LXN0YXR1cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-status',
                templateUrl: './show-status.component.html',
                styleUrls: ['./show-status.component.css']
            }]
    }], function () { return [{ type: src_app_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class AppComponent {
    constructor() {
        this.title = 'my-app';
        this.myDate = Date.now();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 4, consts: [[1, "container"], [2, "max-width", "100%"], [1, "row", "top-line"], [1, "col-md-3"], [1, "col-md-6", "top-line-header", 2, "border", "0", "align-content", "center"], [1, "row", "justify-content-center", 2, "padding-top", "0.5em !important"], [1, "example-spacer"], [1, "col-md-2", 2, "float", "right", "padding-top", "2em !important"], [1, "row"], [1, "col-md-1", 2, "float", "right", "padding-left", "2em !important"], ["sizes", "1em 2em", "src", "../assets/PerimaticsIconSmall.png", "alt", ""], [2, "color", "black", "font-size", "0.6em"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Break Board: HCA Healthcare ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Copyright \u00A9 2020-21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 1, ctx.myDate, "short"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\nheader[_ngcontent-%COMP%] {\r\n  height: 3.5em;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  border-bottom: 0.05em solid grey;\r\n}\r\n.top-line[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 4em;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgb(229, 233, 229);\r\n  transition: top 0.2s ease-in-out;\r\n  z-index: 10;\r\n  margin-bottom: 0px;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  vertical-align: central;\r\n  border: 0;\r\n  table-layout: fixed;\r\n}\r\n.top-line-header[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color:darkblue;\r\n  font-size: 2em;\r\n  text-align: center;\r\n  overflow: hidden;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  border: none;\r\n  color: black;\r\n  padding-bottom: 1em;\r\n  text-decoration: none;\r\n  width: 6em;\r\n  height: 3em;\r\n  vertical-align: middle;\r\n  background-color: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNERBQTREO0VBQzVELHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBR0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuaGVhZGVyIHtcclxuICBoZWlnaHQ6IDMuNWVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItYm90dG9tOiAwLjA1ZW0gc29saWQgZ3JleTtcclxufVxyXG5cclxuLnRvcC1saW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0ZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjMzLCAyMjkpO1xyXG4gIHRyYW5zaXRpb246IHRvcCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRyYWw7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbi50b3AtbGluZS1oZWFkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOmRhcmtibHVlO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aWR0aDogNmVtO1xyXG4gIGhlaWdodDogM2VtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Ujqv":
/*!*************************************************************************!*\
  !*** ./src/app/break-status/confirm-dialog/confirm-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmDialogComponent, ConfirmDialogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogModel", function() { return ConfirmDialogModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.service */ "r2F1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







class ConfirmDialogComponent {
    constructor(dialogRef, data, service) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.service = service;
        this.statusid = 0;
        this.statusid = data.statusid;
    }
    onConfirm() {
        this.service.deleteBreakStatus(this.statusid).subscribe(data => {
        });
        this.dialogRef.close(true);
    }
    onDismiss() {
        this.dialogRef.close(true);
    }
    ngOnInit() {
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 16, vars: 1, consts: [["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], ["color", "warn", 1, "close-icon"], [1, "container", 2, "width", "100%", "padding", "1px !important", "margin", "1px!important", "max-width", "100%"], [2, "width", "10%"], [1, "mat-raised-button", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Do you want to delete?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_11_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_14_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], styles: [".font[_ngcontent-%COMP%] {\r\n    font-family: Calibri;\r\n    font-size: 15px;\r\n    line-height: 1.2;\r\n  }\r\n  \r\n  .cdk-overlay-pane.my-full-screen-dialog[_ngcontent-%COMP%] {\r\n    position: relative !important;\r\n  }\r\n  \r\n  .textalign[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  \r\n  .thick[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .mat-dialog-container[_ngcontent-%COMP%] {\r\n    will-change: transform, opacity;\r\n  }\r\n  \r\n  .my-full-screen-dialog[_ngcontent-%COMP%] {\r\n    max-width: 50vw;\r\n    border-radius: 10px;\r\n    color: blue !important;\r\n  }\r\n  \r\n  .mat-dialog-container[_ngcontent-%COMP%] {\r\n      max-width: none;\r\n      color: blue !important;\r\n    }\r\n  \r\n  .mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%] {\r\n    background-color: rgb(0, 110, 255);\r\n    width: 100px !important;\r\n    align-content: center;\r\n    color: white;\r\n  }\r\n  \r\n  .mat-button[_ngcontent-%COMP%], .mat-raised-button1[_ngcontent-%COMP%] {\r\n    background-color: rgb(189, 189, 189);\r\n    width: 150px !important;\r\n    align-content: center;\r\n    color: black;\r\n  }\r\n  \r\n  .close-button[_ngcontent-%COMP%]{\r\n    float: right;\r\n    top:-24px;\r\n    right:-24px;\r\n  }\r\n  \r\n  .close-icon[_ngcontent-%COMP%] {\r\n    transition: 1s ease-in-out;\r\n  }\r\n  \r\n  \r\n  \r\n    .icon-outside .close-button{\r\n    float: right;\r\n    top:-52px;\r\n    right:-52px;\r\n  }\r\n  \r\n    .icon-outside .mat-dialog-container {\r\n   overflow: unset\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFDQTtJQUNFLCtCQUErQjtFQUNqQzs7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCOztFQUNBO01BQ0ksZUFBZTtNQUNmLHNCQUFzQjtJQUN4Qjs7RUFJRjtJQUNFLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1QsV0FBVztFQUNiOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBOztLQUVHOztFQUVIO0lBQ0UsWUFBWTtJQUNaLFNBQVM7SUFDVCxXQUFXO0VBQ2I7O0VBRUE7R0FDQztFQUNEIiwiZmlsZSI6ImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udCB7XHJcbiAgICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstb3ZlcmxheS1wYW5lLm15LWZ1bGwtc2NyZWVuLWRpYWxvZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnRleHRhbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC50aGljayB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbiAgfVxyXG4gIC5teS1mdWxsLXNjcmVlbi1kaWFsb2cge1xyXG4gICAgbWF4LXdpZHRoOiA1MHZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICBcclxuICBcclxuICAubWF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMTAsIDI1NSk7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbjEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgMTg5LCAxODkpO1xyXG4gICAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZS1idXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0b3A6LTI0cHg7XHJcbiAgICByaWdodDotMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlLWljb24ge1xyXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIC5jbG9zZS1pY29uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIDo6bmctZGVlcCAuaWNvbi1vdXRzaWRlIC5jbG9zZS1idXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0b3A6LTUycHg7XHJcbiAgICByaWdodDotNTJweDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5pY29uLW91dHNpZGUgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgb3ZlcmZsb3c6IHVuc2V0XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-dialog',
                templateUrl: './confirm-dialog.component.html',
                styleUrls: ['./confirm-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }]; }, null); })();
class ConfirmDialogModel {
    constructor(title, message, data) {
        this.title = title;
        this.message = message;
        this.data = data;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _break_status_break_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./break-status/break-status.component */ "F+gY");
/* harmony import */ var _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./break-status/show-status/show-status.component */ "R2+V");
/* harmony import */ var _break_status_add_edit_status_add_edit_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./break-status/add-edit-status/add-edit-status.component */ "cCpR");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared.service */ "r2F1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _break_status_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./break-status/confirm-dialog/confirm-dialog.component */ "Ujqv");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");











//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            //NgbModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _break_status_break_status_component__WEBPACK_IMPORTED_MODULE_5__["BreakStatusComponent"],
        _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_6__["ShowStatusComponent"],
        _break_status_add_edit_status_add_edit_status_component__WEBPACK_IMPORTED_MODULE_7__["AddEditStatusComponent"],
        _break_status_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        //NgbModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _break_status_break_status_component__WEBPACK_IMPORTED_MODULE_5__["BreakStatusComponent"],
                    _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_6__["ShowStatusComponent"],
                    _break_status_add_edit_status_add_edit_status_component__WEBPACK_IMPORTED_MODULE_7__["AddEditStatusComponent"],
                    _break_status_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    //NgbModule,
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"]
                ],
                providers: [_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                entryComponents: [_break_status_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cCpR":
/*!***************************************************************************!*\
  !*** ./src/app/break-status/add-edit-status/add-edit-status.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddEditStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditStatusComponent", function() { return AddEditStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.service */ "r2F1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class AddEditStatusComponent {
    constructor(dialogRef, 
    //@Inject(MAT_DIALOG_DATA) public data: DialogData,
    service) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.BreakStatusId = "";
        this.Location = "";
        this.Staff = "";
        this.AM_Break_Status = "";
        this.Lunch_Break_Status = "";
        this.PM_Break_Status = "";
    }
    ngOnInit() {
    }
    addBreakStatus() {
        var val = { BreakStatusId: this.BreakStatusId,
            Location: this.Location,
            Staff: this.Staff,
            AM_Break_Status: this.AM_Break_Status,
            Lunch_Break_Status: this.Lunch_Break_Status,
            PM_Break_Status: this.PM_Break_Status };
        if (this.Location != "") {
            this.service.addBreakStatus(val).subscribe(res => {
                this.dialogRef.close(true);
            });
        }
        else {
            alert("Fields cannot be empty!");
        }
    }
}
AddEditStatusComponent.ɵfac = function AddEditStatusComponent_Factory(t) { return new (t || AddEditStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
AddEditStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEditStatusComponent, selectors: [["app-add-edit-status"]], decls: 48, vars: 5, consts: [["mat-icon-button", "", 1, "close-button", 3, "mat-dialog-close"], ["color", "warn", 1, "close-icon"], [1, "form", "froup-row"], [1, "col-sm-2", "col-form-label"], [1, "col-sm-5"], ["type", "text", "placeholder", "Enter location", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-4", "col-form-label"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], ["value", "Taken"], ["value", "Missed"], ["value", "Ready"], [1, "mat-raised-button", 3, "click"]], template: function AddEditStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditStatusComponent_Template_input_ngModelChange_7_listener($event) { return ctx.Location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "AM Break Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditStatusComponent_Template_select_ngModelChange_11_listener($event) { return ctx.AM_Break_Status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select AM Break Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Taken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Missed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lunch Break Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditStatusComponent_Template_select_ngModelChange_23_listener($event) { return ctx.Lunch_Break_Status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Select Lunch Break Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Taken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Missed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "PM Break Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditStatusComponent_Template_select_ngModelChange_35_listener($event) { return ctx.PM_Break_Status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Select PM Break Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Taken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Missed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditStatusComponent_Template_button_click_46_listener() { return ctx.addBreakStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Add\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.AM_Break_Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Lunch_Break_Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.PM_Break_Status);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], styles: [".font[_ngcontent-%COMP%] {\r\n    font-family: Calibri;\r\n    font-size: 15px;\r\n    line-height: 1.2;\r\n  }\r\n  \r\n  .cdk-overlay-pane.my-full-screen-dialog[_ngcontent-%COMP%] {\r\n    position: relative !important;\r\n  }\r\n  \r\n  .textalign[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  \r\n  .thick[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .mat-dialog-container[_ngcontent-%COMP%] {\r\n    will-change: transform, opacity;\r\n  }\r\n  \r\n  .my-full-screen-dialog[_ngcontent-%COMP%] {\r\n    max-width: 50vw;\r\n    border-radius: 10px;\r\n    color: blue !important;\r\n  }\r\n  \r\n  .mat-dialog-container[_ngcontent-%COMP%] {\r\n      max-width: none;\r\n      color: blue !important;\r\n    }\r\n  \r\n  .mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%] {\r\n    background-color: rgb(0, 110, 255);\r\n    width: 100px !important;\r\n    align-content: center;\r\n    color: white;\r\n  }\r\n  \r\n  .mat-button[_ngcontent-%COMP%], .mat-raised-button1[_ngcontent-%COMP%] {\r\n    background-color: rgb(189, 189, 189);\r\n    width: 150px !important;\r\n    align-content: center;\r\n    color: black;\r\n  }\r\n  \r\n  .close-button[_ngcontent-%COMP%]{\r\n    float: right;\r\n    top:-24px;\r\n    right:-24px;\r\n  }\r\n  \r\n  .close-icon[_ngcontent-%COMP%] {\r\n    transition: 1s ease-in-out;\r\n  }\r\n  \r\n  \r\n  \r\n    .icon-outside .close-button{\r\n    float: right;\r\n    top:-52px;\r\n    right:-52px;\r\n  }\r\n  \r\n    .icon-outside .mat-dialog-container {\r\n   overflow: unset\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LXN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7RUFDQTtNQUNJLGVBQWU7TUFDZixzQkFBc0I7SUFDeEI7O0VBSUY7SUFDRSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTs7S0FFRzs7RUFFSDtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1QsV0FBVztFQUNiOztFQUVBO0dBQ0M7RUFDRCIsImZpbGUiOiJhZGQtZWRpdC1zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250IHtcclxuICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1vdmVybGF5LXBhbmUubXktZnVsbC1zY3JlZW4tZGlhbG9nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudGV4dGFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnRoaWNrIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuICB9XHJcbiAgLm15LWZ1bGwtc2NyZWVuLWRpYWxvZyB7XHJcbiAgICBtYXgtd2lkdGg6IDUwdnc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDExMCwgMjU1KTtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAubWF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAxODksIDE4OSk7XHJcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5jbG9zZS1idXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0b3A6LTI0cHg7XHJcbiAgICByaWdodDotMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlLWljb24ge1xyXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIC5jbG9zZS1pY29uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIDo6bmctZGVlcCAuaWNvbi1vdXRzaWRlIC5jbG9zZS1idXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0b3A6LTUycHg7XHJcbiAgICByaWdodDotNTJweDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5pY29uLW91dHNpZGUgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgb3ZlcmZsb3c6IHVuc2V0XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-status',
                templateUrl: './add-edit-status.component.html',
                styleUrls: ['./add-edit-status.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: src_app_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "r2F1":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SharedService {
    constructor(http) {
        this.http = http;
        //readonly APIUrl="http://mhavwpwebsmnc01:90/api";
        //readonly APIUrl="http://localhost:56249/api";
        this.APIUrl = "https://breakboard.azurewebsites.net/api";
    }
    getBreakStatusList() {
        return this.http.get(this.APIUrl + '/BreakStatus');
    }
    addBreakStatus(val) {
        return this.http.post(this.APIUrl + '/BreakStatus', val);
    }
    updateBreakStatus(val) {
        return this.http.put(this.APIUrl + '/BreakStatus', val);
    }
    deleteBreakStatus(val) {
        return this.http.delete(this.APIUrl + '/BreakStatus/' + val);
    }
    LoadBreakStatusWithFilters(amstatus, lunchstatus, pmstatus) {
        return this.http.get(this.APIUrl + '/BreakStatus/breaklistWithFilters/amstatus/' + amstatus + '/lunchstatus/' + lunchstatus + '/pmstatus/' + pmstatus);
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./break-status/show-status/show-status.component */ "R2+V");





const routes = [
    { path: 'showstatus', component: _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_2__["ShowStatusComponent"] },
    //{ path: '', redirectTo: '/showstatus', pathMatch:'full' },
    { path: '', component: _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_2__["ShowStatusComponent"] },
    { path: '**', component: _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_2__["ShowStatusComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [_break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_2__["ShowStatusComponent"]];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map