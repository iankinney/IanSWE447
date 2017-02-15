var gl = null;

function init() {
    var canvas = document.getElementById( "webgl-canvas" );
    var cone = null;
    var n = 5;

    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 1.0, 0.0, 1.0, 1.0 );
    cone = new Cone( gl, n);

    render();
}

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
    cone.render();
}

window.onload = init;
