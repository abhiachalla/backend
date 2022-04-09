import tuits from '../data/tuits.js';

const tuitsController = (app) => {

    const findAllTuits = (req, res) => {
        res.json(tuits);
    }

    app.get('/api/tuits', findAllTuits);

    const postNewTuit = (req, res) => { 
        const newTuit = {
            _id: (new Date()).getTime() + '',
            "topic": "Web Development",
            "userName": "Abhi Achalla",
            "verified": false,
            "handle": "phantomSixth",
            "time": "2h",
            "tweet":req.body,
            "avatar-image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBv3q1iB7_9sDod2bCjZLBRtWMPHNLkji_Vl8SJEAzHphiJf3haTYTFjQyJjkx_ns_ag&usqp=CAU",
            "logo-image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBv3q1iB7_9sDod2bCjZLBRtWMPHNLkji_Vl8SJEAzHphiJf3haTYTFjQyJjkx_ns_ag&usqp=CAU",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345,
                "dislikes":99
            },
            ...req.body,
        }
        tuits = [
            newTuit,
            ...tuits
        ];
        res.json(newTuit);
    }

    app.post('/api/tuits', postNewTuit);

    const deleteTuit = (req, res) => {
        const id = req.params['id'];
        tuits = tuits.filter(tuit => tuit._id !== id);
        res.sendStatus(200);
    }
    app.delete('/api/tuits/:id', deleteTuit);

    const likeTuit = (req, res) => {
        const id = req.params['id'];
        tuits = tuits.map(tuit => {
            if (tuit._id === id) {
                if (tuit.liked === true) {
                    tuit.liked = false;
                    tuit.stats.likes--;
                } else {
                    tuit.liked = true;
                    tuit.stats.likes++;
                }
                return tuit;
            } else {
                return tuit;
            }
        });
        res.sendStatus(200);
    }
    app.put('/api/tuits/:id/like', likeTuit);

    const dislikeTuit = (req, res) => {
        const id = req.params['id'];
        tuits = tuits.map(tuit => {
            if (tuit._id === id) {
                if (tuit.disliked === true) {
                    tuit.disliked = false;
                    tuit.stats.dislikes--;
                } else {
                    tuit.disliked = true;
                    tuit.stats.dislikes++;
                }
                return tuit;
            } else {
                return tuit;
            }
        });
        res.sendStatus(200);
    }
    app.put('/api/tuits/:id/dislike', dislikeTuit);

};




 export default tuitsController;
