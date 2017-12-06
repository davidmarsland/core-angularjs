angular.module('gitHubService', ['ngResource'])
  .factory('gitHub', [
    '$resource',
    function ($resource) {
      return $resource('https://api.github.com/:action/angular/:id?apiKey=034a8937c302b67431de75d2f110a7d26d749bc8',
        {
          action: '@action',
          id: '@id'
        },
        {
          getAll: {
            method: 'GET',
            isArray: true,
            params: { action: 'orgs', id: 'repos' }
          },
          getDetail: {
            method: 'GET',
            params: { action: 'repos' }
          },
        });
    }
  ]);