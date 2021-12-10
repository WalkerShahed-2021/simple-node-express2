const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('wow! i am learning node express please hello from node hi')
});


const users = [
    { id: 0, name: 'kiya', email: 'kiya@gmail.com', phone: '0175421455' },
    { id: 1, name: 'Shabana', email: 'shasbana@gmail.com', phone: '0175421455' },
    { id: 2, name: 'shabnur', email: 'shasbana@gmail.com', phone: '0175421455' },
    { id: 3, name: 'Mahi', email: 'shasbana@gmail.com', phone: '0175421455' },
    { id: 4, name: 'makiya', email: 'shasbana@gmail.com', phone: '0175421455' },
];


app.get('/users', (req, res) => {
    const search = req.query.search;
    
    if(search){
       const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
       res.send(searchResult);
    }
    else{
        res.send(users);
    }
});

//app method

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser)
    console.log('hiting the post', req.body);
    res.send('post got hiteded')
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/Country/Name', (req, res) => {
    res.send(['BnaglaDash', 'Englend', 'Aus', 'India'])
})

app.get('/shahed/Bangla', (req, res) => {
    res.send('shahed is coming before exam!!!')
})

app.get('/fruits/mangos/fazli', (req, res) => {
    res.send('Yami yami marka fazli');
})


app.listen(port, () => {
    console.log('Listing to port', port);
});