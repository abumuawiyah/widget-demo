(function() {
  'use strict';

  angular
    .module('rapi')
    .config(config);

/** @ngInject */
  function config($logProvider, $resourceProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
      
    $resourceProvider.defaults.actions = {
        save:   {method: 'PUT'},
        update: {method: 'POST'},
        get:    {method: 'GET'}
    };
      
//    $httpProvider.defaults.headers.common['X-Auth-Token'] = 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI0NzA0OTM3Ni1jMGQ1LTQxN2YtOGIxMS1lNmZiMzljMmNkMTgiLCJleHAiOjE0NjExMjA3MDMsIm5iZiI6MCwiaWF0IjoxNDYxMTIwNjQzLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjEzMDgwL2F1dGgvcmVhbG1zL21hc3RlciIsImF1ZCI6IndlYiIsInN1YiI6IjgyOTYzZmY5LTg2OGEtNGJiNy1hNGUzLTkwZDRmZTdjMzBlOSIsInR5cCI6IkJlYXJlciIsImF6cCI6IndlYiIsIm5vbmNlIjoiNmE1YjhhZWItODFkNS00ZDdjLTliMTItMDJjOWE4NDE2YjdhIiwic2Vzc2lvbl9zdGF0ZSI6IjIyODM4NWMwLWVjZTctNDIzNi1hYjE4LWJkYjI2ZjFjMDQzZSIsImNsaWVudF9zZXNzaW9uIjoiNTM4OWYwMDEtOThhMC00NjA5LTk1NjktMThlZjMxMWZiNTA3IiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsidXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7IndlYiI6eyJyb2xlcyI6WyJ1c2VyIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50Iiwidmlldy1wcm9maWxlIl19fSwibmFtZSI6InRlc3QgdXNlcjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0X3VzZXIxIiwiZ2l2ZW5fbmFtZSI6InRlc3QiLCJmYW1pbHlfbmFtZSI6InVzZXIxIn0.NPpyC2KxwtYx-iTnDSo6gtK0IS9RxKdUv2b4-XjoZkgtvysZqp3zgS2B2C5TBLVjK0vo854USfcY3iB7JTcmi84UhDYfYQhHQf9fwI3_t8Eb0BtaLaWvb1mAnKjmPg2QIkTI3kpAig3aQMHotMAueWp1kQ3UnCOGI-AkRkpUNMtGoGv41ZcGpnqNUwrH4xG1tRYZTm4nAGsISJy9JTA1ZD0Y5_NhLgO9gXR3iDHU51OvIeTgRbgUMBEC6dDXOnzGuOwGMCwAZiGtPnltQ52BMapcILarRRc4AbygNuEuwoPAK0eLEL6AbDKusjkk-Q5LB5CQho_urWpqdxdgOYuG1Q';
  }

})();

