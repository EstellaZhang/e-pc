const DemoRouter = {
    path:'/demo',
    name:'leve1-1',
    component: () => import('@/views/demo'),
    // else setting
    children:[
        {
            path:'/demo/one',
            name:'1-1-1',
            component: () => import('@/views/demo/one')
            // else setting
        },
        {
            path:'/demo/two',
            name:'1-1-2',
            component: () => import('@/views/demo/two')
            // else setting
        },
        {
            path:'/demo/three',
            name:'1-1-3',
            component: () => import('@/views/demo/three')
            // else setting
        }
    ]
}

export default DemoRouter;