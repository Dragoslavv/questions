new Vue({
    el: '#app',
    data: {
        loading: false,
        nextItem: 1,
        items: [],
        isShowing:false,
    },
    mounted () {

        // Detect when scrolled to bottom.
        const listElm = document.querySelector('#infinite-list');
        listElm.addEventListener('scroll', e => {
            if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
                this.loadMore();
            }
        });

        // Initially load some items.
        this.loadMore();

    },
    methods: {
        loadMore () {

            this.loading = true;
            setTimeout(e => {
                for (var i = 0; i < 20; i++) {
                    if(this.nextItem <= 40) {
                        this.items.push('Item ' + this.nextItem++);
                    }
                }
                this.loading = false;
            }, 600);
        }
    }
});
