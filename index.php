<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <?php include 'common/meta.php';?>
</head>
<body>
<?php include 'common/header.php';?>
<!-- Main -->
<div class="wrapper">
    <div class="home-search">
        <div class="search-box">
            <select class="select" id="selectType">
                <option value="content">全文</option>
                <option value="其它">其它</option>
            </select>
            <input type="text" class="ipt" placeholder="输入文书关键词检索" id="autocomplete"/>
            <input type="hidden" id="searchType"/>
            <button type="button" class="btn">
                <i class="iconfont icon-search"></i> 搜索
            </button>
        </div>
    </div>
    <div class="home-wrap">
        <div class="left">
            <div class="dl-box">
                <div class="dt">法官画像</div>
                <div class="dd" style="height: 292px;">
                    <ul class="list">
                        <li class="color-blue">北京市（50000）</li>
                        <li><a href="#">北京市高级人民法院（1242）</a></li>
                        <li><a href="#">北京市中级人民法院（121）</a></li>
                        <li><a href="#">北京市**区法院（12415）</a></li>
                    </ul>
                    <ul class="list">
                        <li class="color-blue">北京市（50000）</li>
                        <li><a href="#">北京市高级人民法院（1242）</a></li>
                        <li><a href="#">北京市中级人民法院（121）</a></li>
                        <li><a href="#">北京市**区法院（12415）</a></li>
                    </ul>
                    <ul class="list">
                        <li class="color-blue">北京市（50000）</li>
                        <li><a href="#">北京市高级人民法院（1242）</a></li>
                        <li><a href="#">北京市中级人民法院（121）</a></li>
                        <li><a href="#">北京市**区法院（12415）</a></li>
                    </ul>
                </div>
            </div>
            <div class="dl-box">
                <div class="dt">律师画像</div>
                <div class="dd" style="height: 177px;">
                    <ul class="list">
                        <li><a href="#">民事(50000)</a></li>
                        <li><a href="#">海事海商纠纷（512）</a></li>
                        <li><a href="#">合同、无因管理、不当得利纠纷（232）</a></li>
                        <li><a href="#">婚姻家庭、继承纠纷（124）</a></li>
                        <li><a href="#">劳动争议、人事争议（5322）</a></li>
                        <li><a href="#">刑事（5324）</a></li>
                        <li><a href="#">行政（21412）</a></li>
                    </ul>
                </div>
                <div class="dd" style="height: 177px;">
                    <ul class="list">
                        <li><a href="#">四川省(5000)</a></li>
                        <li><a href="#">上海市(5000)</a></li>
                        <li><a href="#">北京市(5000)</a></li>
                        <li><a href="#">湖北省(5000)</a></li>
                        <li><a href="#">湖南省(5000)</a></li>
                        <li><a href="#">江苏省(5000)</a></li>
                        <li><a href="#">浙江省(5000)</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="home-main">
            <div class="title">
                <div class="count" id="docCount">&nbsp;</div>
                <div>文书总量</div>
            </div>
            <div class="map-box" id="mapBox"></div>
        </div>
        <div class="right">
            <div class="dl-box">
                <div class="dt">当事人画像</div>
                <div class="dd">
                    <ul class="list">
                        <li><a href="#">工商信息</a></li>
                        <li><a href="#">诉讼情况</a></li>
                        <li><a href="#">现金流水与公诉结合</a></li>
                        <li><a href="#">法院执行曝光情况</a></li>
                    </ul>
                </div>
            </div>
            <div class="dl-box dl-box-red">
                <div class="dt">预警平台</div>
                <div class="dd">
                    <ul class="list">
                        <li><a href="#">案件突发异常预警</a></li>
                        <li><a href="#">审判尺度异常预警</a></li>
                    </ul>
                </div>
            </div>
            <div class="dl-box">
                <a href="#" class="dt">当事人画像</a>
                <a href="#" class="dt">个案预测</a>
                <a href="#" class="dt">律所画像</a>
                <a href="#" class="dt">法院画像</a>
            </div>
        </div>
    </div>
    <?php include 'common/footer.php';?>
</div>
</body>
</html>
