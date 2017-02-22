var gl = null;

function init() {
    var canvas = document.getElementById( "webgl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

    gl.clearColor( 1.0, 0.0, 1.0, 1.0 );

    render();
}

function cube() {
    this.count = 8;
    this.position = {
        values : new Float32Array([
            -0.5, 0.5, 0.5, //Vertex 0
            0.5, 0.5, 0.5, //Vertex 1
            0.5, -0.5, 0.5, //Vertex 2
            -0.5, -0.5, 0.5, //Vertex 3
            -0.5, 0.5, -0.5, //Vertex 4
            0.5, 0.5, -0.5, //Vertex 5
            0.5, -0.5, -0.5, //Vertex 6
            -0.5, -0.5, -0.5, //Vertex 7
        ]),
        numComponents : 3
    };
    this.colors(){
        values : new Float32Array([
            -0.5, 0.5, 0.5, //Vertex 0
            0.5, 0.5, 0.5, //Vertex 1
            0.5, -0.5, 0.5, //Vertex 2
            -0.5, -0.5, 0.5, //Vertex 3
            -0.5, 0.5, -0.5, //Vertex 4
            0.5, 0.5, -0.5, //Vertex 5
            0.5, -0.5, -0.5, //Vertex 6
            -0.5, -0.5, -0.5, //Vertex 7
        ]),
        numComponents : 4
    };
    this.indices = {
        values : new Uint16Array([
            0, 3, 1,    /*face 1*/
            3, 1, 2,
            0, 1, 4,    /*face 2*/
            1, 4, 5,
            0, 4, 3,    /*face 3*/
            4, 3, 7,
            5, 1, 6,   /*face 4*/
            1, 6, 2,
            
    }
    this.position.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indices.buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices.values, gl.STATIC_DRAW):
    this.positions.attributeLoc = gl.getAttribLocation(this.program, "vPosition");
    gl.enableVertexAttribArray(this.positions.attributeLoc);
    
    this.render = function(){
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indices.buffer);
        gl.vertexAttribPointer(this.positions.attribLoc, this.positions.
}

function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
}

window.onload = init;
