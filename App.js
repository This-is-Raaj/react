const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child' },
        [React.createElement('h1', { id: 'h1' }, 'h1 tag'),
        React.createElement('h1', { id: 'h1' }, 'h1 tag')]),
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', { id: 'h1' }, 'h1 tag'),
        React.createElement('h1', { id: 'h1' }, 'h1 tag')])
    ])


const heading = React.createElement('h1', { id: 'heading' }, 'Hello World!')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)