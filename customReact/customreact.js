// function customRender(reactElement,container){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.herf)
//     domElement.setAttribute('target',reactElement.props.target)

//     container.appendChild(domElement)
// }

//createElement is a method to create 
const domElement=document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children

//same only here we just took the for loop 
for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    {
        domElement.setAttribute(prop , reactElement.props[prop])

        
    }
    Container.appendChild(domElement)
}


//How react is shown after compiling:
const reactElement = {  //takes 3 things as a object => type, props,children => props is nothing but properties we give into object
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)

