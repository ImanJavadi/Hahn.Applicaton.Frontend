import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Hahn';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('./components/home/home'),   title: 'Home' },
      { route: 'success',  moduleId: PLATFORM.moduleName('./components/success/success'), name:'success' },
      { route: 'home',  moduleId: PLATFORM.moduleName('./components/home/home'), name:'home' },
      { route: 'test',  moduleId: PLATFORM.moduleName('./components/test/test'), name:'home' },
    ]);

    this.router = router;
  }
}
