(window.webpackJsonptriniti=window.webpackJsonptriniti||[]).push([[35],{"./screens/tooltips/index.jsx":function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return x}));var n=l("../../node_modules/@babel/runtime/helpers/classCallCheck.js"),a=l.n(n),o=l("../../node_modules/@babel/runtime/helpers/createClass.js"),r=l.n(o),c=l("../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),i=l.n(c),s=l("../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"),p=l.n(s),m=l("../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"),d=l.n(m),u=l("../../node_modules/@babel/runtime/helpers/inherits.js"),E=l.n(u),h=l("../../node_modules/react/index.js"),g=l.n(h),T=l("./components/primary-actions/index.jsx"),b=l("./components/sidenav/index.jsx"),f=l("../../src/components/index.js"),y=l("./screens/tooltips/TooltipItem.jsx"),x=function(e){function t(e){var l;return a()(this,t),(l=i()(this,p()(t).call(this,e))).toggleTooltip=l.toggleTooltip.bind(d()(l)),l.toggleCode1=l.toggleCode1.bind(d()(l)),l.toggleCode2=l.toggleCode2.bind(d()(l)),l.state={tooltips:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}],tooltipOpen:!1,collapseCode1:!1,collapseCode2:!1},l}return E()(t,e),r()(t,[{key:"toggleTooltip",value:function(){this.setState({tooltipOpen:!this.state.tooltipOpen})}},{key:"toggleCode1",value:function(){this.setState({collapseCode1:!this.state.collapseCode1})}},{key:"toggleCode2",value:function(){this.setState({collapseCode2:!this.state.collapseCode2})}},{key:"render",value:function(){return g.a.createElement(f.Db,{header:"Tooltips",sidenav:g.a.createElement(b.a,{activeScreen:"tooltips"}),sidenavHeader:!0,primaryActions:g.a.createElement(T.a,null),body:[g.a.createElement(f.k,{key:"tooltips"},g.a.createElement(f.r,null,"Tooltip",g.a.createElement(f.h,{radius:"circle",color:"hover-bg",onClick:this.toggleCode1,active:this.state.collapseCode1},g.a.createElement(f.T,{imgSrc:"code",size:"md"}))),g.a.createElement(f.F,{isOpen:this.state.collapseCode1},g.a.createElement(f.l,{className:"pl-0 pr-0 bg-light"},g.a.createElement("pre",{className:"pl-5 pr-3"},g.a.createElement("code",null,'import React from \'react\';\nimport { Tooltip } from \'@triniti/admin-ui-plugin/components\';\n\nexport default class Example extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.toggleTooltip = this.toggleTooltip.bind(this);\n    this.state = {\n      tooltipOpen: false\n    };\n  }\n\n  toggleTooltip() {\n    this.setState({\n      tooltipOpen: !this.state.tooltipOpen\n    });\n  }\n\n  render() {\n    return ([\n        <a href="#" id="TooltipExample">Hover Me</a>,\n        <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggleTooltip}>\n          Tooltip Text\n        </Tooltip>,\n    ]);\n  }\n};')))),g.a.createElement(f.l,{indent:!0},g.a.createElement("a",{href:"#",id:"TooltipExample"},"Hover Me to See Tooltip"),g.a.createElement(f.Mb,{placement:"top",isOpen:this.state.tooltipOpen,target:"TooltipExample",toggle:this.toggleTooltip},"Tooltip Text")),g.a.createElement(f.l,{indent:!0},this.state.tooltips.map((function(e,t){return g.a.createElement(y.default,{key:e.placement,item:e,id:t})})))),g.a.createElement(f.k,{key:"uncontrolledtooltip"},g.a.createElement(f.r,null,"UncontrolledTooltip",g.a.createElement(f.h,{radius:"circle",color:"hover-bg",onClick:this.toggleCode2,active:this.state.collapseCode2},g.a.createElement(f.T,{imgSrc:"code",size:"md"}))),g.a.createElement(f.F,{isOpen:this.state.collapseCode2},g.a.createElement(f.l,{className:"pl-0 pr-0 bg-light"},g.a.createElement("pre",{className:"pl-5 pr-3"},g.a.createElement("code",null,'import React from \'react\';\nimport { UncontrolledTooltip } from \'reactstrap\';\n\nexport default function Example() {\n    return (\n        <a href="#" id="UncontrolledTooltipExample">Hover Me to See UncontrolledTooltip</a>,\n        <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">\n          UncontrolledTooltip Text\n        </UncontrolledTooltip>,\n    );\n}')))),g.a.createElement(f.l,{indent:!0},g.a.createElement("a",{href:"#",id:"UncontrolledTooltipExample"},"Hover Me to See UncontrolledTooltip"),g.a.createElement(f.Qb,{placement:"right",target:"UncontrolledTooltipExample"},"UncontrolledTooltip Text"))),g.a.createElement(f.k,{key:"props"},g.a.createElement(f.r,null,"Tooltip Properties"),g.a.createElement(f.l,{className:"pt-3"},g.a.createElement(f.Lb,{hover:!0,responsive:!0},g.a.createElement("thead",null,g.a.createElement("tr",null,g.a.createElement("th",null,"Name"),g.a.createElement("th",null,"Type"),g.a.createElement("th",null,"Default"),g.a.createElement("th",null,"Description"))),g.a.createElement("tbody",null,g.a.createElement("tr",null,g.a.createElement("th",{scope:"row"},"autohide"),g.a.createElement("td",null,"bool"),g.a.createElement("td",null,"true"),g.a.createElement("td",null)),g.a.createElement("tr",null,g.a.createElement("th",{scope:"row"},"className"),g.a.createElement("td",null,"string"),g.a.createElement("td",null),g.a.createElement("td",null)),g.a.createElement("tr",null,g.a.createElement("th",{scope:"row"},"container"),g.a.createElement("td",null,"oneOfType"),g.a.createElement("td",null),g.a.createElement("td",null,"Where to inject the popper DOM node, default to body",g.a.createElement("br",null),"PropTypes.string,",g.a.createElement("br",null),"PropTypes.func,",g.a.createElement("br",null),"DOMElement,")),g.a.createElement("tr",null,g.a.createElement("th",{scope:"row"},"delay"),g.a.createElement("td",null,"oneOfType"),g.a.createElement("td",null,"show: 0, hide: 250"),g.a.createElement("td",null,"Optionally override show/hide delays ",g.a.createElement("br",null),"PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number })",",",g.a.createElement("br",null),"PropTypes.number")),g.a.createElement("tr",null,g.a.createElement("th",{scope:"row"},"disabled"),g.a.createElement("td",null,"bool"),g.a.createElement("td",null),g.a.createElement("td",null)),g.a.createElement("tr",null,g.a.createElement("th",{scope:"row"},"innerClassName"),g.a.createElement("td",null,"string"),g.a.createElement("td",null),g.a.createElement("td",null,"Apply class to the inner-tooltip")),g.a.createElement("tr",null,g.a.createElement("th",{scope:"row"},"isOpen"),g.a.createElement("td",null,"bool"),g.a.createElement("td",null,"false"),g.a.createElement("td",null,"Boolean to control the state of the tooltip")),g.a.createElement("tr",null,g.a.createElement("th",{scope:"row"},"placement"),g.a.createElement("td",null,"oneOf(PopperPlacements)"),g.a.createElement("td",null,"top"),g.a.createElement("td",null,"'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'")),g.a.createElement("tr",null,g.a.createElement("th",{scope:"row"},"placementPrefix"),g.a.createElement("td",null,"string"),g.a.createElement("td",{className:"nowrap"},"'bs-tooltip'"),g.a.createElement("td",null,"Adds ability to style using a different class.")),g.a.createElement("tr",null,g.a.createElement("th",{scope:"row"},"target"),g.a.createElement("td",null,"oneOfType"),g.a.createElement("td",null,"*",g.a.createElement("i",null,"Required")),g.a.createElement("td",null,"Target element or element ID, popover is attached to this element",g.a.createElement("br",null),"PropTypes.string,",g.a.createElement("br",null),"PropTypes.func,",g.a.createElement("br",null),"DOMElement,"))))))]})}}]),t}(g.a.Component)}}]);