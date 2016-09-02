// public/app/shared/tools.service.js

var tools = angular.module('toolsService', []);

tools.service('toolsService', ['$sce',
	function($sce) {
		this.indexOfObject = function(arr, key, valueToFind) {
			for(var i = 0, len = arr.length; i < len; i++) {
				if (arr[i][key] === valueToFind) return i;
			}
			return -1;
		}

		this.groupBy = function(arr, property) {
			return arr.reduce(function(memo, x) {
				if (!memo[x[property]]) { memo[x[property]] = []; }
				memo[x[property]].push(x);
				return memo;
			}, {});
		}

		this.toTrusted = function(html) {
			return $sce.trustAsHtml(html);
		}			

	}
]);