### Core AngularJS Training
#### Instructor: David Marsland
<a target="_ref" href="https://www.linkedin.com/in/davidemarsland">https://www.linkedin.com/in/davidemarsland</a>
<br>

<a target="_di" href="http://developintelligence.com">DevelopIntelligence.com</a>
<br>
<a target="_git_core" href="https://davidmarsland.github.io/core-angularjs/">https://davidmarsland.github.io/core-angularjs/</a>

---
### Codepen.io

Codepen is a great tool for interactively trying and sharing AngularJS code

Login or create a free account at <a target="_codepen" href="https://codepen.io">codepen.io</a>

---
#### Hello AngularJS World
* iframe may prompt to login or register @ <a target="_codepen" href="https://codepen.io">codepen.io</a> 
* Register & login, then refresh, choose Fork

<iframe height='565' scrolling='no' title='HelloNgWorld' src='//codepen.io/demarsland/pres/OOdjKQ/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/demarsland/pen/OOdjKQ/'>HelloNgWorld</a> by David Marsland (<a href='https://codepen.io/demarsland'>@demarsland</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
---

### Next we'll add a Controller

```javascript
<html ng-app="appHello">
  <body ng-controller="HelloController">
  // ...
    <script type="text/javascript">
        angular.module('appHello',[])
          .controller('HelloController',
            function ($scope) {
              $scope.message="Mars!"
            }
        );
    </script>
  </body>
```
---
<iframe height='665' scrolling='no' title='HelloNgWorldControllerRefactor' src='//codepen.io/demarsland/pres/BmMmxo/?height=665&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/demarsland/pen/BmMmxo/'>HelloNgWorldControllerRefactor</a> by David Marsland (<a href='https://codepen.io/demarsland'>@demarsland</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
---
### Course Outline: AngularJS Fundamentals
* Angular Quickstart
* Controllers and Scope
* Views and Templates with ng Expressions and Directives
* Promises for Async Chaining
* Forms and Validation
---
### Course Outline: Advanced AngularJS
* Services and Factories
* Custom Directives and DOM Manipulation
* Bootstrap and ng-animation
* Express Intro
* Routes for deep-linking Single Page Apps
* Unit Testing and End-to-end Testing
---
### Online Course Descriptions with Labs from <a href="https://mva.microsoft.com/" target="_mva">Microsoft Virtual Academy</a> on <a href="https://www.edx.org/" target="_edx">EdX</a> 

##### <a href="https://mva.microsoft.com/" target="_mva"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/320px-Microsoft_logo_%282012%29.svg.png" /></a>
##### <a href="https://www.edx.org/" target="_edx"><img src="https://www.edx.org/sites/default/files/theme/edx-logo-header.png"></a>
* <a target="_dev220xdescription" href="https://www.edx.org/course/angularjs-framework-fundamentals-microsoft-dev220x-2">EdX: DEV220x AngularJS: Fundamentals Description</a>

* <a target="_dev221xdescription" href="https://www.edx.org/course/angularjs-advanced-framework-techniques-microsoft-dev221x-2">EdX: DEV221x AngularJS: Advanced Description</a>

---

### Online Course Materials and Labs
Follow this Link, Create a Login and Register for Free Audit Access to these Excellent EdX Course Materials: 
#### <a href="https://www.edx.org/about-us" target="_edx"><img src="https://www.edx.org/sites/default/files/theme/edx-logo-header.png" /></a> 
### <a target="_dev220x" href="https://courses.edx.org/courses/course-v1:Microsoft+DEV220x+4T2017/course/">EdX: DEV220x AngularJS: Fundamentals</a>

### <a target="_dev221x" href="https://courses.edx.org/courses/course-v1:Microsoft+DEV220x+4T2017/course/">https://courses.edx.org/courses/course-v1:Microsoft+DEV220x+4T2017/course/</a>

---

### Advanced Course Materials and Labs
Follow this Link and Register for Free Audit Access to these Excellent EdX Advanced Course Materials <br>(Wait till we start Advanced Section on Wednesday): 
#### <a href="https://www.edx.org/" target="_edx"><img src="https://www.edx.org/sites/default/files/theme/edx-logo-header.png" /></a>

### <a target="_dev221x" href="https://courses.edx.org/courses/course-v1:Microsoft+DEV221x+4T2017/course/">EdX: DEV221x AngularJS: Advanced</a>

### <a target="_dev221x" href="https://courses.edx.org/courses/course-v1:Microsoft+DEV221x+4T2017/course/">
https://www.edx.org/course/angularjs-advanced-framework-techniques-microsoft-dev221x-2</a>

---

### Module 1 Intro to Angular

* What is Angular?
* Angular Evolution
* Architecture basics
* Starter Code
* Binding, Modules, Controllers, Directives
<br>
<br>
### <a target="_mva_slides" href="https://mva.microsoft.com/en-US/training-courses/introduction-to-angularjs-8682?l=fT4lgLH1_1504984382">MVA Intro to Angular Slides</a>

---

<a target="_dev220x" href="https://courses.edx.org/courses/course-v1:Microsoft+DEV220x+4T2017/courseware/11d41f10cb0746d9a62ca2103bbe68fd/cb66f2c05f2f489e9810c1d63958e227/3?activate_block_id=block-v1%3AMicrosoft%2BDEV220x%2B4T2017%2Btype%40vertical%2Bblock%404374bde8bc5a4fdea40ceb7f3e38f773">EdX: DEV220x AngularJS: Fundamentals Course Overview</a>

---

<a target="_dev220x" href="https://courses.edx.org/courses/course-v1:Microsoft+DEV220x+4T2017/courseware/96365c82c674493b973f21b1fbc5a112/a2a63c80fbe0410c9437136040234e4e/2?activate_block_id=block-v1%3AMicrosoft%2BDEV220x%2B4T2017%2Btype%40vertical%2Bblock%40d4bb2474015d4930bd48263b73900347">EdX: DEV220x Module 1: Getting Started with Angular - Resource Content: Getting Started with Angular - History of Angular</a>
---

### Simple Controller
<iframe height='565' scrolling='no' title='Dev221x Mod 1SimpleController' src='//codepen.io/demarsland/pres/aVXYQj/?height=565&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/demarsland/pen/aVXYQj/'>Dev221x Mod 1SimpleController</a> by David Marsland (<a href='https://codepen.io/demarsland'>@demarsland</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
---
### Simple Dependency Injection & Constants
<iframe height='565' scrolling='no' title='Dev221x Mod 1DependencyInjectionConstant' src='//codepen.io/demarsland/pres/LOqdgM/?height=565&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/demarsland/pen/LOqdgM/'>Dev221x Mod 1DependencyInjectionConstant</a> by David Marsland (<a href='https://codepen.io/demarsland'>@demarsland</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

### Lab Time!
<a target="_dev220x" href="https://courses.edx.org/courses/course-v1:Microsoft+DEV220x+4T2017/courseware/96365c82c674493b973f21b1fbc5a112/677b745b10594c569144c800672af067/1?activate_block_id=block-v1%3AMicrosoft%2BDEV220x%2B4T2017%2Btype%40vertical%2Bblock%40ade04bcfa3164a40a36582a1ca3f350f">Module 1: Getting Started with Angular - Module Labs: Overview and Required Configuration - Labs Overview</a>
* Setup
* Bootstrapping
* Modules
* Dependency Injection

### Lab 1 Solution
<a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod1Lab/">https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod1Lab/</a>

### Lab 2 Solution
<a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod2Lab/">https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod2Lab/</a>

----
### Lab 3 Solution
<a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod3Lab/">https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod3Lab/</a>

### Lab 3 Self Solution
<a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod3LabSelf/">https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod3LabSelf/</a>

----
### Lab 4 Solutions
<a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod4Lab/">https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod4LabPart4GitHubService/</a>

* <a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod4LabPart0Begin/">Mod4LabPart0Begin</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod4LabPart1Promises/">Mod4LabPart1Promises</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod4LabPart2Repos/">Mod4LabPart2Repos</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod4LabPart2Repos/">Mod4LabPart3ReposDetails</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod4LabPart4GitHubService/">Mod4LabPart4GitHubService</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod4LabSelfGitSearchRepos/">Mod4LabSelfGitSearchRepos</a>

----
### Lab 5 Forms Solutions
<a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod4Lab/">https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod5LabPart6FormService/</a>

* <a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod5LabPart0Begin/">Mod5LabPart0Begin</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod5LabPart1Form/">Mod5LabPart1Form</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod5LabPart2FormBind/">Mod5LabPart2FormBind</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod5LabPart3FormRequired/">Mod5LabPart3FormRequired</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod5LabPart4FormSubmit/">Mod5LabPart4FormSubmit</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod5LabPart5FormSubmitDisabled/">Mod5LabPart5FormSubmitDisabled</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod5LabPart6FormService/">Mod5LabPart6FormService</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev220x-angularjs-demarsland/Mod5LabSelfFormValidationLogicToken/">Mod5LabSelfFormValidationLogicToken</a>
---
### Errors on form submit

Force error by changing password to passwordx
```
<input type="password" name="password" class="form-control" ng-model="model.passwordx" required>
<div class="alert alert-danger" ng-show="(form.password.$touched || form.$submitted) && form.passwordx.$error.required">
```
```
$scope.submit = submit;
function submit(model) {
  registration.submit(model).$promise
    .then(function (response) {
        alert('success');
    },
    function (response) {
      alert('error:' + response.status + ' ' + response.data.error);
      console.log('error:' + response.status + ' ' + response.data.error);
      console.log(response);
    });
    alert('Submitted\n' + JSON.stringify(model));
}
```
---

### Advanced Course Materials and Labs
Follow this Link and Register for Free Audit Access to these Excellent EdX Advanced Course Materials <br>(Wait till we start Advanced Section on Wednesday): 
#### <a href="https://www.edx.org/" target="_edx"><img src="https://www.edx.org/sites/default/files/theme/edx-logo-header.png" /></a>

### <a target="_dev221x" href="https://courses.edx.org/courses/course-v1:Microsoft+DEV221x+4T2017/course/">EdX: DEV221x AngularJS: Advanced</a>

### <a target="_dev221x" href="https://courses.edx.org/courses/course-v1:Microsoft+DEV221x+4T2017/course/">
https://www.edx.org/course/angularjs-advanced-framework-techniques-microsoft-dev221x-2</a>

---
### Factory Provider Services Slides from Microsoft Virtual Academy
<iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https%3A%2F%2Fcp%2Dmlxprod%2Dstatic%2Emicrosoft%2Ecom%3A443%2F05778%2D1013%2Fen%2Dus%2Fcontent%2Fcontent%5Fmmblxnh1%5F3304984382%2F05052015115948%2Epptx&wdAr=1.7777777777777777' width='1186px' height='691px' frameborder='0'>This is an embedded <a target='_blank' href='https://office.com'>Microsoft Office</a> presentation, powered by <a target='_blank' href='https://office.com/webapps'>Office Online</a>.</iframe>
---

### Custom Directives Slides from Microsoft Virtual Academy
<iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https%3A%2F%2Fcp%2Dmlxprod%2Dstatic%2Emicrosoft%2Ecom%3A443%2F05778%2D1013%2Fen%2Dus%2Fcontent%2Fcontent%5Fgytzmmh1%5F2004984382%2F05052015115820%2Epptx&wdAr=1.7777777777777777' width='1186px' height='691px' frameborder='0'>This is an embedded <a target='_blank' href='https://office.com'>Microsoft Office</a> presentation, powered by <a target='_blank' href='https://office.com/webapps'>Office Online</a>.</iframe>

---
### Custom Directives by Bruno Scopelliti
<iframe height='642' scrolling='no' title='AngularJS DirectivePlanetShop' src='//codepen.io/demarsland/pres/ZaVdPo/?height=642&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/demarsland/pen/ZaVdPo/'>AngularJS DirectivePlanetShop</a> by David Marsland (<a href='https://codepen.io/demarsland'>@demarsland</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
---
### Routes for Deep-linking Single Page Apps and UI-Router
<iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https%3A%2F%2Fcp%2Dmlxprod%2Dstatic%2Emicrosoft%2Ecom%3A443%2F05778%2D1013%2Fen%2Dus%2Fcontent%2Fcontent%5Fvwmcbnh1%5F5604984382%2F05052015115855%2Epptx&wdAr=1.7777777777777777' width='1186px' height='691px' frameborder='0'>This is an embedded <a target='_blank' href='https://office.com'>Microsoft Office</a> presentation, powered by <a target='_blank' href='https://office.com/webapps'>Office Online</a>.</iframe>
---
### Advanced Labs Module 1 Factories and Sessions
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod1LabPart1Session/">Mod1LabPart1Session</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod1LabPart2SessionFactory/">Mod1LabPart2SessionFactory

---
### Advanced Labs Module 2 Custom Directives

#### Warning!  Starter Code has wrong case for LabController.js, should be labController.js
<br>Fails on case sensitive servers like linux apache
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod2LabPart1Start/">Mod2LabPart1Start</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod2LabPart1StartCaseFixed/">Mod2LabPart1StartCaseFixed</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod2LabPart2DirectiveScope/">Mod2LabPart2DirectiveScope</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod2LabPart2DirectiveScopeCaseFixed/">Mod2LabPart2DirectiveScopeCaseFixed</a>

---
### Advanced Labs Module 2 Custom Directives Continued

* <a target="_labs" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod2LabPart3DirectivePerson/">Mod2LabPart3DirectivePerson</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod2LabPart4DirectivePersonChange/">Mod2LabPart4DirectivePersonChange</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod2LabPart5DirectiveLink/">Mod2LabPart5DirectiveLink</a>

<a target="_ref" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod2LabPart5DirectiveLinkRepeatScopes/">Mod2LabPart5DirectiveLinkRepeatScopes</a>
---
Module 3: Bootstrap and ngAnimation Labs

* <a target="_labs" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod3Lab1Bootstrap/">Mod3Lab1Bootstrap</a>

* <a target="_labs" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod3Lab1Part2BootstrapDirectives">Mod3Lab1Part2BootstrapDirectives</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod3Lab1Part3BootstrapAlerts">Mod3Lab1Part3BootstrapAlerts</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod3Lab1Part4ngAnimate">Mod3Lab1Part4ngAnimate</a>
* <a target="_labs" href="https://davidmarsland.github.io/edX-dev221x-angularjs-adv-demarsland/Mod3Lab1Part5ngAnimateJS">Mod3Lab1Part5ngAnimateJS</a>

---
Progressive Web Apps
<a target="_ref"href="https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/">Your First Progressive Web App</a>

---
### Tools

<a target="_tools" href="https://scotch.io/bar-talk/a-fast-and-convenient-development-server-with-lite-server">Lite-server with live reload, extends Browsersync</a>
```
npm install -g lite-server
```
<a target="_tools" href="https://browse
rsync.io">Browsersync Synchronized browser testing</a>

<a target="_tools" href="https://gruntjs.com">Grunt, The JavaScript Task Runner</a>
```
npm install -g grunt-cli
```
---
### Module 4, 5, and 6 labs all need to be run locally

```
node app.js
```
or
```
node server.js
```

---
### Module 6 Testing Labs

#### Bug in Mod 6 Testing labs, need to change from http: to https:
#### Should fail in tests
```
// $http.get('http://reqres.in/api/users').then(function(result){
$http.get('https://reqres.in/api/users').then(function(result){
    deferred.resolve(result.data.data);
});
```
---
#### Other Module 6 Testing Issues
```
npm install jasmine-core -g
```

---
### Solutions for AngularJS Fundamentals and Advanced courses
#### Clone or download zip from these GitHub Repos:

<a target="_ref" href="https://github.com/davidmarsland/edX-dev220x-angularjs-demarsland">https://github.com/davidmarsland/edX-dev220x-angularjs-demarsland</a>

<a target="_ref" href="https://github.com/davidmarsland/edX-dev221x-angularjs-adv-demarsland">https://github.com/davidmarsland/edX-dev221x-angularjs-adv-demarsland</a>

---
### Advanced Topics

* Restangular <a target="_ref" href="http://plnkr.co/edit/8qrGeE?p=preview">RestAngular Demo</a>
<br><a target="_ref" href="https://www.ng-newsletter.com/posts/restangular.html">RestAngular on Angular: ng-newsletter</a>
* Messaging
* Best Practices with Angular
<a target="_ref" href="https://www.slideshare.net/ChiewCarol/angularjs-style-guide">AngularJS Style Guide Presentation</a>
<a target="_ref" href="https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md">John Papa's AngularJS Style Guide</a>
* AngularJS Packaging
* AngularJS Design Patterns
  ** ModelViewWhatever
  ** Controller-as-syntax
  ** Service Decorator
* <a target="_ref" href="https://docs.angularjs.org/guide/security">Secure Coding with AngularJS</a>

* <a target="_ref" href="https://blog.risingstack.com/controlling-node-js-security-risk-npm-dependencies/">Controlling Node npm Security Risks</a>

* <a target="_ref" href="https://help.github.com/articles/about-security-alerts-for-vulnerable-dependencies/">Github Security Vulnerability Alerts</a>
---

### AngularJS with ASP.NET Core
<a target="_ref" href="https://docs.microsoft.com/en-us/aspnet/core/client-side/angular">Using AngularJS for Single Page Applications (SPAs) with ASP.NET Core</a>
---
<font color="red">
### App Generator using Yeoman
# DANGER, relies on old npm packages which github reports vulnerabilities in</font>
<a target="_ref" href="https://snyk.io/vuln/npm:angular">Snyk.io Angular Vulnerabilities</a>
<a target="_ref" href="https://www.npmjs.com/package/generator-angm">AngularJS Yeoman Generator Angm Generator</a>

* Install Bower and bower-installer
```
npm install -g bower
npm install -g bower-installer
```
* Install yo (Yeoman)

```
npm install -g yo

```
npm install -g generator-angm
```

---

### Generating an application: 
* Launch angm, prompts for options
```
yo angm
```

* Running project on development
```
grunt dev
```
* Running project on production
```
grunt build
```
<a target="_ref" href="https://www.npmjs.com/package/generator-angm">Learn more about Angm Generator</a>
---

### Intro to AngularJS vs Angular 4

<a target="_ref" href="https://www.angularminds.com/blog/article/comparison-difference-between-angular1-vs-angular2-vs-angular4.html">Comparison AngularJS vs Angular2 vs Angular4</a>

<a target="_ref" href="http://blog.grossman.io/angular-1-component-based-architecture-2/">Component Based AngularJS 1.5 WebApp</a>

<a target="_ref" href="https://www.ng-book.com/2/p/Converting-an-AngularJS-1.x-App-to-Angular-4/">Converting AngularJS App to Angular4: ng-book</a>

---
### Other AngularJS Learning Resources

<a target="_ref" href="https://www.codeschool.com/courses/shaping-up-with-angularjs">Excellent CodeSchool Free AngularJS Course</a>
* Great examples of Test Driven Development
* Interactive tutorials give you feedback on your code dynamically each step!

---

#### PluralSight AngularJS Skills Assessment
15 minute test of your proficiency in AngularJS.  Should be able to take once with 1 redo.

<a target="_ref" href="https://www.pluralsight.com/paths/angular-js">https://www.pluralsight.com/paths/angular-js</a>

---
### Congratulations
### You are now all AngularJS Developers!
<br>
<a target="_git_core" href="https://davidmarsland.github.io/core-angularjs/">https://davidmarsland.github.io/core-angularjs/</a>
