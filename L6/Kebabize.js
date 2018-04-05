function kebabize(str) {
    return str.replace(/[0-9]/g, "").replace(/[A-Z]/g, '-$&').toLowerCase()
}

console.log(kebabize('myCamelCased3String'))
