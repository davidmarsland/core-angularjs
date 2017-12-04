### Core AngularJS Training for Grocery Outlet 
#### David Marsland, [david@marsland.org](mailto:david@marsland.org)
### [DevelopIntelligence](http://developintelligence.com)

### Monday, Dec. 4th - Friday Dec. 8th 9AM - 5PM

---
#### Hello AngularJS World
<iframe height='565' scrolling='no' title='HelloNgWorld' src='//codepen.io/demarsland/pres/OOdjKQ/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/demarsland/pen/OOdjKQ/'>HelloNgWorld</a> by David Marsland (<a href='https://codepen.io/demarsland'>@demarsland</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
---

Next we'll and a Controller

```javascript

<html ng-app="appHello">
  <body ng-controller="HelloController">
...
  <script type="text/javascript">
      angular.module('appHello',[])
        .controller('HelloController',
          function ($scope) {
            $scope.message="Mars!"
          }
      );
  </script>
---
<iframe height='665' scrolling='no' title='HelloNgWorldController' src='//codepen.io/demarsland/pres/RjvjgO/?height=665&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/demarsland/pen/RjvjgO/'>HelloNgWorldController</a> by David Marsland (<a href='https://codepen.io/demarsland'>@demarsland</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

