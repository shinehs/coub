define(['iShare'], (iShare) => {
    let share = {
        init(url) {
            // 引入配置
            return new iShare({
                container:'.shareContent',
                config:{
                    title: '分享标题',
                    description: '这是分享描述文本',
                    url,
                    isAbroad: true,
                    isTitle: true,
                    initialized: true
                }
            });
        }
    };

    return share;
});