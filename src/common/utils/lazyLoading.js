export default (name) => () => import(`@/module/${name}/${name}.vue`)
