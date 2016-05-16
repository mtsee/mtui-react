/*! DateInput v1.4.2 | haovei@qq.com */
define(function(require) {
    function a(c, d) {
        return "object" != typeof d && (d = {}),
        b.extend(this, {}, a.DEFAULT_OPTS, d),
        this.input = b(c),
        this.bindMethodsToObj("show", "hide", "hideIfClickOutside", "keydownHandler", "selectDate", "setDateRange"),
        this.build(),
        this.selectDate(),
        this.setDateRange(b.extend({}, this.dateRange, {
            start: this.input.data("start") || "",
            end: this.input.data("end") || ""
        })),
        this.hide(),
        this
    }
    var b = require("libs/jquery");
    return a.DEFAULT_OPTS = {
        month_names: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        short_month_names: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        short_day_names: ["日", "一", "二", "三", "四", "五", "六"],
        start_of_week: 0,
        format: "yyyy-MM-dd",
        dateRange: {
            start: "",
            end: ""
        },
        showTime: !1,
        _dateRange: {
            start: 0,
            end: 0
        }
    },
    a.prototype = {
        build: function() {
            var a = b('<p class="month_nav"><span class="button prev" title="按 [PageUp] 上月">&#171;</span> <span class="month_name"></span> <span class="button next" title="按 [PageDown] 下月">&#187;</span></p>');
            this.monthNameSpan = b(".month_name", a),
            b(".prev", a).click(this.bindToObj(function() {
                this.moveMonthBy(-1)
            })),
            b(".next", a).click(this.bindToObj(function() {
                this.moveMonthBy(1)
            }));
            var c = b('<p class="year_nav"><span class="button prev" title="按 [Ctrl+PageUp] 上一年">&#171;</span> <span class="year_name"></span> <span class="button next" title="按 [Ctrl+PageDown] 下一年">&#187;</span></p>');
            this.yearNameSpan = b(".year_name", c),
            b(".prev", c).click(this.bindToObj(function() {
                this.moveMonthBy(-12)
            })),
            b(".next", c).click(this.bindToObj(function() {
                this.moveMonthBy(12)
            }));
            var d = b('<div class="nav"></div>').append(a, c)
              , e = "<table><thead><tr>";
            b(this.adjustDays(this.short_day_names)).each(function() {
                e += "<th>" + this + "</th>"
            }),
            e += "</tr></thead><tbody></tbody></table>";
            var f = b('<div class="time_selector">选择时间：<input type="text" title="鼠标中键滚动调整大小" maxlength="2" />:<input type="text" title="鼠标中键滚动调整大小" maxlength="2"/>:<input type="text" title="鼠标中键滚动调整大小" maxlength="2"/><button>确定</button></div>');
            this.timeSelector = b("input", f),
            this.mouseWheel(this.timeSelector.eq(0), 24),
            this.mouseWheel(this.timeSelector.eq(1), 60),
            this.mouseWheel(this.timeSelector.eq(2), 60),
            this.showTime || f.hide(),
            b("button", f).on("click", this.bindToObj(function() {
                var a = this.parseTime()
                  , b = this.selectedDate;
                b.setTime(b.setHours(a.hour, a.minutes, a.secound)),
                this.changeInput(b)
            })),
            this.dateSelector = this.rootLayers = b('<div class="date_selector"></div>').append(d, e, f).appendTo("body"),
            "undefined" == typeof document.body.style.maxHeight && (this.ieframe = b('<iframe class="date_selector_ieframe" frameborder="0" src="#"></iframe>').insertBefore(this.dateSelector),
            this.rootLayers = this.rootLayers.add(this.ieframe),
            b(".button", d).mouseover(function() {
                b(this).addClass("hover")
            }),
            b(".button", d).mouseout(function() {
                b(this).removeClass("hover")
            })),
            this.tbody = b("tbody", this.dateSelector),
            this.input.change(this.bindToObj(function() {
                this.selectDate()
            })),
            this.selectDate(),
            this.selectTime(this.selectedDate)
        },
        selectMonth: function(a, c) {
            var d = new Date(a.getFullYear(),a.getMonth(),1);
            if (c || !this.currentMonth || this.currentMonth.getFullYear() != d.getFullYear() || this.currentMonth.getMonth() != d.getMonth()) {
                this.currentMonth = d;
                var e = this.rangeStart(a)
                  , f = this.rangeEnd(a)
                  , g = this.daysBetween(e, f)
                  , h = ""
                  , i = 0
                  , j = 0;
                this.dateRange.start && (i = this.stringToDate(this.dateRange.start, "yy-MM-dd 00:00:00").getTime()),
                this.dateRange.end && (j = this.stringToDate(this.dateRange.end, "yy-MM-dd 00:00:00").getTime());
                for (var k = 0; g >= k; k++) {
                    var l = new Date(e.getFullYear(),e.getMonth(),e.getDate() + k,0,0);
                    this.isFirstDayOfWeek(l) && (h += "<tr>"),
                    h += l.getMonth() == a.getMonth() && (!i || l.getTime() >= i) && (!j || l.getTime() <= j) ? '<td class="selectable_day " date="' + this.dateToString(l) + '" >' + l.getDate() + "</td>" : '<td class="unselected_month " date="' + this.dateToString(l) + '">' + l.getDate() + "</td>",
                    this.isLastDayOfWeek(l) && (h += "</tr>")
                }
                this.tbody.empty().append(h),
                this.monthNameSpan.empty().append(this.monthName(a)),
                this.yearNameSpan.empty().append(this.currentMonth.getFullYear()),
                b(".selectable_day", this.tbody).click(this.bindToObj(function(a) {
                    var c = this.parseTime()
                      , d = new Date(b(a.target).attr("date").replace(/-/g, "/") + " " + c.hour + ":" + c.minutes + ":" + c.secound);
                    this.changeInput(d)
                })),
                b("td[date=" + this.dateToString(new Date) + "]", this.tbody).addClass("today"),
                b("td.selectable_day", this.tbody).mouseover(function() {
                    b(this).addClass("hover")
                }),
                b("td.selectable_day", this.tbody).mouseout(function() {
                    b(this).removeClass("hover")
                })
            }
            b(".selected", this.tbody).removeClass("selected"),
            b("td[date=" + this.selectedDateString + "]", this.tbody).addClass("selected")
        },
        selectDate: function(a) {
            "undefined" == typeof a && (a = this.stringToDate(this.input.val() || this.dateFormat(new Date), this.input.attr("date-mask"))),
            a || (a = new Date),
            this.selectedDate = a,
            this.selectedDateString = this.dateToString(this.selectedDate),
            this.selectMonth(this.selectedDate)
        },
        selectTime: function(a) {
            this.timeSelector.eq(0).val(this.pad(a.getHours())),
            this.timeSelector.eq(1).val(this.pad(a.getMinutes())),
            this.timeSelector.eq(2).val(this.pad(a.getSeconds()))
        },
        changeInput: function(a) {
            this.input.val(this.dateFormat(a)).change().blur(),
            this.hide()

            this.input.attr('value',this.dateFormat(a));
        },
        show: function() {
            this.rootLayers.css("display", "block"),
            b([window, document.body]).on("click", this.hideIfClickOutside),
            this.input.off("focus", this.show),
            b(document.body).keydown(this.keydownHandler),
            this.setPosition()
        },
        hide: function() {
            this.rootLayers.css("display", "none"),
            b([window, document.body]).off("click", this.hideIfClickOutside),
            this.input.focus(this.show),
            b(document.body).off("keydown", this.keydownHandler)
        },
        hideIfClickOutside: function(a) {
            a.target == this.input[0] || this.insideSelector(a) || this.hide()
        },
        insideSelector: function(a) {
            var b = this.dateSelector.position();
            b.right = b.left + this.dateSelector.outerWidth(),
            b.bottom = b.top + this.dateSelector.outerHeight();
            var c = a.pageX
              , d = a.pageY;
            return d < b.bottom && d > b.top && c < b.right && c > b.left
        },
        keydownHandler: function(a) {
            switch (a.keyCode) {
            case 9:
            case 27:
                return void this.hide();
            case 13:
                var b = this.parseTime();
                this.changeInput(new Date(this.selectedDateString.replace(/-/g, "/") + " " + b.hour + ":" + b.minutes + ":" + b.secound));
                break;
            case 33:
                this.moveDateMonthBy(a.ctrlKey ? -12 : -1);
                break;
            case 34:
                this.moveDateMonthBy(a.ctrlKey ? 12 : 1);
                break;
            case 38:
                this.moveDateBy(-7);
                break;
            case 40:
                this.moveDateBy(7);
                break;
            case 37:
                this.moveDateBy(-1);
                break;
            case 39:
                this.moveDateBy(1);
                break;
            default:
                return
            }
            a.preventDefault()
        },
        mouseWheel: function(a, b) {
            var c = this
              , d = function(d) {
                var e = -1;
                d = d || window.event,
                d.wheelDelta ? e = 120 == d.wheelDelta ? 1 : -1 : d.detail && (e = 3 == d.detail ? -1 : 1);
                var f = e + parseInt(a.val() || 0, 0);
                return 0 > f && (f = b - 1),
                a.val(c.pad(f % b)),
                !1
            }
              , e = a.get(0);
            e.addEventListener && e.addEventListener("DOMMouseScroll", d, !1),
            e.onmousewheel = d
        },
        stringToDate: function(a, b) {
            var c, d, e, f = this, g = a, h = [/yyyy|yy/, /M{1,2}/, /d{1,2}/, /H{1,2}/, /m{1,2}/, /s{1,2}/], i = h.length, j = [];
            if (g) {
                for (var k = 0; i > k; k++)
                    c = h[k].exec(f.format),
                    c && (d = c.index,
                    j[k] = g.substring(d, d + c[0].length),
                    b && (b = b.replace(h[k], j[k])));
                return e = b ? new Date((2 == j[0].length ? "20" : "") + b.replace(/-/g, "/")) : new Date(2 == j[0].length ? "20" + j[0] : j[0],j[1] - 1,j[2],j[3] || null ,j[4] || null ,j[5] || null ),
                e ? e : null 
            }
        },
        pad: function(a, b) {
            var c = a.toString().length;
            for (b = b || 2; b > c; )
                a = "0" + a,
                c++;
            return a
        },
        parseTime: function() {
            function a(a, c) {
                var d = parseInt(a, 10) || 0;
                return b.pad(0 > d ? 0 : c > d ? d : c - 1)
            }
            var b = this
              , c = b.timeSelector
              , d = a(c.eq(0).val(), 24)
              , e = a(c.eq(1).val(), 60)
              , f = a(c.eq(2).val(), 60);
            return c.eq(0).val(d),
            c.eq(1).val(e),
            c.eq(2).val(f),
            {
                hour: d,
                minutes: e,
                secound: f
            }
        },
        dateFormat: function(a, b) {
            function c(a, c) {
                b = b.replace(a, c)
            }
            "string" != typeof b && (b = this.format);
            var d = this.pad
              , e = a.getFullYear()
              , f = a.getMonth() + 1
              , g = a.getDate()
              , h = a.getHours()
              , i = a.getMinutes()
              , j = a.getSeconds();
            return c(/yyyy/g, d(e, 4)),
            c(/yy/g, d(parseInt(e.toString().slice(2), 10), 2)),
            c(/MM/g, d(f, 2)),
            c(/M/g, f),
            c(/dd/g, d(g, 2)),
            c(/d/g, g),
            c(/HH/g, d(h, 2)),
            c(/H/g, h),
            c(/hh/g, d(h % 12, 2)),
            c(/h/g, h % 12),
            c(/mm/g, d(i, 2)),
            c(/m/g, i),
            c(/ss/g, d(j, 2)),
            c(/s/g, j),
            b
        },
        dateToString: function(a) {
            return this.dateFormat(a, "yyyy-MM-dd")
        },
        setPosition: function() {
            var a = 0
              , b = 0
              , c = document.body.scrollTop || document.documentElement.scrollTop
              , d = document.documentElement.clientHeight
              , e = document.documentElement.clientWidth
              , f = this.input.offset();
            a = c + d < this.rootLayers.outerHeight() + f.top ? f.top - this.rootLayers.outerHeight() : f.top + this.input.outerHeight(),
            b = e < this.rootLayers.outerWidth() + f.left ? f.left + this.input.outerWidth() - this.rootLayers.outerWidth() : f.left,
            this.rootLayers.css({
                top: a,
                left: b
            }),
            this.ieframe && this.ieframe.css({
                width: this.dateSelector.outerWidth(),
                height: this.dateSelector.outerHeight()
            })
        },
        moveDateBy: function(a) {
            var b = new Date(this.selectedDate.getFullYear(),this.selectedDate.getMonth(),this.selectedDate.getDate() + a)
              , c = 0
              , d = 0;
            this.dateRange.start && (c = this.stringToDate(this.dateRange.start, "yy-MM-dd 00:00:00").getTime()),
            this.dateRange.end && (d = this.stringToDate(this.dateRange.end, "yy-MM-dd 00:00:00").getTime()),
            (!c || b.getTime() >= c) && (!d || b.getTime() <= d) && this.selectDate(b)
        },
        moveDateMonthBy: function(a) {
            var b = new Date(this.selectedDate.getFullYear(),this.selectedDate.getMonth() + a,this.selectedDate.getDate());
            b.getMonth() == this.selectedDate.getMonth() + a + 1 && b.setDate(0),
            this.selectDate(b)
        },
        moveMonthBy: function(a) {
            var b = new Date(this.currentMonth.getFullYear(),this.currentMonth.getMonth() + a,this.currentMonth.getDate());
            this.selectMonth(b)
        },
        monthName: function(a) {
            return this.month_names[a.getMonth()]
        },
        bindToObj: function(a) {
            var b = this;
            return function() {
                return a.apply(b, arguments)
            }
        },
        bindMethodsToObj: function() {
            for (var a = 0; a < arguments.length; a++)
                this[arguments[a]] = this.bindToObj(this[arguments[a]])
        },
        indexFor: function(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b == a[c])
                    return c
        },
        monthNum: function(a) {
            return this.indexFor(this.month_names, a)
        },
        shortMonthNum: function(a) {
            return this.indexFor(this.short_month_names, a)
        },
        shortDayNum: function(a) {
            return this.indexFor(this.short_day_names, a)
        },
        daysBetween: function(a, b) {
            return a = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()),
            b = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()),
            (b - a) / 864e5
        },
        changeDayTo: function(a, b, c) {
            var d = c * (Math.abs(b.getDay() - a - 7 * c) % 7);
            return new Date(b.getFullYear(),b.getMonth(),b.getDate() + d)
        },
        rangeStart: function(a) {
            return this.changeDayTo(this.start_of_week, new Date(a.getFullYear(),a.getMonth()), -1)
        },
        rangeEnd: function(a) {
            return this.changeDayTo((this.start_of_week - 1) % 7, new Date(a.getFullYear(),a.getMonth() + 1,0), 1)
        },
        isFirstDayOfWeek: function(a) {
            return a.getDay() == this.start_of_week
        },
        isLastDayOfWeek: function(a) {
            return a.getDay() == (this.start_of_week - 1) % 7
        },
        adjustDays: function(a) {
            for (var b = [], c = 0; c < a.length; c++)
                b[c] = a[(c + this.start_of_week) % 7];
            return b
        },
        setDateRange: function(a) {
            this.dateRange = b.extend({}, this.dateRange, a),
            this.selectMonth(this.selectedDate, !0)
        }
    },
    b.fn.dateinput = function(c) {
        return this.each(function() {
            var d = b(this);
            d.data("dateinput-type") || (d.data("dateinput", new a(d,c)),
            d.data("dateinput-type", !0))
        })
    }
    ,
    b(document).on("mouseenter", "input.date-input", function() {
        b(this).dateinput()
    }),
    b
});
