import _ from 'lodash';

const component = () => {
    const element = document.createElement('div');
    const arr = ['Hello', 'webpack'];
    element.innerHTML = _.join(arr, ' ');
    return element;
}

document.body.appendChild(component());