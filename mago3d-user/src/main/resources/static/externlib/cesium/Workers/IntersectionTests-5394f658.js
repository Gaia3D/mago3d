define(["exports","./Cartesian2-8646c5a1","./when-54335d57","./Check-24483042","./Transforms-79117a7b","./Math-d6182036"],function(a,T,q,t,U,W){"use strict";var B={};function C(a,t,e){var r=a+t;return W.CesiumMath.sign(a)!==W.CesiumMath.sign(t)&&Math.abs(r/Math.max(Math.abs(a),Math.abs(t)))<e?0:r}B.computeDiscriminant=function(a,t,e){return t*t-4*a*e},B.computeRealRoots=function(a,t,e){var r;if(0===a)return 0===t?[]:[-e/t];if(0===t){if(0===e)return[0,0];var n=Math.abs(e),i=Math.abs(a);if(n<i&&n/i<W.CesiumMath.EPSILON14)return[0,0];if(i<n&&i/n<W.CesiumMath.EPSILON14)return[];if((r=-e/a)<0)return[];var s=Math.sqrt(r);return[-s,s]}if(0===e)return(r=-t/a)<0?[r,0]:[0,r];var o=C(t*t,-(4*a*e),W.CesiumMath.EPSILON14);if(o<0)return[];var u=-.5*C(t,W.CesiumMath.sign(t)*Math.sqrt(o),W.CesiumMath.EPSILON14);return 0<t?[u/a,e/u]:[e/u,u/a]};var b={};function o(a,t,e,r){var n=a,i=t/3,s=e/3,o=r,u=n*s,C=i*o,c=i*i,l=s*s,h=n*s-c,M=n*o-i*s,m=i*o-l,f=4*h*m-M*M;if(f<0){var d,g,v,p=u*l<=c*C?-2*i*(g=h)+(d=n)*M:-(d=o)*M+2*s*(g=m),w=-(p<0?-1:1)*Math.abs(d)*Math.sqrt(-f),R=(v=w-p)/2,S=R<0?-Math.pow(-R,1/3):Math.pow(R,1/3),O=v===w?-S:-g/S,x=g<=0?S+O:-p/(S*S+O*O+g);return u*l<=c*C?[(x-i)/n]:[-o/(x+s)]}var y=h,P=-2*i*h+n*M,N=m,b=-o*M+2*s*m,q=Math.sqrt(f),L=Math.sqrt(3)/2,I=Math.abs(Math.atan2(n*q,-P)/3);x=2*Math.sqrt(-y);var E=Math.cos(I);v=x*E;var z=x*(-E/2-L*Math.sin(I)),T=2*i<v+z?v-i:z-i,U=n,W=T/U,I=Math.abs(Math.atan2(o*q,-b)/3),B=-o,V=(v=(x=2*Math.sqrt(-N))*(E=Math.cos(I)))+(z=x*(-E/2-L*Math.sin(I)))<2*s?v+s:z+s,Z=B/V,A=-T*V-U*B,D=(s*A-i*(T*B))/(-i*A+s*(U*V));return W<=D?W<=Z?D<=Z?[W,D,Z]:[W,Z,D]:[Z,W,D]:W<=Z?[D,W,Z]:D<=Z?[D,Z,W]:[Z,D,W]}b.computeDiscriminant=function(a,t,e,r){var n=t*t,i=e*e;return 18*a*t*e*r+n*i-27*(a*a)*(r*r)-4*(a*i*e+n*t*r)},b.computeRealRoots=function(a,t,e,r){var n,i;if(0===a)return B.computeRealRoots(t,e,r);if(0!==t)return 0===e?0===r?(i=-t/a)<0?[i,0,0]:[0,0,i]:o(a,t,0,r):0===r?0===(n=B.computeRealRoots(a,t,e)).length?[0]:n[1]<=0?[n[0],n[1],0]:0<=n[0]?[0,n[0],n[1]]:[n[0],0,n[1]]:o(a,t,e,r);if(0!==e)return 0===r?0===(n=B.computeRealRoots(a,0,e)).Length?[0]:[n[0],0,n[1]]:o(a,0,e,r);if(0===r)return[0,0,0];var s=(i=-r/a)<0?-Math.pow(-i,1/3):Math.pow(i,1/3);return[s,s,s]};var V={};function c(a,t,e,r){var n=a*a,i=t-3*n/8,s=e-t*a/2+n*a/8,o=r-e*a/4+t*n/16-3*n*n/256,u=b.computeRealRoots(1,2*i,i*i-4*o,-s*s);if(0<u.length){var C=-a/4,c=u[u.length-1];if(Math.abs(c)<W.CesiumMath.EPSILON14){var l=B.computeRealRoots(1,i,o);if(2===l.length){var h,M=l[0],m=l[1];if(0<=M&&0<=m){var f=Math.sqrt(M),d=Math.sqrt(m);return[C-d,C-f,C+f,C+d]}if(0<=M&&m<0)return[C-(h=Math.sqrt(M)),C+h];if(M<0&&0<=m)return[C-(h=Math.sqrt(m)),C+h]}return[]}if(0<c){var g=Math.sqrt(c),v=(i+c-s/g)/2,p=(i+c+s/g)/2,w=B.computeRealRoots(1,g,v),R=B.computeRealRoots(1,-g,p);return 0!==w.length?(w[0]+=C,w[1]+=C,0!==R.length?(R[0]+=C,R[1]+=C,w[1]<=R[0]?[w[0],w[1],R[0],R[1]]:R[1]<=w[0]?[R[0],R[1],w[0],w[1]]:w[0]>=R[0]&&w[1]<=R[1]?[R[0],w[0],w[1],R[1]]:R[0]>=w[0]&&R[1]<=w[1]?[w[0],R[0],R[1],w[1]]:w[0]>R[0]&&w[0]<R[1]?[R[0],w[0],R[1],w[1]]:[w[0],R[0],w[1],R[1]]):w):0!==R.length?(R[0]+=C,R[1]+=C,R):[]}}return[]}function l(a,t,e,r){var n=a*a,i=-2*t,s=e*a+t*t-4*r,o=n*r-e*t*a+e*e,u=b.computeRealRoots(1,i,s,o);if(0<u.length){var C,c,l,h,M,m,f,d,g=u[0],v=t-g,p=v*v,w=a/2,R=v/2,S=p-4*r,O=p+4*Math.abs(r),x=n-4*g,y=n+4*Math.abs(g);l=g<0||S*y<x*O?(c=(C=Math.sqrt(x))/2,0===C?0:(a*R-e)/C):(c=0===(h=Math.sqrt(S))?0:(a*R-e)/h,h/2),0==w&&0===c?m=M=0:W.CesiumMath.sign(w)===W.CesiumMath.sign(c)?m=g/(M=w+c):M=g/(m=w-c),0==R&&0===l?d=f=0:W.CesiumMath.sign(R)===W.CesiumMath.sign(l)?d=r/(f=R+l):f=r/(d=R-l);var P=B.computeRealRoots(1,M,f),N=B.computeRealRoots(1,m,d);if(0!==P.length)return 0!==N.length?P[1]<=N[0]?[P[0],P[1],N[0],N[1]]:N[1]<=P[0]?[N[0],N[1],P[0],P[1]]:P[0]>=N[0]&&P[1]<=N[1]?[N[0],P[0],P[1],N[1]]:N[0]>=P[0]&&N[1]<=P[1]?[P[0],N[0],N[1],P[1]]:P[0]>N[0]&&P[0]<N[1]?[N[0],P[0],N[1],P[1]]:[P[0],N[0],P[1],N[1]]:P;if(0!==N.length)return N}return[]}function e(a,t){t=T.Cartesian3.clone(q.defaultValue(t,T.Cartesian3.ZERO)),T.Cartesian3.equals(t,T.Cartesian3.ZERO)||T.Cartesian3.normalize(t,t),this.origin=T.Cartesian3.clone(q.defaultValue(a,T.Cartesian3.ZERO)),this.direction=t}V.computeDiscriminant=function(a,t,e,r,n){var i=a*a,s=t*t,o=s*t,u=e*e,C=u*e,c=r*r,l=c*r,h=n*n;return s*u*c-4*o*l-4*a*C*c+18*a*t*e*l-27*i*c*c+256*(i*a)*(h*n)+n*(18*o*e*r-4*s*C+16*a*u*u-80*a*t*u*r-6*a*s*c+144*i*e*c)+h*(144*a*s*e-27*s*s-128*i*u-192*i*t*r)},V.computeRealRoots=function(a,t,e,r,n){if(Math.abs(a)<W.CesiumMath.EPSILON15)return b.computeRealRoots(t,e,r,n);var i=t/a,s=e/a,o=r/a,u=n/a,C=i<0?1:0;switch(C+=s<0?C+1:C,C+=o<0?C+1:C,C+=u<0?C+1:C){case 0:return c(i,s,o,u);case 1:case 2:return l(i,s,o,u);case 3:case 4:return c(i,s,o,u);case 5:return l(i,s,o,u);case 6:case 7:return c(i,s,o,u);case 8:return l(i,s,o,u);case 9:case 10:return c(i,s,o,u);case 11:return l(i,s,o,u);case 12:case 13:case 14:case 15:return c(i,s,o,u);default:return}},e.clone=function(a,t){if(q.defined(a))return q.defined(t)?(t.origin=T.Cartesian3.clone(a.origin),t.direction=T.Cartesian3.clone(a.direction),t):new e(a.origin,a.direction)},e.getPoint=function(a,t,e){return q.defined(e)||(e=new T.Cartesian3),e=T.Cartesian3.multiplyByScalar(a.direction,t,e),T.Cartesian3.add(a.origin,e,e)};var h={rayPlane:function(a,t,e){q.defined(e)||(e=new T.Cartesian3);var r=a.origin,n=a.direction,i=t.normal,s=T.Cartesian3.dot(i,n);if(!(Math.abs(s)<W.CesiumMath.EPSILON15)){var o=(-t.distance-T.Cartesian3.dot(i,r))/s;if(!(o<0))return e=T.Cartesian3.multiplyByScalar(n,o,e),T.Cartesian3.add(r,e,e)}}},g=new T.Cartesian3,v=new T.Cartesian3,p=new T.Cartesian3,w=new T.Cartesian3,R=new T.Cartesian3;h.rayTriangleParametric=function(a,t,e,r,n){n=q.defaultValue(n,!1);var i,s,o,u=a.origin,C=a.direction,c=T.Cartesian3.subtract(e,t,g),l=T.Cartesian3.subtract(r,t,v),h=T.Cartesian3.cross(C,l,p),M=T.Cartesian3.dot(c,h);if(n){if(M<W.CesiumMath.EPSILON6)return;if(d=T.Cartesian3.subtract(u,t,w),(m=T.Cartesian3.dot(d,h))<0||M<m)return;if(i=T.Cartesian3.cross(d,c,R),(s=T.Cartesian3.dot(C,i))<0||M<m+s)return;o=T.Cartesian3.dot(l,i)/M}else{if(Math.abs(M)<W.CesiumMath.EPSILON6)return;var m,f=1/M,d=T.Cartesian3.subtract(u,t,w);if((m=T.Cartesian3.dot(d,h)*f)<0||1<m)return;if(i=T.Cartesian3.cross(d,c,R),(s=T.Cartesian3.dot(C,i)*f)<0||1<m+s)return;o=T.Cartesian3.dot(l,i)*f}return o},h.rayTriangle=function(a,t,e,r,n,i){var s=h.rayTriangleParametric(a,t,e,r,n);if(q.defined(s)&&!(s<0))return q.defined(i)||(i=new T.Cartesian3),T.Cartesian3.multiplyByScalar(a.direction,s,i),T.Cartesian3.add(a.origin,i,i)};var M=new e;h.lineSegmentTriangle=function(a,t,e,r,n,i,s){var o=M;T.Cartesian3.clone(a,o.origin),T.Cartesian3.subtract(t,a,o.direction),T.Cartesian3.normalize(o.direction,o.direction);var u=h.rayTriangleParametric(o,e,r,n,i);if(!(!q.defined(u)||u<0||u>T.Cartesian3.distance(a,t)))return q.defined(s)||(s=new T.Cartesian3),T.Cartesian3.multiplyByScalar(o.direction,u,s),T.Cartesian3.add(o.origin,s,s)};var m={root0:0,root1:0};function u(a,t,e){q.defined(e)||(e=new U.Interval);var r=a.origin,n=a.direction,i=t.center,s=t.radius*t.radius,o=T.Cartesian3.subtract(r,i,p),u=function(a,t,e,r){var n=t*t-4*a*e;if(!(n<0)){if(0<n){var i=1/(2*a),s=Math.sqrt(n),o=(-t+s)*i,u=(-t-s)*i;return o<u?(r.root0=o,r.root1=u):(r.root0=u,r.root1=o),r}var C=-t/(2*a);if(0!=C)return r.root0=r.root1=C,r}}(T.Cartesian3.dot(n,n),2*T.Cartesian3.dot(n,o),T.Cartesian3.magnitudeSquared(o)-s,m);if(q.defined(u))return e.start=u.root0,e.stop=u.root1,e}h.raySphere=function(a,t,e){if(e=u(a,t,e),q.defined(e)&&!(e.stop<0))return e.start=Math.max(e.start,0),e};var f=new e;h.lineSegmentSphere=function(a,t,e,r){var n=f;T.Cartesian3.clone(a,n.origin);var i=T.Cartesian3.subtract(t,a,n.direction),s=T.Cartesian3.magnitude(i);if(T.Cartesian3.normalize(i,i),r=u(n,e,r),!(!q.defined(r)||r.stop<0||r.start>s))return r.start=Math.max(r.start,0),r.stop=Math.min(r.stop,s),r};var d=new T.Cartesian3,S=new T.Cartesian3;function Z(a,t,e){var r=a+t;return W.CesiumMath.sign(a)!==W.CesiumMath.sign(t)&&Math.abs(r/Math.max(Math.abs(a),Math.abs(t)))<e?0:r}h.rayEllipsoid=function(a,t){var e,r,n=t.oneOverRadii,i=T.Cartesian3.multiplyComponents(n,a.origin,d),s=T.Cartesian3.multiplyComponents(n,a.direction,S),o=T.Cartesian3.magnitudeSquared(i),u=T.Cartesian3.dot(i,s);if(1<o){if(0<=u)return;var C,c,l=u*u,h=o-1;if(l<(c=(C=T.Cartesian3.magnitudeSquared(s))*h))return;if(c<l){e=u*u-c;var M=(r=-u+Math.sqrt(e))/C,m=h/r;return M<m?new U.Interval(M,m):{start:m,stop:M}}var f=Math.sqrt(h/C);return new U.Interval(f,f)}return o<1?(h=o-1,e=u*u-(c=(C=T.Cartesian3.magnitudeSquared(s))*h),r=-u+Math.sqrt(e),new U.Interval(0,r/C)):u<0?(C=T.Cartesian3.magnitudeSquared(s),new U.Interval(0,-u/C)):void 0};var L=new T.Cartesian3,I=new T.Cartesian3,E=new T.Cartesian3,z=new T.Cartesian3,A=new T.Cartesian3,D=new U.Matrix3,k=new U.Matrix3,F=new U.Matrix3,G=new U.Matrix3,Y=new U.Matrix3,_=new U.Matrix3,j=new U.Matrix3,H=new T.Cartesian3,J=new T.Cartesian3,K=new T.Cartographic;h.grazingAltitudeLocation=function(a,t){var e=a.origin,r=a.direction;if(!T.Cartesian3.equals(e,T.Cartesian3.ZERO)){var n=t.geodeticSurfaceNormal(e,L);if(0<=T.Cartesian3.dot(r,n))return e}var i=q.defined(this.rayEllipsoid(a,t)),s=t.transformPositionToScaledSpace(r,L),o=T.Cartesian3.normalize(s,s),u=T.Cartesian3.mostOrthogonalAxis(s,z),C=T.Cartesian3.normalize(T.Cartesian3.cross(u,o,I),I),c=T.Cartesian3.normalize(T.Cartesian3.cross(o,C,E),E),l=D;l[0]=o.x,l[1]=o.y,l[2]=o.z,l[3]=C.x,l[4]=C.y,l[5]=C.z,l[6]=c.x,l[7]=c.y,l[8]=c.z;var h=U.Matrix3.transpose(l,k),M=U.Matrix3.fromScale(t.radii,F),m=U.Matrix3.fromScale(t.oneOverRadii,G),f=Y;f[0]=0,f[1]=-r.z,f[2]=r.y,f[3]=r.z,f[4]=0,f[5]=-r.x,f[6]=-r.y,f[7]=r.x,f[8]=0;var d,g=U.Matrix3.multiply(U.Matrix3.multiply(h,m,_),f,_),v=U.Matrix3.multiply(U.Matrix3.multiply(g,M,j),l,j),p=U.Matrix3.multiplyByVector(g,e,A),w=function(a,t,e,r,n){var i,s=r*r,o=n*n,u=(a[U.Matrix3.COLUMN1ROW1]-a[U.Matrix3.COLUMN2ROW2])*o,C=n*(r*Z(a[U.Matrix3.COLUMN1ROW0],a[U.Matrix3.COLUMN0ROW1],W.CesiumMath.EPSILON15)+t.y),c=a[U.Matrix3.COLUMN0ROW0]*s+a[U.Matrix3.COLUMN2ROW2]*o+r*t.x+e,l=o*Z(a[U.Matrix3.COLUMN2ROW1],a[U.Matrix3.COLUMN1ROW2],W.CesiumMath.EPSILON15),h=n*(r*Z(a[U.Matrix3.COLUMN2ROW0],a[U.Matrix3.COLUMN0ROW2])+t.z),M=[];if(0==h&&0==l){if(0===(i=B.computeRealRoots(u,C,c)).length)return M;var m,f,d=i[0],g=Math.sqrt(Math.max(1-d*d,0));return M.push(new T.Cartesian3(r,n*d,n*-g)),M.push(new T.Cartesian3(r,n*d,n*g)),2===i.length&&(m=i[1],f=Math.sqrt(Math.max(1-m*m,0)),M.push(new T.Cartesian3(r,n*m,n*-f)),M.push(new T.Cartesian3(r,n*m,n*f))),M}var v=h*h,p=l*l,w=h*l,R=u*u+p,S=2*(C*u+w),O=2*c*u+C*C-p+v,x=2*(c*C-w),y=c*c-v;if(0==R&&0==S&&0==O&&0==x)return M;var P=(i=V.computeRealRoots(R,S,O,x,y)).length;if(0===P)return M;for(var N=0;N<P;++N){var b=i[N],q=b*b,L=Math.max(1-q,0),I=Math.sqrt(L),E=W.CesiumMath.sign(u)===W.CesiumMath.sign(c)?Z(u*q+c,C*b,W.CesiumMath.EPSILON12):W.CesiumMath.sign(c)===W.CesiumMath.sign(C*b)?Z(u*q,C*b+c,W.CesiumMath.EPSILON12):Z(u*q+C*b,c,W.CesiumMath.EPSILON12),z=E*Z(l*b,h,W.CesiumMath.EPSILON15);z<0?M.push(new T.Cartesian3(r,n*b,n*I)):0<z?M.push(new T.Cartesian3(r,n*b,n*-I)):0!==I?(M.push(new T.Cartesian3(r,n*b,n*-I)),M.push(new T.Cartesian3(r,n*b,n*I)),++N):M.push(new T.Cartesian3(r,n*b,n*I))}return M}(v,T.Cartesian3.negate(p,L),0,0,1),R=w.length;if(0<R){for(var S=T.Cartesian3.clone(T.Cartesian3.ZERO,J),O=Number.NEGATIVE_INFINITY,x=0;x<R;++x){d=U.Matrix3.multiplyByVector(M,U.Matrix3.multiplyByVector(l,w[x],H),H);var y=T.Cartesian3.normalize(T.Cartesian3.subtract(d,e,z),z),P=T.Cartesian3.dot(y,r);O<P&&(O=P,S=T.Cartesian3.clone(d,S))}var N=t.cartesianToCartographic(S,K),O=W.CesiumMath.clamp(O,0,1),b=T.Cartesian3.magnitude(T.Cartesian3.subtract(S,e,z))*Math.sqrt(1-O*O);return b=i?-b:b,N.height=b,t.cartographicToCartesian(N,new T.Cartesian3)}};var O=new T.Cartesian3;h.lineSegmentPlane=function(a,t,e,r){q.defined(r)||(r=new T.Cartesian3);var n=T.Cartesian3.subtract(t,a,O),i=e.normal,s=T.Cartesian3.dot(i,n);if(!(Math.abs(s)<W.CesiumMath.EPSILON6)){var o=T.Cartesian3.dot(i,a),u=-(e.distance+o)/s;if(!(u<0||1<u))return T.Cartesian3.multiplyByScalar(n,u,r),T.Cartesian3.add(a,r,r),r}},h.trianglePlaneIntersection=function(a,t,e,r){var n,i,s=r.normal,o=r.distance,u=T.Cartesian3.dot(s,a)+o<0,C=T.Cartesian3.dot(s,t)+o<0,c=T.Cartesian3.dot(s,e)+o<0,l=0;if(l+=u?1:0,l+=C?1:0,1!=(l+=c?1:0)&&2!=l||(n=new T.Cartesian3,i=new T.Cartesian3),1==l){if(u)return h.lineSegmentPlane(a,t,r,n),h.lineSegmentPlane(a,e,r,i),{positions:[a,t,e,n,i],indices:[0,3,4,1,2,4,1,4,3]};if(C)return h.lineSegmentPlane(t,e,r,n),h.lineSegmentPlane(t,a,r,i),{positions:[a,t,e,n,i],indices:[1,3,4,2,0,4,2,4,3]};if(c)return h.lineSegmentPlane(e,a,r,n),h.lineSegmentPlane(e,t,r,i),{positions:[a,t,e,n,i],indices:[2,3,4,0,1,4,0,4,3]}}else if(2==l){if(!u)return h.lineSegmentPlane(t,a,r,n),h.lineSegmentPlane(e,a,r,i),{positions:[a,t,e,n,i],indices:[1,2,4,1,4,3,0,3,4]};if(!C)return h.lineSegmentPlane(e,t,r,n),h.lineSegmentPlane(a,t,r,i),{positions:[a,t,e,n,i],indices:[2,0,4,2,4,3,1,3,4]};if(!c)return h.lineSegmentPlane(a,e,r,n),h.lineSegmentPlane(t,e,r,i),{positions:[a,t,e,n,i],indices:[0,1,4,0,4,3,2,3,4]}}},a.IntersectionTests=h,a.Ray=e});
