// webpack loaders are used to configure mathquill as a commonjs module, see webpack.config.js
const MathQuill = require('@mudkipme/mathquill@0.11.3/build/mathquill.min.js')
const MQ = MathQuill.getInterface(2)

export default MQ
