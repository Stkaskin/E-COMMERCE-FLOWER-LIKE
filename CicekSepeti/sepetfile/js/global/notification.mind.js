window.EventBus = new Vue, Vue.prototype.$eventBus = window.EventBus, Vue.component("notification", { template: '<div v-cloak class="m-notify" v-if="isShow" v-on:click="isShow = false" v-bind:class="status"><div class="m-notify__content"><h3 class="m-notify__title">{{title}}</h3><p class="m-notify__message">{{message}}</p></div></div>', data: function () { return { title: "", message: "", status: "", isShow: !1, timer: null} }, created: function () { this.initEvents() }, methods: { initEvents: function () { var t = this; t.$eventBus.$on("NotificationError", function (i) { t.setNotification(i.title, i.message, "-error", i.timeout) }), t.$eventBus.$on("NotificationSuccess", function (i) { t.setNotification(i.title, i.message, "-success", i.timeout) }) }, setNotification: function (t, i, e, s) { var o = this; o.timer && clearTimeout(o.timer), o.title = t, o.message = i, o.status = e, o.isShow = !0; var n = 5e3; s > 0 && (n = s), o.timer = setTimeout(function () { o.isShow = !1 }, n) } } }), Vue.mixin({ methods: { NotifyError: function (t, i, e) { window.EventBus.$emit("NotificationError", { title: t, message: i, timeout: e }) }, NotifySuccess: function (t, i, e) { window.EventBus.$emit("NotificationSuccess", { title: t, message: i, timeout: e }) } } });