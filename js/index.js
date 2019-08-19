new Vue({
    el: '#app',
    data: function() {
        return {
            mail: window.settings.mail || 'qiusong_wang@163.com',
        };
    },
    methods: {
        toPage(type) {
            let location = '';
            switch (type) {
                case 'CSDN':
                    location = 'https://blog.csdn.net/it_wang001';
                    break;
                case 'github':
                    location = 'https://github.com/itwang001';
                    break;
                case 'SF':
                    location = 'https://segmentfault.com/u/itwang001';
                    break;
                default:
                    break;
            }
            window.open(location, '_self');
        }
    }
});
