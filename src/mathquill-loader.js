// webpack loaders are used to configure mathquill as a commonjs module, see webpack.config.js
const MathQuill = require('/npm/@mudkipme/mathquill@0.11.3/build/mathquill.js')
const MQ = MathQuill.getInterface(2)

export default MQ
