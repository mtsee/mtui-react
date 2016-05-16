/**
 * Created by hao on 16/3/17. change by mantou
 */
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

define(function (require, exports) {
    var $ = require("libs/jquery");
    var D = require("libs/dialog");

    //add Mantou
    var sessionDo = new Object();
    sessionDo = {
        get : null,
        set : null,
        del : null
    }
    var session = window.sessionStorage;
    sessionDo.get = function(key){ //通过key 获取数组
        var str = session.getItem(key);
        console.log(str);
        if(str == '' || str == null){
            return null;
        }else{
            return str.split(',');
        }
    }
    sessionDo.set = function(key,value){
        var arr = sessionDo.get(key)==null?[]:sessionDo.get(key);

        if(arr.indexOf(value) == -1){
            arr.push(value);
            session.setItem(key,arr.join(','));
        }
    }
    sessionDo.del = function(key,value){
        console.log(value);
        var arr = sessionDo.get(key);
        arr.remove(value);
        session.setItem(key,arr.join(','));
    }

    var validatorRule = [
        {
            ele: ".validate-account",
            datatype: /^\w+([\-+.']\w+)*@\w+([\-.]\w+)*\.\w+([\-.]\w+)*$|^[A-Za-z0-9_]{6,20}$/,
            nullmsg: "6-20个字符，可使用字母，数字及下划线“_”组成",
            errormsg: "6-20个字符，可使用字母，数字及下划线“_”组成",
            sucmsg: "账号可使用"
        },
        {
            ele: ".validate-email",
            datatype: "e",
            nullmsg: "请输入您常用的邮箱",
            errormsg: "邮箱格式错误，请重新输入",
            sucmsg: "邮箱正确"
        },
        {
            ele: ".validate-tel",
            datatype: "m",
            nullmsg: "请输入您的电话",
            errormsg: "电话错误，请重新输入",
            sucmsg: "正确"
        },
        {
            ele: ".validate-accept",
            datatype: "*",
            sucmsg: "正确"
        },
        {
            ele: ".validate-required",
            datatype: "*",
            sucmsg: "正确"
        },
        {
            ele: ".validate-name",
            datatype: "*",
            sucmsg: "正确",
            nullmsg: "请输入您的名称",
            errormsg: "名称错误，请重新输入"
        },
        {
            ele: ".validate-price",
            datatype: "n",
            sucmsg: "正确",
            nullmsg: "请输入价格",
            errormsg: "价格错误，请重新输入"
        },
        {
            ele: ".validate-captcha",
            datatype: /^\d{4}$/,
            nullmsg: "请输入验证码",
            errormsg: "验证码输入错误",
            sucmsg: "验证码正确"
        },
        {
            ele: ".validate-pwd",
            datatype: "*6-16",
            nullmsg: "6-16个字符，可使用字母(区分大小写)，数字和符号",
            errormsg: "6-16个字符，可使用字母(区分大小写)，数字和符号",
            sucmsg: "输入正确"
        },
        {
            ele: ".validate-pwd2",
            datatype: "*",
            nullmsg: "再输入一次密码",
            errormsg: "两次密码输入不一致",
            sucmsg: "输入正确",
            recheck: "passwords"
        }
    ];

    exports.$ = $;

    //弹窗
    exports.dialog = function () {
        require.async(["libs/validform"], function (V) {
            function dialogInit(_html) {
                D.dialog({
                    content: _html,
                    openFn: function (_curDialog) {
                        var validator = $("form", _curDialog.dialogBox).validform({
                            ignoreHidden: true,
                            tiptype: function (msg, o, cssctl) {
                                if (!o.obj.is("form")) {
                                    var $tips = o.obj.siblings(".tips");
                                    cssctl($tips, o.type);
                                    $tips.text(msg);
                                }
                            },
                            beforeSubmit: function (_curForm) {
                                $.post(_curForm.attr("action"), _curForm.serializeArray(), function (data) {
                                    if (data.code == 200) {
                                        _curDialog.close();
                                    } else {
                                        alert(data.message || "很抱歉，失败了！");
                                    }
                                }, "json").error(function () {
                                    alert("提交失败！");
                                });
                                return false;
                            }
                        });
                        validator.addRule(validatorRule);
                    }
                });
            }

            $(document).on("click", ".dialogBtn", function () {
                var $this = $(this);
                if ($this.data("tpl")) {
                    dialogInit($($this.data("tpl")).html());
                } else if ($this.data("url")) {
                    D.dialog({
                        iframeSrc: $this.data("url")
                    })
                }
            });
        })
    };

    exports.selectEvent = function (_opts) {
        var opts = {
            autocompleteUrl: ''
        };
        opts = $.extend(opts, _opts);

        require.async(["autocomplete", "libs/angular"], function () {
            $("#selectEventBtn").on("click", function () {
                var $this = $(this);
                D.dialog({
                    content: $($this.data("tpl")).html(),
                    openFn: function (_curDialog) {
                        function selectEventCtrl($scope, $element) {
                            $scope.formData = {};

                            $scope.submitForm = function () {
                                var _data = angular.copy($scope.formData);
                                var _data2 = [];

                                $.each(_data.selectList, function (i, v) {
                                    _data2.push(v.id);
                                });

                                $("#selectEventAnyou").val(_data.anyou);
                                $("#selectEventVal").data("formData", _data).val(_data2.join(","));
                                _curDialog.close();
                            };

                            $("#anyouIpt").autocomplete(opts.autocompleteUrl, {
                                mustMatch: true,
                                selectFirst: false
                            }).result(function (e, text, data) {
                                if (data) {
                                    $scope.formData.anyou = data.key;
                                    $scope.$digest();
                                }
                            });
                        };
                        selectEventCtrl.$inject = ["$scope", "$element"];

                        function treeList($timeout) {
                            return {
                                restrict: 'AE',
                                require: "?^ngModel",
                                link: function ($scope, $element, $attrs, ngModel) {
                                    $scope.status = {};
                                    $scope.treeList = [];
                                    $scope.selectList = [];
                                    $scope.curTree = {};

                                    if ($("#selectEventVal").data("formData")) {
                                        $scope.formData = $("#selectEventVal").data("formData");
                                        $("#anyouIpt").val($scope.formData.anyou);
                                    } else {
                                        $scope.formData.selectList = [];
                                    }

                                    $scope.selectTree = function (tree, e) {
                                        var $li = $element.find("li");
                                        var $em = $(e.currentTarget);
                                        var $parentLi = $em.parent("li");
                                        var _tree = angular.copy(tree);
                                        if (_tree.nodes.length == 0) {
                                            $scope.curTree = _tree;
                                            $li.removeClass("on");
                                            $parentLi.addClass("on");
                                        }
                                    };

                                    $scope.selectOne = function () {
                                        if ($scope.curTree.id && !isInList($scope.curTree)) {
                                            $scope.formData.selectList.push($scope.curTree);
                                        }
                                    };

                                    $scope.deleteOne = function (_tree) {
                                        $scope.formData.selectList.splice($scope.formData.selectList.indexOf(_tree), 1);
                                    };

                                    function isInList(_tree) {
                                        for (var i = 0, l = $scope.formData.selectList.length; i < l; i++) {
                                            if (_tree.id == $scope.formData.selectList[i].id) {
                                                return true;
                                            }
                                        }
                                        return false
                                    }

                                    function buildTree(data) {
                                        var pos = {};
                                        var tree = [];
                                        var i = 0;
                                        while (data.length != 0) {
                                            if (data[i].pid == "0") {
                                                var _obj = angular.copy(data[i]);
                                                _obj.nodes = [];
                                                tree.push(_obj);
                                                pos[data[i].id] = [tree.length - 1];
                                                data.splice(i, 1);
                                                i--;
                                            } else {
                                                var posArr = pos[data[i].pid];
                                                if (posArr != undefined) {

                                                    var obj = tree[posArr[0]];
                                                    for (var j = 1; j < posArr.length; j++) {
                                                        obj = obj.nodes[posArr[j]];
                                                    }

                                                    var _obj = angular.copy(data[i]);
                                                    _obj.nodes = [];
                                                    obj.nodes.push(_obj);

                                                    pos[data[i].id] = posArr.concat([obj.nodes.length - 1]);
                                                    data.splice(i, 1);
                                                    i--;
                                                }
                                            }
                                            i++;
                                            if (i > data.length - 1) {
                                                i = 0;
                                            }
                                        }

                                        return tree;
                                    }

                                    function getTreeData() {
                                        $.post(opts.treeListUrl, function (_data) {
                                            if (_data.code == 200) {
                                                $scope.treeList = buildTree(_data.data);
                                            }
                                        }, 'json').complete(function () {
                                            $scope.$digest();
                                        })
                                    }

                                    getTreeData();
                                }
                            }
                        };
                        treeList.$inject = ["$timeout"];

                        angular.module("selectEvent", [])
                            .directive("treeList", treeList)
                            .controller("selectEventCtrl", selectEventCtrl);
                        angular.bootstrap(_curDialog.dialogBox, ['selectEvent']);

                    }
                });
            });
        });
    };

    //全选
    exports.selectAll = function () {
        var opts = {
            ID: '.selectAll',
            callBack: null
        };
        opts = $.extend({}, opts, arguments[0] || {});
        $(opts.ID).each(function (index, element) {
            var $this = $(this);
            var _name = $this.attr('name');
            $this.attr('name', '');
            $this.bind('click', function () {
                $("input[name='" + _name + "']:enabled").prop('checked', $this.prop('checked'));
                if (null !== opts.callBack) {
                    opts.callBack();
                }
            });
        });
    };

    //级联
    exports.relativeSelect = function (id) {
        var opts = {
            ID: ".relativeSelect"
        };

        if (Qui.isString(id)) {
            opts.ID = id;
        } else {
            opts = Qui.merge(opts, id);
        }

        var $select = $(opts.ID);

        function getParam(n) {
            var data = {
                t: (new Date().getTime())
            };
            $select.each(function (i) {
                if (i <= n && $select.eq(i).attr("name")) {
                    data[$select.eq(i).attr("name")] = $select.eq(i).val();
                }
            });
            return data;
        }

        $select.each(function () {
            var $this = $(this);
            var n = $select.index($this);
            //获取数据
            function getData($this, type) {
                var defaultOption = '<option value="">' + ($this.attr("placeholder") || "请选择") + '</option>';
                if (!$this.attr("select-data") || type) {
                    $this.html(defaultOption).trigger('change');
                } else {
                    $.get($this.attr("select-data"), getParam(n), function (data) {
                        if (data.code == 200) {
                            var _options = defaultOption;
                            for (var i = 0, _length = data.data.length; i < _length; i++) {
                                _options += '<option ' + (data.data[i].enabled === 0 ? ' class="gray"' : '') + ' value="' + data.data[i].value + '" ' + (data.data[i].selected ? 'selected' : '') + '>' + data.data[i].text + '</option>';
                            }
                            $this.html(_options).trigger('select', $this.val() || $this.attr('select-value'));
                        }
                    });
                }
            }

            //关联下一个 Select
            $this.on("change", function () {
                if ('' !== $.trim($this.val())) {
                    getData($select.eq(n + 1));
                } else {
                    getData($select.eq(n + 1), 1);
                }
            });

            //改变选中值
            $this.on("select", function (e, value) {
                if (value) {
                    $('option[value=' + value + ']', $this).prop("selected", true);
                }
                $this.trigger('change');
            });

            //$this.trigger('select', $this.val());
        });
    };

    //筛选
    exports.filterList = function (_opts) {
        var opts = {
            autocompleteUrl: '../data/search.data'
        };
        opts = $.extend(opts, _opts);

        require.async(["autocomplete", "libs/angular"], function ($) {

            function toHtml($sce) {
                return function (text) {
                    return $sce.trustAsHtml(text);
                };
            };
            toHtml.$inject = ["$sce"];
            /**
             * 级联下拉
             */
            function relativeSelect($http, $httpParamSerializer, $timeout) {
                return {
                    restrict: 'A',
                    scope: {},
                    require: "?^ngModel",
                    link: function ($scope, $element, $attrs, ngModel) {
                        var _relativeTo = $attrs.relativeTo;
                        var _relativeSelect = $attrs.relativeSelect;
                        var isSelectFirst = angular.isDefined($attrs.selectFirst);
                        var relativeInitload = angular.isDefined($attrs.relativeInitload);

                        $element.on("change", changeHandle);

                        $element.on("update", function (e, _data) {
                            getData(_data);
                        });

                        function changeHandle() {
                            var _data = {};
                            _data[$element[0].name] = $element.val();
                            $(_relativeTo).trigger("update", _data);
                        }

                        function getData(_data) {
                            $http({
                                method: 'POST',
                                url: _relativeSelect,
                                data: _data,
                                transformRequest: function (data) {
                                    return $httpParamSerializer(data);
                                },
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                    'X-Requested-With': 'XMLHttpRequest'
                                }
                            })
                                .success(function (results) {
                                    if (results.code == 200) {
                                        var data = results.data;
                                        var _options = isSelectFirst ? '' : '<option value="">请选择</option>';
                                        var _length = data.length;
                                        var _value = "";
                                        for (var i = 0; i < _length; i++) {
                                            if (data[i].selected || (isSelectFirst && i == 0)) {
                                                _value = data[i].value;
                                            }
                                            _options += '<option ' + (data[i].enabled === 0 ? ' class="text-muted"' : '') + ' value="' + data[i].value + '">' + data[i].text + '</option>';
                                        }
                                        $element.html(_options);
                                        //$element.trigger("change");
                                        $element.val(_value);
                                        ngModel && ngModel.$setViewValue(_value);

                                        changeHandle();
                                    }
                                });
                        }

                        if (relativeInitload) {
                            $timeout(changeHandle);
                        }
                    }
                }
            };
            relativeSelect.$inject = ["$http", "$httpParamSerializer", "$timeout"];
            //
            function filterCtrl($scope, $element, $http, $httpParamSerializer, $timeout) {
                $scope.filterData = {
                    order: 'type'
                };
                $scope.currentPage = 1;
                $scope.totalPage = 0;
                $scope.totalCount = 0;

                $scope.homePage = function () {
                    if ($scope.currentPage == 1) {
                        return;
                    }
                    $scope.currentPage = 1;
                    $scope.isPage = 1;
                    getList();
                };
                $scope.prevPage = function () {
                    if ($scope.currentPage <= 1) {
                        return;
                    }
                    $scope.currentPage--;
                    $scope.isPage = 1;
                    getList();
                };
                $scope.nextPage = function () {
                    if ($scope.currentPage >= $scope.totalPage) {
                        return;
                    }
                    $scope.currentPage++;
                    $scope.isPage = 1;
                    getList();
                };
                $scope.endPage = function () {
                    if ($scope.currentPage == $scope.totalPage) {
                        return;
                    }
                    $scope.currentPage = $scope.totalPage;
                    $scope.isPage = 1;
                    getList();
                };

                var searchData = sessionDo.get('searchData');
                if(searchData != null && searchData != ''){
                    var arr = [];
                    for(var i=0; i<searchData.length; i++){
                        arr.push(searchData[i].split("#")[1]);
                    }
                    console.log(arr);
                    $scope.filterData['search'] = arr; 
                }

                function getList() {

                    $scope.isLoading = true;
                    $http({
                        method: 'POST',
                        url: $scope.filterUrl,
                        data: angular.merge({}, {page: $scope.currentPage, isPage : $scope.isPage}, $scope.filterData),
                        transformRequest: function (data) {
                            return $httpParamSerializer(data);
                        },
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'X-Requested-With': 'XMLHttpRequest'
                        }
                    })
                        .success(function (_data) {


                            console.log('------------->',$scope.filterData);

                            //缓存搜索条件
                            if($scope.filterData.search != undefined && $scope.filterData.search != ''){
                               
                               for(var i=0; i<$scope.filterData.search.length; i++){
                                    var _item = {
                                        type: 'search',
                                        text: $scope.filterData.search[i]
                                    };
                                    filterConditions['search'] = _item;
                                    filterConditions.list.push(_item);
                                    $scope.filterData['search'] = $scope.filterData.search[i];
                                    //存储sessionStorage
                                    sessionDo.set('searchData','search#'+$scope.filterData.search[i]);
                               }
                            }

                            if (_data.code == 200) {
                                $scope.searchList = _data.data;
                                $scope.searchResult = _data.data2;
                                $scope.totalPage = _data.option.totalPage;
                                $scope.totalCount = _data.option.totalCount;
                                $scope.statistic = _data.option.statistic;
                                $scope.officeList = _data.option.statistic.officeList;
                                $timeout(function () {
                                    angular.forEach(_data.data, function (v, k) {
                                        progressChart("progressChart-" + k);
                                        progressChart("progressChart2-" + k);
                                    });
                                    opts.callBack && opts.callBack($scope.filterData);
                                });
                            } else if (_data.code == 0) {
                            	$scope.totalCount = 0;
                            }
                            $scope.isLoading = false;

                            MT.ddMax();

                        })
                        .error(function () {
                            $scope.isLoading = false;
                        })
                }

                $scope.$watch("filterData", function () {
                	$scope.isPage = 0;
                	$scope.currentPage = 1;
                    getList();
                }, true);

                $scope.filterConditions = {list: []};
                var filterConditions = $scope.filterConditions;
                $scope.conditionList = {};

                //将当前路由存放到 sessionDo 里面。如果路由发生变化，就清空 selectData
                var getLocalUrl = function(){
                    console.log(window.location.pathname);
                    var url = session.getItem('pathname');
                    if(url == null){
                        session.setItem('pathname',window.location.pathname);
                    }
                    if(url != window.location.pathname){
                        session.removeItem('selectData');
                        session.removeItem('searchData');
                    }
                    //重新存放pathname
                    session.setItem('pathname',window.location.pathname);
                }();

                //初始化选项
                var setSession = function(){
                    var data = sessionDo.get('selectData');
                    if(data !=null && data != ""){
                        for(var i=0; i<data.length; i++){
                            var arr = data[i].split("#");
                            var _name = arr[0];
                            filterConditions[_name] = arr[0];
                            filterConditions.list.push({
                                type: arr[0],
                                text: arr[1]
                            })
                            $scope.filterData[_name] = arr[1];
                        }
                    }
                }();

                $scope.selectCondition = function (_name, _text) {
                    var _item = {
                        type: _name,
                        text: _text
                    };
                    filterConditions[_name] = _item;
                    filterConditions.list.push(_item);
                    $scope.filterData[_name] = _text;

                    //存储sessionStorage
                    sessionDo.set('selectData',_name+"#"+_text);
                    

                };
                $scope.deleteCondition = function (_this) {
                    var _index = filterConditions.list.indexOf(_this);
                    filterConditions.list.splice(_index, 1);
                    delete filterConditions[_this.type];
                    delete $scope.filterData[_this.type];

                    //删除sessionStorage
                    sessionDo.del('selectData',_this.type+"#"+_this.text);
                    sessionDo.del('searchData',"search#"+_this.text);
                    
                };

                $scope.$watch("type", function (_value) {
                    if (_value == "content") {
                        $("#autocomplete").autocomplete(opts.autocompleteUrl, {
                            mustMatch: true,
                            selectFirst: false
                        }).result(function (e, text, data) {
                            $scope.searchType = data.type;
                        });
                    } else {
                        $("#autocomplete").unautocomplete();
                    }
                });

                $element.show();
            };
            filterCtrl.$inject = ["$scope", "$element", "$http", "$httpParamSerializer", "$timeout"];

            angular.module("Filter", [])
                .filter("toHtml", toHtml)
                .directive("relativeSelect", relativeSelect)
                .controller("filterCtrl", filterCtrl);
            angular.bootstrap(document, ['Filter']);
        })
    };

    //列表
    exports.list = function (_opts) {
        var opts = {};
        opts = $.extend(opts, _opts);

        require.async("libs/angular", function () {
            function tableList($scope, $element, $attrs, $http, $httpParamSerializer) {
                $scope.currentPage = 1;
                $scope.totalPage = 0;

                $scope.listData = $attrs.listData;
                $scope.theadList = [];
                $scope.tbodyList = [];

                $scope.homePage = function () {
                    if ($scope.currentPage == 1) {
                        return;
                    }
                    $scope.currentPage = 1;
                    getListData();
                };
                $scope.prevPage = function () {
                    if ($scope.currentPage <= 1) {
                        return;
                    }
                    $scope.currentPage--;
                    getListData();
                };
                $scope.nextPage = function () {
                    if ($scope.currentPage >= $scope.totalPage) {
                        return;
                    }
                    $scope.currentPage++;
                    getListData();
                };
                $scope.endPage = function () {
                    if ($scope.currentPage == $scope.totalPage) {
                        return;
                    }
                    $scope.currentPage = $scope.totalPage;
                    getListData();
                };

                function getListData(_callback) {
                    $scope.isLoading = true;

                    $http({
                        method: 'POST',
                        url: opts.listUrl,
                        data: angular.merge(opts.paramsData || {}, {page: $scope.currentPage}),
                        transformRequest: function (data) {
                            return $httpParamSerializer(data);
                        },
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'X-Requested-With': 'XMLHttpRequest'
                        }
                    })
                        .success(function (data) {
                            if (data.code == 200) {
                                if (data.option) {
                                    $scope.totalPage = data.option.totalPage;
                                }

                                if (data.data && data.data.length > 0) {
                                    $scope.tbodyList = data.data;
                                } else {
                                    $scope.isFinished = true;
                                }
                                $scope.loadFailMsg = data.message;
                            } else {
                                $scope.isFinished = true;
                                $scope.loadFailMsg = data.message;
                            }
                            $scope.isLoading = false;
                            _callback && _callback();
                        })
                        .error(function () {
                            $scope.isLoading = false;
                            $scope.loadFailMsg = '加载出错';
                            _callback && _callback();
                        });
                };

                getListData();

                $element.on("reload", function (_params) {
                    $scope.currentPage = 1;
                    opts.paramsData = _params;
                })
            };
            tableList.$inject = ["$scope", "$element", "$attrs", "$http", "$httpParamSerializer"];

            angular.module("TableList", [])
                .controller("tableList", tableList);
            angular.bootstrap(document.getElementById("listApp"), ['TableList']);
        })
    };

    //首页地图
    exports.homeMap = function (_opts) {
        var opts = {};
        $.extend(opts, _opts);
        var $docCount = $("#docCount");

        (function () {
            var _self = arguments.callee;
            if (!opts.docCountUrl) {
                return;
            }
            $.post(opts.docCountUrl, function (_data) {
                if (_data.code == 200) {
                    $docCount.text(_data.docCount);
                }
            }, 'json').complete(function () {
                setTimeout(_self, 10000);
            })
        })();

        require.async("libs/echarts", function () {
            require.async("libs/echarts-china", function () {
                var myChart = echarts.init(document.getElementById('mapBox'));
                var option = {
                    title: {
                        x: 'center',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            return params.name + ' : ' + (params.value || 0) + '<br/>排名 : ' + (params.data.sort || 0);
                        }
                    },
                    dataRange: {
                        y: 'bottom',
                        x: 'right',
                        calculable: true,
                        color: ['#50a3ba', '#013451'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    series: [
                        {
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            data: [],
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            itemStyle: {
                                normal: {
                                    areaColor: '#013451',
                                    borderColor: '#111'
                                },
                                emphasis: {
                                    areaColor: '#50a3ba'
                                }
                            }
                        }
                    ]
                };

                if (opts.dialogUrl) {
                    myChart.on("click", function (_data) {
                        D.dialog({
                            iframeSrc: opts.dialogUrl + "?" + $.param(_data.data)
                        })
                    });
                }

                $.post(opts.mapDataUrl, opts.paramsData, function (_data) {
                    if (_data.code == 200) {
                        option.series[0].data = _data.data;
                        myChart.setOption(option);
                    }
                }, 'json');
            });
        })
    };

    //首页地图2
    exports.homeMap2 = function (_opts) {
        var opts = {};
        $.extend(opts, _opts);
        var $docCount = $("#docCount");

        var geoCoordMap = {
            "海门": [121.15, 31.89],
            "鄂尔多斯": [109.781327, 39.608266],
            "招远": [120.38, 37.35],
            "舟山": [122.207216, 29.985295],
            "齐齐哈尔": [123.97, 47.33],
            "盐城": [120.13, 33.38],
            "赤峰": [118.87, 42.28],
            "青岛": [120.33, 36.07],
            "乳山": [121.52, 36.89],
            "金昌": [102.188043, 38.520089],
            "泉州": [118.58, 24.93],
            "莱西": [120.53, 36.86],
            "日照": [119.46, 35.42],
            "胶南": [119.97, 35.88],
            "南通": [121.05, 32.08],
            "拉萨": [91.11, 29.97],
            "云浮": [112.02, 22.93],
            "梅州": [116.1, 24.55],
            "文登": [122.05, 37.2],
            "上海": [121.48, 31.22],
            "攀枝花": [101.718637, 26.582347],
            "威海": [122.1, 37.5],
            "承德": [117.93, 40.97],
            "厦门": [118.1, 24.46],
            "汕尾": [115.375279, 22.786211],
            "潮州": [116.63, 23.68],
            "丹东": [124.37, 40.13],
            "太仓": [121.1, 31.45],
            "曲靖": [103.79, 25.51],
            "烟台": [121.39, 37.52],
            "福州": [119.3, 26.08],
            "瓦房店": [121.979603, 39.627114],
            "即墨": [120.45, 36.38],
            "抚顺": [123.97, 41.97],
            "玉溪": [102.52, 24.35],
            "张家口": [114.87, 40.82],
            "阳泉": [113.57, 37.85],
            "莱州": [119.942327, 37.177017],
            "湖州": [120.1, 30.86],
            "汕头": [116.69, 23.39],
            "昆山": [120.95, 31.39],
            "宁波": [121.56, 29.86],
            "湛江": [110.359377, 21.270708],
            "揭阳": [116.35, 23.55],
            "荣成": [122.41, 37.16],
            "连云港": [119.16, 34.59],
            "葫芦岛": [120.836932, 40.711052],
            "常熟": [120.74, 31.64],
            "东莞": [113.75, 23.04],
            "河源": [114.68, 23.73],
            "淮安": [119.15, 33.5],
            "泰州": [119.9, 32.49],
            "南宁": [108.33, 22.84],
            "营口": [122.18, 40.65],
            "惠州": [114.4, 23.09],
            "江阴": [120.26, 31.91],
            "蓬莱": [120.75, 37.8],
            "韶关": [113.62, 24.84],
            "嘉峪关": [98.289152, 39.77313],
            "广州": [113.23, 23.16],
            "延安": [109.47, 36.6],
            "太原": [112.53, 37.87],
            "清远": [113.01, 23.7],
            "中山": [113.38, 22.52],
            "昆明": [102.73, 25.04],
            "寿光": [118.73, 36.86],
            "盘锦": [122.070714, 41.119997],
            "长治": [113.08, 36.18],
            "深圳": [114.07, 22.62],
            "珠海": [113.52, 22.3],
            "宿迁": [118.3, 33.96],
            "咸阳": [108.72, 34.36],
            "铜川": [109.11, 35.09],
            "平度": [119.97, 36.77],
            "佛山": [113.11, 23.05],
            "海口": [110.35, 20.02],
            "江门": [113.06, 22.61],
            "章丘": [117.53, 36.72],
            "肇庆": [112.44, 23.05],
            "大连": [121.62, 38.92],
            "临汾": [111.5, 36.08],
            "吴江": [120.63, 31.16],
            "石嘴山": [106.39, 39.04],
            "沈阳": [123.38, 41.8],
            "苏州": [120.62, 31.32],
            "茂名": [110.88, 21.68],
            "嘉兴": [120.76, 30.77],
            "长春": [125.35, 43.88],
            "胶州": [120.03336, 36.264622],
            "银川": [106.27, 38.47],
            "张家港": [120.555821, 31.875428],
            "三门峡": [111.19, 34.76],
            "锦州": [121.15, 41.13],
            "南昌": [115.89, 28.68],
            "柳州": [109.4, 24.33],
            "三亚": [109.511909, 18.252847],
            "自贡": [104.778442, 29.33903],
            "吉林": [126.57, 43.87],
            "阳江": [111.95, 21.85],
            "泸州": [105.39, 28.91],
            "西宁": [101.74, 36.56],
            "宜宾": [104.56, 29.77],
            "呼和浩特": [111.65, 40.82],
            "成都": [104.06, 30.67],
            "大同": [113.3, 40.12],
            "镇江": [119.44, 32.2],
            "桂林": [110.28, 25.29],
            "张家界": [110.479191, 29.117096],
            "宜兴": [119.82, 31.36],
            "北海": [109.12, 21.49],
            "西安": [108.95, 34.27],
            "金坛": [119.56, 31.74],
            "东营": [118.49, 37.46],
            "牡丹江": [129.58, 44.6],
            "遵义": [106.9, 27.7],
            "绍兴": [120.58, 30.01],
            "扬州": [119.42, 32.39],
            "常州": [119.95, 31.79],
            "潍坊": [119.1, 36.62],
            "重庆": [106.54, 29.59],
            "台州": [121.420757, 28.656386],
            "南京": [118.78, 32.04],
            "滨州": [118.03, 37.36],
            "贵阳": [106.71, 26.57],
            "无锡": [120.29, 31.59],
            "本溪": [123.73, 41.3],
            "克拉玛依": [84.77, 45.59],
            "渭南": [109.5, 34.52],
            "马鞍山": [118.48, 31.56],
            "宝鸡": [107.15, 34.38],
            "焦作": [113.21, 35.24],
            "句容": [119.16, 31.95],
            "北京": [116.46, 39.92],
            "徐州": [117.2, 34.26],
            "衡水": [115.72, 37.72],
            "包头": [110, 40.58],
            "绵阳": [104.73, 31.48],
            "乌鲁木齐": [87.68, 43.77],
            "枣庄": [117.57, 34.86],
            "杭州": [120.19, 30.26],
            "淄博": [118.05, 36.78],
            "鞍山": [122.85, 41.12],
            "溧阳": [119.48, 31.43],
            "库尔勒": [86.06, 41.68],
            "安阳": [114.35, 36.1],
            "开封": [114.35, 34.79],
            "济南": [117, 36.65],
            "德阳": [104.37, 31.13],
            "温州": [120.65, 28.01],
            "九江": [115.97, 29.71],
            "邯郸": [114.47, 36.6],
            "临安": [119.72, 30.23],
            "兰州": [103.73, 36.03],
            "沧州": [116.83, 38.33],
            "临沂": [118.35, 35.05],
            "南充": [106.110698, 30.837793],
            "天津": [117.2, 39.13],
            "富阳": [119.95, 30.07],
            "泰安": [117.13, 36.18],
            "诸暨": [120.23, 29.71],
            "郑州": [113.65, 34.76],
            "哈尔滨": [126.63, 45.75],
            "聊城": [115.97, 36.45],
            "芜湖": [118.38, 31.33],
            "唐山": [118.02, 39.63],
            "平顶山": [113.29, 33.75],
            "邢台": [114.48, 37.05],
            "德州": [116.29, 37.45],
            "济宁": [116.59, 35.38],
            "荆州": [112.239741, 30.335165],
            "宜昌": [111.3, 30.7],
            "义乌": [120.06, 29.32],
            "丽水": [119.92, 28.45],
            "洛阳": [112.44, 34.7],
            "秦皇岛": [119.57, 39.95],
            "株洲": [113.16, 27.83],
            "石家庄": [114.48, 38.03],
            "莱芜": [117.67, 36.19],
            "常德": [111.69, 29.05],
            "保定": [115.48, 38.85],
            "湘潭": [112.91, 27.87],
            "金华": [119.64, 29.12],
            "岳阳": [113.09, 29.37],
            "长沙": [113, 28.21],
            "衢州": [118.88, 28.97],
            "廊坊": [116.7, 39.53],
            "菏泽": [115.480656, 35.23375],
            "合肥": [117.27, 31.86],
            "武汉": [114.31, 30.52],
            "大庆": [125.03, 46.58]
        };

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };


        (function () {
            var _self = arguments.callee;
            if (!opts.docCountUrl) {
                return;
            }
            $.post(opts.docCountUrl, function (_data) {
                if (_data.code == 200) {
                    $docCount.text(_data.docCount);
                }
            }, 'json').complete(function () {
                setTimeout(_self, 10000);
            })
        })();

        require.async("libs/echarts", function () {
            require.async("libs/echarts-china", function () {
                var myChart = echarts.init(document.getElementById('mapBox'));
                var option = {
                    title: {
                        x: 'center',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            return params.name + ' : ' + (params.value[2] || 0);
                        }
                    },
                    dataRange: {
                        y: 'bottom',
                        x: 'right',
                        calculable: true,
                        color: ['rgba(255, 255, 255, 0.8)', 'rgba(14, 241, 242, 0.8)', 'rgba(37, 140, 249, 0.8)'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    geo: {
                        map: 'china',
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: 'none',
                                borderColor: 'rgba(100,149,237,1)'
                            },
                            emphasis: {
                                areaColor: 'none' //鼠标放上去的效果
                            }
                        }
                    },
                    series: [
                        {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: [],
                            symbolSize: function (val) {
                                return val[2] / 10;
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            symbol:'circle',
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            itemStyle: {
                                normal: {
                                    shadowBlur: 10,
                                    shadowColor: 'rgba(14, 241, 242, 0.8)'
                                },
                                emphasis: {
                                    borderColor: '#fff',
                                    borderWidth: 1
                                }
                            }
                        }
                    ]
                };

                if (opts.dialogUrl) {
                    myChart.on("click", function (_data) {
                        D.dialog({
                            iframeSrc: opts.dialogUrl + "?" + $.param(_data.data)
                        })
                    });
                }

                $.post(opts.mapDataUrl, opts.paramsData, function (_data) {
                    if (_data.code == 200) {
                        option.series[0].data = convertData(_data.data);
                        myChart.setOption(option);
                    }
                }, 'json');
            });
        })
    };

    //图表
    exports.chart = function (_opts) {
        var opts = {};
        $.extend(opts, _opts);

        require.async("libs/echarts", function () {
            switch (opts.type) {
                case "bar":
                    var myChart = echarts.init(document.getElementById(opts.ID));
                    var option = {
                        title: {},
                        tooltip: {
                            trigger: 'item',
                            formatter: "{b}: {c}"
                        },
                        grid: {
                            top: "1%",
                            left: 0,
                            right: "3%",
                            bottom: "3%",
                            containLabel: true
                        },
                        xAxis: {
                            type: 'value',
                            splitLine: {
                                lineStyle: {
                                    color: 'rgba(204, 204, 204, 0.2)'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#ccc'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#ccc'
                                }
                            }
                        },
                        yAxis: {
                            type: 'category',
                            splitLine: {show: false},
                            data: [],
                            axisLine: {
                                lineStyle: {
                                    color: '#ccc'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#ccc'
                                }
                            }
                        },
                        series: [
                            {
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: '#25a9ee',
                                        borderColor: '#111'
                                    },
                                    emphasis: {
                                        color: '#ff6321'
                                    }
                                },
                                data: []
                            }
                        ]
                    };

                    if (opts.dialogUrl) {
                        myChart.on("click", function (_data) {
                            D.dialog({
                                iframeSrc: opts.dialogUrl + "?" + $.param(_data.data)
                            })
                        });
                    }

                    $.post(opts.dataUrl, opts.paramsData, function (_data) {
                        if (_data.code == 200) {
                            option.yAxis.data = _data.name;
                            option.series[0].data = _data.data;
                            myChart.setOption(option);
                        }
                    }, 'json');
                    myChart.setOption(option);
                    break;
                case "bar2":
                    var myChart = echarts.init(document.getElementById(opts.ID));
                    var option = {
                        title: {
                            text: opts.title,
                            top: "20px",
                            x: "left",
                            textStyle: {
                                color: '#FFF',
                                fontSize: 15,
                                fontWeight: 400
                            }
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: (opts.xname || "") + " {b} " + (opts.yname || "") + ": {c}"
                        },
                        grid: {
                            top: "80px",
                            left: "3%",
                            right: "10%",
                            bottom: "5%",
                            containLabel: true
                        },
                        yAxis: {
                            name: opts.yname,
                            type: 'value',
                            splitLine: {
                                lineStyle: {
                                    color: 'rgba(204, 204, 204, 0.2)'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#ccc'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#ccc'
                                }
                            }
                        },
                        xAxis: {
                            name: opts.xname,
                            type: 'category',
                            splitLine: {show: false},
                            data: [],
                            axisLine: {
                                lineStyle: {
                                    color: '#ccc'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#ccc'
                                }
                            }
                        },
                        series: [
                            {
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: '#25a9ee',
                                        borderColor: '#111'
                                    },
                                    emphasis: {
                                        color: '#ff6321'
                                    }
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'top'
                                    }
                                },
                                data: []
                            }
                        ]
                    };

                    if (opts.dialogUrl) {
                        myChart.on("click", function (_data) {
                            D.dialog({
                                iframeSrc: opts.dialogUrl + "?" + $.param(_data.data)
                            })
                        });
                    }

                    $.post(opts.dataUrl, opts.paramsData, function (_data) {
                        if (_data.code == 200) {
                            option.xAxis.data = _data.name;
                            option.series[0].data = _data.data;
                            myChart.setOption(option);
                        }
                    }, 'json');
                    myChart.setOption(option);
                    break;
                case "bar3":
                    var myChart = echarts.init(document.getElementById(opts.ID));
                    var option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br>" + (opts.xname || "") + " {b} " + (opts.yname || "") + ": {c}"
                        },
                        legend: {
                            x: 10,
                            y: 10,
                            data: [],
                            textStyle: {
                                color: '#FFF'
                            }
                        },
                        grid: {
                            top: 60,
                            left: "3%",
                            right: "3%",
                            bottom: "5%",
                            containLabel: true
                        },
                        yAxis: {
                            name: opts.yname,
                            type: 'value',
                            splitLine: {
                                lineStyle: {
                                    color: 'rgba(204, 204, 204, 0.2)'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#ccc'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#ccc'
                                }
                            }
                        },
                        xAxis: {
                            name: opts.xname,
                            type: 'category',
                            splitLine: {show: false},
                            data: [],
                            axisLine: {
                                lineStyle: {
                                    color: '#ccc'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#ccc'
                                }
                            }
                        },
                        series: [
                            {
                                type: 'bar',
                                name: "法官A",
                                itemStyle: {
                                    normal: {
                                        color: '#20eac7',
                                        borderColor: '#111'
                                    },
                                    emphasis: {
                                        color: '#ff6321'
                                    }
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'top'
                                    }
                                },
                                data: []
                            },
                            {
                                type: 'bar',
                                name: "",
                                itemStyle: {
                                    normal: {
                                        color: '#25a9ee',
                                        borderColor: '#111'
                                    },
                                    emphasis: {
                                        color: '#ff6321'
                                    }
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'top'
                                    }
                                },
                                data: []
                            }
                        ]
                    };

                    if (opts.dialogUrl) {
                        myChart.on("click", function (_data) {
                            D.dialog({
                                iframeSrc: opts.dialogUrl + "?" + $.param(_data.data)
                            })
                        });
                    }

                    $.post(opts.dataUrl, opts.paramsData, function (_data) {
                        if (_data.code == 200) {
                            option.xAxis.data = _data.name;

                            $.each(_data.data, function (i, v) {
                                option.legend.data.push(v.name);
                                option.series[i].data = _data.data[i].data;
                                option.series[i].name = _data.data[i].name;
                            });

                            myChart.setOption(option);
                        }
                    }, 'json');
                    break;
                case "pie":
                    var myChart = echarts.init(document.getElementById(opts.ID));
                    var option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: "{b}: {c} ({d}%)"
                        },
                        legend: {
                            x: 'left',
                            orient: 'vertical',
                            data: [],
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: ['60%', '80%'],
                                avoidLabelOverlap: false,
                                label: {
                                    normal: {
                                        show: false,
                                        position: 'center'
                                    },
                                    emphasis: {
                                        show: true,
                                        textStyle: {
                                            fontSize: '30',
                                            fontWeight: 'bold'
                                        }
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: false
                                    }
                                },
                                data: []
                            }
                        ]
                    };

                    if (opts.dialogUrl) {
                        myChart.on("click", function (_data) {
                            D.dialog({
                                iframeSrc: opts.dialogUrl + "?" + $.param(_data.data)
                            })
                        });
                    }

                    $.post(opts.dataUrl, opts.paramsData, function (_data) {
                        if (_data.code == 200) {
                            option.legend.data = _data.name;
                            option.series[0].data = _data.data;
                            myChart.setOption(option);
                        }
                    }, 'json');
                    myChart.setOption(option);
                    break;
            }
        })
    };

    //图表进度
    var progressChart = exports.progressChart = function (_id) {
        var $this = $("#" + _id);
        if (!$this.length) {
            return;
        }
        var opts = {
            ID: _id,
            name: $this.data("name"),
            value: parseInt($this.attr("data-value")),
            size: $this.data("size") || 24,
            color: $this.data("color")
        };

        require.async("libs/echarts", function () {
            var _progress = 100 - opts.value;
            var myChart = echarts.init(document.getElementById(opts.ID));
            var option = {
                title: {
                    text: opts.name ? opts.name + "\n" + opts.value + "%" : opts.value + "%",
                    x: "center",
                    y: "center",
                    textStyle: {
                        color: "#CCC",
                        fontSize: opts.size
                    }
                },
                series: [
                    {
                        type: 'pie',
                        radius: ['60%', '80%'],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                            value: opts.value,
                            itemStyle: {
                                normal: {
                                    color: opts.color
                                }
                            }
                        }, {
                            value: _progress,
                            itemStyle: {
                                normal: {
                                    color: "#2a4d65"
                                }
                            }
                        }]
                    }
                ]
            };

            if (opts.dialogUrl) {
                myChart.on("click", function (_data) {
                    D.dialog({
                        iframeSrc: opts.dialogUrl + "?" + $.param(_data.data)
                    })
                });
            }

            myChart.setOption(option);
        })
    };

    //图表柱状图
    exports.barChart = function (_id) {
        var $this = $("#" + _id);
        var opts = {
            ID: _id,
            name: $this.attr("data-name").split(","),
            value: $this.attr("data-value").split(","),
            color: $this.data("color")
        };

        require.async("libs/echarts", function () {
            var myChart = echarts.init(document.getElementById(opts.ID));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c}"
                },
                grid: {
                    top: "30px",
                    left: '5%',
                    right: '5%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis: {
                    type: 'value',
                    splitLine: {show: false},
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                },
                xAxis: {
                    type: 'category',
                    data: opts.name,
                    splitLine: {show: false},
                    axisLabel: {
                        textStyle: {
                            color: '#ccc'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                },
                series: [
                    {
                        type: 'bar',
                        data: opts.value,
                        itemStyle: {
                            normal: {
                                color: opts.color
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'insideBottom'
                            }
                        }
                    }
                ]
            };
            if (opts.dialogUrl) {
                myChart.on("click", function (_data) {
                    D.dialog({
                        iframeSrc: opts.dialogUrl + "?" + $.param(_data.data)
                    })
                });
            }
            myChart.setOption(option);
        })
    };

    //单个图表柱状图
    exports.barChart2 = function (_id) {
        var $this = $("#" + _id);
        var opts = {
            ID: _id,
            name: $this.attr("data-name").split(","),
            value: $this.attr("data-value").split(","),
            color: $this.data("color")
        };

        require.async("libs/echarts", function () {
            var myChart = echarts.init(document.getElementById(opts.ID));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c}"
                },
                grid: {
                    top: "30px",
                    left: 0,
                    right: 0,
                    bottom: '3%',
                    containLabel: true
                },
                yAxis: {
                    type: 'value',
                    splitLine: {show: false},
                    max: 100,
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                },
                xAxis: {
                    type: 'category',
                    data: opts.name,
                    splitLine: {show: false},
                    axisLabel: {
                        textStyle: {
                            color: '#ccc'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: 40,
                        data: opts.value,
                        itemStyle: {
                            normal: {
                                color: opts.color
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'insideTop',
                                formatter: "{c} %"
                            }
                        }
                    }
                ]
            };
            if (opts.dialogUrl) {
                myChart.on("click", function (_data) {
                    D.dialog({
                        iframeSrc: opts.dialogUrl + "?" + $.param(_data.data)
                    })
                });
            }
            myChart.setOption(option);
        })
    };

    //关系图
    exports.relativeChart = function (_opts) {
        var opts = {};
        $.extend(opts, _opts);

        require.async("libs/d3", function () {
            var $this = $("#" + opts.ID).css("opacity", 0);

            $.post(opts.dataUrl, opts.paramsData, function (_data) {

                if (_data.code != 200) {
                    return;
                }
                
                //图数据
                var graph = {
                    nodes: _data.data.nodes,
                    links: [],
                    fnodes:{},
                    zero: [],
                    one : [],
                    two : []
                };

                //点配置信息
                var conf = {
                    zero : {
                        color : '#c32cda'
                    },
                    one : {
                        color: '#52b0ff'
                    },
                    two:{
                        color : '#8C73C7'
                    },
                    setCss : function(obj,confs){
                        if(obj.count >= 0 && obj.count <= 5){
                            obj['r'] = 5
                        }else if(obj.count > 5 && obj.count <= 30){
                            obj['r'] = 15
                        }else if(obj.count > 30){
                            obj['r'] = 20
                        }else{
                            obj['r'] = 10
                        }
                        if(obj.pid == 1){
                            if(obj.count >= 0 && obj.count <= 5){
                                obj['color'] = '#52B0FF'
                            }else if(obj.count > 5 && obj.count <= 30){
                                obj['color'] = '#29BB85'
                            }else{
                                obj['color'] = '#E24B1D'
                            }
                        }else if(obj.pid == 0){
                            obj['color'] = confs.color;
                            obj['r'] = 30;
                        }else{
                            obj['color'] = confs.color;
                        }
                    }
                };

                //尺寸
                var width = $this.width();
                var height = $this.height();

                //设置样式
                var jiaodu1 = 0;
                var R1,R2;//R1 半径
                var v1; //1度的每个相隔角度
                var topp = 20 ; //顶部偏移量
                //设置接点样式，设置节点位置
                var setStyle = function(obj){
                    var x,y;
                    var x0 = width/2,
                        y0 = (height-topp)/2;
                    if(obj.mark == 0){
                        //中心点
                        conf.setCss(obj,conf.zero);
                        x = x0 ;
                        y = y0 ;
                    }else if(obj.mark == 1){
                        conf.setCss(obj,conf.one);
                        x = x0 - R1*Math.cos(v1*jiaodu1);
                        y = y0 + R1*Math.sin(v1*jiaodu1);
                        jiaodu1++;
                    }else{
                        conf.setCss(obj,conf.two);
                        x = 0;
                        y = 0;
                    }
                    obj['x'] = x.toFixed(1);
                    obj['y'] = y.toFixed(1);
                }

                //格式化数据
                var formatData = function(){
                    for(var i=0,len=graph.nodes.length; i<len; i++){
                        var _this = graph.nodes[i];
                        //设置fnodes
                        if(!graph.fnodes[_this.id]){
                            graph.fnodes[_this.id] = _this;
                        }
                        //设置zero, one, two
                        if(_this.pid != 0){
                            if(_this.pid.constructor == Array){//2度节点
                                _this['mark'] = '2';
                                graph.two.push(_this);
                            }else{ //一度节点
                                _this['mark'] = '1';
                                //console.log(_this);
                                graph.one.push(_this);
                            }
                        }else{//中心点
                            _this['mark'] = '0';
                            graph.zero.push(_this);
                        }
                    }
                }();

                //设置R1,R2,V1参数信息 - 前提是获取到了graph.one
                var setCircle = function(){
                    if(graph.one.length <= 1){
                        R1 = 100;
                        v1 = Math.PI/2;
                    }else{
                        v1 = 2*Math.PI/graph.one.length;
                        var x = 30; //两个点相隔40个像素；
                        R1 = x/Math.sin(v1)*2 < 100 ? 100 : x/Math.sin(v1)*2;
                        R1 = R1.toFixed(1);
                    }

                    //自动适应
                    if(R1 >= height){
                        R1 = height/2 - 200;
                        x = 2*Math.PI*R1/graph.one.length;
                    }

                    R2 = parseInt(R1, 10)+100;
                }();

                //数组排序
                var sortNodes = function(){
                    graph.nodes = [];
                    var pushAndSetStyle = function(obj){
                        graph.nodes.push(obj);
                        setStyle(obj);
                    };
                    //0度
                    pushAndSetStyle(graph.fnodes[1]);

                    //根据2度，获取1度关联。这里做了一个排序，根据2度里面的pid数组，把临近的排到一起
                    for(var i=0; i<graph.two.length; i++){
                        pushAndSetStyle(graph.two[i]);
                        var pid = graph.two[i].pid; //返回的数组

                        //这里设置1度的线，如果2度里面和1度无关联节点，就会出错。
                        for(var j=0; j<pid.length; j++){
                            pushAndSetStyle(graph.fnodes[pid[j]]);
                        }
                    }

                    //将1度只和0度关联的点绘制出来
                    for(var i=0; i<graph.one.length; i++){
                        if(graph.one[i]['x'] == undefined){
                            pushAndSetStyle(graph.one[i]);
                        }
                    }

                }();

                //设置2度的点
                var setTwoPoint = function(obj){
                        //排序，获取最大值和最小值。然后获取他们的坐标。求出最佳坐标
                        var max = Math.max.apply(null, obj.pid),
                            min = Math.min.apply(null, obj.pid);

                        var x0 = width/2,
                            y0 = -(height-topp)/2;
                        //获取坐标
                        var x2 = graph.fnodes[max].x,
                            y2 = -graph.fnodes[max].y; //切换坐标轴
                        var x1 = graph.fnodes[min].x,
                            y1 = -graph.fnodes[min].y; //切换坐标轴

                        //获取最佳点
                        var h = Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1))/2;
                        //var w = R1*Math.cos(Math.asin(h/R1));
                        if(h == 0 || isNaN(h)){ //如果只有一个点
                            var x = x0 - 2*R1;
                            var y = y0 ;
                        }else{
                            //设 y = k1x + b1
                            var k1 = (y1 - y2)/(x1 - x2);
                            var b1 = y2-k1*x2;

                            //那么轴3就为,过圆点 y = k3*x +b3; 
                            if(k1 == 0){
                                var k3 = 0;
                                var b3 = 0;
                            }else{
                                var k3 = -1/k1;
                                var b3 = y0 - k3*x0;
                            }

                            console.log('轴3：','y = '+k3+'x + '+b3);

                            //获取交点p
                            var xp = (b3-b1)/(k1-k3);
                            var yp = k1*xp + b1;

                            //解公式 a*x^2 + b*x + c = 0; 求解 x , 如果点在圆点左边，x0-- 开始，如果圆点在右边，x0++ 开始
                            var a = 1+k3*k3,
                                b = 2*k3*(b3 - y0) - 2*x0,
                                c = x0*x0 + (b3-y0)*(b3-y0) - R2*R2;
                            var x3 = 0;

                            if(x0 > xp){ //左边
                                for(var i = x0; i>= (x0 - R2); i--){
                                    //console.log("====>",a*i*i + b*i + c);
                                    if( a*i*i + b*i + c > 0){
                                        x3 = i;
                                        break;
                                    }
                                }
                            }else{ //右边
                                for(var i = x0; i<= (R2+x0); i++){
                                    if( a*i*i + b*i + c  > 0){
                                        x3 = i;
                                        break;
                                    }
                                }
                            }

                            var x = parseInt(x3,10);
                            var y = parseInt(k3*x+b3,10);
                        }

                        obj['x'] = x.toFixed(1);
                        obj['y'] = -y.toFixed(1); //归位
                };
                for(var i=0; i<graph.two.length; i++){
                    setTwoPoint(graph.two[i]);
                }

                //设置links
                var setLinks = function(){
                    for(var i=0; i<graph.one.length; i++){
                        graph.links.push({
                            id1:graph.one[i].id,
                            x1:graph.one[i].x,
                            y1:graph.one[i].y,
                            id2:1,
                            x2:width/2,
                            y2:(height-topp)/2
                        });  
                    }
                    for(var i=0; i<graph.two.length; i++){
                        var pid = graph.two[i].pid;
                        for(var j=0; j < pid.length; j++){
                            graph.links.push({
                                id1:graph.two[i].id,
                                x1:graph.two[i].x,
                                y1:graph.two[i].y,  
                                id2:graph.fnodes[pid[j]].id,
                                x2:graph.fnodes[pid[j]].x,
                                y2:graph.fnodes[pid[j]].y
                            });
                        }
                    }
                }();

                // console.log(graph.nodes);
                // console.log(graph.fnodes);
                // console.log(graph.zero);
                // console.log(graph.one);
                // console.log(graph.two);

                //缩放
                var zoom = d3.behavior.zoom()
                            .scaleExtent([0.5, 5])
                            .on("zoom", zoomed);
                function zoomed() {
                    d3.select(this).attr("transform", 
                        "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
                }

                //拖拽
                var x0,y0,tx,ty,scale;
                var drag = d3.behavior.drag()
                        .on("dragstart", function(){
                            x0 = d3.event.sourceEvent.x;
                            y0 = d3.event.sourceEvent.y;
                            var str = $(this).attr("transform")==undefined?[0,0,1]:$(this).attr("transform").replace(/(translate\(|\)scale\(|\))/g,",").split(",");
                            tx = str[1];
                            ty = str[2];
                            scale = (str[3]==undefined?1:str[3]);
                        })
                        .on("drag", function(){
                            var xm = d3.event.sourceEvent.x-x0;
                            var ym = d3.event.sourceEvent.y-y0;
                            d3.select(this)
                            .attr("transform","translate(" + (xm+parseInt(tx, 10)) + "," + (ym+parseInt(ty, 10)) + ")scale(" + scale + ")");
                        });


                //设置svg宽度和高度
                var svg = d3.select("#" + opts.ID)
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height);

                var g_box = svg.append("g").attr("class","g_box").call(zoom).call(drag);
                var g_lines = g_box.append("g").attr("class","g_links");
                var g_nodes = g_box.append("g").attr("class","g_nodes");
                var g_texts = g_box.append("g").attr("class","g_texts");
                var g_nums = g_box.append("g").attr("class","g_nums");
                var defs = g_box.append("defs");

                //添加文字
                if(graph.one.length >= 150){
                    g_texts.attr("data-mark",'hiddentext');
                }

                g_texts.selectAll("text")
                        .data(graph.nodes)
                        .enter()
                        .append("text")
                        .style("fill", "#fff")
                        .attr("font-size",12)
                        .attr("dx", function(d){
                            var x = d.x - d.name.length*6;
                            return x;
                         })
                        .attr("dy", function(d){
                            var y = parseInt(d.y) + d.r + 15;
                            return y;
                         })
                        .attr("data-id",function(d){
                            return d.id
                         })
                        .attr("data-pid",function(d){
                            return d.pid
                         })
                        .text(function(d){
                            return d.name;
                        });

                //添加数字
                g_nums.selectAll("text")
                        .data(graph.nodes)
                        .enter()
                        .append("text")
                        .style("fill", "#fff")
                        .attr("font-size",12)
                        .attr("dx", function(d){
                            var x = parseInt(d.x) - (d.count+"").length*7/2;
                            return x;
                         })
                        .attr("dy", function(d){
                            var y = parseInt(d.y)+6;
                            return y;
                         })
                        .attr("data-id",function(d){
                            return d.id
                         })
                        .attr("data-pid",function(d){
                            return d.pid
                         })
                        .text(function(d){
                            return d.count<=5?"":d.count;
                        });

                //添加连线
                g_lines.selectAll("line")
                    .data(graph.links)
                    .enter()
                    .append("line")
                    .attr('id1',function(d){
                        return d.id1;
                    })
                    .attr('id2',function(d){
                        return d.id2;
                    })
                    .attr('x1',function(d){
                        return d.x1;
                    })
                    .attr('y1',function(d){
                        return d.y1;
                    })
                    .attr('x2',function(d){
                        return d.x2;
                    })
                    .attr('y2',function(d){
                        return d.y2;
                    })
                    .style("stroke", "rgba(255,255,255,0.2)")
                    .style("stroke-width", 1)

                //添加节点 - 需要对数组的节点进行排序
                g_nodes.selectAll("circle")
                     .data(graph.nodes)
                     .enter()
                     .append("circle")
                     .attr("r",function(d){
                        return d.r
                     })
                     .attr("data-id",function(d){
                        return d.id
                     })
                     .attr("data-pid",function(d){
                        return d.pid
                     })
                     .attr("cx",function(d){
                        return d.x;
                     })
                     .attr("cy",function(d){
                        return d.y;
                     })
                     .style("fill",function(d){
                        if(d.pid == 0){
                            if (d.image) {
                            var _id = "raduisImage_" + i;
                            defs.append("pattern")
                                    .attr("id", _id)
                                    .attr("patternUnits", "objectBoundingBox")
                                    .attr("width", 1)
                                    .attr("height", 1)
                                    .append("image")
                                    .attr("width", 60)
                                    .attr("height", 60)
                                    .attr("xlink:href", '../ui/img/avatar2.png');
                                return "url(#" + _id + ")";
                            }
                        }
                        return d.color
                     })

                setTimeout(function () {
                    $this.css("opacity", 1)
                }, 500);

            }, 'json');
        
        //事件绑定
        $(document).on('mouseover', 'circle', function(e) {
            var $this = $(this);
            var pid = $this.attr('data-pid');
            var id = $this.attr('data-id');
            var arr = pid.split(",");

            $('circle').addClass('hide');
            $('text').addClass('hide');
            $('line').addClass('hide');

            //当前点的显示
            $this.addClass('active');
            $('text[data-id='+id+']').addClass('active');

            //线的显示
            $('line[id1='+id+']').addClass('active');
            $('line[id2='+id+']').addClass('active');

            //二度
            if(arr.length > 1){
                for(var i=0; i<arr.length; i++){
                    $('circle[data-id='+arr[i]+']').addClass('active');
                    $('text[data-id='+arr[i]+']').addClass('active');
                }
            }else{
                //三度，0度
                if(pid == 0){
                    $('circle[data-pid=1]').addClass('active');
                    $('text[data-pid=1]').addClass('active');
                }else if(pid == 1){
                    $('circle[data-pid=0]').addClass('active');
                    $('text[data-pid=0]').addClass('active');

                    //反向设置
                    $('circle[data-pid*='+id+']').addClass('active');
                    $('text[data-pid*='+id+']').addClass('active');
                }
            }
        }).on("mouseout",'circle',function(){
            $('circle').removeClass('active').removeClass('hide');
            $('text').removeClass('active').removeClass('hide');
            $('line').removeClass('active').removeClass('hide');
        });

        $(document).on('mouseover', '.g_nums text', function(e) {
            var id = $(this).attr("data-id");
            $('circle[data-id='+id+']').trigger('mouseover')
        }).on("mouseout",'.g_nums text',function(){
            var id = $(this).attr("data-id");
            $('circle[data-id='+id+']').trigger('mouseout')
        });

        })
    }

    //scrollDo
    exports.scrollDo = function(){
        var $side = $(".page-side"),
            stop = $side.offset().top,
            sWid = $side.width(),
            sHei = $side.height(),
            $tree = $side.find(".doc-tree");

        $tree.css({
            width: sWid,
            height: sHei
        });



        $(window).scroll(function(e){
            var winPos = $(this).scrollTop();
            if(winPos > stop + 10){
                $tree.css({
                    position: 'fixed',
                    top : 10
                })
            }else{
                $tree.css({
                    position: 'relative',
                    top : 0
                })
            }
        });
    }

    exports.judgeLawyerController = function(_opts){
        var opts = {};
        opts = $.extend(opts, _opts);
        require.async("libs/angular", function () {
            function judgeLawyerController($scope){
                $scope.test = 'xxxxx'
            }
        });
    }

    //validform
    exports.validform = function (_myform, _callback) {
        require.async(["libs/validform"], function (V) {
            // var $ = V.$;
            var $myForm = $(_myform);
            var validator = $myForm.validform({
                ignoreHidden: true,
                tiptype: function (msg, o, cssctl) {
                    if (!o.obj.is("form")) {
                        var $tips = o.obj.siblings(".tips");
                        cssctl($tips, o.type);
                        $tips.text(msg);
                    }
                },
                beforeSubmit: function (_curForm) {
                    $.post(_curForm.attr("action"), _curForm.serializeArray(), function (data) {
                        if (data.code == 200) {
                            window.thisDialog && window.thisDialog.close(1);
                            _callback && _callback(data.data);
                        } else {
                            alert(data.message || "很抱歉，失败了！");
                        }
                    }, "json").error(function () {
                        alert("提交失败！");
                    });
                    return false;
                }
            });
            validator.addRule(validatorRule);
        })
    };
});