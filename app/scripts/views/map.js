/*global Air, Backbone, JST*/

Air.Views = Air.Views || {};

(function () {
    'use strict';

    Air.Views.Map = Backbone.View.extend({

        events: {},
        initialize: function () {

            Air.map = Air.map || L.mapbox.map(this.id, 'devseed.j586d1hp')
                .setView([-23.611, -46.715], 10);
        },
        render: function () {
        }

    });

})();