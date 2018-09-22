/**
 * 参数配置 *
 */

var cmsConfig = {
    //serverUrl : "http://localhost:8080/manage/web/",
    //imgUrl : "http://localhost:8080/manage/",
    //serverUrl : "http://192.168.55.10:8080/manage/web/",		//  给电脑用的
    //imgUrl : "http://192.168.55.10:8080/manage/",
    serverUrl: 'http://10.184.255.10:8080/manage/web/',		    //  给机顶盒用的
    imgUrl: 'http://10.184.255.10:8080/manage/',
    backUrl: '',
    index_back_url: '',
    environment: 'DEBUG',
    //environment: 'PRODUCT',
    //
    /**
     * 美丽北岸
     */
    indexResourceIdArray: [
        {title: '美丽北岸', resourceId: ''},
        // ---------------  菜单  ---------------  //


        // ---------------  海报（播放视频）  ---------------  //
        {title: '左侧海报', resourceId: '831'},
        {title: '右下海报', resourceId: '0'},

        // ---------------  滚动页  ---------------  //
        {title: '右侧滚动页', resourceId: '819'}
    ],

    /**
     * 秀屿新闻
     */
    newsResourceIdArray: [
        {title: '秀屿新闻', resourceId: ''},
        // ---------------  菜单  ---------------  //

        // ---------------  海报（播放视频）  ---------------  //

        // ---------------  列表  ---------------  //
        {title: '最新动态', resourceId: '769'},

        // ---------------  滚动页  ---------------  //
        {title: '右侧滚动页', resourceId: '855'}
    ],

    /**
     * 乡镇风采
     */
    beianResourceIdArray: [
        {title: '乡镇风采', resourceId: ''},
        // ---------------  菜单  ---------------  //
        {title: '山亭镇', resourceId: '812'},       //   山亭镇
        {title: '忠门镇', resourceId: '813'},       //   忠门镇
        {title: '东埔镇', resourceId: '814'},       //   东埔镇

        // ---------------  海报（播放视频）  ---------------  //
        {title: '右下海报', resourceId: '815'},       //   右下海报

        // ---------------  列表  ---------------  //
        {title: '最新动态', resourceId: '769'}

        // ---------------  滚动页  ---------------  //
    ],

    /**
     * 部门动态
     */
    apartmentResourceIdArray: [
        {title: '部门动态', resourceId: ''},
        // ---------------  菜单  ---------------  //

        // ---------------  海报（播放视频）  ---------------  //

        // ---------------  列表  ---------------  //
        {title: '最新信息', resourceId: '770'},

        // ---------------  滚动页  ---------------  //
        {title: '左侧滚动页', resourceId: '857'}
    ],


    /**
     * 智慧港城
     */
    smartResourceIdArray: [
        {title: '智慧港城', resourceId: ''},

        // ---------------  菜单  ---------------  //
        {title: '右侧一', resourceId: '771'},
        {title: '右侧二', resourceId: '771'},
        {title: '右侧三', resourceId: '771'},
        {title: '右侧四', resourceId: '771'},

        // ---------------  海报（播放视频）  ---------------  //
        {title: '中间海报', resourceId: '771'},

        // ---------------  列表  ---------------  //
        {title: '左侧列表', resourceId: '858'}

        // ---------------  滚动页  ---------------  //

    ],

    /**
     * 文化旅游
     */
    cultureResourceIdArray: [
        {title: '智慧党建', resourceId: '0'},

        // ---------------  菜单  ---------------  //

        // ---------------  海报（播放视频）  ---------------  //

        // ---------------  列表  ---------------  //

        // ---------------  滚动页  ---------------  //
        {title: '右侧滚动页', resourceId: '854'}
    ],

    /**
     * 专题专栏
     */
    topicResourceIdArray: [
        {title: '专题专栏', resourceId: '0'},
        // ---------------  菜单  ---------------  //
        {title: '海报一', resourceId: '875'},
        {title: '海报二', resourceId: '876'},
        {title: '海报三', resourceId: '822'},
        {title: '海报四', resourceId: '823'},


        // ---------------  海报（播放视频）  ---------------  //

        // ---------------  列表  ---------------  //
        {title: '最新动态', resourceId: '859'}

        // ---------------  滚动页  ---------------  //

    ],

    /**
     *  美丽莆田
     */
    putianResourceIdArray: [
        {title: '美丽莆田', resourceId: '0'},

        // ---------------  菜单  ---------------  //

        // ---------------  海报（播放视频）  ---------------  //

        // ---------------  列表  ---------------  //

        // ---------------  滚动页  ---------------  //
        {title: '右侧滚动页', resourceId: '861'}
    ],

    operator: '',
    weather: '',
    temperature: '',
    windScale: ''
};