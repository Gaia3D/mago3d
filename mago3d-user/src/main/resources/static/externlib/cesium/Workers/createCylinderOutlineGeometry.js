define(["./GeometryOffsetAttribute-718fa138","./Transforms-79117a7b","./Cartesian2-8646c5a1","./Check-24483042","./ComponentDatatype-1a100acd","./CylinderGeometryLibrary-85e5e690","./when-54335d57","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./IndexDatatype-82ceea78","./Math-d6182036","./RuntimeError-88a32665","./WebGLConstants-95ceb4e9"],function(h,v,A,t,R,G,O,V,C,L,e,i,a){"use strict";var g=new A.Cartesian2;function f(t){var e=(t=O.defaultValue(t,O.defaultValue.EMPTY_OBJECT)).length,i=t.topRadius,a=t.bottomRadius,r=O.defaultValue(t.slices,128),n=Math.max(O.defaultValue(t.numberOfVerticalLines,16),0);this._length=e,this._topRadius=i,this._bottomRadius=a,this._slices=r,this._numberOfVerticalLines=n,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}f.packedLength=6,f.pack=function(t,e,i){return i=O.defaultValue(i,0),e[i++]=t._length,e[i++]=t._topRadius,e[i++]=t._bottomRadius,e[i++]=t._slices,e[i++]=t._numberOfVerticalLines,e[i]=O.defaultValue(t._offsetAttribute,-1),e};var d={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return f.unpack=function(t,e,i){e=O.defaultValue(e,0);var a=t[e++],r=t[e++],n=t[e++],o=t[e++],u=t[e++],s=t[e];return O.defined(i)?(i._length=a,i._topRadius=r,i._bottomRadius=n,i._slices=o,i._numberOfVerticalLines=u,i._offsetAttribute=-1===s?void 0:s,i):(d.length=a,d.topRadius=r,d.bottomRadius=n,d.slices=o,d.numberOfVerticalLines=u,d.offsetAttribute=-1===s?void 0:s,new f(d))},f.createGeometry=function(t){var e=t._length,i=t._topRadius,a=t._bottomRadius,r=t._slices,n=t._numberOfVerticalLines;if(!(e<=0||i<0||a<0||0===i&&0===a)){var o,u,s=2*r,f=G.CylinderGeometryLibrary.computePositions(e,i,a,r,!1),d=2*r;0<n&&(o=Math.min(n,r),u=Math.round(r/o),d+=o);for(var l=L.IndexDatatype.createTypedArray(s,2*d),m=0,c=0;c<r-1;c++)l[m++]=c,l[m++]=c+1,l[m++]=c+r,l[m++]=c+1+r;if(l[m++]=r-1,l[m++]=0,l[m++]=r+r-1,l[m++]=r,0<n)for(c=0;c<r;c+=u)l[m++]=c,l[m++]=c+r;var b=new C.GeometryAttributes;b.position=new V.GeometryAttribute({componentDatatype:R.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f}),g.x=.5*e,g.y=Math.max(a,i);var p,y,_=new v.BoundingSphere(A.Cartesian3.ZERO,A.Cartesian2.magnitude(g));return O.defined(t._offsetAttribute)&&(e=f.length,p=new Uint8Array(e/3),y=t._offsetAttribute===h.GeometryOffsetAttribute.NONE?0:1,h.arrayFill(p,y),b.applyOffset=new V.GeometryAttribute({componentDatatype:R.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:p})),new V.Geometry({attributes:b,indices:l,primitiveType:V.PrimitiveType.LINES,boundingSphere:_,offsetAttribute:t._offsetAttribute})}},function(t,e){return O.defined(e)&&(t=f.unpack(t,e)),f.createGeometry(t)}});
