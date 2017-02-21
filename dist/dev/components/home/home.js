var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var Home = (function () {
    function Home() {
        this.newFeatures = [{ name: 'Chat Module', dueDate: '2-03-2017', priority: 2 }, { name: 'Profile Module', dueDate: '2-03-2017', priority: 2 }];
        this.onHold = [{ name: 'Data Module', dueDate: '2-04-2017', priority: 2 }, { name: 'Connect Module', dueDate: '2-04-2017', priority: 2 }];
        this.inProgress = [{ name: 'SignIn', dueDate: '2-03-2017', priority: 1 }];
        this.doneTasks = [{ name: 'SignUp', dueDate: '2-03-2017', priority: 1 }];
    }
    Home = __decorate([
        angular2_1.Component({
            selector: 'component-1'
        }),
        angular2_1.View({
            templateUrl: './components/home/home.html?v=0.0.0',
            directives: [router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
})();
exports.Home = Home;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLnRzIl0sIm5hbWVzIjpbIkhvbWUiLCJIb21lLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUE2RCxtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pGLHVCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBRzNDO0lBYUlBO1FBQ0dDLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLENBQUNBLEVBQUNBLElBQUlBLEVBQUNBLGFBQWFBLEVBQUNBLE9BQU9BLEVBQUNBLFdBQVdBLEVBQUNBLFFBQVFBLEVBQUVBLENBQUNBLEVBQUNBLEVBQUNBLEVBQUNBLElBQUlBLEVBQUNBLGdCQUFnQkEsRUFBQ0EsT0FBT0EsRUFBQ0EsV0FBV0EsRUFBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbElBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLEVBQUNBLElBQUlBLEVBQUNBLGFBQWFBLEVBQUNBLE9BQU9BLEVBQUNBLFdBQVdBLEVBQUNBLFFBQVFBLEVBQUVBLENBQUNBLEVBQUNBLEVBQUNBLEVBQUNBLElBQUlBLEVBQUNBLGdCQUFnQkEsRUFBQ0EsT0FBT0EsRUFBQ0EsV0FBV0EsRUFBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDN0hBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLENBQUNBLEVBQUNBLElBQUlBLEVBQUNBLFFBQVFBLEVBQUNBLE9BQU9BLEVBQUNBLFdBQVdBLEVBQUNBLFFBQVFBLEVBQUVBLENBQUNBLEVBQUNBLENBQUNBLENBQUNBO1FBQ3BFQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxDQUFDQSxFQUFDQSxJQUFJQSxFQUFDQSxRQUFRQSxFQUFDQSxPQUFPQSxFQUFDQSxXQUFXQSxFQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxFQUFDQSxDQUFDQSxDQUFDQTtJQUN0RUEsQ0FBQ0E7SUFsQkxEO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxhQUFhQTtTQUMxQkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDRkEsV0FBV0EsRUFBRUEsOENBQThDQTtZQUMzREEsVUFBVUEsRUFBRUEsQ0FBQ0EsbUJBQVVBLENBQUNBO1NBQzNCQSxDQUFDQTs7YUFhREE7SUFBREEsV0FBQ0E7QUFBREEsQ0FuQkEsQUFtQkNBLElBQUE7QUFaWSxZQUFJLE9BWWhCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgY29yZURpcmVjdGl2ZXMsZm9ybURpcmVjdGl2ZXN9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbi8vIGltcG9ydCB7TmdGb3JtfSBmcm9tICdhbmd1bGFyMi9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTEnXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJMaW5rXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lIHtcbiAgICBuZXdGZWF0dXJlczogYW55W107IFxuICAgIG9uSG9sZDogYW55W107XG4gICAgaW5Qcm9ncmVzczogYW55W107XG4gICAgZG9uZVRhc2tzOiBhbnlbXTtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgdGhpcy5uZXdGZWF0dXJlcyA9IFt7bmFtZTonQ2hhdCBNb2R1bGUnLGR1ZURhdGU6JzItMDMtMjAxNycscHJpb3JpdHk6IDJ9LHtuYW1lOidQcm9maWxlIE1vZHVsZScsZHVlRGF0ZTonMi0wMy0yMDE3Jyxwcmlvcml0eTogMn1dO1xuICAgICAgIHRoaXMub25Ib2xkID0gW3tuYW1lOidEYXRhIE1vZHVsZScsZHVlRGF0ZTonMi0wNC0yMDE3Jyxwcmlvcml0eTogMn0se25hbWU6J0Nvbm5lY3QgTW9kdWxlJyxkdWVEYXRlOicyLTA0LTIwMTcnLHByaW9yaXR5OiAyfV07XG4gICAgICAgdGhpcy5pblByb2dyZXNzID0gW3tuYW1lOidTaWduSW4nLGR1ZURhdGU6JzItMDMtMjAxNycscHJpb3JpdHk6IDF9XTtcbiAgICAgICB0aGlzLmRvbmVUYXNrcyA9IFt7bmFtZTonU2lnblVwJyxkdWVEYXRlOicyLTAzLTIwMTcnLHByaW9yaXR5OiAxfV07XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9