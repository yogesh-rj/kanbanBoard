import {Component, View, coreDirectives,formDirectives} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
// import {NgForm} from 'angular2/forms';

@Component({
    selector: 'component-1'
})
@View({
    templateUrl: './components/home/home.html?v=<%= VERSION %>',
    directives: [RouterLink]
})
export class Home {
    newFeatures: any[]; 
    onHold: any[];
    inProgress: any[];
    doneTasks: any[];

    constructor(){
       this.newFeatures = [{name:'Chat Module',dueDate:'2-03-2017',priority: 2},{name:'Profile Module',dueDate:'2-03-2017',priority: 2}];
       this.onHold = [{name:'Data Module',dueDate:'2-04-2017',priority: 2},{name:'Connect Module',dueDate:'2-04-2017',priority: 2}];
       this.inProgress = [{name:'SignIn',dueDate:'2-03-2017',priority: 1}];
       this.doneTasks = [{name:'SignUp',dueDate:'2-03-2017',priority: 1}];
    }
}
