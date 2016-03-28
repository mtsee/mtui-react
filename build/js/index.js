/*! This file is created by Mantou */
webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(216);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactRouter = __webpack_require__(159);

	var _Index = __webpack_require__(221);

	var _Index2 = _interopRequireDefault(_Index);

	var _Index3 = __webpack_require__(226);

	var _Index4 = _interopRequireDefault(_Index3);

	var _Index5 = __webpack_require__(229);

	var _Index6 = _interopRequireDefault(_Index5);

	var _Htmls = __webpack_require__(234);

	var _Htmls2 = _interopRequireDefault(_Htmls);

	var _HtmlsBtn = __webpack_require__(235);

	var _HtmlsBtn2 = _interopRequireDefault(_HtmlsBtn);

	var _HtmlsTable = __webpack_require__(236);

	var _HtmlsTable2 = _interopRequireDefault(_HtmlsTable);

	var _Forms = __webpack_require__(237);

	var _Forms2 = _interopRequireDefault(_Forms);

	var _Plus = __webpack_require__(253);

	var _Plus2 = _interopRequireDefault(_Plus);

	var _Index7 = __webpack_require__(254);

	var _Index8 = _interopRequireDefault(_Index7);

	var _App = __webpack_require__(258);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//路由


	//帮助


	//组件


	//首页
	(0, _reactDom.render)(_react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.browserHistory },
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: '/', component: _App2.default },
			_react2.default.createElement(_reactRouter.IndexRoute, { component: _Index2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: 'index', component: _Index2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: 'start', component: _Index4.default }),
			_react2.default.createElement(
				_reactRouter.Route,
				{ path: 'components', component: _Index6.default },
				_react2.default.createElement(
					_reactRouter.Route,
					{ path: 'htmls', component: _Htmls2.default },
					_react2.default.createElement(_reactRouter.Route, { path: 'btn', component: _HtmlsBtn2.default }),
					_react2.default.createElement(_reactRouter.Route, { path: 'table', component: _HtmlsTable2.default })
				),
				_react2.default.createElement(_reactRouter.Route, { path: 'forms', component: _Forms2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: 'plus', component: _Plus2.default })
			),
			_react2.default.createElement(_reactRouter.Route, { path: 'help', component: _Index8.default })
		)
	), $("#App")[0]);

	//App为入口


	//开始

/***/ },

/***/ 216:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(222);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _setMinHeight = __webpack_require__(225);

	var _setMinHeight2 = _interopRequireDefault(_setMinHeight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Index = _react2.default.createClass({
	  displayName: 'Index',

	  mixins: [_setMinHeight2.default],
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'index mtop60', style: { minHeight: this.state.height + "px", background: '#27303e' } },
	      _react2.default.createElement(
	        'div',
	        { className: 'index-box' },
	        _react2.default.createElement('div', { className: 'logoMax' }),
	        _react2.default.createElement(
	          'h1',
	          { className: 'index-head' },
	          'MTUI React Version 1.0'
	        )
	      )
	    );
	  }
	});
	//主页
	module.exports = Index;

/***/ },

/***/ 222:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var setMinHeight = {
		getInitialState: function getInitialState() {
			return {
				height: $(window).height() - 120
			};
		},
		componentDidMount: function componentDidMount() {
			$(window).resize(function (event) {
				if (this.isMounted()) {
					this.setState({
						height: $(window).height() - 120
					});
				}
			}.bind(this));
		}
	};

	module.exports = setMinHeight;

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(227);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _setMinHeight = __webpack_require__(225);

	var _setMinHeight2 = _interopRequireDefault(_setMinHeight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MyReport = _react2.default.createClass({
	  displayName: 'MyReport',

	  mixins: [_setMinHeight2.default],
	  componentDidMount: function componentDidMount() {
	    // if(this.isMounted()){
	    //   // $(function(){
	    //   //   CodeMirror.fromTextArea($("#myTextarea")[0], {
	    //   //    lineNumbers: true,
	    //   //    mode:  "text/javascript"
	    //   //   });
	    //   // })
	    // }
	  },
	  render: function render() {
	    var html = 'var a=124;';
	    return _react2.default.createElement(
	      'div',
	      { className: 'start', style: { minHeight: this.state.height + "px" } },
	      _react2.default.createElement(
	        'div',
	        { className: 'contents' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          '1、前期准备'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'MTUI React 组件是基于 React.js 开发的 ，如果你没有使用过 React，请先访问 ',
	          _react2.default.createElement(
	            'a',
	            { href: 'https://facebook.github.io/react/index.html' },
	            'React官网'
	          ),
	          '学习。'
	        ),
	        _react2.default.createElement(
	          'h1',
	          null,
	          '2、获取源码'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'MTUI React 代码托管在Github，你可以点击下面的按钮获取。为了帮助项目更好的发展，请不吝献出你的 Star。'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          ' ',
	          _react2.default.createElement(
	            'a',
	            { href: 'https://facebook.github.io/react/index.html' },
	            'Github'
	          ),
	          ' '
	        )
	      )
	    );
	  }
	});
	//关于我们
	module.exports = MyReport;

/***/ },

/***/ 227:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(230);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LeftMenu = __webpack_require__(232);

	var _LeftMenu2 = _interopRequireDefault(_LeftMenu);

	var _setMinHeight = __webpack_require__(225);

	var _setMinHeight2 = _interopRequireDefault(_setMinHeight);

	var _Conf = __webpack_require__(233);

	var _Conf2 = _interopRequireDefault(_Conf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Components = _react2.default.createClass({
	  displayName: 'Components',

	  mixins: [_setMinHeight2.default],
	  render: function render() {
	    if (this.props.children) {
	      return _react2.default.createElement(
	        'div',
	        { className: 'component mtop60', style: { minHeight: this.state.height + "px" } },
	        _react2.default.createElement(_LeftMenu2.default, null),
	        this.props.children
	      );
	    } else {
	      return _react2.default.createElement(
	        'div',
	        { className: 'component mtop60', style: { minHeight: this.state.height + "px" } },
	        _react2.default.createElement(_LeftMenu2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: _Conf2.default.pageAnimate + " contents" },
	          '首页说明文档,我去~'
	        )
	      );
	    }
	  }
	});
	//关于我们
	module.exports = Components;

/***/ },

/***/ 230:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(230);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LeftMenu = _react2.default.createClass({
	  displayName: 'LeftMenu',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'leftmenu' },
	      _react2.default.createElement(
	        'ul',
	        { className: 'menu' },
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { activeClassName: 'active', to: '/components/htmls' },
	            'HTML组件'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { activeClassName: 'active', to: '/components/forms' },
	            '表单组件'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { activeClassName: 'active', to: '/components/plus' },
	            '插件库'
	          )
	        )
	      )
	    );
	  }
	});
	//关于我们
	module.exports = LeftMenu;

/***/ },

/***/ 233:
/***/ function(module, exports) {

	'use strict';

	/**
	* 全局变量的配置
	* @author : Mantou
	* @date : 2016-03-01
	*/
	var Conf = {
	  pageAnimate: 'fadeInLeft animated'
	};
	//配置信息
	module.exports = Conf;

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(230);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Conf = __webpack_require__(233);

	var _Conf2 = _interopRequireDefault(_Conf);

	var _reactRouter = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Htmls = _react2.default.createClass({
			displayName: 'Htmls',
			render: function render() {
					if (this.props.children) {
							return _react2.default.createElement(
									'div',
									{ className: _Conf2.default.pageAnimate + " contents" },
									this.props.children
							);
					} else {
							return _react2.default.createElement(
									'div',
									{ className: _Conf2.default.pageAnimate + " contents" },
									_react2.default.createElement(
											'h1',
											null,
											'HTML组件'
									),
									_react2.default.createElement(
											'div',
											{ className: 'mt-page-content' },
											_react2.default.createElement(
													'h3',
													{ className: 'mt-padding' },
													'选择组件查看详情'
											),
											_react2.default.createElement(
													'div',
													{ className: 'mt-g' },
													_react2.default.createElement(
															'div',
															{ className: 'mt-g-12' },
															_react2.default.createElement(
																	_reactRouter.Link,
																	{ className: 'mt-btn-green', activeClassName: 'active', to: '/components/htmls/btn' },
																	'按钮'
															),
															_react2.default.createElement(
																	_reactRouter.Link,
																	{ className: 'mt-btn-green', activeClassName: 'active', to: '/components/htmls/table' },
																	'表格'
															)
													)
											)
									)
							);
					}
			}
	});
	//联系信息
	module.exports = Htmls;

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(230);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Conf = __webpack_require__(233);

	var _Conf2 = _interopRequireDefault(_Conf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HtmlsBtn = _react2.default.createClass({
						displayName: 'HtmlsBtn',
						render: function render() {
											return _react2.default.createElement(
																'div',
																{ className: _Conf2.default.pageAnimate + " contents" },
																_react2.default.createElement(
																					'h1',
																					null,
																					'按钮'
																),
																_react2.default.createElement(
																					'div',
																					{ className: 'mt-page-content' },
																					_react2.default.createElement(
																										'h3',
																										{ className: 'mt-padding' },
																										'按钮颜色'
																					),
																					_react2.default.createElement(
																										'div',
																										{ className: 'mt-g' },
																										_react2.default.createElement(
																															'div',
																															{ className: 'mt-g-4' },
																															_react2.default.createElement(
																																				'p',
																																				null,
																																				'普通按钮：'
																															),
																															_react2.default.createElement('br', null),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-grey' },
																																				'灰色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-red' },
																																				'红色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-yellow' },
																																				'黄色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-green' },
																																				'绿色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-blue' },
																																				'蓝色按钮'
																															)
																										),
																										_react2.default.createElement(
																															'div',
																															{ className: 'mt-g-4' },
																															_react2.default.createElement(
																																				'p',
																																				null,
																																				'圆角按钮：'
																															),
																															_react2.default.createElement('br', null),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-round-grey' },
																																				'灰色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-round-red' },
																																				'红色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-round-yellow' },
																																				'黄色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-round-green' },
																																				'绿色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-round-blue' },
																																				'蓝色按钮'
																															)
																										),
																										_react2.default.createElement(
																															'div',
																															{ className: 'mt-g-4' },
																															_react2.default.createElement(
																																				'p',
																																				null,
																																				'特效按钮：'
																															),
																															_react2.default.createElement('br', null),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-grey ink-reaction' },
																																				'灰色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-red ink-reaction' },
																																				'红色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-yellow ink-reaction' },
																																				'黄色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-green ink-reaction' },
																																				'绿色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-blue ink-reaction' },
																																				'蓝色按钮'
																															)
																										),
																										_react2.default.createElement(
																															'div',
																															{ className: 'mt-g-4' },
																															_react2.default.createElement(
																																				'p',
																																				null,
																																				'文字按钮：'
																															),
																															_react2.default.createElement('br', null),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-text-grey mt-text-fs12' },
																																				'灰色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-text-red mt-text-fs12' },
																																				'红色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-text-yellow mt-text-fs12' },
																																				'黄色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-text-green mt-text-fs12' },
																																				'绿色按钮'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-text-blue mt-text-fs12' },
																																				'蓝色按钮'
																															)
																										)
																					)
																),
																_react2.default.createElement(
																					'div',
																					{ className: 'mt-page-content' },
																					_react2.default.createElement(
																										'h3',
																										{ className: 'mt-padding' },
																										'按钮尺寸'
																					),
																					_react2.default.createElement(
																										'div',
																										{ className: 'mt-g' },
																										_react2.default.createElement(
																															'div',
																															{ className: 'mt-g-12' },
																															_react2.default.createElement(
																																				'span',
																																				{ className: 'mt-margin' },
																																				'mt-btn-xl'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-blue mt-btn-xl ink-reaction' },
																																				'蓝色按钮'
																															),
																															_react2.default.createElement(
																																				'span',
																																				{ className: 'mt-margin' },
																																				'mt-btn-lg'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-blue mt-btn-lg ink-reaction' },
																																				'蓝色按钮'
																															),
																															_react2.default.createElement(
																																				'span',
																																				{ className: 'mt-margin' },
																																				'默认大小'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-blue ink-reaction' },
																																				'蓝色按钮'
																															),
																															_react2.default.createElement(
																																				'span',
																																				{ className: 'mt-margin' },
																																				'mt-btn-sm'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-blue mt-btn-sm ink-reaction' },
																																				'蓝色按钮'
																															),
																															_react2.default.createElement(
																																				'span',
																																				{ className: 'mt-margin' },
																																				'mt-btn-xs'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-blue mt-btn-xs ink-reaction' },
																																				'蓝色按钮'
																															)
																										),
																										_react2.default.createElement(
																															'div',
																															{ className: 'mt-g-4' },
																															_react2.default.createElement(
																																				'p',
																																				null,
																																				'block按钮：'
																															),
																															_react2.default.createElement('br', null),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-grey mt-btn-block ink-reaction' },
																																				'灰色按钮'
																															),
																															_react2.default.createElement('br', null),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-red mt-btn-block ink-reaction' },
																																				'红色按钮'
																															),
																															_react2.default.createElement('br', null),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-yellow mt-btn-block ink-reaction' },
																																				'黄色按钮'
																															),
																															_react2.default.createElement('br', null),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-green mt-btn-block ink-reaction' },
																																				'绿色按钮'
																															),
																															_react2.default.createElement('br', null),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-blue mt-btn-block ink-reaction' },
																																				'蓝色按钮'
																															),
																															_react2.default.createElement('br', null)
																										)
																					)
																),
																_react2.default.createElement(
																					'div',
																					{ className: 'mt-page-content' },
																					_react2.default.createElement(
																										'h3',
																										{ className: 'mt-padding' },
																										'组合按钮'
																					),
																					_react2.default.createElement(
																										'div',
																										{ className: 'mt-g' },
																										_react2.default.createElement(
																															'div',
																															{ className: 'mt-g-12' },
																															_react2.default.createElement(
																																				'p',
																																				null,
																																				'图标+按钮：'
																															),
																															_react2.default.createElement('br', null),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-grey ink-reaction' },
																																				_react2.default.createElement('i', { className: 'iconfont icon-zhuye' }),
																																				' 主页'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-red ink-reaction' },
																																				_react2.default.createElement('i', { className: 'iconfont icon-yonghu' }),
																																				' 用户'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-yellow ink-reaction' },
																																				_react2.default.createElement('i', { className: 'iconfont icon-duigou' }),
																																				' 正确'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-green ink-reaction' },
																																				_react2.default.createElement('i', { className: 'iconfont icon-shangchuan' }),
																																				' 上传文件'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-blue ink-reaction' },
																																				_react2.default.createElement('i', { className: 'iconfont icon-icon46' }),
																																				' 下载按钮'
																															)
																										),
																										_react2.default.createElement(
																															'div',
																															{ className: 'mt-g-12' },
																															_react2.default.createElement(
																																				'span',
																																				{ className: 'mt-margin' },
																																				'mt-btn-xl'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-grey mt-btn-xl ink-reaction' },
																																				_react2.default.createElement('i', { className: 'iconfont icon-zhuye' }),
																																				' 主页'
																															),
																															_react2.default.createElement(
																																				'span',
																																				{ className: 'mt-margin' },
																																				'mt-btn-lg'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-red mt-btn-lg ink-reaction' },
																																				_react2.default.createElement('i', { className: 'iconfont icon-yonghu' }),
																																				' 用户'
																															),
																															_react2.default.createElement(
																																				'span',
																																				{ className: 'mt-margin' },
																																				'默认大小'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-yellow ink-reaction' },
																																				_react2.default.createElement('i', { className: 'iconfont icon-duigou' }),
																																				' 正确'
																															),
																															_react2.default.createElement(
																																				'span',
																																				{ className: 'mt-margin' },
																																				'mt-btn-sm'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-green mt-btn-sm ink-reaction' },
																																				_react2.default.createElement('i', { className: 'iconfont icon-shangchuan' }),
																																				' 上传文件'
																															),
																															_react2.default.createElement(
																																				'span',
																																				{ className: 'mt-margin' },
																																				'mt-btn-xs'
																															),
																															_react2.default.createElement(
																																				'a',
																																				{ href: 'javascript:;', className: 'mt-btn-blue mt-btn-xs ink-reaction' },
																																				_react2.default.createElement('i', { className: 'iconfont icon-icon46' }),
																																				' 下载按钮'
																															)
																										)
																					)
																)
											);
						}
	});
	//联系信息
	module.exports = HtmlsBtn;

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(230);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Conf = __webpack_require__(233);

	var _Conf2 = _interopRequireDefault(_Conf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HtmlsBtn = _react2.default.createClass({
	  displayName: 'HtmlsBtn',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: _Conf2.default.pageAnimate + " contents" },
	      _react2.default.createElement(
	        'h1',
	        null,
	        '表格'
	      )
	    );
	  }
	});
	//联系信息
	module.exports = HtmlsBtn;

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(230);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(238);

	var _mtuiMixins = __webpack_require__(247);

	var _mtuiMixins2 = _interopRequireDefault(_mtuiMixins);

	var _Conf = __webpack_require__(233);

	var _Conf2 = _interopRequireDefault(_Conf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 类
	var Froms = _react2.default.createClass({
	  displayName: 'Froms',

	  mixins: [_mtuiMixins2.default],
	  getInitialState: function getInitialState() {
	    return {
	      checkedVal: '女'
	    };
	  },
	  handleClick: function handleClick(e) {
	    //获取 checkbox 的值
	    var arr = this.getCheckboxGroupVal($("#group-checkbox"));
	    console.log("==>", arr);
	  },
	  handleClickRadio: function handleClickRadio(e) {
	    //获取radio的值
	    console.log($(":radio:checked").val());
	  },
	  handleRadioChange: function handleRadioChange(e) {
	    //重新选择radio后执行
	    //console.log("help里面的change");
	    console.log(e.target.value);
	    this.setState({
	      checkedVal: e.target.value
	    });
	  },
	  componentDidMount: function componentDidMount() {
	    //ajax请求数据后，重新渲染页面
	    setTimeout(function () {
	      //console.log("重新设置了组的选项为中性~");
	      if (this.isMounted()) {
	        this.setState({
	          checkedVal: '中性'
	        });
	      }
	    }.bind(this), 2000);
	  },
	  render: function render() {

	    //下拉选择
	    var selectProp = {
	      width: '160px',
	      className: 'index-selected',
	      value: 2,
	      placeholder: "高级选项",
	      name: 'testselect',
	      id: 'indexSelected',
	      data: [{ value: 1, label: '金融业' }, { value: 2, label: '房地产业' }, { value: 3, label: '卫生' }, { value: 4, label: '教育' }, { value: 5, label: '体育和娱乐业' }, { value: 6, label: '其他' }],
	      onChange: function onChange(value) {
	        console.log('当前值为：', value);
	      }
	    };

	    return _react2.default.createElement(
	      'div',
	      { className: _Conf2.default.pageAnimate + " contents" },
	      _react2.default.createElement(
	        'h1',
	        null,
	        '自定义表单 '
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'mt-page-content' },
	        _react2.default.createElement(
	          'h3',
	          { className: 'mt-padding' },
	          'input'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'mt-g' },
	          _react2.default.createElement(
	            'div',
	            { className: 'mt-g-4' },
	            _react2.default.createElement(
	              'label',
	              null,
	              '输入框:'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mt-input' },
	              _react2.default.createElement('input', { type: 'text', placeholder: '请输入用户名' })
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'label',
	              null,
	              'block输入框:'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mt-input-block' },
	              _react2.default.createElement('input', { type: 'text' })
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'label',
	              null,
	              '图标合并:'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mt-input mt-icon-input' },
	              _react2.default.createElement('input', { type: 'text' }),
	              _react2.default.createElement(
	                'a',
	                { href: 'javascript:;', className: 'mt-iconbtn' },
	                _react2.default.createElement('i', { className: 'iconfont icon-search' })
	              )
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'label',
	              null,
	              'block图标合并:'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mt-input-block mt-icon-input' },
	              _react2.default.createElement('input', { type: 'text' }),
	              _react2.default.createElement(
	                'a',
	                { href: 'javascript:;', className: 'mt-iconbtn' },
	                _react2.default.createElement('i', { className: 'iconfont icon-search' })
	              )
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'label',
	              null,
	              '圆角输入框:'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mt-input' },
	              _react2.default.createElement('input', { type: 'text', className: 'mt-round' })
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'label',
	              null,
	              'block圆角输入框:'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mt-input-block' },
	              _react2.default.createElement('input', { type: 'text', className: 'mt-round' })
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'label',
	              null,
	              'block圆角输入框图标合并:'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mt-input-block mt-icon-input' },
	              _react2.default.createElement('input', { type: 'text', className: 'mt-round' }),
	              _react2.default.createElement(
	                'a',
	                { href: 'javascript:;', className: 'mt-iconbtn' },
	                _react2.default.createElement('i', { className: 'iconfont icon-sousuo1' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'mt-g-4' },
	            _react2.default.createElement(
	              'label',
	              null,
	              '密码输入框:'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mt-input' },
	              _react2.default.createElement('input', { type: 'password', placeholder: '请输入密码' })
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'label',
	              null,
	              '输入框图标合并:'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mt-input mt-icon-inputr' },
	              _react2.default.createElement('input', { type: 'text', className: '' }),
	              _react2.default.createElement(
	                'a',
	                { href: 'javascript:;', className: 'mt-iconbtn' },
	                _react2.default.createElement('i', { className: 'iconfont icon-user' })
	              )
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'label',
	              null,
	              '密码框图标合并:'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mt-input mt-icon-inputr' },
	              _react2.default.createElement('input', { type: 'password', className: '' }),
	              _react2.default.createElement(
	                'a',
	                { href: 'javascript:;', className: 'mt-iconbtn' },
	                _react2.default.createElement('i', { className: 'iconfont icon-password' })
	              )
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'label',
	              null,
	              '密码框图标合并disabled:'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'mt-input mt-icon-inputr' },
	              _react2.default.createElement('input', { disabled: 'disabled', type: 'password', className: '' }),
	              _react2.default.createElement(
	                'a',
	                { href: 'javascript:;', className: 'mt-iconbtn' },
	                _react2.default.createElement('i', { className: 'iconfont icon-password' })
	              )
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'mt-page-content' },
	        _react2.default.createElement(
	          'h3',
	          { className: 'mt-padding' },
	          '下拉选择框：'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'mt-g' },
	          _react2.default.createElement(
	            'div',
	            { className: 'mt-g-12' },
	            _react2.default.createElement(_index.Selected, selectProp)
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'mt-page-content' },
	        _react2.default.createElement(
	          'h3',
	          { className: 'mt-padding' },
	          'checkbox切换：'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'mt-g' },
	          _react2.default.createElement(
	            'div',
	            { className: 'mt-g-12' },
	            _react2.default.createElement(
	              'div',
	              { id: 'group-checkbox' },
	              _react2.default.createElement(_index.Checkbox, { onClick: this.handleClick, value: '1', label: '选中', checked: true }),
	              _react2.default.createElement(_index.Checkbox, { onClick: this.handleClick, value: '2', label: '未选中' }),
	              _react2.default.createElement(_index.Checkbox, { value: '3', label: '禁用选中', disabled: true, checked: true }),
	              _react2.default.createElement(_index.Checkbox, { value: '4', label: '禁用未选中', disabled: true }),
	              'mixins 中的 getCheckboxGroupVal() 获取checkbox值：',
	              _react2.default.createElement(
	                'a',
	                { href: 'javascript:;', onClick: this.handleClick },
	                '获取checkbox值'
	              )
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'mt-page-content' },
	        _react2.default.createElement(
	          'h3',
	          { className: 'mt-padding' },
	          'radio选择：'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'mt-g' },
	          _react2.default.createElement(
	            'div',
	            { className: 'mt-g-12' },
	            _react2.default.createElement(
	              _index.RadioGroup,
	              { radioChange: this.handleRadioChange, defaultValue: this.state.checkedVal },
	              _react2.default.createElement(_index.Radio, { name: 'sex', value: '男', label: '男' }),
	              _react2.default.createElement(_index.Radio, { name: 'sex', value: '女', label: '女' }),
	              _react2.default.createElement(_index.Radio, { name: 'sex', value: '中性', label: '中性', disabled: true }),
	              _react2.default.createElement(_index.Radio, { name: 'sex', value: '无', label: '无', disabled: true }),
	              _react2.default.createElement(
	                'a',
	                { href: 'javascript:;', onClick: this.handleClickRadio },
	                '获取radio值'
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});
	//帮助中心
	module.exports = Froms;

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PageList = exports.Popup = exports.ModalShow = exports.Modal = exports.DateInput = exports.RadioGroup = exports.Radio = exports.Checkbox = exports.Selected = exports.Tabs = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _DateInput = __webpack_require__(239);

	var _DateInput2 = _interopRequireDefault(_DateInput);

	var _Tabs = __webpack_require__(244);

	var _Tabs2 = _interopRequireDefault(_Tabs);

	var _Selected = __webpack_require__(245);

	var _Selected2 = _interopRequireDefault(_Selected);

	var _ModalShow = __webpack_require__(246);

	var _ModalShow2 = _interopRequireDefault(_ModalShow);

	var _Modal = __webpack_require__(248);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _Popup = __webpack_require__(249);

	var _Popup2 = _interopRequireDefault(_Popup);

	var _Checkbox = __webpack_require__(250);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _PageList = __webpack_require__(251);

	var _PageList2 = _interopRequireDefault(_PageList);

	var _RadioGroup = __webpack_require__(252);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//配置信息
	/**
	* MTUI
	* @author : Mantou
	* @date : 2016-03-01
	*/
	exports.Tabs = _Tabs2.default;
	exports. //tabs切换
	Selected = _Selected2.default;
	exports. //下拉选择框
	Checkbox = _Checkbox2.default;
	exports. //checkbox
	Radio = _RadioGroup.Radio;
	exports. //单选
	RadioGroup = _RadioGroup.RadioGroup;
	exports. //单选组合框
	DateInput = _DateInput2.default;
	exports. //日期组件
	Modal = _Modal2.default;
	exports. //modal弹窗
	ModalShow = _ModalShow2.default;
	exports. //modal弹窗
	Popup = _Popup2.default;
	exports. //提示框
	PageList //页面列表
	 = _PageList2.default;


	/**
	* 分页插件
	*/
	(function ($) {
	    $.fn.pagelist = function (setting) {
	        var defaults = {
	            nowpage: 1, //当前第几页
	            count: 80, //总共多少条数据
	            maxcount: 10, //每页多少条
	            url: 'javascript:;',
	            callback: false
	        };

	        var shtml = '<div class="mt-pagelist-left">\
	                        <div class="mt-select" style="width: 90px;">\
	                            <div class="mt-select-title" data-val="10">10条/页</div>\
	                            <i class="iconfont icon-xia"></i>\
	                            <ul class="mt-select-box">\
	                                <li class="option" data-val="10">10条/页</li>\
	                                <li class="option" data-val="20">20条/页</li>\
	                                <li class="option" data-val="50">50条/页</li>\
	                            </ul>\
	                        </div>\
	                        <span>共 <em class="mt-pagelist-count">0</em> 页 /  <em class="mt-pagelist-total">0</em> 条</span>\
	                    </div>\
	                    <div class="mt-pagelist-right">\
	                        <a href="javascript:;" class="mt-btn-grey ink-reaction mt-pagelist-first">首页</a>\
	                        <a href="javascript:;" class="mt-btn-grey ink-reaction mt-pagelist-prev">上一页</a>\
	                        <a href="javascript:;" class="mt-btn-grey ink-reaction mt-pagelist-btn mt-pagelist-runprev"><i class="iconfont icon-duduyinleappicon0501"></i></a>\
	                        <div class="mt-pagelist-content">\
	                            <ul class="mt-pagelist-page"></ul>\
	                        </div>\
	                        <a href="javascript:;" class="mt-btn-grey ink-reaction mt-pagelist-btn mt-pagelist-runnext"><i class="iconfont icon-duduyinleappicon1401"></i></a>\
	                        <a href="javascript:;" class="mt-btn-grey ink-reaction mt-pagelist-next">下一页</a>\
	                        <a href="javascript:;" class="mt-btn-grey ink-reaction mt-pagelist-end">尾页</a>\
	                        <span class="mt-pagelist-input">\
	                            第<input class="mt-input" type="text">页\
	                        </span>\
	                        <a href="javascript:;" class="mt-btn-grey ink-reaction mt-pagelist-btn">跳转</a>\
	                    </div>';

	        //设置HTML
	        $(this).addClass('mt-pagelist clearfix').html(shtml);
	        mtui.select();

	        if ($(this).length > 1) {
	            console.log("分页插件对象必须唯一！请使用ID");
	            return;
	        }
	        var setting = $.extend(defaults, setting);
	        var liWid = 40; //每个li标签的宽度
	        var speed = 300;
	        var showPage = 7;
	        var $this = $(this);
	        var $ul = $this.find(".mt-pagelist-page");
	        var pagecount = null;

	        var init = function init() {
	            pagecount = Math.ceil(setting.count / setting.maxcount); //计算有多少页
	            //设置mt-pagelist-count
	            $this.find(".mt-pagelist-count").html(pagecount);
	            $this.find(".mt-pagelist-total").html(setting.count);

	            //初始化select
	            $this.find(".mt-select-title").html(setting.maxcount + '条/页');

	            if (pagecount <= showPage) {
	                $this.find(".mt-pagelist-runnext").hide();
	                $this.find(".mt-pagelist-runprev").hide();
	                $ul.css('left', 0);
	            } else {
	                $this.find(".mt-pagelist-runnext").show();
	                $this.find(".mt-pagelist-runprev").show();
	            }
	        };

	        init();

	        //执行动画事件，滚动到指定的位置
	        var runTo = function runTo(page) {
	            console.log("runTo");
	            //console.log(page,pix);
	            setting.nowpage = page;
	            var pix = -parseInt($ul.position().left / liWid); //偏移量

	            if (pagecount <= showPage) return;

	            //如果点击的是中点，保持
	            if (page == pix + 4) {
	                return;
	            } else if (page > pix + 4) {
	                //console.log("page >　pix+4");
	                if (page >= pagecount - 4) {
	                    pix = pagecount - showPage;
	                } else {
	                    pix = page - 4;
	                }
	            } else {
	                //console.log("page <　pix+4");
	                if (page <= 4) {
	                    pix = 0;
	                } else {
	                    pix = page - 4;
	                }
	            }
	            //console.log("====>",pix);
	            $ul.stop();
	            $ul.animate({
	                left: -pix * liWid
	            }, speed);
	        };

	        //跳转到第几页
	        var gotoPage = function gotoPage(page) {
	            if (page >= pagecount) {
	                page = pagecount;
	            }
	            if (page <= 0) {
	                page = 1;
	            }
	            console.log(page);
	            //if($ul.find(".on").index() == page-1)return;
	            $ul.find(".on").removeClass('on');
	            $ul.find("li").eq(page - 1).addClass('on');
	            runTo(page);
	            callbackFun(page);
	        };

	        //设置UL里面的HTML
	        var setPageHtml = function setPageHtml() {
	            var str = "";
	            for (var i = 0; i < pagecount; i++) {
	                str += '<li ' + (setting.nowpage == i + 1 ? 'class="on"' : "") + '><a class="ink-reaction" href="' + setting.url + '">' + (i + 1) + '</a></li>';
	            }
	            $ul.html(str).width(liWid * pagecount);
	        };

	        var callbackFun = function callbackFun(page) {
	            if (setting.callback) {
	                setting.callback(page, setting.maxcount);
	            }
	        };
	        setPageHtml();
	        runTo(setting.nowpage);

	        //点击页码
	        $ul.on('click', 'li', function (e) {
	            e.stopPropagation();
	            if ($ul.is(':animated')) return;
	            var page = $(this).text();
	            //设置class
	            $(this).addClass('on').siblings('.on').removeClass('on');
	            //console.log(page,pix+4);
	            callbackFun(page);
	            runTo(page);
	        });

	        //点击下一分页
	        $this.find(".mt-pagelist-runnext").on('click', function (e) {
	            e.stopPropagation();
	            if ($ul.is(':animated')) return;
	            var pix = -parseInt($ul.position().left / liWid); //偏移量
	            //console.log(pix);
	            runTo(pix + showPage + 3);
	        });

	        //点击上一分页
	        $this.find(".mt-pagelist-runprev").on('click', function (e) {
	            e.stopPropagation();
	            if ($ul.is(':animated')) return;
	            var pix = -parseInt($ul.position().left / liWid); //偏移量
	            runTo(pix - 2);
	        });

	        //点击下一页
	        $this.find(".mt-pagelist-next").on('click', function (e) {
	            e.stopPropagation();
	            var page = parseInt($ul.find(".on").text()) + 1; //偏移量
	            gotoPage(page);
	        });

	        //点击上一页
	        $this.find(".mt-pagelist-prev").on('click', function (e) {
	            e.stopPropagation();
	            var page = parseInt($ul.find(".on").text()) - 1; //偏移量
	            gotoPage(page);
	        });

	        //首页
	        $this.find(".mt-pagelist-first").on('click', function (e) {
	            e.stopPropagation();
	            gotoPage(1);
	        });

	        //尾页
	        $this.find(".mt-pagelist-end").on('click', function (e) {
	            e.stopPropagation();
	            gotoPage(pagecount);
	        });

	        //跳转到
	        $this.on('click', '.mt-pagelist-btn', function (e) {
	            e.stopPropagation();
	            var val = $(this).siblings('.mt-pagelist-input').find(".mt-input").val();
	            gotoPage(val);
	        });

	        //控制输入框的数字
	        $this.on('keyup focus', '.mt-input', function (e) {
	            var val = $(this).val();
	            if (!RegExp('^[1-9]\\d*$').test(val) || val > pagecount || val < 1) {
	                $(this).val("");
	            }
	        });

	        //选择下拉列表
	        $this.on('click', '.option', function (e) {
	            console.log($(this).attr("data-val"));
	            setting.maxcount = $(this).attr("data-val");
	            init();
	            setPageHtml();
	            runTo(1);
	            gotoPage(1);
	        });

	        //页码刷新
	        this.refresh = function (opt) {
	            console.log(opt);
	            setting.maxcount = opt.maxcount;
	            setting.nowpage = opt.nowpage;
	            $this.find(".mt-select input").mtSelectVal(opt.maxcount);
	            if (opt.count != setting.count) {
	                setting.count = opt.count;
	            }
	            init();
	            setPageHtml();
	            runTo(setting.nowpage);
	            //$this.find("input[type='hidden']").mtSelectVal(opt.maxcount);
	        };

	        this.data = {
	            maxcount: setting.maxcount,
	            nowpage: setting.nowpage
	        };

	        return this;
	    };
	})(jQuery);

	//拖拽插件 by mantou
	;(function ($) {
	    $.fn.dragMt = function (setting) {
	        var defaults = {
	            //drag_callback : null//默认回调函数为空
	            down_callback: null,
	            move_callback: null,
	            up_callback: null
	        };
	        //如果setting为空，就取default的值
	        var setting = $.extend(defaults, setting);
	        this.each(function () {
	            //插件实现代码
	            var $this = $(this);

	            //点击事件
	            $this.on("mousedown", function (e) {
	                var ev = {
	                    x_start: null,
	                    y_start: null,
	                    x_move: null,
	                    y_move: null,
	                    x_end: null,
	                    y_end: null,
	                    left: null,
	                    top: null
	                };

	                ev.x_start = e.pageX;
	                ev.y_start = e.pageY;
	                ev.left = $this.position().left + $this.parent().get(0).scrollLeft;
	                ev.top = $this.position().top + $this.parent().get(0).scrollTop;

	                if (setting.down_callback != null) {
	                    setting.down_callback(ev);
	                }

	                $(document).on("mousemove.dragMt", function (e) {
	                    ev.x_move = e.pageX - ev.x_start + ev.left;
	                    ev.y_move = e.pageY - ev.y_start + ev.top;
	                    if (setting.move_callback != null) {
	                        setting.move_callback(ev, e.pageX - ev.x_start + e.pageY - ev.y_start);
	                    }
	                    $this.css({
	                        "left": ev.x_move,
	                        "top": ev.y_move
	                    });
	                }).on("mouseup.dragMt", function (e) {
	                    ev.x_end = e.pageX;
	                    ev.y_end = e.pageY;
	                    if (setting.up_callback != null) {
	                        setting.up_callback(ev);
	                    }
	                    $(document).off("mousemove.dragMt mouseup.dragMt");
	                });
	            });
	        });
	    };
	})(jQuery);

	//点击空白，收起选择框，特殊情况
	$(document).on('click', function (e) {
	    e.stopPropagation();
	    if (!$(e.target).closest('.mt-select')[0]) {
	        $(".mt-select-box").slideUp(200);
	    }
	    if (!$(e.target).closest('.mt-date-main')[0]) {
	        $(".mt-date-main").hide();
	    }
	}).on('click', '.ink-reaction', function (e) {
	    var $this = $(this);
	    //获取当前的点击点
	    var x = e.pageX - $this.offset().left;
	    var y = e.pageY - $this.offset().top;
	    var timestamp = new Date().getTime();
	    $(this).append('<div style="left:' + x + 'px; top:' + y + 'px;" class="ink ink_' + timestamp + '"></div>');
	    var $thisInk = $(".ink_" + timestamp);

	    if (window.applicationCache) {
	        //如果支持
	        $thisInk[0].addEventListener("webkitAnimationEnd", function () {
	            //动画结束时事件
	            $thisInk.remove();
	        }, false);
	    }
	});

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(240);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _DateBox = __webpack_require__(243);

	var _DateBox2 = _interopRequireDefault(_DateBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DateInput = _react2.default.createClass({
		displayName: 'DateInput',

		getInitialState: function getInitialState() {
			//获取当前时间
			var myDate = new Date();
			return {
				year: myDate.getFullYear(),
				month: 1 + parseInt(myDate.getMonth()),
				day: myDate.getDate(),
				placeholder: this.props.placeholder,
				defaultValue: this.props.defaultValue //默认值，可以是now，null
			};
		},

		// //初始化参数
		componentWillMount: function componentWillMount() {
			if (this.props.year != undefined) {
				this.setState({
					day: this.props.day,
					year: this.props.year,
					month: this.props.month
				});
			}
		},

		//选择日历后，设置input ,将该函数传递到子对象
		handleChange: function handleChange(e, obj) {
			this.setState({
				defaultValue: 'static'
			});
			//console.log(e);
			if (obj != undefined) {
				this.setState({
					day: obj.day,
					year: obj.year,
					month: obj.month
				});
			} else {
				this.setState({
					defaultValue: 'null'
				});
			}
		},

		//点击input按钮后
		handleClick: function handleClick(e) {
			$(".mt-date-yearMonth").show().siblings('div').hide();
			$(".mt-date-months").hide().removeClass('mt-date-animate');
			$(".mt-date-years").hide().removeClass('mt-date-animate');
			if (e.target.value != "") {
				//分离value
				var arr = e.target.value.split("-");
				console.log(arr);
				this.setState({
					year: arr[0],
					month: arr[1],
					day: arr[2]
				});
			}
			$(e.target).siblings(".mt-date-main").show();
		},

		//渲染
		render: function render() {
			if (this.state.defaultValue == "null") {
				var val = "";
			} else {
				var val = this.state.year + '-' + this.state.month + '-' + this.state.day;
			}
			return _react2.default.createElement(
				'div',
				{ className: 'mt-input mt-date mt-icon-input' },
				_react2.default.createElement('input', { style: { width: this.props.width }, readOnly: true, onClick: this.handleClick, placeholder: this.props.placeholder == undefined ? "日期..." : this.props.placeholder, onChange: this.handleChange, type: 'text', value: val }),
				_react2.default.createElement(
					'a',
					{ style: { zIndex: 9 }, className: 'mt-iconbtn' },
					_react2.default.createElement('i', { className: 'iconfont icon-gmrili' })
				),
				_react2.default.createElement(_DateBox2.default, { changeEvent: this.handleChange, year: this.state.year, month: this.state.month, day: this.state.day })
			);
		}
	});

	//配置信息
	/**
	* 一个简单的日历插件
	* @author : Mantou
	* @date : 2016-03-01
	*/
	module.exports = DateInput;

/***/ },

/***/ 240:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(240);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//日历核心算法
	/**
	* 一个简单的日历插件
	* @author : Mantou
	* @date : 2016-03-01
	*/
	var MtDate = {
		// 给定年月获取当月天数
		GetMDay: function GetMDay(y, m) {
			var mday = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
			if (y % 4 == 0 && y % 100 != 0 || y % 400 == 0) //判断是否是闰月
				mday[1] = 29;
			return mday[m - 1];
		},

		// 获取星期数
		WeekNumber: function WeekNumber(y, m, d) {
			var wk;
			if (m <= 12 && m >= 1) {
				for (var i = 1; i < m; ++i) {
					d += this.GetMDay(y, i);
				}
			}
			/*根据日期计算星期的公式*/
			wk = (y - 1 + (y - 1) / 4 - (y - 1) / 100 + (y - 1) / 400 + d) % 7;
			//0对应星期天，1对应星期一
			return parseInt(wk);
		},

		//加，减一个月,返回对应的 y ，m
		addAndDelOneMonth: function addAndDelOneMonth(y, m, mark) {
			//加一个月
			if (mark == 'add') {
				if (m != 12) {
					m++;
				} else {
					m = 1;
					y++;
				}
			} else if (mark == 'del') {
				//减一个月
				if (m != 1) {
					m--;
				} else {
					m = 12;
					y--;
				}
			} else {
				//...
			}
			return {
				y: y,
				m: m
			};
		}
	};

	var DateBox = _react2.default.createClass({
		displayName: 'DateBox',

		getInitialState: function getInitialState() {
			return {
				year: this.props.year,
				month: this.props.month,
				day: this.props.day,
				yearArr: []
			};
		},

		//点击后触发
		clickDay: function clickDay(e, mark) {
			var obj = MtDate.addAndDelOneMonth(this.state.year, this.state.month, mark);
			var data = {
				day: e.target.text,
				year: obj.y,
				month: obj.m
			};
			this.props.changeEvent(e, data);
			$(this.refs.myDate).hide();
		},

		//点击事件
		handleClickPrev: function handleClickPrev(e) {
			//console.log("点击上个月的：",e.target.text);
			this.clickDay(e, 'del');
		},
		handleClickThis: function handleClickThis(e) {
			//console.log("点击这个月的：",e.target.text);
			this.clickDay(e, 'null');
		},
		handleClickNext: function handleClickNext(e) {
			//console.log("点击下个月的：",e.target.text);
			this.clickDay(e, 'add');
		},

		//点击上一年,点击下一年
		handleClickPrevYear: function handleClickPrevYear(e) {
			this.setState({
				year: this.state.year - 1
			});
		},
		handleClickNextYear: function handleClickNextYear(e) {
			this.setState({
				year: parseInt(this.state.year) + 1
			});
		},

		//点击上个月，点击下个月
		handleClickPrevMonth: function handleClickPrevMonth(e) {
			var obj = MtDate.addAndDelOneMonth(this.state.year, this.state.month, 'del');
			this.setState({
				month: obj.m,
				year: obj.y
			});
		},
		handleClickNextMonth: function handleClickNextMonth(e) {
			var obj = MtDate.addAndDelOneMonth(this.state.year, this.state.month, 'add');
			this.setState({
				month: obj.m,
				year: obj.y
			});
		},

		//选择显示
		hideWitch: function hideWitch(str) {
			$(this.refs.yearMonth).hide();
			$(this.refs.year).hide();
			$(this.refs.month).hide();

			if (str == 'month') {
				$(this.refs.month).show();
			} else if (str == 'year') {
				$(this.refs.year).show();
			} else {
				$(this.refs.yearMonth).show();
			}
		},

		//点击年月的 title
		handleClickYandM: function handleClickYandM(e) {
			this.hideWitch('month');
			$(this.refs.dateMonths).show(0).addClass('mt-date-animate');
		},
		//点击月
		handleClickM: function handleClickM(e) {

			//根据当前的year 前 20年，后 10年 初始化数据
			var y = this.state.year;
			var arr = [];
			for (var i = 15; i > 0; i--) {
				arr.push(y - i);
			};
			for (var i = 0; i < 25; i++) {
				arr.push(i + parseInt(y));
			};
			//console.log(arr);
			this.setState({
				yearArr: arr
			});

			this.hideWitch('year');
			$(this.refs.dateYears).show(0).addClass('mt-date-animate');
		},
		//选择月份
		handleClickMonth: function handleClickMonth(e) {
			this.hideWitch('yearMonth');
			this.setState({
				month: $(e.target).data("val")
			});
			var $dateMonths = $(this.refs.dateMonths);
			$dateMonths.removeClass('mt-date-animate');
			setTimeout(function () {
				$dateMonths.hide();
			}, 300);
		},
		//选择年份
		handleClickYear: function handleClickYear(e) {

			this.hideWitch('month');
			this.setState({
				year: $(e.target).text()
			});
			var $dateYears = $(this.refs.dateYears);
			$dateYears.removeClass('mt-date-animate');
			setTimeout(function () {
				$dateYears.hide();
			}, 300);
		},
		//日历更新后
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			//console.log("我擦，更新咯~");
			this.setState({
				year: nextProps.year,
				month: nextProps.month,
				day: nextProps.day
			});
		},

		//点击今天
		handleClickNowDay: function handleClickNowDay(e) {
			//获取当前时间
			var myDate = new Date();
			var data = {
				year: myDate.getFullYear(),
				month: 1 + parseInt(myDate.getMonth()),
				day: myDate.getDate()
			};
			this.props.changeEvent(e, data);
			$(this.refs.myDate).hide();
		},

		//点击清除
		handleClickClear: function handleClickClear(e) {
			this.props.changeEvent(e, undefined);
			$(this.refs.myDate).hide();
		},

		//初始化日历插件
		initMonthDay: function initMonthDay(data) {
			//统一显示6周
			var days = MtDate.GetMDay(data.y, data.m); //当月天数 
			var firstDay = MtDate.WeekNumber(data.y, data.m, 1); //当月第一天星期 

			//获取上个月的y，m
			var prev = MtDate.addAndDelOneMonth(data.y, data.m, 'del');
			var prevDays = MtDate.GetMDay(prev.y, prev.m);

			//一共有6*7 = 42 个格子
			var arr = [];
			//特殊情况，特殊考虑，如果第一天是周日，那么可以考虑多留出上个月的一周，方便选择
			if (firstDay == 0) {
				firstDay = 7;
			}
			for (var i = 0; i < 42; i++) {
				if (i < firstDay) {
					arr.push(_react2.default.createElement(
						'li',
						{ key: i },
						_react2.default.createElement(
							'a',
							{ onClick: this.handleClickPrev, href: 'javascript:;', className: 'mt-date-prevday' },
							prevDays - firstDay + i + 1
						)
					));
				} else if (i >= firstDay && i <= days) {
					var day = i - firstDay + 1;
					arr.push(_react2.default.createElement(
						'li',
						{ key: i },
						_react2.default.createElement(
							'a',
							{ onClick: this.handleClickThis, href: 'javascript:;', className: day == this.state.day && data.m == this.state.month && data.y == this.state.year ? 'mt-date-selected' : '' },
							day
						)
					));
				} else {
					arr.push(_react2.default.createElement(
						'li',
						{ key: i },
						_react2.default.createElement(
							'a',
							{ onClick: this.handleClickNext, href: 'javascript:;', className: 'mt-date-nextday' },
							i - days
						)
					));
				}
			}
			return _react2.default.createElement(
				'ul',
				{ className: 'mt-date-day' },
				arr
			);
		},

		//渲染
		render: function render() {
			var prevDay = MtDate.addAndDelOneMonth(this.state.year, this.state.month, 'del'),
			    nowDay = MtDate.addAndDelOneMonth(this.state.year, this.state.month),
			    nextDay = MtDate.addAndDelOneMonth(this.state.year, this.state.month, 'add');
			var arr = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
			return _react2.default.createElement(
				'div',
				{ ref: 'myDate', className: 'mt-date-main' },
				_react2.default.createElement(
					'div',
					{ className: 'mt-date-title' },
					_react2.default.createElement(
						'a',
						{ onClick: this.handleClickNowDay, href: 'javascript:;', className: 'mt-btn-blue mt-btn-sm ink-reaction mt-date-nowday' },
						'今天'
					),
					_react2.default.createElement(
						'a',
						{ onClick: this.handleClickClear, href: 'javascript:;', className: 'mt-btn-blue mt-btn-sm ink-reaction mt-date-clear' },
						'清除'
					),
					_react2.default.createElement(
						'div',
						{ className: 'mt-date-yearMonth', ref: 'yearMonth' },
						_react2.default.createElement(
							'a',
							{ onClick: this.handleClickPrevMonth, className: 'mt-btn-blue mt-btn-sm ink-reaction', href: 'javascript:;' },
							_react2.default.createElement('i', { className: 'iconfont icon-left' })
						),
						_react2.default.createElement(
							'a',
							{ onClick: this.handleClickYandM, className: 'mt-btn-blue mt-btn-sm ink-reaction mt-date-ym', href: 'javascript:;' },
							this.state.year,
							' - ',
							this.state.month
						),
						_react2.default.createElement(
							'a',
							{ onClick: this.handleClickNextMonth, className: 'mt-btn-blue mt-btn-sm ink-reaction', href: 'javascript:;' },
							_react2.default.createElement('i', { className: 'iconfont icon-right' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'mt-date-month', ref: 'month' },
						_react2.default.createElement(
							'a',
							{ onClick: this.handleClickPrevMonth, className: 'mt-btn-blue mt-btn-sm ink-reaction', href: 'javascript:;' },
							_react2.default.createElement('i', { className: 'iconfont icon-left' })
						),
						_react2.default.createElement(
							'a',
							{ onClick: this.handleClickM, className: 'mt-btn-blue mt-btn-sm ink-reaction mt-date-m', href: 'javascript:;' },
							this.state.month
						),
						_react2.default.createElement(
							'a',
							{ onClick: this.handleClickNextMonth, className: 'mt-btn-blue mt-btn-sm ink-reaction', href: 'javascript:;' },
							_react2.default.createElement('i', { className: 'iconfont icon-right' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'mt-date-year', ref: 'year' },
						_react2.default.createElement(
							'a',
							{ onClick: this.handleClickPrevYear, className: 'mt-btn-blue mt-btn-sm ink-reaction', href: 'javascript:;' },
							_react2.default.createElement('i', { className: 'iconfont icon-left' })
						),
						_react2.default.createElement(
							'a',
							{ onClick: this.handleClickY, className: 'mt-btn-blue mt-btn-sm ink-reaction mt-date-y', href: 'javascript:;' },
							this.state.year
						),
						_react2.default.createElement(
							'a',
							{ onClick: this.handleClickNextYear, className: 'mt-btn-blue mt-btn-sm ink-reaction', href: 'javascript:;' },
							_react2.default.createElement('i', { className: 'iconfont icon-right' })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'mt-date-body' },
					_react2.default.createElement(
						'div',
						{ className: 'mt-date-days clearfix' },
						_react2.default.createElement(
							'ul',
							{ className: 'mt-date-week' },
							_react2.default.createElement(
								'li',
								null,
								'日'
							),
							_react2.default.createElement(
								'li',
								null,
								'一'
							),
							_react2.default.createElement(
								'li',
								null,
								'二'
							),
							_react2.default.createElement(
								'li',
								null,
								'三'
							),
							_react2.default.createElement(
								'li',
								null,
								'四'
							),
							_react2.default.createElement(
								'li',
								null,
								'五'
							),
							_react2.default.createElement(
								'li',
								null,
								'六'
							)
						),
						_react2.default.createElement(
							'div',
							{ ref: 'dateDays', className: 'mt-date-item' },
							this.initMonthDay(nowDay)
						)
					),
					_react2.default.createElement(
						'div',
						{ ref: 'dateMonths', className: 'mt-date-months' },
						_react2.default.createElement(
							'ul',
							null,
							arr.map(function (index, elem) {
								return _react2.default.createElement(
									'li',
									{ onClick: this.handleClickMonth, className: "mt-btn-blue mt-btn-sm ink-reaction" + (this.state.month == elem + 1 ? " mt-active" : ""), key: elem, 'data-val': elem + 1 },
									index
								);
							}.bind(this))
						)
					),
					_react2.default.createElement(
						'div',
						{ ref: 'dateYears', className: 'mt-date-years' },
						_react2.default.createElement(
							'ul',
							null,
							this.state.yearArr.map(function (index, elem) {
								return _react2.default.createElement(
									'li',
									{ onClick: this.handleClickYear, className: "mt-btn-blue mt-btn-sm ink-reaction" + (this.state.year == index ? " mt-active" : ""), key: elem },
									index
								);
							}.bind(this))
						)
					)
				)
			);
		}
	});

	//配置信息
	module.exports = DateBox;

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//Tabs 插件
	var Tabs = _react2.default.createClass({
	  displayName: 'Tabs',

	  callBack: function callBack(index) {
	    if (this.props.callBack != undefined) {
	      this.props.callBack(index);
	    }
	  },
	  getInitialState: function getInitialState() {
	    //初始化回调
	    this.callBack(this.props.defaultVal);
	    return {
	      defaultVal: this.props.defaultVal
	    };
	  },
	  handleClick: function handleClick(e) {
	    var $li = $(e.currentTarget);
	    var num = $li.index();
	    this.setState({
	      defaultVal: num
	    });
	    //点击后的回调
	    this.callBack(num);
	  },
	  tabsHead: function tabsHead() {
	    var arr = [];
	    this.props.data.map(function (index, elem) {
	      arr.push(_react2.default.createElement(
	        'li',
	        { onClick: this.handleClick, className: elem == this.state.defaultVal ? 'mt-tabs-active' : '', key: elem },
	        _react2.default.createElement(
	          'a',
	          { href: 'javascript: void(0)' },
	          index.title
	        )
	      ));
	    }.bind(this));
	    return arr;
	  },
	  tabBody: function tabBody() {
	    var arr = [];
	    this.props.data.map(function (index, elem) {
	      arr.push(_react2.default.createElement(
	        'div',
	        { className: elem == this.state.defaultVal ? 'mt-tabs-item mt-tabs-active' : 'mt-tabs-item', key: elem },
	        index.content
	      ));
	    }.bind(this));
	    return arr;
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: "mt-tabs " + this.props.className },
	      _react2.default.createElement(
	        'ul',
	        { className: 'mt-tabs-header' },
	        this.tabsHead()
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'mt-tabs-content' },
	        _react2.default.createElement(
	          'div',
	          { className: 'mt-tabs-wrap' },
	          this.tabBody()
	        )
	      )
	    );
	  }
	});

	//配置信息
	/**
	* 一个简单的日历插件
	* @author : Mantou
	* @date : 2016-03-01
	*/
	module.exports = Tabs;

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//自定义的select
	var Selected = _react2.default.createClass({
		displayName: "Selected",

		getInitialState: function getInitialState() {
			var title = this.props.placeholder == undefined ? _react2.default.createElement(
				"span",
				{ className: "placeholder" },
				"请选择..."
			) : _react2.default.createElement(
				"span",
				{ className: "placeholder" },
				this.props.placeholder
			);
			var value = this.props.value;
			//设置初始值
			if (this.props.value != undefined) {
				this.props.data.map(function (index, elem) {
					if (index.value == value) {
						title = index.label;
					}
				});
			}
			return {
				value: value,
				title: title,
				onChange: function onChange() {}
			};
		},
		handleClickTitle: function handleClickTitle(e) {
			e.stopPropagation();
			var speed = 200;
			var $box = $(e.currentTarget).find(".mt-select-box");
			var val = $(e.target).attr("data-val");
			if ($box.is(':hidden')) {
				$box.slideDown(speed);
			} else {
				$box.slideUp(speed);
			}
		},
		handleClickOption: function handleClickOption(e) {
			//e.stopPropagation();
			var $this = $(e.currentTarget);
			var val = $this.data("val");
			var title = $this.html();
			this.setState({
				value: val,
				title: title
			}, function () {
				this.props.onChange(val);
			});
		},
		iniSelectData: function iniSelectData() {
			var arr = [];
			this.props.data.map(function (index, elem) {
				arr.push(_react2.default.createElement(
					"li",
					{ onClick: this.handleClickOption, key: elem, className: "option", "data-val": index.value },
					index.label
				));
			}.bind(this));
			return arr;
		},
		render: function render() {
			return _react2.default.createElement(
				"div",
				{ style: { width: this.props.width }, className: "mt-select" + (this.props.className == undefined ? "" : " " + this.props.className), "data-val": this.state.value, id: this.props.id, onClick: this.handleClickTitle },
				_react2.default.createElement(
					"div",
					{ className: "mt-select-title" },
					this.state.title
				),
				_react2.default.createElement("input", { type: "hidden", name: this.props.name, defaultValue: this.state.value }),
				_react2.default.createElement("i", { className: "iconfont icon-arrowdown" }),
				_react2.default.createElement(
					"ul",
					{ className: "mt-select-box" },
					this.iniSelectData()
				)
			);
		}
	});

	//配置信息
	/**
	* 一个简单的日历插件
	* @author : Mantou
	* @date : 2016-03-01
	*/
	module.exports = Selected;

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _mtuiMixins = __webpack_require__(247);

	var _mtuiMixins2 = _interopRequireDefault(_mtuiMixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var timestamp = new Date().getTime();

	//自定义Checkbox插件
	/**
	* 自定义内容的弹窗插件
	* @author : Mantou
	* @date : 2016-03-01
	*/
	var ModalShow = _react2.default.createClass({
		displayName: 'ModalShow',

		mixins: [_mtuiMixins2.default],

		//关闭弹窗
		handleClickClose: function handleClickClose(e) {
			$("#modalDialog_" + timestamp).css({
				"-webkit-animation-name": "bounceOutDown",
				"animation-name": "bounceOutDown"
			});
			setTimeout(function () {
				if ($(".MTUI_DIALOGS").length == 1) {
					$("#MTUI_BG").fadeOut();
				}
				$('#MTUI_MODAL_' + timestamp).remove();
			}, 500);
		},


		//显示弹窗
		handleClick: function handleClick(e) {
			var _props$modal$props = this.props.modal.props;
			var width = _props$modal$props.width;
			var height = _props$modal$props.height;
			var titleColor = _props$modal$props.titleColor;
			var title = _props$modal$props.title;
			var closeColor = _props$modal$props.closeColor;
			var drag = _props$modal$props.drag;

			if (!titleColor) {
				var titleColor = '#313A49';
			}
			if (!closeColor) {
				if (title) {
					var closeColor = '#FFFFFF';
				} else {
					var closeColor = '#333333';
				}
			}

			var center = this.center(width, height);

			//设置style
			var style = {
				width: width,
				height: height,
				position: 'absolute',
				top: center.top,
				left: center.left
			};
			//渲染一个弹窗，支持弹多个弹窗
			$("#MTUI_MODAL").append('<div class="MTUI_DIALOGS" id="MTUI_MODAL_' + timestamp + '"></div>');

			(0, _reactDom.render)(_react2.default.createElement(
				'div',
				{ style: style, className: 'mt-modal-dialog', id: "modalDialog_" + timestamp },
				_react2.default.createElement(
					'a',
					{ style: { color: closeColor }, href: 'javascript:;', onClick: this.handleClickClose, className: 'mt-modal-close' },
					_react2.default.createElement('i', { className: 'iconfont icon-close' })
				),
				title ? _react2.default.createElement(
					'div',
					{ style: { backgroundColor: titleColor }, className: title ? "mt-dialog-title" : "" },
					title
				) : "",
				this.props.modal
			), $('#MTUI_MODAL_' + timestamp)[0] //document.getElementById('MTUI_MODAL')
			);

			//显示 - 是否拖动
			if (drag) {
				$("#modalDialog_" + timestamp).show().dragMt();
			} else {
				$("#modalDialog_" + timestamp).show();
			}
			$("#MTUI_BG").show();
		},


		//渲染
		render: function render() {
			//console.log(this.props.modal);
			return _react2.default.createElement(
				'span',
				{ onClick: this.handleClick },
				this.props.children
			);
		}
	});

	//配置信息
	exports.default = ModalShow;

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MtuiMixins = {
		getCheckboxGroupVal: function getCheckboxGroupVal($dom) {
			var arr = [];
			$dom.find(".mt-checkbox-input:checked").each(function (index, el) {
				arr.push($(this).val());
			});
			return arr;
		},

		//居中显示
		center: function center(w, h) {
			var $win = $(window);
			var winH = $win.height();
			var winW = $win.width();
			if (h != 'auto') {
				var top = winH - parseInt(h) >= 0 ? (winH - parseInt(h)) / 2 : 20;
			} else {
				var top = 160;
			}
			var left = (winW - parseInt(w)) / 2;
			return {
				top: top,
				left: left
			};
		}
	}; /**
	   * MTUI_MIXINS
	   * @author : Mantou
	   * @date : 2016-03-01
	   */


	module.exports = MtuiMixins;

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//插件
	var Modal = _react2.default.createClass({
		displayName: 'Modal',

		render: function render() {
			return _react2.default.createElement(
				'span',
				null,
				this.props.children
			);
		}
	});

	//配置信息
	/**
	* 一个简单的日历插件
	* @author : Mantou
	* @date : 2016-03-01
	*/
	exports.default = Modal;

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _mtuiMixins = __webpack_require__(247);

	var _mtuiMixins2 = _interopRequireDefault(_mtuiMixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var timestamp = new Date().getTime();

	//弹窗主函数
	/**
	* 自定义内容的弹窗插件
	* @author : Mantou
	* @date : 2016-03-01
	*/
	function Popup(setting) {
		//console.log(setting);

		var defaults = {
			title: '系统提示',
			text: '', //弹窗文字
			titlebg: '#313A49', //顶部的颜色
			btnColor: '#FFFFFF', //关闭按钮的颜色
			time: null, //自动关闭,  如果有值，一定时间会自动关闭
			clickback: false, //点击按钮的回调函数 return :mark
			closeback: false, //关闭时的回调函数  return :null
			showbtn: 0, //是否显示按钮 0,1,2；1个为确定，2为确定取消，0表示不要按钮
			width: 300, //弹窗宽度
			height: 'auto', //高度自动
			top: false, //弹窗距离顶部的高度
			drag: false //是否可拖动
		};

		//如果setting为空，就取default的值
		var setting = $.extend(defaults, setting);
		var timestamp = new Date().getTime();
		var popupID = "popup-" + timestamp;
		//渲染一个弹窗
		var center = _mtuiMixins2.default.center(setting.width, setting.height);
		var style = {
			zIndex: timestamp,
			width: setting.width,
			height: setting.height,
			top: setting.top ? setting.top : center.top,
			left: center.left
		};
		var timeMark = false;

		//关闭弹窗
		var closePopup = function closePopup() {
			var $popup = $("#" + popupID);
			$popup.css({
				"-webkit-animation-name": "bounceOutDown",
				"animation-name": "bounceOutDown"
			});
			setTimeout(function () {
				//console.log($(".MTUI_POPUPS").length);
				if ($(".MTUI_DIALOGS").length == 1) {
					$("#MTUI_BG").fadeOut();
				}
				$("#MTUI_POPUP_" + timestamp).remove();
				if (timeMark) {
					clearTimeout(timeMark);
				}
			}, 500);
			if (setting.closeback) {
				setting.closeback();
			}
		};

		//关闭按钮
		var handClickClose = function handClickClose(e) {
			closePopup();
		};

		//确定按钮
		var handClickYes = function handClickYes(e) {
			closePopup();
			if (setting.clickback) {
				setting.clickback(true);
			}
		};

		//取消按钮
		var handClickNo = function handClickNo(e) {
			var $popup = closePopup();
			if (setting.clickback) {
				setting.clickback(false);
			}
		};

		//自动关闭
		var autoClose = function autoClose() {
			if (setting.time != null) {
				timeMark = setTimeout(function () {
					closePopup();
				}, setting.time);
			}
		};

		//加入内部DIV支持多个弹窗
		$("#MTUI_POPUP").append('<div class="MTUI_DIALOGS" id="MTUI_POPUP_' + timestamp + '"></div>');

		//渲染
		(0, _reactDom.render)(_react2.default.createElement(
			'div',
			{ id: popupID, className: 'mt-popup', style: style },
			_react2.default.createElement(
				'h1',
				{ style: { backgroundColor: setting.titlebg }, className: 'mt-popup-h1' },
				setting.title
			),
			_react2.default.createElement(
				'a',
				{ style: { color: setting.btnColor }, onClick: handClickClose, href: 'javascript:;', className: 'mt-popup-btn-close' },
				_react2.default.createElement('i', { className: 'icon-close iconfont' })
			),
			_react2.default.createElement(
				'div',
				{ className: 'mt-popup-content' },
				setting.text == "" ? setting.text : _react2.default.createElement(
					'p',
					{ className: 'mt-popup-str' },
					setting.text
				)
			),
			function () {
				if (setting.showbtn == 1) return _react2.default.createElement(
					'a',
					{ href: 'javascript:void(0)', onClick: handClickYes, className: 'mt-btn-blue ink-reaction' },
					'确定'
				);else if (setting.showbtn == 2) return _react2.default.createElement(
					'span',
					null,
					_react2.default.createElement(
						'a',
						{ href: 'javascript:void(0)', onClick: handClickNo, className: 'mt-btn-grey ink-reaction' },
						'取消'
					),
					_react2.default.createElement(
						'a',
						{ href: 'javascript:void(0)', onClick: handClickYes, className: 'mt-btn-blue ink-reaction' },
						'确定'
					)
				);else return;
			}()
		), $('#MTUI_POPUP_' + timestamp)[0]);

		//支持拖动
		if (setting.drag) {
			$("#" + popupID).dragMt();
		}

		//显示出来
		$("#" + popupID).show();
		$("#MTUI_BG").show();

		//启用计时器
		autoClose();
	}

	//配置信息
	exports.default = Popup;

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//自定义Checkbox插件
	var Checkbox = _react2.default.createClass({
		displayName: "Checkbox",

		getInitialState: function getInitialState() {
			return {
				checked: this.props.checked == undefined ? false : true,
				value: this.props.value,
				label: this.props.label == undefined ? "选项名称" : this.props.label,
				disabled: this.props.disabled == undefined ? false : true
			};
		},
		handleChange: function handleChange(e) {
			//console.log(e.target.checked);
			if (this.props.onClick != undefined) {
				this.props.onClick(e);
			}
			this.setState({
				checked: e.target.checked
			});
		},
		render: function render() {
			return _react2.default.createElement(
				"label",
				{ className: "mt-checkbox" + (this.state.checked ? " mt-checkbox-active" : "") },
				_react2.default.createElement("input", { className: "mt-checkbox-input", type: "checkbox", value: this.state.value, disabled: this.state.disabled, defaultChecked: this.state.checked, onChange: this.handleChange }),
				_react2.default.createElement("i", { className: "iconfont icon-checkbox" }),
				_react2.default.createElement(
					"span",
					null,
					this.state.label
				)
			);
		}
	});

	//配置信息
	/**
	* 一个简单的日历插件
	* @author : Mantou
	* @date : 2016-03-01
	*/
	module.exports = Checkbox;

/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(238);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//pagelist插件
	/**
	* 分页插件
	* @author : Mantou
	* @date : 2016-03-01
	*/
	var selectProp = null;
	var liWid = 40;
	var speed = 300;

	var PageList = _react2.default.createClass({
		displayName: 'PageList',
		getInitialState: function getInitialState() {
			return {
				pages: null, // li page列表
				nowpage: 1, //当前第几页
				count: this.props.count, //总共多少条数据
				eachPageCount: this.props.eachPageCount, //每页多少条
				pagecount: 0, //共有多少页
				showPage: this.props.showPage, //最多显示几个页码
				inputVal: 1
			};
		},


		//执行回调函数
		callback: function callback() {
			if (this.props.callback) {
				this.props.callback(this.state.nowpage, this.state.eachPageCount);
			} else {
				console.log("pagelist必须设置回调函数！");
			}
		},


		//页面跳转
		gotoPage: function gotoPage(nowpage) {
			var _state = this.state;
			var count = _state.count;
			var eachPageCount = _state.eachPageCount;

			this.iniLiDom(nowpage, count, eachPageCount);
		},


		//可控组件
		handleChangeVal: function handleChangeVal(e) {
			var val = e.target.value;
			if (/^[0-9]*$/.test(val) && val <= this.state.pagecount) {
				this.setState({
					inputVal: val
				});
			}
		},


		//跳转
		handleClickGoto: function handleClickGoto(e) {
			//console.log(this.state.inputVal);
			if (this.state.inputVal != "") {
				this.gotoPage(this.state.inputVal);
			}
		},


		//点击页码
		handleClickPage: function handleClickPage(e) {
			this.gotoPage(e.target.text);
		},


		//跳转到首页
		handleClickToFirst: function handleClickToFirst(e) {
			this.gotoPage(1);
		},


		//跳转到尾页
		handleClickToLast: function handleClickToLast(e) {
			this.gotoPage(this.state.pagecount);
		},


		//上一页
		handleClickPrev: function handleClickPrev(e) {
			//console.log(this.state.nowpage);
			var nowpage = this.state.nowpage;
			if (nowpage > 1) {
				this.gotoPage(parseInt(nowpage) - 1);
			}
		},


		//下一页
		handleClickNext: function handleClickNext(e) {
			//console.log(this.state.nowpage);
			var nowpage = this.state.nowpage;
			if (nowpage < this.state.pagecount) {
				this.gotoPage(parseInt(nowpage) + 1);
			}
		},


		//获取当前中点的num数
		getCenterNum: function getCenterNum(showPage) {

			// //如果showPage是奇数
			if (showPage % 2 == 1) {
				//计算每次移动的偏移量
				var num = parseInt((parseInt(showPage) + 1) / 2);
			} else {
				var num = parseInt(showPage) / 2;
			}

			return parseInt(num);
		},


		//下一段
		handleClickNextDuan: function handleClickNextDuan(e) {
			var $ul = $(this.refs.pagesUl);
			if ($ul.is(':animated')) return;

			var showPage = this.state.showPage;

			var pix = -parseInt($ul.position().left / liWid); //偏移量
			var num = this.getCenterNum(showPage);
			this.runTo(pix + parseInt(showPage) + num);
		},


		//上一段
		handleClickPrevDuan: function handleClickPrevDuan(e) {
			var $ul = $(this.refs.pagesUl);
			if ($ul.is(':animated')) return;

			var showPage = this.state.showPage;

			var pix = -parseInt($ul.position().left / liWid); //偏移量
			var num = this.getCenterNum(showPage);
			//console.log(num);
			if (showPage % 2 == 0) {
				this.runTo(pix - num);
			} else {
				this.runTo(pix - num + 1);
			}
		},


		//重新渲染li标签
		iniLiDom: function iniLiDom(nowpage, count, eachPageCount) {
			var pagecount = Math.ceil(count / eachPageCount); //计算有多少页
			var arr = [];

			//渲染数据
			for (var i = 0; i < pagecount; i++) {
				if (nowpage == i + 1) {
					arr.push(_react2.default.createElement(
						'li',
						{ className: 'on', key: i },
						_react2.default.createElement(
							'a',
							{ className: 'ink-reaction', href: 'javascript:;' },
							i + 1
						)
					));
				} else {
					arr.push(_react2.default.createElement(
						'li',
						{ onClick: this.handleClickPage, key: i },
						_react2.default.createElement(
							'a',
							{ className: 'ink-reaction', href: 'javascript:;' },
							i + 1
						)
					));
				}
			}

			//设置pagecount,pages
			this.setState({
				pagecount: pagecount,
				pages: arr,
				eachPageCount: eachPageCount,
				nowpage: nowpage
			});
		},


		//页面渲染之前执行
		componentWillMount: function componentWillMount() {
			var _state2 = this.state;
			var count = _state2.count;
			var eachPageCount = _state2.eachPageCount;

			//下拉选择

			selectProp = {
				width: '90px',
				value: this.state.eachPageCount,
				data: [{ value: 10, label: '10条/页' }, { value: 20, label: '20条/页' }, { value: 50, label: '50条/页' }],
				onChange: function (value, label) {
					//console.log('当前值为：', value);
					$(this.refs.pagesUl).css({ left: 0 });
					this.iniLiDom(1, count, value);
				}.bind(this)
			};

			//渲染li标签
			this.iniLiDom(this.state.nowpage, count, eachPageCount);
		},


		//渲染后执行
		componentDidMount: function componentDidMount() {
			//console.log(this.refs.pagesUl);
			//执行回调
			this.callback();
		},


		//滚动动画
		runTo: function runTo(nowpage) {
			var $ul = $(this.refs.pagesUl);
			var _state3 = this.state;
			var pagecount = _state3.pagecount;
			var showPage = _state3.showPage;

			var num = this.getCenterNum(showPage);
			var pix = -parseInt($ul.position().left / liWid); //偏移量,当前偏移多少个

			if (pagecount <= showPage) return;
			//如果点击的是中点，保持
			if (nowpage == pix + num) {
				return;
			} else if (nowpage > pix + num) {
				//console.log("nowpage >　pix+num");
				if (nowpage >= pagecount - num) {
					pix = pagecount - showPage;
				} else {
					pix = nowpage - num;
				}
			} else {
				//console.log("nowpage <　pix+num");
				if (nowpage <= num) {
					pix = 0;
				} else {
					pix = nowpage - num;
				}
			}
			$ul.stop();
			$ul.animate({
				left: -pix * liWid
			}, speed);
		},


		//每次渲染后执行
		componentDidUpdate: function componentDidUpdate(nextProps, nextState) {
			//执行回调
			this.callback();
			//滚动
			this.runTo(this.state.nowpage);
			//返回true 执行动画
			return true;
		},


		//渲染数据
		render: function render() {

			//渲染
			return _react2.default.createElement(
				'div',
				{ className: 'mt-pagelist', id: this.props.id },
				_react2.default.createElement(
					'div',
					{ className: 'mt-pagelist-left' },
					_react2.default.createElement(_index.Selected, selectProp),
					' ',
					_react2.default.createElement(
						'span',
						null,
						'共 ',
						this.state.pagecount,
						' 页 / ',
						this.state.count,
						' 条'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'mt-pagelist-right' },
					_react2.default.createElement(
						'a',
						{ href: 'javascript:;', onClick: this.handleClickToFirst, className: 'mt-btn-grey ink-reaction mt-pagelist-first' },
						'首页'
					),
					' ',
					_react2.default.createElement(
						'a',
						{ href: 'javascript:;', onClick: this.handleClickPrev, className: 'mt-btn-grey ink-reaction mt-pagelist-prev' },
						'上一页'
					),
					'  ',
					this.state.showPage < this.state.pagecount ? _react2.default.createElement(
						'a',
						{ href: 'javascript:;', onClick: this.handleClickPrevDuan, className: 'mt-btn-grey ink-reaction mt-pagelist-btn mt-pagelist-runprev' },
						_react2.default.createElement('i', { className: 'iconfont icon-left' })
					) : "",
					' ',
					_react2.default.createElement(
						'div',
						{ className: 'mt-pagelist-content', style: { maxWidth: 40 * this.state.showPage } },
						_react2.default.createElement(
							'ul',
							{ ref: 'pagesUl', style: { width: this.state.pagecount * 40 }, className: 'mt-pagelist-page' },
							this.state.pages
						)
					),
					' ',
					this.state.showPage < this.state.pagecount ? _react2.default.createElement(
						'a',
						{ href: 'javascript:;', onClick: this.handleClickNextDuan, className: 'mt-btn-grey ink-reaction mt-pagelist-btn mt-pagelist-runnext' },
						_react2.default.createElement('i', { className: 'iconfont icon-right' })
					) : "",
					' ',
					_react2.default.createElement(
						'a',
						{ href: 'javascript:;', onClick: this.handleClickNext, className: 'mt-btn-grey ink-reaction mt-pagelist-next' },
						'下一页'
					),
					' ',
					_react2.default.createElement(
						'a',
						{ href: 'javascript:;', onClick: this.handleClickToLast, className: 'mt-btn-grey ink-reaction mt-pagelist-end' },
						'尾页'
					),
					_react2.default.createElement(
						'span',
						{ className: 'mt-pagelist-input' },
						'第',
						_react2.default.createElement('input', { className: 'mt-input', value: this.state.inputVal, onChange: this.handleChangeVal, type: 'text' }),
						'页'
					),
					_react2.default.createElement(
						'a',
						{ href: 'javascript:;', onClick: this.handleClickGoto, className: 'mt-btn-grey ink-reaction mt-pagelist-btn' },
						'跳转'
					)
				)
			);
		}
	});

	//配置信息
	exports.default = PageList;

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//单选组合
	var RadioGroup = _react2.default.createClass({
		displayName: 'RadioGroup',

		getInitialState: function getInitialState() {
			return {
				defaultValue: this.props.defaultValue,
				childrens: []
			};
		},
		handleRadioChange: function handleRadioChange(e) {
			//console.log("group里面的change");
			this.props.radioChange(e);
		},
		getChildrenArr: function getChildrenArr() {
			//重置radio的值
			var propsData = this.props.defaultValue;
			var arr = [];
			this.props.children.map(function (index, elem) {
				//console.log(index);
				if (index.type.displayName == 'Radio') {
					var radioData = {
						key: elem,
						name: index.props.name,
						value: index.props.value,
						label: index.props.label,
						radioChange: this.handleRadioChange
					};
					if (index.props.disabled != undefined) {
						radioData['disabled'] = true;
					}
					if (radioData.value == propsData) {
						radioData['checked'] = true;
					}
					arr.push(_react2.default.createElement(Radio, radioData));
				} else {
					arr.push(index);
				}
			}.bind(this));
			return arr;
		},
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'mt-radio-group' },
				this.getChildrenArr()
			);
		}
	});

	//自定义单选按钮
	/**
	* 一个简单的日历插件
	* @author : Mantou
	* @date : 2016-03-01
	*/
	var Radio = _react2.default.createClass({
		displayName: 'Radio',

		getInitialState: function getInitialState() {
			return {
				value: this.props.value,
				disabled: this.props.disabled == undefined ? false : true,
				checked: this.props.checked == undefined ? false : true,
				name: this.props.name,
				label: this.props.label
			};
		},
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			if (this.props.checked != nextProps.checked) {
				this.setState({
					checked: nextProps.checked
				});
			}
		},
		handleRadioChange: function handleRadioChange(e) {
			//console.log("radio里面的change");
			this.props.radioChange(e);
		},
		render: function render() {
			//alert(1);
			var radioData = {
				type: 'radio',
				ref: 'radios',
				name: this.state.name,
				defaultValue: this.state.value,
				disabled: this.state.disabled,
				onChange: this.handleRadioChange
			};
			if (this.state.checked) {
				radioData['checked'] = true;
			} else {
				delete radioData.checked;
			}
			return _react2.default.createElement(
				'label',
				{ className: "mt-radio" + (this.state.checked ? " mt-radio-active" : "") },
				_react2.default.createElement('input', radioData),
				_react2.default.createElement('i', { className: 'iconfont icon-radio' }),
				_react2.default.createElement(
					'span',
					null,
					this.state.label
				)
			);
		}
	});

	//配置信息
	module.exports = {
		RadioGroup: RadioGroup,
		Radio: Radio
	};

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(230);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Conf = __webpack_require__(233);

	var _Conf2 = _interopRequireDefault(_Conf);

	var _index = __webpack_require__(238);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var a = 1;
	var Plus = _react2.default.createClass({
	    displayName: 'Plus',

	    getInitialState: function getInitialState() {
	        return {
	            nowpage: 'loading....',
	            eachPageCount: 'loading...'
	        };
	    },
	    handleClickPopup: function handleClickPopup(e) {
	        (0, _index.Popup)({
	            title: '系统提示',
	            text: '系统提示信息！', //弹窗文字
	            time: null, //自动关闭,  如果有值，一定时间会自动关闭
	            width: 200, //弹窗宽度
	            height: 'auto', //弹窗高度
	            drag: true //是否可拖动
	        });
	    },
	    handleClickPopup2: function handleClickPopup2(e) {
	        var clickback = function clickback(mark) {
	            console.log(mark);
	        };
	        var closeback = function closeback() {
	            console.log("弹窗关闭了~");
	        };
	        (0, _index.Popup)({
	            title: '系统提示222',
	            text: '系统提示信息！', //弹窗文字
	            time: null, //自动关闭,  如果有值，一定时间会自动关闭
	            clickback: clickback, //点击按钮的回调函数 return :mark,$popup
	            closeback: closeback, //关闭时的回调函数  return :$popup
	            showbtn: 2, //是否显示按钮 0,1,2
	            width: 300, //弹窗宽度
	            height: 'auto', //弹窗高度
	            drag: true //是否可拖动
	        });
	    },
	    handleClickPopup3: function handleClickPopup3(e) {
	        (0, _index.Popup)({
	            title: '3秒后自动关闭',
	            text: '系统提示信息！', //弹窗文字
	            time: 3000, //自动关闭,  如果有值，一定时间会自动关闭
	            width: 300, //弹窗宽度
	            height: 'auto', //弹窗高度
	            drag: true //是否可拖动
	        });
	    },

	    //分页回调
	    setCallBack: function setCallBack(nowpage, eachPageCount) {
	        console.log("当前：", nowpage, eachPageCount);

	        //ajax
	        $(this.refs.pageData).html('您选择了页码: ' + nowpage + '  当前每页有：' + eachPageCount);

	        // a++;
	        // if(a > 5) return ;
	        // this.setState({
	        //   nowpage : nowpage,
	        //   eachPageCount : eachPageCount
	        // });
	    },

	    render: function render() {

	        //tabs切换的数据
	        var tabsData = {
	            className: 'test',
	            defaultVal: 0,
	            data: [{ title: '小桥流水', content: _react2.default.createElement(
	                    'div',
	                    null,
	                    '我就是随便写点什么~'
	                ) }, { title: '拆菊东篱', content: _react2.default.createElement(
	                    'div',
	                    null,
	                    'loading...'
	                ) }, { title: '古道西风', content: _react2.default.createElement(
	                    'div',
	                    null,
	                    'loading...'
	                ) }, { title: '其他', content: _react2.default.createElement(
	                    'div',
	                    null,
	                    'loading...'
	                ) }],
	            callBack: function callBack(index) {
	                //切换后的回调函数
	                console.log("当前选择的tabs为：", index);
	            }
	        };

	        //弹窗
	        var modal = _react2.default.createElement(
	            _index.Modal,
	            { width: '400px', height: '240px', title: '弹窗标题可自定义', drag: 'true' },
	            '这个是有头部的弹出窗。'
	        );
	        var modal2 = _react2.default.createElement(
	            _index.Modal,
	            { width: '400px', height: '240px' },
	            '这是一个自定义内容的弹出窗，没有头部。'
	        );

	        //分页插件调用
	        return _react2.default.createElement(
	            'div',
	            { className: _Conf2.default.pageAnimate + " contents" },
	            _react2.default.createElement(
	                'h1',
	                null,
	                '插件'
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'mt-page-content' },
	                _react2.default.createElement(
	                    'h3',
	                    { className: 'mt-padding' },
	                    'AJAX分页插件：'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'mt-g' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mt-g-8' },
	                        _react2.default.createElement('p', { ref: 'pageData' }),
	                        _react2.default.createElement(_index.PageList, { id: 'pageList1', count: '300', eachPageCount: '10', showPage: '6', callback: this.setCallBack })
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'mt-page-content' },
	                _react2.default.createElement(
	                    'h3',
	                    { className: 'mt-padding' },
	                    '弹窗组件:'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'mt-g' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mt-g-12' },
	                        _react2.default.createElement(
	                            _index.ModalShow,
	                            { modal: modal },
	                            _react2.default.createElement(
	                                'a',
	                                { href: 'javascript:;', className: 'mt-btn-green ink-reaction mt-modal-btn' },
	                                '有头部的弹窗'
	                            )
	                        ),
	                        '  ',
	                        _react2.default.createElement(
	                            _index.ModalShow,
	                            { modal: modal2 },
	                            _react2.default.createElement(
	                                'a',
	                                { href: 'javascript:;', className: 'mt-btn-green ink-reaction mt-modal-btn' },
	                                '没有头部的弹窗'
	                            )
	                        ),
	                        '  ',
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'javascript:;', onClick: this.handleClickPopup, className: 'mt-btn-yellow ink-reaction mt-modal-btn' },
	                            'alert'
	                        ),
	                        '   ',
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'javascript:;', onClick: this.handleClickPopup2, className: 'mt-btn-red ink-reaction mt-modal-btn' },
	                            '带回调函数的popup'
	                        ),
	                        '   ',
	                        _react2.default.createElement(
	                            'a',
	                            { href: 'javascript:;', onClick: this.handleClickPopup3, className: 'mt-btn-blue ink-reaction mt-modal-btn' },
	                            '3秒关闭'
	                        )
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'mt-page-content' },
	                _react2.default.createElement(
	                    'h3',
	                    { className: 'mt-padding' },
	                    'tab切换：'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'mt-g' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mt-g-12' },
	                        _react2.default.createElement(_index.Tabs, tabsData)
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'mt-page-content' },
	                _react2.default.createElement(
	                    'h3',
	                    { className: 'mt-padding' },
	                    '日期插件：'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'mt-g' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'mt-g-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mt-g-3' },
	                            '没有默认值：',
	                            _react2.default.createElement(_index.DateInput, { defaultValue: 'null' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mt-g-3' },
	                            '默认值是今天：',
	                            _react2.default.createElement(_index.DateInput, { defaultValue: 'now' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mt-g-3' },
	                            '自定义默认值：',
	                            _react2.default.createElement(_index.DateInput, { year: '2015', month: '5', day: '18' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'mt-g-3' },
	                            '自定义提示内容：',
	                            _react2.default.createElement(_index.DateInput, { width: '200px', defaultValue: 'null', placeholder: '我是个任性的日期...', year: '2015', month: '3', day: '18' })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});
	//关于我们
	exports.default = Plus;

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(255);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _setMinHeight = __webpack_require__(225);

	var _setMinHeight2 = _interopRequireDefault(_setMinHeight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Help = _react2.default.createClass({
	  displayName: 'Help',

	  mixins: [_setMinHeight2.default],
	  componentDidMount: function componentDidMount() {
	    // if(this.isMounted()){
	    //   // $(function(){
	    //   //   CodeMirror.fromTextArea($("#myTextarea")[0], {
	    //   //    lineNumbers: true,
	    //   //    mode:  "text/javascript"
	    //   //   });
	    //   // })
	    // }
	  },
	  render: function render() {
	    var html = 'var a=124;';
	    return _react2.default.createElement(
	      'div',
	      { className: 'start', style: { minHeight: this.state.height + "px" } },
	      _react2.default.createElement(
	        'div',
	        { className: 'contents' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          '帮助中心'
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          '这个家伙很懒，什么帮助文档也没写~'
	        )
	      )
	    );
	  }
	});
	//关于我们
	module.exports = Help;

/***/ },

/***/ 255:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(159);

	var _Menu = __webpack_require__(259);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Footer = __webpack_require__(262);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* 整个项目的入口
	* @author : Mantou
	* @date : 2016-03-01
	*/


	var App = _react2.default.createClass({
	  displayName: 'App',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'app' },
	      _react2.default.createElement(_Menu2.default, null),
	      this.props.children,
	      _react2.default.createElement(_Footer2.default, null)
	    );
	  }
	});
	//APP入口
	module.exports = App;

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(260);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Menu = _react2.default.createClass({
	  displayName: 'Menu',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'menubox' },
	      _react2.default.createElement(
	        'div',
	        { className: 'menu' },
	        _react2.default.createElement(
	          'div',
	          { className: 'menu-logobox' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/' },
	            _react2.default.createElement('h1', { className: 'menu-logo' })
	          )
	        ),
	        _react2.default.createElement(
	          'ul',
	          { className: 'menu-list' },
	          _react2.default.createElement(
	            'li',
	            { className: 'item' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { activeClassName: 'active', to: '/start' },
	              '开始使用'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            { className: 'item' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { activeClassName: 'active', to: '/components' },
	              '组件库'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            { className: 'item' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { activeClassName: 'active', to: '/help' },
	              '帮助'
	            )
	          ),
	          _react2.default.createElement(
	            'li',
	            { className: 'item' },
	            _react2.default.createElement(
	              'a',
	              { target: '_blank', href: 'https://github.com/mtsee/mtui-react' },
	              'Github'
	            )
	          )
	        )
	      )
	    );
	  }
	});
	//主页
	module.exports = Menu;

/***/ },

/***/ 260:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Footer = _react2.default.createClass({
	    displayName: "Footer",
	    render: function render() {
	        return _react2.default.createElement(
	            "div",
	            { className: "footer" },
	            "作者：Mantou    QQ：676015863    一款永久免费的React前端组件库"
	        );
	    }
	});
	//关于我们
	/**
	* footer
	* @param : 输入
	* @return : 返回
	*/
	module.exports = Footer;

/***/ }

});