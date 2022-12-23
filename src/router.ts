import { createRouter , createWebHashHistory } from "vue-router";
import Main from './components/Main.vue';
import allB from './components/allB.vue';
import us from './components/us.vue';
import download from './components/download.vue';
import talkWith from './components/talkWith.vue';
import baoming from './components/baoming.vue';

interface Router {
    path:string;
    component:object;
}

const routes:Array<Router> = [
    {
        path:"/index",
        component:Main
    },
    {
        path:"/allB",
        component:allB
    },
    {
        path:"/us",
        component:us
    },
    {
        path:"/download",
        component:download
    },
    {
        path:"/talk",
        component:talkWith
    },
    {
        path:"/baoming",
        component:baoming
    }
];

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;