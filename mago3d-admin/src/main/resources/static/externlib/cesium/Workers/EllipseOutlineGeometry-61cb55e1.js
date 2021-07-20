define(["exports","./GeometryOffsetAttribute-718fa138","./Transforms-79117a7b","./Cartesian2-8646c5a1","./ComponentDatatype-1a100acd","./when-54335d57","./Check-24483042","./EllipseGeometryLibrary-e452d6b7","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./IndexDatatype-82ceea78","./Math-d6182036"],function(e,A,_,g,x,E,t,v,M,C,G,L){"use strict";var O=new g.Cartesian3,l=new g.Cartesian3;var S=new _.BoundingSphere,V=new _.BoundingSphere;function f(e){var t=(e=E.defaultValue(e,E.defaultValue.EMPTY_OBJECT)).center,i=E.defaultValue(e.ellipsoid,g.Ellipsoid.WGS84),r=e.semiMajorAxis,a=e.semiMinorAxis,n=E.defaultValue(e.granularity,L.CesiumMath.RADIANS_PER_DEGREE),o=E.defaultValue(e.height,0),s=E.defaultValue(e.extrudedHeight,o);this._center=g.Cartesian3.clone(t),this._semiMajorAxis=r,this._semiMinorAxis=a,this._ellipsoid=g.Ellipsoid.clone(i),this._rotation=E.defaultValue(e.rotation,0),this._height=Math.max(s,o),this._granularity=n,this._extrudedHeight=Math.min(s,o),this._numberOfVerticalLines=Math.max(E.defaultValue(e.numberOfVerticalLines,16),0),this._offsetAttribute=e.offsetAttribute,this._workerName="createEllipseOutlineGeometry"}f.packedLength=g.Cartesian3.packedLength+g.Ellipsoid.packedLength+8,f.pack=function(e,t,i){return i=E.defaultValue(i,0),g.Cartesian3.pack(e._center,t,i),i+=g.Cartesian3.packedLength,g.Ellipsoid.pack(e._ellipsoid,t,i),i+=g.Ellipsoid.packedLength,t[i++]=e._semiMajorAxis,t[i++]=e._semiMinorAxis,t[i++]=e._rotation,t[i++]=e._height,t[i++]=e._granularity,t[i++]=e._extrudedHeight,t[i++]=e._numberOfVerticalLines,t[i]=E.defaultValue(e._offsetAttribute,-1),t};var m=new g.Cartesian3,h=new g.Ellipsoid,y={center:m,ellipsoid:h,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};f.unpack=function(e,t,i){t=E.defaultValue(t,0);var r=g.Cartesian3.unpack(e,t,m);t+=g.Cartesian3.packedLength;var a=g.Ellipsoid.unpack(e,t,h);t+=g.Ellipsoid.packedLength;var n=e[t++],o=e[t++],s=e[t++],u=e[t++],l=e[t++],d=e[t++],p=e[t++],c=e[t];return E.defined(i)?(i._center=g.Cartesian3.clone(r,i._center),i._ellipsoid=g.Ellipsoid.clone(a,i._ellipsoid),i._semiMajorAxis=n,i._semiMinorAxis=o,i._rotation=s,i._height=u,i._granularity=l,i._extrudedHeight=d,i._numberOfVerticalLines=p,i._offsetAttribute=-1===c?void 0:c,i):(y.height=u,y.extrudedHeight=d,y.granularity=l,y.rotation=s,y.semiMajorAxis=n,y.semiMinorAxis=o,y.numberOfVerticalLines=p,y.offsetAttribute=-1===c?void 0:c,new f(y))},f.createGeometry=function(e){if(!(e._semiMajorAxis<=0||e._semiMinorAxis<=0)){var t=e._height,i=e._extrudedHeight,r=!L.CesiumMath.equalsEpsilon(t,i,0,L.CesiumMath.EPSILON2);e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center);var a,n,o,s,u={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:t,granularity:e._granularity,numberOfVerticalLines:e._numberOfVerticalLines};return r?(u.extrudedHeight=i,u.offsetAttribute=e._offsetAttribute,s=function(e){var t=e.center,i=e.ellipsoid,r=e.semiMajorAxis,a=g.Cartesian3.multiplyByScalar(i.geodeticSurfaceNormal(t,O),e.height,O);S.center=g.Cartesian3.add(t,a,S.center),S.radius=r,a=g.Cartesian3.multiplyByScalar(i.geodeticSurfaceNormal(t,a),e.extrudedHeight,a),V.center=g.Cartesian3.add(t,a,V.center),V.radius=r;var n,o,s=v.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions,u=new C.GeometryAttributes({position:new M.GeometryAttribute({componentDatatype:x.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:v.EllipseGeometryLibrary.raisePositionsToHeight(s,e,!0)})}),s=u.position.values,l=_.BoundingSphere.union(S,V),d=s.length/3;E.defined(e.offsetAttribute)&&(o=new Uint8Array(d),o=e.offsetAttribute===A.GeometryOffsetAttribute.TOP?A.arrayFill(o,1,0,d/2):(n=e.offsetAttribute===A.GeometryOffsetAttribute.NONE?0:1,A.arrayFill(o,n)),u.applyOffset=new M.GeometryAttribute({componentDatatype:x.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:o}));var p=E.defaultValue(e.numberOfVerticalLines,16),p=L.CesiumMath.clamp(p,0,d/2),c=G.IndexDatatype.createTypedArray(d,2*d+2*p);d/=2;var f=0;for(b=0;b<d;++b)c[f++]=b,c[f++]=(b+1)%d,c[f++]=b+d,c[f++]=(b+1)%d+d;if(0<p)for(var m=Math.min(p,d),h=Math.round(d/m),y=Math.min(h*p,d),b=0;b<y;b+=h)c[f++]=b,c[f++]=b+d;return{boundingSphere:l,attributes:u,indices:c}}(u)):(s=function(e){var t=e.center;l=g.Cartesian3.multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(t,l),e.height,l),l=g.Cartesian3.add(t,l,l);for(var i=new _.BoundingSphere(l,e.semiMajorAxis),r=v.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions,a=new C.GeometryAttributes({position:new M.GeometryAttribute({componentDatatype:x.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:v.EllipseGeometryLibrary.raisePositionsToHeight(r,e,!1)})}),n=r.length/3,o=G.IndexDatatype.createTypedArray(n,2*n),s=0,u=0;u<n;++u)o[s++]=u,o[s++]=(u+1)%n;return{boundingSphere:i,attributes:a,indices:o}}(u),E.defined(e._offsetAttribute)&&(a=s.attributes.position.values.length,n=new Uint8Array(a/3),o=e._offsetAttribute===A.GeometryOffsetAttribute.NONE?0:1,A.arrayFill(n,o),s.attributes.applyOffset=new M.GeometryAttribute({componentDatatype:x.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n}))),new M.Geometry({attributes:s.attributes,indices:s.indices,primitiveType:M.PrimitiveType.LINES,boundingSphere:s.boundingSphere,offsetAttribute:e._offsetAttribute})}},e.EllipseOutlineGeometry=f});
