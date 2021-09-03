(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Medivision\BreakBoard\src\main.ts */"zUnb");


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
/*! exports provided: ShowStatusComponent, PmSelectComponent, AmSelectComponent, LunchSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowStatusComponent", function() { return ShowStatusComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmSelectComponent", function() { return PmSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmSelectComponent", function() { return AmSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LunchSelectComponent", function() { return LunchSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "Ujqv");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _add_edit_status_add_edit_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-edit-status/add-edit-status.component */ "cCpR");
/* harmony import */ var src_app_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared.service */ "r2F1");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = function (a0, a1, a2) { return { "bg-warning p-2 w-100": a0, "bg-primary p-2 w-100": a1, "bg-success p-2 w-100": a2 }; };
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
        this.ModalTitle = '';
        this.ActivateAddEditStatusComp = false;
        this.id = '';
        this.AMBreakStatusFilter = '';
        this.LunchBreakStatusFilter = '';
        this.PMBreakStatusFilter = '';
        this.LocationFilter = '';
        this.BreakStatusListWithoutFilter = [];
        this.settings = {
            actions: {
                filter: false,
                columnTitle: 'Actions',
                add: false,
                edit: false,
                delete: false,
                custom: [
                    {
                        name: 'delete',
                        title: `<i
        class="fas fa-trash text-danger"
        
      ></i>`,
                    },
                ],
                position: 'right',
            },
            columns: {
                id: {
                    title: '#',
                    filter: false,
                    type: 'html',
                    valuePrepareFunction: (Volume, row, index) => {
                        return index.row.index + 1;
                    },
                },
                Location: {
                    title: 'Location',
                    filter: true,
                },
                AM_Break_Status: {
                    title: 'AM break status',
                    filter: true,
                    type: 'custom',
                    renderComponent: AmSelectComponent,
                    onComponentInitFunction: (instance) => {
                        instance.selectEdit.subscribe((data) => {
                            this.editClick(data);
                        });
                    },
                },
                Lunch_Break_Status: {
                    title: 'Lunch break status',
                    filter: true,
                    type: 'custom',
                    renderComponent: LunchSelectComponent,
                    onComponentInitFunction: (instance) => {
                        instance.selectEdit.subscribe((data) => {
                            this.editClick(data);
                        });
                    },
                },
                PM_Break_Status: {
                    title: 'PM break status',
                    filter: true,
                    type: 'custom',
                    renderComponent: PmSelectComponent,
                    onComponentInitFunction: (instance) => {
                        instance.selectEdit.subscribe((data) => {
                            this.editClick(data);
                        });
                    },
                },
                Status: {
                    title: 'Status',
                    filter: false,
                },
                OutRoom: {
                    title: 'Out room',
                    filter: false,
                },
            },
        };
    }
    ngOnInit() {
        this.amstatus = [
            { item_id: 1, item_text: 'Taken' },
            { item_id: 2, item_text: 'Ready' },
            { item_id: 3, item_text: 'Missed' },
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableCheckAll: true,
            allowSearchFilter: true,
            itemsShowLimit: 3,
        };
        this.refreshBreakStatusList();
        this.id = setInterval(() => {
            this.refreshBreakStatusList();
        }, 60000);
    }
    onCustomAction(event) {
        switch (event.action) {
            case 'delete':
                this.deleteClick(event.data);
                break;
        }
    }
    ngOnDestroy() {
        if (this.id) {
            clearInterval(this.id);
        }
    }
    addClick() {
        this.loc = {
            BreakStatusId: 0,
            Location: '',
            Staff: '',
            AM_Break_Status: '',
            Lunch_Break_Status: '',
            PM_Break_Status: '',
        };
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.direction = 'ltr';
        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.height = '65%';
        dialogConfig.panelClass = 'my-full-screen-dialog';
        //  dialogConfig.data = {
        //    statusid: item.BreakStatusId
        //  }
        const dialogRef = this.dialog.open(_add_edit_status_add_edit_status_component__WEBPACK_IMPORTED_MODULE_3__["AddEditStatusComponent"], dialogConfig);
        return dialogRef
            .afterClosed()
            .subscribe((result) => this.refreshBreakStatusList());
    }
    editClick(item) {
        this.service.updateBreakStatus(item).subscribe((res) => { });
    }
    deleteClick(item) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.direction = 'ltr';
        dialogConfig.autoFocus = true;
        dialogConfig.width = '20%';
        dialogConfig.height = '40%';
        dialogConfig.panelClass = 'my-full-screen-dialog';
        dialogConfig.data = {
            statusid: item.BreakStatusId,
        };
        const dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], dialogConfig);
        return dialogRef
            .afterClosed()
            .subscribe((result) => this.refreshBreakStatusList());
    }
    closeClick() {
        this.refreshBreakStatusList();
    }
    refreshBreakStatusList() {
        this.service.getBreakStatusList().subscribe((data) => {
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
            return (el.AM_Break_Status.toString()
                .toLowerCase()
                .includes(AMBreakStatusFilter.toString().trim().toLowerCase()) &&
                el.Lunch_Break_Status.toString()
                    .toLowerCase()
                    .includes(LunchBreakStatusFilter.toString().trim().toLowerCase()) &&
                el.PM_Break_Status.toString()
                    .toLowerCase()
                    .includes(PMBreakStatusFilter.toString().trim().toLowerCase()) &&
                el.Location.toString()
                    .toLowerCase()
                    .includes(LocationFilter.toString().trim().toLowerCase()));
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
                    lunchstatus =
                        lunchstatus + ';' + this.selectedLunchStatus[i].item_text;
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
        this.service
            .LoadBreakStatusWithFilters(amstatus, lunchstatus, pmstatus)
            .subscribe((data) => {
            this.BreakStatusList = data;
        });
    }
}
ShowStatusComponent.ɵfac = function ShowStatusComponent_Factory(t) { return new (t || ShowStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
ShowStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowStatusComponent, selectors: [["app-show-status"]], decls: 17, vars: 2, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container-fluid", "bg-light"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "heading"], ["type", "button", "data-backdrop", "static", "data-keyboard", "false", 1, "btn", "btn-primary", "float-left", "m-2", 3, "click"], [1, "fas", "fa-plus-circle"], [1, "container-fluid", "bg-light", "mt-3", "p-2", "main"], [3, "settings", "source", "custom"]], template: function ShowStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowStatusComponent_Template_button_click_12_listener() { return ctx.addClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Add Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ng2-smart-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("custom", function ShowStatusComponent_Template_ng2_smart_table_custom_16_listener($event) { return ctx.onCustomAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.BreakStatusList);
    } }, directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableComponent"]], styles: ["button[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 24px;\n  line-height: 3.0769230769;\n  font-size: 13px;\n  letter-spacing: normal;\n  border-radius: 50px;\n}\n.heading[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 2;\n}\ninput[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\nth[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 2;\n}\ntd[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 300;\n  line-height: 2;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  font-size: 12px;\n  font-weight: 200;\n  line-height: 2;\n}\n.main[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxpRUFBaUU7QUFDbkUiLCJmaWxlIjoic2hvdy1zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBsaW5lLWhlaWdodDogMy4wNzY5MjMwNzY5O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4uaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG50aCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG50ZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG4uYnJlYWRjcnVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG4ubWFpbiB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggcmdiKDAgMCAwIC8gNCUpLCAwIDFweCA2cHggcmdiKDAgMCAwIC8gNCUpO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-status',
                templateUrl: './show-status.component.html',
                styleUrls: ['./show-status.component.css'],
            }]
    }], function () { return [{ type: src_app_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();
class PmSelectComponent {
    constructor() {
        this.selectEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.value = this.rowData;
    }
    callType(event) {
        this.selectEdit.emit(event);
    }
}
PmSelectComponent.ɵfac = function PmSelectComponent_Factory(t) { return new (t || PmSelectComponent)(); };
PmSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PmSelectComponent, selectors: [["app-pm-select"]], inputs: { rowData: "rowData", options: "options", value: "value" }, outputs: { selectEdit: "selectEdit" }, decls: 8, vars: 6, consts: [[1, "form-group", "mb-0"], ["matNativeControl", "", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["value", "Taken"], ["value", "Missed"], ["value", "Ready"]], template: function PmSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PmSelectComponent_Template_select_ngModelChange_1_listener($event) { return ctx.rowData.PM_Break_Status = $event; })("change", function PmSelectComponent_Template_select_change_1_listener() { return ctx.callType(ctx.rowData); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Taken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Missed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rowData.PM_Break_Status)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.rowData.PM_Break_Status == "Missed", ctx.rowData.PM_Break_Status == "Ready", ctx.rowData.PM_Break_Status == "Taken"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PmSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pm-select',
                template: `<div class="form-group mb-0">
    <select
      class="form-control"
      matNativeControl
      required
      [(ngModel)]="rowData.PM_Break_Status"
      (change)="callType(rowData)"
      [ngClass]="{
        'bg-warning p-2 w-100': rowData.PM_Break_Status == 'Missed',
        'bg-primary p-2 w-100': rowData.PM_Break_Status == 'Ready',
        'bg-success p-2 w-100': rowData.PM_Break_Status == 'Taken'
      }"
    >
      <option value="Taken">Taken</option>
      <option value="Missed">Missed</option>
      <option value="Ready">Ready</option>
    </select>
  </div>`,
            }]
    }], function () { return []; }, { rowData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class AmSelectComponent {
    constructor() {
        this.selectEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.value = this.rowData;
    }
    callType(event) {
        this.selectEdit.emit(event);
    }
}
AmSelectComponent.ɵfac = function AmSelectComponent_Factory(t) { return new (t || AmSelectComponent)(); };
AmSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AmSelectComponent, selectors: [["app-am-select"]], inputs: { rowData: "rowData", options: "options", value: "value" }, outputs: { selectEdit: "selectEdit" }, decls: 8, vars: 6, consts: [[1, "form-group", "mb-0"], ["matNativeControl", "", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["value", "Taken"], ["value", "Missed"], ["value", "Ready"]], template: function AmSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AmSelectComponent_Template_select_ngModelChange_1_listener($event) { return ctx.rowData.AM_Break_Status = $event; })("change", function AmSelectComponent_Template_select_change_1_listener() { return ctx.callType(ctx.rowData); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Taken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Missed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rowData.AM_Break_Status)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.rowData.AM_Break_Status == "Missed", ctx.rowData.AM_Break_Status == "Ready", ctx.rowData.AM_Break_Status == "Taken"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AmSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-am-select',
                template: `<div class="form-group mb-0">
    <select
      class="form-control"
      matNativeControl
      required
      [(ngModel)]="rowData.AM_Break_Status"
      (change)="callType(rowData)"
      [ngClass]="{
        'bg-warning p-2 w-100': rowData.AM_Break_Status == 'Missed',
        'bg-primary p-2 w-100': rowData.AM_Break_Status == 'Ready',
        'bg-success p-2 w-100': rowData.AM_Break_Status == 'Taken'
      }"
    >
      <option value="Taken">Taken</option>
      <option value="Missed">Missed</option>
      <option value="Ready">Ready</option>
    </select>
  </div>`,
            }]
    }], function () { return []; }, { rowData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class LunchSelectComponent {
    constructor() {
        this.selectEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.value = this.rowData;
    }
    callType(event) {
        this.selectEdit.emit(event);
    }
}
LunchSelectComponent.ɵfac = function LunchSelectComponent_Factory(t) { return new (t || LunchSelectComponent)(); };
LunchSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LunchSelectComponent, selectors: [["app-lunch-select"]], inputs: { rowData: "rowData", options: "options", value: "value" }, outputs: { selectEdit: "selectEdit" }, decls: 8, vars: 6, consts: [[1, "form-group", "mb-0"], ["matNativeControl", "", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange", "change"], ["value", "Taken"], ["value", "Missed"], ["value", "Ready"]], template: function LunchSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LunchSelectComponent_Template_select_ngModelChange_1_listener($event) { return ctx.rowData.Lunch_Break_Status = $event; })("change", function LunchSelectComponent_Template_select_change_1_listener() { return ctx.callType(ctx.rowData); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Taken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Missed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rowData.Lunch_Break_Status)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx.rowData.Lunch_Break_Status == "Missed", ctx.rowData.Lunch_Break_Status == "Ready", ctx.rowData.Lunch_Break_Status == "Taken"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LunchSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lunch-select',
                template: `<div class="form-group mb-0">
    <select
      class="form-control"
      matNativeControl
      required
      [(ngModel)]="rowData.Lunch_Break_Status"
      (change)="callType(rowData)"
      [ngClass]="{
        'bg-warning p-2 w-100': rowData.Lunch_Break_Status == 'Missed',
        'bg-primary p-2 w-100': rowData.Lunch_Break_Status == 'Ready',
        'bg-success p-2 w-100': rowData.Lunch_Break_Status == 'Taken'
      }"
    >
      <option value="Taken">Taken</option>
      <option value="Missed">Missed</option>
      <option value="Ready">Ready</option>
    </select>
  </div>`,
            }]
    }], function () { return []; }, { rowData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 4, consts: [[1, "navbarbg-white", "header"], [1, "d-flex", "justify-content-between"], ["href", "#", 1, "navbar-brand"], ["src", "assets/logo.png", "alt", "Perimatics Logo", 1, "logo"], [1, "d-flex", "align-items-center"], [1, "time", "d-flex", "align-items-center"], [1, "fas", "fa-clock", "mr-2"], [1, "container-fluid"], [1, "m-5"], [1, "bg-light", "footer"], [1, "text-center"], [1, "copyright"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Break Board: HCA Healthcare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Copyright \u00A9 2020-21. Perimatics. All Rights Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 1, ctx.myDate, "short"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".footer[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  width: 100%;\r\n  bottom: 0;\r\n  padding: 15px;\r\n  background-color: #c5d3e0 !important;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);\r\n  background-image: url(https://static.parastorage.com/services/editor-elements/dist/media/ironpatern.6522082f.png);\r\n}\r\n\r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  background-color: white !important;\r\n  border-bottom: 1px solid #e3ebf6;\r\n  box-shadow: 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%);\r\n}\r\n\r\n.time[_ngcontent-%COMP%] {\r\n  color: #006c6d;\r\n  font-weight: 100;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {    color:  rgb(0, 0, 139);    \r\n        font-size: 32px;   \r\n        margin-bottom: 0px;   \r\n        line-height: 1;   \r\n        text-align: center;   \r\n       \r\n    }\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  width: 208px;\r\n  height: 68px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  -o-object-position: 50% 50%;\r\n     object-position: 50% 50%;\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%]{\r\n  font-weight: 100;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxzQ0FBc0M7RUFDdEMsaUhBQWlIO0FBQ25IOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxnQ0FBZ0M7RUFDaEMsaUVBQWlFO0FBQ25FOztBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQSxRQUFRLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxrQkFBa0I7O0lBRXRCOztBQUNKO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLDJCQUF3QjtLQUF4Qix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWQzZTAgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMucGFyYXN0b3JhZ2UuY29tL3NlcnZpY2VzL2VkaXRvci1lbGVtZW50cy9kaXN0L21lZGlhL2lyb25wYXRlcm4uNjUyMjA4MmYucG5nKTtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlYmY2O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggcmdiKDAgMCAwIC8gNCUpLCAwIDFweCA2cHggcmdiKDAgMCAwIC8gNCUpO1xyXG59XHJcbi50aW1lIHtcclxuICBjb2xvcjogIzAwNmM2ZDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG5oMSB7ICAgIGNvbG9yOiAgcmdiKDAsIDAsIDEzOSk7ICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDsgICBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7ICAgXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7ICAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbi5sb2dvIHtcclxuICB3aWR0aDogMjA4cHg7XHJcbiAgaGVpZ2h0OiA2OHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcclxufVxyXG4uY29weXJpZ2h0e1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbiJdfQ== */"] });
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
ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 13, vars: 2, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "mat-dialog-close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-dark", 3, "mat-dialog-close", "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Remove location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Are you sure? you want to delete?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_9_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_11_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["button[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  padding: 0 24px;\r\n  line-height: 3.0769230769;\r\n  font-size: 13px;\r\n  letter-spacing: normal;\r\n  border-radius: 50px;\r\n}\r\nh5[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  line-height: 1.33;\r\n  margin-bottom: 21px;\r\n  padding-right: 15px;\r\n  color: #1f2024;\r\n}\r\n.close[_ngcontent-%COMP%] {\r\n  font-weight: 200;\r\n  margin-top: -24px;\r\n}\r\n.modal-body[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  color: #6b6b7b;\r\n  margin-bottom: 24px;\r\n}\r\n.font[_ngcontent-%COMP%] {\r\n  font-family: Calibri;\r\n  font-size: 15px;\r\n  line-height: 1.2;\r\n}\r\n.cdk-overlay-pane.my-full-screen-dialog[_ngcontent-%COMP%] {\r\n  position: relative !important;\r\n}\r\n.textalign[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.thick[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n.mat-dialog-container[_ngcontent-%COMP%] {\r\n  will-change: transform, opacity;\r\n}\r\n.my-full-screen-dialog[_ngcontent-%COMP%] {\r\n  max-width: 50vw;\r\n  border-radius: 10px;\r\n  color: blue !important;\r\n}\r\n.mat-dialog-container[_ngcontent-%COMP%] {\r\n  max-width: none;\r\n  color: blue !important;\r\n}\r\n.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%] {\r\n  background-color: rgb(0, 110, 255);\r\n  width: 100px !important;\r\n  align-content: center;\r\n  color: white;\r\n}\r\n.mat-button[_ngcontent-%COMP%], .mat-raised-button1[_ngcontent-%COMP%] {\r\n  background-color: rgb(189, 189, 189);\r\n  width: 150px !important;\r\n  align-content: center;\r\n  color: black;\r\n}\r\n.close-button[_ngcontent-%COMP%] {\r\n  float: right;\r\n  top: -24px;\r\n  right: -24px;\r\n}\r\n.close-icon[_ngcontent-%COMP%] {\r\n  transition: 1s ease-in-out;\r\n}\r\n\r\n  .icon-outside .close-button {\r\n  float: right;\r\n  top: -52px;\r\n  right: -52px;\r\n}\r\n  .icon-outside .mat-dialog-container {\r\n  overflow: unset;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFFQTs7RUFFRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQTs7S0FFSztBQUVMO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDAgMjRweDtcclxuICBsaW5lLWhlaWdodDogMy4wNzY5MjMwNzY5O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuaDUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMS4zMztcclxuICBtYXJnaW4tYm90dG9tOiAyMXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgY29sb3I6ICMxZjIwMjQ7XHJcbn1cclxuLmNsb3NlIHtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIG1hcmdpbi10b3A6IC0yNHB4O1xyXG59XHJcbi5tb2RhbC1ib2R5IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzZiNmI3YjtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1wYW5lLm15LWZ1bGwtc2NyZWVuLWRpYWxvZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0YWxpZ24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRoaWNrIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XHJcbn1cclxuLm15LWZ1bGwtc2NyZWVuLWRpYWxvZyB7XHJcbiAgbWF4LXdpZHRoOiA1MHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogbm9uZTtcclxuICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbixcclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTEwLCAyNTUpO1xyXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uLFxyXG4ubWF0LXJhaXNlZC1idXR0b24xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAxODksIDE4OSk7XHJcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRvcDogLTI0cHg7XHJcbiAgcmlnaHQ6IC0yNHB4O1xyXG59XHJcblxyXG4uY2xvc2UtaWNvbiB7XHJcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8qIC5jbG9zZS1pY29uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfSAqL1xyXG5cclxuOjpuZy1kZWVwIC5pY29uLW91dHNpZGUgLmNsb3NlLWJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRvcDogLTUycHg7XHJcbiAgcmlnaHQ6IC01MnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmljb24tb3V0c2lkZSAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiB1bnNldDtcclxufVxyXG4iXX0= */"] });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");











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
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_19__["Ng2SmartTableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _break_status_break_status_component__WEBPACK_IMPORTED_MODULE_5__["BreakStatusComponent"],
        _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_6__["ShowStatusComponent"],
        _break_status_add_edit_status_add_edit_status_component__WEBPACK_IMPORTED_MODULE_7__["AddEditStatusComponent"],
        _break_status_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"],
        _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_6__["LunchSelectComponent"],
        _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_6__["AmSelectComponent"],
        _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_6__["PmSelectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_19__["Ng2SmartTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _break_status_break_status_component__WEBPACK_IMPORTED_MODULE_5__["BreakStatusComponent"],
                    _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_6__["ShowStatusComponent"],
                    _break_status_add_edit_status_add_edit_status_component__WEBPACK_IMPORTED_MODULE_7__["AddEditStatusComponent"],
                    _break_status_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"],
                    _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_6__["LunchSelectComponent"],
                    _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_6__["AmSelectComponent"],
                    _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_6__["PmSelectComponent"],
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
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_19__["Ng2SmartTableModule"],
                ],
                providers: [_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                entryComponents: [
                    _break_status_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"],
                    _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_6__["LunchSelectComponent"],
                    _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_6__["AmSelectComponent"],
                    _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_6__["PmSelectComponent"],
                ],
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AddEditStatusComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r3 == null ? null : status_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", status_r3 == null ? null : status_r3.name, " ");
} }
function AddEditStatusComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r4 == null ? null : status_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", status_r4 == null ? null : status_r4.name, " ");
} }
function AddEditStatusComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r5 == null ? null : status_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", status_r5 == null ? null : status_r5.name, " ");
} }
const _c0 = function () { return { standalone: true }; };
class AddEditStatusComponent {
    constructor(dialogRef, 
    //@Inject(MAT_DIALOG_DATA) public data: DialogData,
    service) {
        this.dialogRef = dialogRef;
        this.service = service;
        this.BreakStatusId = '';
        this.Location = '';
        this.Staff = '';
        this.AM_Break_Status = '';
        this.Lunch_Break_Status = '';
        this.PM_Break_Status = '';
        this.breakStatus = [
            {
                name: 'Taken',
                value: 'Taken',
            },
            {
                name: 'Missed',
                value: 'Missed',
            },
            {
                name: 'Ready',
                value: 'Ready',
            },
        ];
    }
    ngOnInit() { }
    addBreakStatus() {
        console.log('dshgfhjsgfhsdgfhsdgfhsjdgh', this.BreakStatusId, this.Location, this.Staff, this.AM_Break_Status, this.Lunch_Break_Status, this.PM_Break_Status);
        var val = {
            BreakStatusId: this.BreakStatusId,
            Location: this.Location,
            Staff: this.Staff,
            AM_Break_Status: this.AM_Break_Status,
            Lunch_Break_Status: this.Lunch_Break_Status,
            PM_Break_Status: this.PM_Break_Status,
        };
        if (this.Location != '') {
            this.service.addBreakStatus(val).subscribe((res) => {
                this.dialogRef.close(true);
            });
        }
        else {
            alert('Fields cannot be empty!');
        }
    }
}
AddEditStatusComponent.ɵfac = function AddEditStatusComponent_Factory(t) { return new (t || AddEditStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
AddEditStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEditStatusComponent, selectors: [["app-add-edit-status"]], decls: 44, vars: 17, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "mat-dialog-close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-sm-12", "col-md-6"], [1, "form-group"], ["for", "location"], ["type", "text", "id", "location", "placeholder", "Enter location", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "AM_Break_Status"], ["id", "AM_Break_Status", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "Lunch_Break_Status"], ["id", "Lunch_Break_Status", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "PM_Break_Status"], ["id", "PM_Break_Status", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-dark", 3, "mat-dialog-close"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "value"]], template: function AddEditStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditStatusComponent_Template_input_ngModelChange_13_listener($event) { return ctx.Location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "AM break status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditStatusComponent_Template_select_ngModelChange_18_listener($event) { return ctx.AM_Break_Status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Select AM break status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddEditStatusComponent_option_21_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lunch break status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditStatusComponent_Template_select_ngModelChange_27_listener($event) { return ctx.Lunch_Break_Status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Select lunch break status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddEditStatusComponent_option_30_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "PM break status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditStatusComponent_Template_select_ngModelChange_35_listener($event) { return ctx.PM_Break_Status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Select PM break status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AddEditStatusComponent_option_38_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditStatusComponent_Template_button_click_42_listener() { return ctx.addBreakStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Location)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.AM_Break_Status)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breakStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Lunch_Break_Status)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breakStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.PM_Break_Status)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breakStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["button[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  padding: 0 24px;\r\n  line-height: 3.0769230769;\r\n  font-size: 13px;\r\n  letter-spacing: normal;\r\n  border-radius: 50px;\r\n}\r\nh5[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  font-size: 18px;\r\n  line-height: 1.44;\r\n  color: #1f2024;\r\n}\r\n.close[_ngcontent-%COMP%] {\r\n  font-weight: 200;\r\n  margin-top: -24px;\r\n}\r\n.font[_ngcontent-%COMP%] {\r\n  font-family: Calibri;\r\n  font-size: 15px;\r\n  line-height: 1.2;\r\n}\r\n.cdk-overlay-pane.my-full-screen-dialog[_ngcontent-%COMP%] {\r\n  position: relative !important;\r\n}\r\n.textalign[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.thick[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n.mat-dialog-container[_ngcontent-%COMP%] {\r\n  will-change: transform, opacity;\r\n}\r\n.my-full-screen-dialog[_ngcontent-%COMP%] {\r\n  max-width: 50vw;\r\n  border-radius: 10px;\r\n  color: blue !important;\r\n}\r\n.mat-dialog-container[_ngcontent-%COMP%] {\r\n  max-width: none;\r\n  color: blue !important;\r\n}\r\n.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%] {\r\n  background-color: rgb(0, 110, 255);\r\n  width: 100px !important;\r\n  align-content: center;\r\n  color: white;\r\n}\r\n.mat-button[_ngcontent-%COMP%], .mat-raised-button1[_ngcontent-%COMP%] {\r\n  background-color: rgb(189, 189, 189);\r\n  width: 150px !important;\r\n  align-content: center;\r\n  color: black;\r\n}\r\n.close-button[_ngcontent-%COMP%] {\r\n  float: right;\r\n  top: -24px;\r\n  right: -24px;\r\n}\r\n.close-icon[_ngcontent-%COMP%] {\r\n  transition: 1s ease-in-out;\r\n}\r\n\r\n  .icon-outside .close-button {\r\n  float: right;\r\n  top: -52px;\r\n  right: -52px;\r\n}\r\n  .icon-outside .mat-dialog-container {\r\n  overflow: unset;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LXN0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFHQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtBQUNkO0FBRUE7O0VBRUUsb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7O0tBRUs7QUFFTDtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImFkZC1lZGl0LXN0YXR1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzLjA3NjkyMzA3Njk7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5oNSB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDQ7XHJcbiAgY29sb3I6ICMxZjIwMjQ7XHJcbn1cclxuLmNsb3NlIHtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIG1hcmdpbi10b3A6IC0yNHB4O1xyXG59XHJcblxyXG5cclxuLmZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4uY2RrLW92ZXJsYXktcGFuZS5teS1mdWxsLXNjcmVlbi1kaWFsb2cge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dGFsaWduIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aGljayB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG59XHJcbi5teS1mdWxsLXNjcmVlbi1kaWFsb2cge1xyXG4gIG1heC13aWR0aDogNTB2dztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1idXR0b24sXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDExMCwgMjU1KTtcclxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbixcclxuLm1hdC1yYWlzZWQtYnV0dG9uMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgMTg5LCAxODkpO1xyXG4gIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jbG9zZS1idXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0b3A6IC0yNHB4O1xyXG4gIHJpZ2h0OiAtMjRweDtcclxufVxyXG5cclxuLmNsb3NlLWljb24ge1xyXG4gIHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4vKiAuY2xvc2UtaWNvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIH0gKi9cclxuXHJcbjo6bmctZGVlcCAuaWNvbi1vdXRzaWRlIC5jbG9zZS1idXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0b3A6IC01MnB4O1xyXG4gIHJpZ2h0OiAtNTJweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5pY29uLW91dHNpZGUgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogdW5zZXQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-status',
                templateUrl: './add-edit-status.component.html',
                styleUrls: ['./add-edit-status.component.css'],
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
        this.APIUrl = "http://breakboard.azurewebsites.net/api";
    }
    getBreakStatusList() {
        return this.http.get(this.APIUrl + '/BreakStatus/breaklist');
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./break-status/show-status/show-status.component */ "R2+V");






const routes = [
    { path: 'showstatus', component: _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_3__["ShowStatusComponent"] },
    //{ path: '', redirectTo: '/showstatus', pathMatch:'full' },
    { path: '', component: _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_3__["ShowStatusComponent"] },
    { path: '**', component: _break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_3__["ShowStatusComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [_break_status_show_status_show_status_component__WEBPACK_IMPORTED_MODULE_3__["ShowStatusComponent"]];


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