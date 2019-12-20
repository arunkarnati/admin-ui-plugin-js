(window.webpackJsonptriniti=window.webpackJsonptriniti||[]).push([[19],{"./screens/layouts/index.jsx":function(e,l,t){"use strict";t.r(l);var n=t("../../node_modules/@babel/runtime/helpers/classCallCheck.js"),o=t.n(n),a=t("../../node_modules/@babel/runtime/helpers/createClass.js"),r=t.n(a),c=t("../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),s=t.n(c),m=t("../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"),u=t.n(m),E=t("../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"),i=t.n(E),d=t("../../node_modules/@babel/runtime/helpers/inherits.js"),p=t.n(d),C=t("../../node_modules/react/index.js"),f=t.n(C),b=t("./components/primary-actions/index.jsx"),h=t("./components/sidenav/index.jsx"),w=t("../../src/components/index.js"),x=(t("./screens/layouts/styles.scss"),function(e){function l(e){var t;return o()(this,l),(t=s()(this,u()(l).call(this,e))).toggleCode1=t.toggleCode1.bind(i()(t)),t.toggleCode2=t.toggleCode2.bind(i()(t)),t.state={collapseCode1:!1,collapseCode2:!1},t}return p()(l,e),r()(l,[{key:"toggleCode1",value:function(){this.setState({collapseCode1:!this.state.collapseCode1})}},{key:"toggleCode2",value:function(){this.setState({collapseCode2:!this.state.collapseCode2})}},{key:"render",value:function(){return f.a.createElement(w.Db,{sidenav:f.a.createElement(h.a,{activeScreen:"layouts"}),sidenavHeader:!0,header:"Layouts",primaryActions:f.a.createElement(b.a,null),body:[f.a.createElement(w.k,{key:"layout1"},f.a.createElement(w.r,null,"Full Width Columns",f.a.createElement(w.h,{radius:"circle",color:"hover-bg",onClick:this.toggleCode1,active:this.state.collapseCode1},f.a.createElement(w.T,{imgSrc:"code",size:"md"}))),f.a.createElement(w.F,{isOpen:this.state.collapseCode1},f.a.createElement(w.l,{className:"pl-0 pr-0 bg-light"},f.a.createElement("pre",{className:"pl-5 pr-3"},f.a.createElement("code",null,'\nimport React from \'react\';\nimport { Container, Row, Col }  from \'@triniti/admin-ui-plugin/components\';\n\nexport default class Example extends React.Component {\n  render() {\n      <Row>\n            <Col>\n              <div className="ui-cols">\n                <Row>\n                  <Col>.col</Col>\n                </Row>\n                <Row>\n                  <Col xs="3">.col-3</Col>\n                  <Col xs="auto">.col-auto - variable width content</Col>\n                  <Col xs="3">.col-3</Col>\n                </Row>\n                <Row>\n                  <Col xs="6">.col-6</Col>\n                  <Col xs="6">.col-6</Col>\n                </Row>\n                <Row>\n                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>\n                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>\n                  <Col sm="4">.col .col-sm-4</Col>\n                </Row>\n                <Row>\n                  <Col sm={{ size: 6, order: 2, offset: 1 }}>.col .col-sm-6 .col-sm-order-2\n                    .col-sm-offset-2\n                  </Col>\n                </Row>\n                <Row>\n                  <Col xs="12" md={{ size: 8, offset: 2 }}>.col .col-12 .col-md-6 .col-md-offset-2</Col>\n                </Row>\n                <Row>\n                  <Col xs="3" sm={{ size: \'auto\', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>\n                  <Col xs="3" sm={{ size: \'auto\', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>\n                </Row>\n              </div>\n            </Col>\n          </Row>\n   );\n  }\n}\n\nexport default Example;\n                  ')))),f.a.createElement(w.G,{fluid:!0},f.a.createElement(w.Cb,null,f.a.createElement(w.E,null,f.a.createElement("div",{className:"ui-cols"},f.a.createElement(w.Cb,null,f.a.createElement(w.E,null,".col")),f.a.createElement(w.Cb,null,f.a.createElement(w.E,{xs:"3"},".col-3"),f.a.createElement(w.E,{xs:"auto"},".col-auto - variable width content"),f.a.createElement(w.E,{xs:"3"},".col-3")),f.a.createElement(w.Cb,null,f.a.createElement(w.E,{xs:"6"},".col-6"),f.a.createElement(w.E,{xs:"6"},".col-6")),f.a.createElement(w.Cb,null,f.a.createElement(w.E,{xs:"6",sm:"4"},".col-6 .col-sm-4"),f.a.createElement(w.E,{xs:"6",sm:"4"},".col-6 .col-sm-4"),f.a.createElement(w.E,{sm:"4"},".col .col-sm-4")),f.a.createElement(w.Cb,null,f.a.createElement(w.E,{sm:{size:6,order:2,offset:1}},".col .col-sm-6 .col-sm-order-2 .col-sm-offset-2")),f.a.createElement(w.Cb,null,f.a.createElement(w.E,{xs:"12",md:{size:8,offset:2}},".col .col-12 .col-md-6 .col-md-offset-2")),f.a.createElement(w.Cb,null,f.a.createElement(w.E,{xs:"3",sm:{size:"auto",offset:1}},".col .col-sm .col-sm-offset-1"),f.a.createElement(w.E,{xs:"3",sm:{size:"auto",offset:1}},".col .col-sm .col-sm-offset-1"))))))),f.a.createElement(w.k,{key:"layout2"},f.a.createElement(w.r,null,"Surrounded by a Container",f.a.createElement(w.h,{radius:"circle",color:"hover-bg",onClick:this.toggleCode2,active:this.state.collapseCode2},f.a.createElement(w.T,{imgSrc:"code",size:"md"}))),f.a.createElement(w.F,{isOpen:this.state.collapseCode2},f.a.createElement(w.l,{className:"pl-0 pr-0 bg-light"},f.a.createElement("pre",{className:"pl-5 pr-3"},f.a.createElement("code",null,'\nimport React from \'react\';\nimport { Col, Row } from \'@triniti/admin-ui-plugin/components\';\n\nconst Example = (props) => {\n  return (\n      <Row>\n            <Col>\n              <Container className="ui-cols">\n                <Row>\n                  <Col>.col</Col>\n                </Row>\n                <Row>\n                  <Col xs="3">.col-3</Col>\n                  <Col xs="auto">.col-auto - variable width content</Col>\n                  <Col xs="3">.col-3</Col>\n                </Row>\n                <Row>\n                  <Col xs="6">.col-6</Col>\n                  <Col xs="6">.col-6</Col>\n                </Row>\n                <Row>\n                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>\n                  <Col xs="6" sm="4">.col-6 .col-sm-4</Col>\n                  <Col sm="4">.col .col-sm-4</Col>\n                </Row>\n                <Row>\n                  <Col sm={{ size: 6, order: 2, offset: 1 }}>\n                  .col .col-sm-6 .col-sm-order-2 .col-sm-offset-2\n                  </Col>\n                </Row>\n                <Row>\n                  <Col xs="12" md={{ size: 8, offset: 2 }}>.col .col-12 .col-md-6 .col-md-offset-2</Col>\n                </Row>\n                <Row>\n                  <Col xs="3" sm={{ size: \'auto\', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>\n                  <Col xs="3" sm={{ size: \'auto\', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>\n                </Row>\n              </Container>\n            </Col>\n          </Row>\n  );\n};\n\nexport default Example;\n                  ')))),f.a.createElement(w.l,{className:"bg-gray"},f.a.createElement(w.Cb,null,f.a.createElement(w.E,null,f.a.createElement(w.G,{className:"ui-cols"},f.a.createElement(w.Cb,null,f.a.createElement(w.E,null,".col")),f.a.createElement(w.Cb,null,f.a.createElement(w.E,{xs:"3"},".col-3"),f.a.createElement(w.E,{xs:"auto"},".col-auto - variable width content"),f.a.createElement(w.E,{xs:"3"},".col-3")),f.a.createElement(w.Cb,null,f.a.createElement(w.E,{xs:"6"},".col-6"),f.a.createElement(w.E,{xs:"6"},".col-6")),f.a.createElement(w.Cb,null,f.a.createElement(w.E,{xs:"6",sm:"4"},".col-6 .col-sm-4"),f.a.createElement(w.E,{xs:"6",sm:"4"},".col-6 .col-sm-4"),f.a.createElement(w.E,{sm:"4"},".col .col-sm-4")),f.a.createElement(w.Cb,null,f.a.createElement(w.E,{sm:{size:6,order:2,offset:1}},".col .col-sm-6 .col-sm-order-2 .col-sm-offset-2")),f.a.createElement(w.Cb,null,f.a.createElement(w.E,{xs:"12",md:{size:8,offset:2}},".col .col-12 .col-md-6 .col-md-offset-2")),f.a.createElement(w.Cb,null,f.a.createElement(w.E,{xs:"3",sm:{size:"auto",offset:1}},".col .col-sm .col-sm-offset-1"),f.a.createElement(w.E,{xs:"3",sm:{size:"auto",offset:1}},".col .col-sm .col-sm-offset-1"))))))),f.a.createElement(w.k,{key:"props1"},f.a.createElement(w.r,null,"Container Properties"),f.a.createElement(w.l,null,f.a.createElement(w.Lb,{hover:!0,responsive:!0},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null,"Name"),f.a.createElement("th",null,"Type"),f.a.createElement("th",null,"Default"),f.a.createElement("th",null,"Description"))),f.a.createElement("tbody",null,f.a.createElement("tr",null,f.a.createElement("th",{scope:"row"},"fluid"),f.a.createElement("td",null,"bool"),f.a.createElement("td",null),f.a.createElement("td",null,"applies .container-fluid class")))))),f.a.createElement(w.k,{key:"props2"},f.a.createElement(w.r,null,"Row Properties"),f.a.createElement(w.l,null,f.a.createElement(w.Lb,{hover:!0,responsive:!0},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null,"Name"),f.a.createElement("th",null,"Type"),f.a.createElement("th",null,"Default"),f.a.createElement("th",null,"Description"))),f.a.createElement("tbody",null,f.a.createElement("tr",null,f.a.createElement("th",{scope:"row"},"noGutters"),f.a.createElement("td",null,"bool"),f.a.createElement("td",null),f.a.createElement("td",null)))))),f.a.createElement(w.k,{key:"props3"},f.a.createElement(w.r,null,"Col Properties"),f.a.createElement(w.l,null,f.a.createElement(w.Lb,{hover:!0,responsive:!0},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",null,"Name"),f.a.createElement("th",null,"Type"),f.a.createElement("th",null,"Default"),f.a.createElement("th",null,"Description"))),f.a.createElement("tbody",null,f.a.createElement("tr",null,f.a.createElement("th",{scope:"row"},"Col"),f.a.createElement("td",null,"xs: columnProps,",f.a.createElement("br",null),"sm: columnProps,",f.a.createElement("br",null),"md: columnProps,",f.a.createElement("br",null),"lg: columnProps,",f.a.createElement("br",null),"xl: columnProps,",f.a.createElement("br",null),"widths: PropTypes.array,"),f.a.createElement("td",null),f.a.createElement("td",null,f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement("br",null),f.a.createElement("br",null),"override the predefined width (the ones above) with your own custom widths. see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116")),f.a.createElement("tr",null,f.a.createElement("th",{scope:"row"},"columnProps"),f.a.createElement("td",null,"oneOfType"),f.a.createElement("td",null),f.a.createElement("td",null,"PropTypes.string,",f.a.createElement("br",null),"PropTypes.number,",f.a.createElement("br",null),"PropTypes.bool,",f.a.createElement("br",null),"PropTypes.shape,",f.a.createElement("br",null))),f.a.createElement("tr",null,f.a.createElement("th",{scope:"row"},"offset"),f.a.createElement("td",null,"stringOrNumberProp"),f.a.createElement("td",null),f.a.createElement("td",null)),f.a.createElement("tr",null,f.a.createElement("th",{scope:"row"},"order"),f.a.createElement("td",null,"stringOrNumberProp"),f.a.createElement("td",null),f.a.createElement("td",null)),f.a.createElement("tr",null,f.a.createElement("th",{scope:"row"},"size"),f.a.createElement("td",null,"oneOfType"),f.a.createElement("td",null),f.a.createElement("td",null,"PropTypes.bool, PropTypes.number,",f.a.createElement("br",null),"PropTypes.string,",f.a.createElement("br",null),"example size values:",f.a.createElement("br",null),'12 || "12" => col-12 or col-`width`-12',f.a.createElement("br",null),"auto => col-auto or col-`width`-auto",f.a.createElement("br",null),"true => col or col-`width`",f.a.createElement("br",null))),f.a.createElement("tr",null,f.a.createElement("th",{scope:"row"},"stringOrNumberProp"),f.a.createElement("td",null,"oneOfType"),f.a.createElement("td",null),f.a.createElement("td",null,"PropTypes.number,",f.a.createElement("br",null),"PropTypes.string"))))))]})}}]),l}(C.Component));l.default=x}}]);