"use strict";(self.webpackChunkPF_OscaresLuciano=self.webpackChunkPF_OscaresLuciano||[]).push([[364],{6364:(it,h,o)=>{o.r(h),o.d(h,{InscripcionesModule:()=>tt});var l=o(6895),v=o(2559),I=o(6582),r=o(4006),p=o(5412),T=o(9646),A=o(5226),Z=o.n(A),t=o(4650),g=o(2092),d=o(4859),f=o(9549),b=o(4385),Y=o(3238),C=o(3582),D=o(9228);function y(i,c){if(1&i&&(t.TgZ(0,"mat-option",12),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&i){const n=c.$implicit;t.Q6J("value",n.id),t.xp6(1),t.hij(" ",t.lcZ(2,2,n.name)," ")}}function N(i,c){if(1&i&&(t.TgZ(0,"mat-form-field",9)(1,"mat-label"),t._uU(2,"Curso"),t.qZA(),t.TgZ(3,"mat-select",10),t.YNc(4,y,3,4,"mat-option",11),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"mat-error"),t._uU(7),t.ALo(8,"formErrors"),t.qZA()()),2&i){const n=t.oxw();let e;t.xp6(4),t.Q6J("ngForOf",t.lcZ(5,2,n.cursoOptions$)),t.xp6(3),t.hij(" ",t.lcZ(8,4,null==(e=n.inscripcionesForm.get("courseId"))?null:e.errors)," ")}}function $(i,c){if(1&i&&(t.TgZ(0,"mat-option",12),t._uU(1),t.ALo(2,"fullName"),t.qZA()),2&i){const n=c.$implicit;t.Q6J("value",n.id),t.xp6(1),t.hij(" ",t.xi3(2,2,n,"uppercase")," ")}}function U(i,c){if(1&i&&(t.TgZ(0,"mat-form-field",9)(1,"mat-label"),t._uU(2,"Estudiante"),t.qZA(),t.TgZ(3,"mat-select",13),t.YNc(4,$,3,5,"mat-option",11),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"mat-error"),t._uU(7),t.ALo(8,"formErrors"),t.qZA()()),2&i){const n=t.oxw();let e;t.xp6(4),t.Q6J("ngForOf",t.lcZ(5,2,n.estudianteOptions$)),t.xp6(3),t.hij(" ",t.lcZ(8,4,null==(e=n.inscripcionesForm.get("userId"))?null:e.errors)," ")}}let _=(()=>{class i{constructor(n,e,s){this.matDialogRef=n,this.inscripcionesService=e,this.inscripcionId=s,this.courseIdControl=new r.NI(null,[r.kI.required]),this.userIdControl=new r.NI(null,[r.kI.required]),this.inscripcionesForm=new r.cw({courseId:this.courseIdControl,userId:this.userIdControl})}ngOnInit(){this.inscripcionesService.getInscripcionDialogOptions$().subscribe({next:n=>{this.cursoOptions$=(0,T.of)(n.cursos),this.estudianteOptions$=(0,T.of)(n.estudiantes),this.inscripcionId&&this.inscripcionesService.getInscripcionById$(this.inscripcionId).subscribe({next:e=>{e&&this.inscripcionesForm.patchValue(e)}})}})}get isEditing(){return!!this.inscripcionId}onSubmit(){if(this.inscripcionesForm.invalid)return this.inscripcionesForm.markAllAsTouched();this.matDialogRef.close(this.inscripcionesForm.value),Z().fire("",this.isEditing?"Inscripci\xf3n actualizada correctamente!":"Inscripci\xf3 agregada correctamente!","success")}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(p.so),t.Y36(g.K),t.Y36(p.WI))};static#i=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-inscripciones-modal"]],decls:16,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"formGroup"],[1,"row"],[1,"col-12"],["class","w-100",4,"ngIf"],["mat-dialog-actions",""],["mat-flat-button","","color","primary",3,"click"],["mat-flat-button","","mat-dialog-close","","color","warn"],[1,"w-100"],["formControlName","courseId"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["formControlName","userId"]],template:function(e,s){1&e&&(t.TgZ(0,"h1",0),t._uU(1),t.qZA(),t.TgZ(2,"div",1)(3,"form",2)(4,"div",3)(5,"div",4),t.YNc(6,N,9,6,"mat-form-field",5),t.ALo(7,"async"),t.qZA(),t.TgZ(8,"div",4),t.YNc(9,U,9,6,"mat-form-field",5),t.ALo(10,"async"),t.qZA()()()(),t.TgZ(11,"div",6)(12,"button",7),t.NdJ("click",function(){return s.onSubmit()}),t._uU(13,"Guardar"),t.qZA(),t.TgZ(14,"button",8),t._uU(15,"Cancelar"),t.qZA()()),2&e&&(t.xp6(1),t.hij("",s.isEditing?"Editar ":"Nueva "," Inscripci\xf3n"),t.xp6(2),t.Q6J("formGroup",s.inscripcionesForm),t.xp6(3),t.Q6J("ngIf",t.lcZ(7,4,s.cursoOptions$)),t.xp6(3),t.Q6J("ngIf",t.lcZ(10,6,s.estudianteOptions$)))},dependencies:[l.sg,l.O5,d.lW,r._Y,r.JJ,r.JL,r.sg,r.u,f.KE,f.hX,f.TO,p.ZT,p.uh,p.xY,p.H8,b.gD,Y.ey,l.Ov,l.rS,C.k,D.w],encapsulation:2})}return i})();var x=o(7392),F=o(5828),S=o(4004),J=o(7569),O=o(9653),a=o(7155);function Q(i,c){1&i&&(t.TgZ(0,"th",13),t._uU(1,"ID"),t.qZA())}function L(i,c){if(1&i&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&i){const n=c.$implicit;t.xp6(1),t.Oqu(n.id)}}function w(i,c){1&i&&(t.TgZ(0,"th",13),t._uU(1,"Curso"),t.qZA())}function M(i,c){if(1&i&&(t.TgZ(0,"td",14),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&i){const n=c.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,null==n.course?null:n.course.name)," ")}}function B(i,c){1&i&&(t.TgZ(0,"th",13),t._uU(1,"Fecha de Inicio de Curso"),t.qZA())}function E(i,c){if(1&i&&(t.TgZ(0,"td",14),t._uU(1),t.ALo(2,"date"),t.qZA()),2&i){const n=c.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,null==n.course?null:n.course.startDate,"dd/MM/YYYY")," ")}}function j(i,c){1&i&&(t.TgZ(0,"th",13),t._uU(1,"Fecha de Fin de Curso"),t.qZA())}function q(i,c){if(1&i&&(t.TgZ(0,"td",14),t._uU(1),t.ALo(2,"date"),t.qZA()),2&i){const n=c.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,null==n.course?null:n.course.endDate,"dd/MM/YYYY")," ")}}function R(i,c){1&i&&(t.TgZ(0,"th",13),t._uU(1,"Estudiante Inscripto"),t.qZA())}function H(i,c){if(1&i&&(t.TgZ(0,"td",14),t._uU(1),t.ALo(2,"fullName"),t.qZA()),2&i){const n=c.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.user,"uppercase")," ")}}function z(i,c){1&i&&(t.TgZ(0,"th",15),t._uU(1,"Acciones"),t.qZA())}function G(i,c){if(1&i){const n=t.EpF();t.TgZ(0,"td",16)(1,"button",17),t.NdJ("click",function(){const m=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.editInscripcion.emit(m))}),t.ALo(2,"async"),t.TgZ(3,"mat-icon"),t._uU(4," edit "),t.qZA()(),t.TgZ(5,"button",18),t.NdJ("click",function(){const m=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.deleteInscripcion.emit(m.id))}),t.ALo(6,"async"),t.TgZ(7,"mat-icon"),t._uU(8," delete "),t.qZA()()()}if(2&i){const n=t.oxw();t.xp6(1),t.Q6J("disabled","Administrador"!==t.lcZ(2,2,n.usuarioRol$)),t.xp6(4),t.Q6J("disabled","Administrador"!==t.lcZ(6,4,n.usuarioRol$))}}function K(i,c){1&i&&t._UZ(0,"tr",19)}function k(i,c){1&i&&t._UZ(0,"tr",20)}let X=(()=>{class i{constructor(n){this.store=n,this.dataSource=[],this.deleteInscripcion=new t.vpe,this.editInscripcion=new t.vpe,this.displayedColumns=["id","name","startDate","endDate","student","actions"],this.usuarioRol$=this.store.select(J.r).pipe((0,S.U)(e=>e?.role))}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(O.yh))};static#i=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-inscripciones-table"]],inputs:{dataSource:"dataSource"},outputs:{deleteInscripcion:"deleteInscripcion",editInscripcion:"editInscripcion"},decls:21,vars:3,consts:[["mat-table","",1,"mat-elevation-z8","text-center",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","startDate"],["matColumnDef","endDate"],["matColumnDef","student"],["matColumnDef","actions"],["mat-header-cell","","class","text-center",4,"matHeaderCellDef"],["mat-cell","","class","text-center",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"text-center"],["mat-cell","",1,"text-center"],["mat-icon-button","","color","accent",3,"disabled","click"],["mat-icon-button","","color","warn",3,"disabled","click"],["mat-header-row",""],["mat-row",""]],template:function(e,s){1&e&&(t.TgZ(0,"table",0),t.ynx(1,1),t.YNc(2,Q,2,0,"th",2),t.YNc(3,L,2,1,"td",3),t.BQk(),t.ynx(4,4),t.YNc(5,w,2,0,"th",2),t.YNc(6,M,3,3,"td",3),t.BQk(),t.ynx(7,5),t.YNc(8,B,2,0,"th",2),t.YNc(9,E,3,4,"td",3),t.BQk(),t.ynx(10,6),t.YNc(11,j,2,0,"th",2),t.YNc(12,q,3,4,"td",3),t.BQk(),t.ynx(13,7),t.YNc(14,R,2,0,"th",2),t.YNc(15,H,3,4,"td",3),t.BQk(),t.ynx(16,8),t.YNc(17,z,2,0,"th",9),t.YNc(18,G,9,6,"td",10),t.BQk(),t.YNc(19,K,1,0,"tr",11),t.YNc(20,k,1,0,"tr",12),t.qZA()),2&e&&(t.Q6J("dataSource",s.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",s.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",s.displayedColumns))},dependencies:[x.Hw,d.RK,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,l.Ov,l.rS,l.uU,C.k],encapsulation:2})}return i})();const W=function(){return[]},P=[{path:"",component:(()=>{class i{constructor(n,e){this.inscripcionesService=n,this.matDialog=e,this.inscripciones$=this.inscripcionesService.getInscripciones$()}addInscripcion(){this.matDialog.open(_).afterClosed().subscribe(n=>{n&&this.inscripcionesService.createInscripcion$(n).subscribe(()=>{this.inscripciones$=this.inscripcionesService.getInscripciones$()})})}onDeleteInscripcion(n){Z().fire({title:"Confirmar eliminaci\xf3n",text:"Est\xe1s seguro de borrar esta inscripci\xf3n?",icon:"question",showCancelButton:!0,confirmButtonText:"S\xed, eliminar inscripci\xf3n",cancelButtonText:"Cancelar"}).then(e=>{e.isConfirmed&&(this.inscripciones$=this.inscripcionesService.deleteInscripciones$(n))})}onEditInscripcion(n){this.matDialog.open(_,{data:n.id}).afterClosed().subscribe({next:e=>{e&&(this.inscripciones$=this.inscripcionesService.editInscripcion$(n.id,e))}})}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(g.K),t.Y36(p.uw))};static#i=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-inscripciones"]],decls:9,vars:4,consts:[["appTextSize","","fontWeight","500"],[1,"pb-3"],["mat-flat-button","","color","primary",3,"click"],[3,"dataSource","editInscripcion","deleteInscripcion"]],template:function(e,s){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Inscripciones"),t.qZA(),t.TgZ(2,"div",1)(3,"button",2),t.NdJ("click",function(){return s.addInscripcion()}),t.TgZ(4,"mat-icon"),t._uU(5,"add"),t.qZA(),t._uU(6,"Nueva Inscripci\xf3n "),t.qZA()(),t.TgZ(7,"app-inscripciones-table",3),t.NdJ("editInscripcion",function(u){return s.onEditInscripcion(u)})("deleteInscripcion",function(u){return s.onDeleteInscripcion(u)}),t.ALo(8,"async"),t.qZA()),2&e&&(t.xp6(7),t.Q6J("dataSource",t.lcZ(8,1,s.inscripciones$)||t.DdM(3,W)))},dependencies:[x.Hw,d.lW,F.Y,X,l.Ov],encapsulation:2})}return i})()}];let V=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#i=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[I.Bz.forChild(P),I.Bz]})}return i})(),tt=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#i=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[l.ez,v.m,V]})}return i})()}}]);