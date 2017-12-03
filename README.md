# core-angularjs
Core AngularJS Course Material

### Core AngularJS Training for Grocery Outlet 
<a target="_blank" href="mailto:david@marsland.org?s=AngularJS Course question">david@marsland.org</a>
<a target="_blank" href="http://developintelligence.com">DevelopIntelligence.com</a>

### Monday, Dec. 4th - Friday Dec. 8th 9AM - 5PM

---
#### Hello AngularJS World
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
#### <a href="https://www.edx.org/about-us" target="_edx"><img src="https://www.edx.org/sites/default/files/theme/edx-logo-header.png"></a> 
### <a target="_dev220x" href="https://courses.edx.org/courses/course-v1:Microsoft+DEV220x+4T2017/course/">EdX: DEV220x AngularJS: Fundamentals</a>

### <a target="_dev221x" href="https://courses.edx.org/courses/course-v1:Microsoft+DEV220x+4T2017/course/">https://courses.edx.org/courses/course-v1:Microsoft+DEV220x+4T2017/course/</a>

---
### Advanced Course Materials and Labs
Follow this Link and Register for Free Audit Access to these Excellent EdX Advanced Course Materials <br>(Wait till we start Advanced Section on Wednesday): 
#### <a href="https://www.edx.org/" target="_edx"><img src="https://www.edx.org/sites/default/files/theme/edx-logo-header.png"></a>

### <a target="_dev221x" href="https://courses.edx.org/courses/course-v1:Microsoft+DEV221x+4T2017/course/">
EdX: DEV221x AngularJS: Advanced</a>

### <a target="_dev221x" href="https://courses.edx.org/courses/course-v1:Microsoft+DEV221x+4T2017/course/">
https://www.edx.org/course/angularjs-advanced-framework-techniques-microsoft-dev221x-2</a>

---

### Module 1 Intro to Angular

* What is Angular?
* Angular Evolution
* Architecture basics
* Starter Code
* Binging, Modules, Controllers, Directives
<br>
<br>
### <a target="_mva_slides" href="https://mva.microsoft.com/en-US/training-courses/introduction-to-angularjs-8682?l=fT4lgLH1_1504984382">MVA Intro to Angular Slides (scroll halfway to Course Outline) </a>

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

---

<a target="_packt" href="https://www.packtpub.com/mapt/book/web_development/9781782161820/2">Building and Testing Web Apps</a>
from <a target="_packt" href="https://www.packtpub.com/mapt/book/web_development/9781782161820/2">Mastering Web Application Development with AngularJS</a>

---

### Tools

<a target="_tools" href="https://browsersync.io/>Browsersync</a>
```
npm install -g browser-sync
```

```
npm install -g grunt-cli
```
