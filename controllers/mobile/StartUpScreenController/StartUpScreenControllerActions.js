define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c9d99c3dbfe34d5fa8064504ee25b7a5: function AS_Form_c9d99c3dbfe34d5fa8064504ee25b7a5(eventobject) {
        var self = this;
    },
    AS_Form_bf33e228e76840a19a138e492e7e682e: function AS_Form_bf33e228e76840a19a138e492e7e682e(eventobject) {
        var self = this;

        function MOVE_ACTION____b29d48db146e424686602eefb425b297_Callback() {
            if ((self.view.DareToDoContainer.centerY == 150)) {}
            var ntf = new kony.mvc.Navigation("HomeScreen");
            ntf.navigate();
        }
        self.view.DareToDoContainer.animate(
        kony.ui.createAnimation({
            "100": {
                "centerY": "150%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 1.5,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____b29d48db146e424686602eefb425b297_Callback
        });
    },
    AS_Form_j09aa754a3d24e2d877873a8e5e42bac: function AS_Form_j09aa754a3d24e2d877873a8e5e42bac(eventobject, x, y) {
        var self = this;
    }
});